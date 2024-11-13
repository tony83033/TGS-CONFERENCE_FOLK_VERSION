import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

// Define the types for the footer column and social link data
interface FooterColumn {
  title: string
  links: Array<{
    text: string
    href: string
  }>
}

// Footer column data
const footerColumns: FooterColumn[] = [
  {
    title: "Useful Links",
    links: [
      { text: "Home", href: "/" },
      { text: "About us", href: "/about" },
      { text: "Services", href: "/services" },
      { text: "Terms of service", href: "/terms" },
      { text: "Privacy policy", href: "/privacy" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { text: "Web Design", href: "/services/web-design" },
      { text: "Web Development", href: "/services/web-development" },
      { text: "Product Management", href: "/services/product-management" },
      { text: "Marketing", href: "/services/marketing" },
      { text: "Graphic Design", href: "/services/graphic-design" },
    ],
  },
  {
    title: "Hic solutasetp",
    links: [
      { text: "Molestiae accusamus iure", href: "#" },
      { text: "Excepturi dignissimos", href: "#" },
      { text: "Suscipit distinctio", href: "#" },
      { text: "Dilecta", href: "#" },
      { text: "Sit quas consectetur", href: "#" },
    ],
  },
  {
    title: "Nobis illum",
    links: [
      { text: "Ipsum", href: "#" },
      { text: "Laudantium dolorum", href: "#" },
      { text: "Dinera", href: "#" },
      { text: "Trodelas", href: "#" },
      { text: "Flexo", href: "#" },
    ],
  },
]

// Social links data
const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
]

const Footer = () => {
  return (
    <footer className="bg-[#0a0b1e] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">TGS</h2>
            <div className="space-y-3">
              <p>A108 Adam Street</p>
              <p>Bangalore, Bangalore 535022</p>
              <p>
                <span className="font-semibold">Phone:</span> +1 5589 55488 55
              </p>
              <p>
                <span className="font-semibold">Email:</span> info@example.com
              </p>
            </div>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column, index) => (
            <div key={index} className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{column.title}</h3>
                <div className="h-0.5 w-12 bg-red-500" />
              </div>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © Copyright <span className="font-semibold">MyWebsite</span>. All Rights Reserved
              <div className="text-sm">
                Designed by{" "}
                <Link href="#" className="text-red-500 hover:text-red-400">
                  BootstrapMade
                </Link>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.icon.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
