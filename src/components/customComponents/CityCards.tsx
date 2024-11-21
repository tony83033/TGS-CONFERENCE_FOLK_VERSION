
'use client'


import Image, { StaticImageData } from 'next/image'
import chennai from "../../app/public/assets/cityCards/Chennai.jpg"
import mumbai from "../../app/public/assets/cityCards/Mumbai1.jpg"
import bangalore from "../../app/public/assets/cityCards/bangalore1.jpg"
import hyderabad from "../../app/public/assets/cityCards/hyderabad1.jpg"
import indiaFlag from "../../app/public/assets/indiaFlag.png"  // Placeholder path for the India flag image
import { BadgeCheck } from 'lucide-react';

interface CityCardProps {
  city: string
  backgroundImage: string | StaticImageData
  overlayColor: string // New property for dynamic overlay color
  welcomeMessage: string // New property for dynamic welcome message
}

const cities: CityCardProps[] = [
  {
    city: "Bengaluru",
    backgroundImage: mumbai,
    overlayColor: "from-pink-500/60", // Example color
    welcomeMessage: "( Namaskara 🙏)", // Welcome message for Bengaluru
  },
  {
    city: "Pune",
    backgroundImage: bangalore,
    overlayColor: "from-purple-500/60", // Example color
    welcomeMessage: "( स्वागत आहे 🙏)", // Welcome message for Pune
  },
  {
    city: "Hyderabad",
    backgroundImage: hyderabad,
    overlayColor: "from-yellow-500/60", // Example color
    welcomeMessage: "( Swagatam 🙏)", // Welcome message for Hyderabad
  },
  {
    city: "Gurugram",
    backgroundImage: chennai,
    overlayColor: "from-blue-500/60", // Example color
    welcomeMessage: "( Welcome 🙏)", // Welcome message for Gurugram
  },
  {
    city: "Mumbai",
    backgroundImage: mumbai,
    overlayColor: "from-pink-500/60", // Example color
    welcomeMessage: "( स्वागत आहे 🙏)", // Welcome message for Mumbai
  },
  {
    city: "Chennai",
    backgroundImage: mumbai,
    overlayColor: "from-pink-500/60", // Example color
    welcomeMessage: "( Varaverkirōm 🙏)", // Welcome message for Chennai
  },
]

const events = [
  "Hands-on Training with a Capstone Project",
  "Meet Mr. Vimal Daga in Person",
  "Network with Professionals from Leading Companies",
  "Gain Industry Insights & Discuss Real Use Cases with Experts",
  "Opportunity to Get Hired by Engaging with Talent Acquisition Heads"
]

export default function CityCardGrid() {
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="p-8 max-w-7xl mx-auto" id="venue">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#FFFFFF] mb-2 mt-6"><span className="text-[#ebff00]">Mr. Vimal Daga</span> on India <Image src={indiaFlag} alt="India Flag" width={40} height={30} className="inline-block" /> Tour</h1>
        <div className="h-1 w-16 bg-red-500 mx-auto"></div>
      </div>

      <div className="w-full sm:w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"> {/* Three cards per row */}
        {cities.map((city, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-xl transition-transform duration-500 transform hover:scale-105 h-[470px] group"
            
          >
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={city.backgroundImage}
                alt={`${city.city} background`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Add the dynamic overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${city.overlayColor} to-transparent`} />
            <div className="relative h-full flex flex-col justify-between p-6 text-white">
              <div>
                <h2 className="text-3xl font-extrabold mb-8">
                  {city.city}
                  <br />
                  TGS <span className="text-sm">{city.welcomeMessage}</span>
                </h2>
                <ul className="space-y-2">
                  {events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-center gap-2 text-sm">
                      <span className="text-lg"> <BadgeCheck className='inline text-sm' /></span>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Conditional rendering based on city name and screen size */}
              <div className="mt-4  py-2 px-4 w-full text-center leading-none">
                {city.city === "Bengaluru" ? (
                  <a href="">
                    <div className="hover:border  text-white font-semibold rounded-lg bg-white/40 hover:bg-white/70 hover:text-black">
                      10th - 12th Jan, 2025
                      <br />
                      <span className="text-[10px] bg-[#ff0000]">(Venue will be announced soon...)</span>
                    </div>
                  </a>
                ) : (
                  <a href="">
                    <div className="hover:border text-white font-semibold rounded-lg bg-white/10 hover:bg-white/20">
                      To be announced
                      <br />
                      <span className="text-[10px] bg-[#ff0000]">(Venue will be announced soon...)</span>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
