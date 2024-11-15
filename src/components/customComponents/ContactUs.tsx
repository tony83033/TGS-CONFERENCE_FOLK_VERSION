import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/TextArea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Home, Phone, Mail } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFFF00] mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                  4671 Sugar Camp Road,<br />
                  Owatonna, Minnesota,<br />
                  55060
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3">
                <Phone className="w-6 h-6 text-zinc-900" />
              </div>
              <div>
                <h3 className="text-cyan-400 text-xl font-semibold mb-1">Phone</h3>
                <p className="text-white">571-457-2321</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3">
                <Mail className="w-6 h-6 text-zinc-900" />
              </div>
              <div>
                <h3 className="text-cyan-400 text-xl font-semibold mb-1">Email</h3>
                <p className="text-white">ntamerrwael@mfano.ga</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-[#353839]">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-white">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
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
                    className="border-1  border-b border-zinc-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-zinc-900 text-white"
                  />
                </div>
                <div className="space-y-2">
                  
                  <Textarea
                    id="message"
                    className="min-h-[100px] border-0 border-b border-zinc-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-zinc-900 resize-none text-white"
  placeholder="Type your message"                />
                </div>
                <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-white">
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}