import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // Step 1: Retrieve and validate environment variables
  const smtpUser = process.env.SMTP_USER || "linuxworld.certificates@gmail.com"; // Use your Gmail address
  const smtpPass = process.env.SMTP_PASS || "vkaa fbfm qdfk whws"; // App Password
  const smtpHost = "smtp.gmail.com";
  const smtpPort = 587; // Port for TLS
  const recipientEmail = "chandak.preeti@gmail.com";

  // Validate essential credentials
  if (!smtpUser || !smtpPass || !recipientEmail) {
    console.error("Server misconfiguration: Missing email credentials.");
    return NextResponse.json(
      { error: "Server misconfiguration: Missing email credentials." },
      { status: 500 }
    );
  }

  // Step 2: Parse and validate the request body
  let body;
  try {
    body = await request.json();
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { error: "Invalid JSON payload in the request body." },
      { status: 400 }
    );
  }

  const { fullName, email, whatsappNumber, message } = body;

  // Validate input fields
  if (!fullName || !email || !whatsappNumber || !message) {
    return NextResponse.json(
      { error: "All fields (full name, email, WhatsApp number, and message) are required." },
      { status: 400 }
    );
  }

  // WhatsApp number validation
  if (!/^\d{10,15}$/.test(whatsappNumber)) {
    return NextResponse.json(
      { error: "WhatsApp number must be a valid numeric string between 10 and 15 digits." },
      { status: 400 }
    );
  }

  // Step 3: Configure the nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: false, // Use TLS for port 587
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    // Step 4: Compose and send the plain text email
    const mailOptions = {
      from: `"${fullName}" <${smtpUser}>`, // Sender's name and email
      to: recipientEmail, // Receiver's email
      subject: `New Query for TGS from ${fullName}`, // Subject line
      text: `
        You have received a new message:

        Full Name: ${fullName}
        Email: ${email}
        WhatsApp Number: ${whatsappNumber}

        Message:
        ${message}
      `.trim(),
    };

    const info = await transporter.sendMail(mailOptions);

    // Step 5: Return a success response
    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully!",
        info: info.messageId, // Optional: Include the message ID for tracking
      },
      { status: 200 }
    );
   } catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Error sending email:", error.message);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }

    // Handle unexpected error formats
    console.error("Unexpected error format:", error);
    return NextResponse.json(
        { error: "An unexpected error occurred." },
        { status: 500 }
    );
}
}
