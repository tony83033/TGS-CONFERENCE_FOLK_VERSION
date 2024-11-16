// import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
// import Link from "next/link"

// // Define the types for the footer column and social link data
// interface FooterColumn {
//   title: string
//   links: Array<{
//     text: string
//     href: string
//   }>
// }

// // Footer column data
// const footerColumns: FooterColumn[] = [
//   {
//     title: "Useful Links",
//     links: [
//       { text: "Home", href: "/" },
//       { text: "About us", href: "/about" },
//       { text: "Services", href: "/services" },
//       { text: "Terms of service", href: "/terms" },
//       { text: "Privacy policy", href: "/privacy" },
//     ],
//   },
//   {
//     title: "Our Services",
//     links: [
//       { text: "Web Design", href: "/services/web-design" },
//       { text: "Web Development", href: "/services/web-development" },
//       { text: "Product Management", href: "/services/product-management" },
//       { text: "Marketing", href: "/services/marketing" },
//       { text: "Graphic Design", href: "/services/graphic-design" },
//     ],
//   },
//   {
//     title: "Hic solutasetp",
//     links: [
//       { text: "Molestiae accusamus iure", href: "#" },
//       { text: "Excepturi dignissimos", href: "#" },
//       { text: "Suscipit distinctio", href: "#" },
//       { text: "Dilecta", href: "#" },
//       { text: "Sit quas consectetur", href: "#" },
//     ],
//   },
//   {
//     title: "Nobis illum",
//     links: [
//       { text: "Ipsum", href: "#" },
//       { text: "Laudantium dolorum", href: "#" },
//       { text: "Dinera", href: "#" },
//       { text: "Trodelas", href: "#" },
//       { text: "Flexo", href: "#" },
//     ],
//   },
// ]

// // Social links data
// const socialLinks = [
//   { icon: Twitter, href: "#" },
//   { icon: Facebook, href: "#" },
//   { icon: Instagram, href: "#" },
//   { icon: Linkedin, href: "#" },
// ]

// const Footer = () => {
//   return (
//     <footer className="bg-[#000000] text-gray-300">
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//           {/* Company Info */}
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold text-white">TGS</h2>
//             <div className="space-y-3">
//               <p>A108 Adam Street</p>
//               <p>Bangalore, Bangalore 535022</p>
//               <p>
//                 <span className="font-semibold">Phone:</span> +1 5589 55488 55
//               </p>
//               <p>
//                 <span className="font-semibold">Email:</span> info@example.com
//               </p>
//             </div>
//           </div>

//           {/* Footer Columns */}
//           {footerColumns.map((column, index) => (
//             <div key={index} className="space-y-4">
//               <div className="space-y-2">
//                 <h3 className="text-lg font-semibold text-white">{column.title}</h3>
//                 <div className="h-0.5 w-12 bg-red-500" />
//               </div>
//               <ul className="space-y-2">
//                 {column.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <Link
//                       href={link.href}
//                       className="hover:text-white transition-colors duration-200"
//                     >
//                       {link.text}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="text-sm">
//               © Copyright <span className="font-semibold">MyWebsite</span>. All Rights Reserved
//               <div className="text-sm">
//                 Designed by{" "}
//                 <Link href="#" className="text-red-500 hover:text-red-400">
//                   BootstrapMade
//                 </Link>
//               </div>
//             </div>
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <Link
//                   key={index}
//                   href={social.href}
//                   className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
//                 >
//                   <social.icon className="h-5 w-5" />
//                   <span className="sr-only">{social.icon.name}</span>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer



import { Mail, User } from "lucide-react"; // Icons from shadcn/ui or lucide-react
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-red-500">
            TGS<span className="text-orange-500"></span>
          </h2>
          <p className="text-lg text-blue-400 mt-2 leading-relaxed">
            Where education meets real-world needs.
          </p>
        </div>

        {/* Column 2: Helpful Links */}
        <div>
          <h3 className="text-md font-semibold uppercase text-white mb-4">
            Helpful Links
          </h3>
          <ul className="space-y-2 text-blue-700">
            <li>
              <a href="https://www.lwindia.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                ➤ Linux World Informatics
              </a>
            </li>
            <li>
              <a href="https://thecreator.one/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                ➤ The Creator
              </a>
            </li>
            <li>
              <a href="https://learning.hash13.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                ➤ Hash13
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" className="hover:underline">
                ➤ Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Get in Touch */}
        <div>
          <h3 className="text-md font-semibold uppercase text-white mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2 text-blue-700">
              <Mail className="h-4 w-4" />
              <a href="mailto:linux@lwindia.com" className="hover:underline">
                preeti@lwindia.com
              </a>
            </li>
            <li className="flex items-center space-x-2 text-blue-700">
              <Mail className="h-4 w-4" />
              <a href="mailto:linux@lwindina.in" className="hover:underline">
                linux@lwindina.in
              </a>
            </li>
            <li className="flex items-center space-x-2 text-blue-700">
              <Mail className="h-4 w-4" />
              <a href="mailto:linux@lwindia.in" className="hover:underline">
                linux@lwindia.in
              </a>
            </li>
            <li className="flex items-center space-x-2 text-blue-700">
              <User className="h-4 w-4" />
              <span>Support Team: 24 hours</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Connect with Us */}
        <div>
          <h3 className="text-md font-semibold uppercase text-white mb-4">
            Connect with Us
          </h3>
          <ul className="space-y-2 text-blue-700">
            <li className="flex items-center space-x-2">
              <a href="https://www.linkedin.com/company/linuxworld-informatics-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
                <Linkedin className="h-4 w-4" />
                <span>Linkedin</span>
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a href="https://www.instagram.com/linuxworld.india/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a href="https://www.youtube.com/@linuxworldindia" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
                <Youtube className="h-4 w-4" />
                <span>Youtube</span>
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a href="https://www.facebook.com/LinuxWorld.India/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
                <Facebook className="h-4 w-4" />
                <span>Facebook</span>
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a href="https://x.com/linuxworldindia" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
                <Twitter className="h-4 w-4" />
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        Copyright © 2024
      </div>
    </footer>
  );
}
