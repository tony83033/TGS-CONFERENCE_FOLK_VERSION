


import { Card } from "@/components/ui/card"
import { Shield, Lock, Monitor, BarChart3, Cloud, Brain } from 'lucide-react'
import React from 'react'

interface ProjectTopic {
  title: string
  icon: React.ReactNode
}

export default function Component() {
  const topics: ProjectTopic[] = [
    { title: "Data Privacy and Security", icon: <Shield className="w-8 h-8 text-blue-600" /> },
    { title: "Cybersecurity Threats", icon: <Lock className="w-8 h-8 text-blue-600" /> },
    { title: "Digital Inclusion", icon: <Monitor className="w-8 h-8 text-blue-600" /> },
    { title: "Digital Transformation", icon: <BarChart3 className="w-8 h-8 text-blue-600" /> },
    { title: "Cloud Computing Challenges", icon: <Cloud className="w-8 h-8 text-blue-600" /> },
    { title: "Artificial Intelligence Ethics", icon: <Brain className="w-8 h-8 text-blue-600" /> },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-[#f5f5dc] rounded-3xl relative overflow-hidden shadow-md">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-200 rounded-full translate-x-1/2 translate-y-1/2 opacity-30" />

      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-8 text-blue-800 relative z-10">
        Capstone Project Examples in Information Technology
      </h1>

      {/* Circle Layout */}
      <div className="relative flex items-center justify-center aspect-square w-full max-w-lg mx-auto">
        {/* Center Circle */}
        <div className="absolute w-40 h-40 bg-green-600 rounded-full flex items-center justify-center z-20 shadow-lg">
          <span className="text-white font-semibold text-lg text-center px-4">
            Project Ideas
          </span>
        </div>

        {/* Project Topics arranged in circular layout */}
        {topics.map((topic, index) => {
          const angle = (index * (360 / topics.length) * Math.PI) / 180
          const radius = 220 // Distance between the center and topic cards
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <div
              key={topic.title}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
            >
              <Card className="w-36 p-3 flex flex-col items-center gap-2 text-center bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="p-2 bg-blue-100 rounded-full">
                  {topic.icon}
                </div>
                <span className="text-xs font-medium text-blue-800">{topic.title}</span>
              </Card>
              {/* Connector Line */}
              <div
                className="absolute left-1/2 top-1/2 h-[1px] bg-blue-300 -z-10 origin-left"
                style={{
                  width: `${radius - 40}px`, // Set width based on radius minus the card radius
                  transform: `rotate(${(angle * 180) / Math.PI}deg)`,
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Tag or Initials Badge */}
      <div className="absolute top-2 right-2 bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">
        NS
      </div>
    </div>
  )
}
