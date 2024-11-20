import hash13 from "../../app/public/assets/hash13.svg";
import lwlogo from "../../app/public/assets/LW-logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Column 1: Brand Info with Logos */}
        <div>
          <h2 className="text-xl font-bold text-red-500">
            TGS<span className="text-white"> - The Growth String Initiative </span>
          </h2>
          <p className="text-lg text-blue-400 mt-2 leading-relaxed">
            “Empowering Growth, Redefining Technical Training”
          </p>

            <p className="text-sm text-gray-400 font-italic">Powered By:</p>
          {/* Logos */}
          <div className="mt-4 flex gap-4 mx-auto">
          <img src={hash13.src.toString()} width={112} height={64} alt="Logo" />
          <img src={lwlogo.src.toString()} width={112} height={64} alt="Logo" />
          </div>
        </div>

        {/* Column 2: YouTube Video */}
        <div className="flex justify-center items-center">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/8kiUJTaBsMI?feature=youtu.be" // Replace with your YouTube URL
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        © Copyright 2024 TGS | Designed & Developed with ❤️ by LinuxWorld | All Rights Reserved
      </div>
    </footer>
  ); 
}
