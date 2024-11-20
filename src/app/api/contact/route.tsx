// import nodemailer from "nodemailer";
// import { NextResponse, NextRequest } from "next/server";

// export async function POST(request: NextRequest) {
//   // Step 1: Retrieve and validate environment variables
//   const smtpUser = "linuxworld.certificates@gmail.com";
//   const smtpPass = "vkaa fbfm qdfk whws";
//   const smtpHost =  "smtp.gmail.com";
//   const smtpPort =  587;
//   const senderEmail = "bhupesh7750@gmail.com";
//   const recipientEmail = "bhupesh.choudhary@lwindia.com";

//   if (!smtpUser || !smtpPass || !senderEmail || !recipientEmail) {
//     return NextResponse.json(
//       { error: "Server misconfiguration: Missing email credentials." },
//       { status: 500 }
//     );
//   }

//   // Step 2: Parse and validate the request body
//   let body;
//   try {
//     body = await request.json();
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Invalid JSON payload in the request body." },
//       { status: 400 }
//     );
//   }

//   const { fullName, email, whatsappNumber, message } = body;

//   // Validate fields
//   if (!fullName || !email || !whatsappNumber || !message) {
//     return NextResponse.json(
//       { error: "Full name, email, WhatsApp number, and message are required fields." },
//       { status: 400 }
//     );
//   }

//   if (!/^\d{10,15}$/.test(whatsappNumber)) {
//     return NextResponse.json(
//       { error: "WhatsApp number must be a valid numeric string between 10 and 15 digits." },
//       { status: 400 }
//     );
//   }

//   // Step 3: Configure the nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     host: smtpHost,
//     port: Number(smtpPort),
//     secure: false, // Secure if port is 465
//     auth: {
//       user: smtpUser,
//       pass: smtpPass,
//     },
//   });

//   try {
//     // Step 4: Compose and send the plain text email
//     const mailOptions = {
//       from: `"${fullName}" <${senderEmail}>`, // Sender's name and email
//       to: recipientEmail, // Receiver's email
//       subject: `New Message from ${fullName}`, // Subject line
//       text: `
//         You have received a new message:

//         Full Name: ${fullName}
//         Email: ${email}
//         WhatsApp Number: ${whatsappNumber}

//         Message:
//         ${message}
//       `.trim(),
//     };

//     const info = await transporter.sendMail(mailOptions);

//     // Step 5: Return a success response
//     return NextResponse.json(
//       {
//         success: true,
//         message: "Email sent successfully!",
//         info,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { error: "Failed to send email. Please try again later." },
//       { status: 500 }
//     );
//   }
// }





import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // Step 1: Retrieve SMTP configuration
  const smtpUser = process.env.SMTP_USER || "linuxworld.certificates@gmail.com";  // Using environment variables
  const smtpPass = process.env.SMTP_PASS || "vkaa fbfm qdfk whws"; // App Password
  const smtpHost = "smtp.gmail.com";
  const smtpPort = 587; // TLS Port
  const senderEmail = process.env.SENDER_EMAIL || "bhupesh7750@gmail.com"; // Sender Email
  const recipientEmail = "bhupesh.choudhary@lwindia.com"; // Recipient Email (Fixed)

  // Validate SMTP settings
  if (!smtpUser || !smtpPass || !senderEmail || !recipientEmail) {
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
    return NextResponse.json(
      { error: "Invalid JSON payload in the request body." },
      { status: 400 }
    );
  }

  const { fullName, email, whatsappNumber, message } = body;

  // Validate required fields
  if (!fullName || !email || !whatsappNumber || !message) {
    return NextResponse.json(
      { error: "Full name, email, WhatsApp number, and message are required fields." },
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
    secure: false, // Use false for TLS connection (port 587)
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    // Step 4: Compose and send the plain text email
    const mailOptions = {
      from: `"${fullName}" <${senderEmail}>`, // Sender's name and email
      to: recipientEmail, // Recipient's email
      subject: `New Message from ${fullName}`, // Subject line
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
        info,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
