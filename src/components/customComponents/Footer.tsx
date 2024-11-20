


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
      <div className="text-center mt-8 text-white text-sm">
      © Copyright 2024 TGS | Designed & Developed with ❤️ by LinuxWorld | All Rights Reserved
      </div>
    </footer>
  );
}
