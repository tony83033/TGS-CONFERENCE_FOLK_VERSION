'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import chennai from "../../app/public/assets/cityCards/chennai.png"
import mumbai from "../../app/public/assets/cityCards/Mumbai.jpg"
import bangalore from "../../app/public/assets/cityCards/bangalore.jpg"
import hyderabad from "../../app/public/assets/cityCards/hyderabad.jpg"

interface CityCardProps {
  city: string
  backgroundImage: string | StaticImageData
  overlayColor: string // New property for dynamic overlay color
}

const cities: CityCardProps[] = [
  {
    city: "Mumbai",
    backgroundImage: mumbai,
    overlayColor: "from-pink-500/60", // Example color
  },
  {
    city: "Bangalore",
    backgroundImage: bangalore,
    overlayColor: "from-purple-500/60", // Example color
  },
  {
    city: "Hyderabad",
    backgroundImage: hyderabad,
    overlayColor: "from-yellow-500/60", // Example color
  },
  {
    city: "Chennai",
    backgroundImage: chennai,
    overlayColor: "from-blue-500/60", // Example color
  },
]

const events = [
  "MULTI-TRACK CONFERENCE",
  "ROUNDTABLE MEETINGS",
  "CEO CONCLAVE",
  "WORLD LEADERS DINNER",
]

export default function CityCardGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto p-6 lg:px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Three cards per row */}
        {cities.map((city, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-xl transition-transform duration-500 transform hover:scale-105 h-[400px] group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
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
            {/* Add the dynamic pink overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${city.overlayColor} to-transparent`} />
            <div className="relative h-full flex flex-col justify-between p-6 text-white">
              <div>
                <h2 className="text-3xl font-extrabold mb-4">
                  {city.city}
                  <br />
                  TGS
                </h2>
                <ul className="space-y-2">
                  {events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-center gap-2">
                      <span className="text-lg">•</span>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-4 py-2 px-4 w-full border  text-white font-semibold rounded-lg transition-all duration-300 ${
                  hoveredIndex === index
                    ? 'bg-red-600 border-white'
                    : 'border-transparent bg-red-500 hover:bg-white/20'
                }`}
              >
                PARTICIPATE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
