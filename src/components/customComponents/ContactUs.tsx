"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Home, Phone, Mail } from "lucide-react";

interface Status {
  success: boolean;
  message: string;
}

export default function Component() {
  // Step 1: State variables with types
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [whatsappNumber, setWhatsappNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<Status | null>(null); // Status can be null or an object

  // Step 2: Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    // Validate input
    if (!fullName || !email || !whatsappNumber || !message) {
      setStatus({ success: false, message: "All fields are required." });
      return;
    }

    try {
      // Send POST request to the API
      const response = await fetch("http://localhost:3000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          whatsappNumber,
          message,
        }),
      });

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        // Clear the form
        setFullName("");
        setEmail("");
        setWhatsappNumber("");
        setMessage("");
      } else {
        const errorData: { error?: string } = await response.json();
        setStatus({
          success: false,
          message: errorData.error || "Failed to send message.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="bg-zinc-900 px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-3xl font-bold text-[#FFFF00] mb-2">
            Contact Us
          </h1>
          <div className="h-1 w-16 bg-red-500 mb-2 mx-auto"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-0 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3">
                <Home className="w-6 h-6 text-zinc-900" />
              </div>
              <div>
                <h3 className="text-cyan-400 text-xl font-semibold mb-1">Address</h3>
                <p className="text-white">
                  Krishna Tower, Plot No. 5, Jaipur, Rajasthan 302015
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3">
                <Phone className="w-6 h-6 text-zinc-900" />
              </div>
              <div>
                <h3 className="text-cyan-400 text-xl font-semibold mb-1">Phone</h3>
                <a href="tel:+919773353561" className="text-white hover:underline">
                  +91 9773353561
                </a>
                <br />
                <a href="tel:+919829105960" className="text-white hover:underline">
                  +91 9829105960
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3">
                <Mail className="w-6 h-6 text-zinc-900" />
              </div>
              <div>
                <h3 className="text-cyan-400 text-xl font-semibold mb-1">Email</h3>
                <a href="mailto:preeti@lwindia.com" className="text-white hover:underline">
                  preeti@lwindia.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-[#353839]">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-white"
                  >
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="border-0 border-b border-zinc-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-white text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-0 border-b border-zinc-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-white text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="whatsapp"
                    className="text-sm font-medium text-white"
                  >
                    WhatsApp No.
                  </label>
                  <Input
                    id="whatsapp"
                    type="text"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    className="border-0 border-b border-zinc-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-white text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[100px] border-0 border-b border-zinc-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-white resize-none text-white"
                    placeholder="Type your message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-cyan-400 hover:bg-cyan-500 text-white text-lg"
                  style={{ letterSpacing: "2px" }}
                >
                  Send
                </Button>
              </form>
              {status && (
                <p
                  className={`mt-4 text-center text-lg ${
                    status.success ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
