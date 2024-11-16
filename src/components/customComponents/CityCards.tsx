'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import chennai from "../../app/public/assets/cityCards/Chennai.jpg"
import mumbai from "../../app/public/assets/cityCards/Mumbai1.jpg"
import bangalore from "../../app/public/assets/cityCards/bangalore1.jpg"
import hyderabad from "../../app/public/assets/cityCards/hyderabad1.jpg"

interface CityCardProps {
  city: string
  backgroundImage: string | StaticImageData
  overlayColor: string // New property for dynamic overlay color
  events: string[] // City-specific events
}

const cities: CityCardProps[] = [


  {
    city: "Bangalore",
    backgroundImage: bangalore,
    overlayColor: "from-purple-500/60", // Example color
    events: [
      "Hands-on Training with a Capstone Project",
      "Meet Mr. Vimal Daga in Person",
      "Network with Professionals from Leading Companies",
      "Gain Industry Insights & Discuss Real Use Cases with Experts",
      "Opportunity to Get Hired by Engaging with Talent Acquisition Heads",
    ]
  },
  {
    city: "Mumbai",
    backgroundImage: mumbai,
    overlayColor: "from-pink-500/60", // Example color
    events: [
      "Mumbai Tech Talk",
      "Networking Gala",
      "Developer Workshop",
      "City Startup Meetup"
    ]
  },
 
  {
    city: "Hyderabad",
    backgroundImage: hyderabad,
    overlayColor: "from-yellow-500/60", // Example color
    events: [
      "Tech Innovations Forum",
      "Leadership Panel",
      "Cloud Computing Workshop",
      "Networking Dinner"
    ]
  },
  {
    city: "Chennai",
    backgroundImage: chennai,
    overlayColor: "from-blue-500/60", // Example color
    events: [
      "Chennai Cybersecurity Meetup",
      "Blockchain Bootcamp",
      "Digital Transformation Conference",
      "Women in Tech Luncheon"
    ]
  },
  {
    city: "Gurugram",
    backgroundImage: mumbai,
    overlayColor: "from-pink-500/60", // Example color
    events: [
      "Tech Expo",
      "Innovators Summit",
      "AI & Robotics Meetup",
      "Career Advancement Workshop"
    ]
  }
]

export default function CityCardGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="p-8">
      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"> {/* Three cards per row */}
        {cities.map((city, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-xl transition-transform duration-500 transform hover:scale-105 h-[500px] group"
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
            {/* Add the dynamic color overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${city.overlayColor} to-transparent`} />
            <div className="relative h-full flex flex-col justify-between p-6 text-white">
              <div>
                <h2 className="text-3xl font-extrabold mb-4">
                  {city.city}
                  <br />
                  TGS
                </h2>
                <ul className="space-y-2">
                  {city.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-center gap-2">
                      <span className="text-lg">•</span>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-4 py-2 px-4 w-full border text-white font-semibold rounded-lg transition-all duration-300 ${
                  hoveredIndex === index
                    ? 'bg-white/20 border-white'
                    : 'border-transparent bg-white/10 hover:bg-white/20'
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
