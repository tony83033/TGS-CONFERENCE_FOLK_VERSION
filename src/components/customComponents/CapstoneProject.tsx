


// import { Card } from "@/components/ui/card"
// import { Shield, Lock, Monitor, BarChart3, Cloud, Brain } from 'lucide-react'
// import React from 'react'

// interface ProjectTopic {
//   title: string
//   icon: React.ReactNode
// }

// export default function Component() {
//   const topics: ProjectTopic[] = [
//     { title: "Data Privacy and Security", icon: <Shield className="w-8 h-8 text-blue-600" /> },
//     { title: "Cybersecurity Threats", icon: <Lock className="w-8 h-8 text-blue-600" /> },
//     { title: "Digital Inclusion", icon: <Monitor className="w-8 h-8 text-blue-600" /> },
//     { title: "Digital Transformation", icon: <BarChart3 className="w-8 h-8 text-blue-600" /> },
//     { title: "Cloud Computing Challenges", icon: <Cloud className="w-8 h-8 text-blue-600" /> },
//     { title: "Artificial Intelligence Ethics", icon: <Brain className="w-8 h-8 text-blue-600" /> },
//   ]

//   return (
//     <div className="w-full max-w-4xl mx-auto p-8 bg-[#f5f5dc] rounded-3xl relative overflow-hidden shadow-md">
//       {/* Decorative Background Circles */}
//       <div className="absolute top-0 left-0 w-48 h-48 bg-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
//       <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-200 rounded-full translate-x-1/2 translate-y-1/2 opacity-30" />

//       {/* Title */}
//       <h1 className="text-2xl font-bold text-center mb-8 text-blue-800 relative z-10">
//         Capstone Project Examples in Information Technology
//       </h1>

//       {/* Circle Layout */}
//       <div className="relative flex items-center justify-center aspect-square w-full max-w-lg mx-auto">
//         {/* Center Circle */}
//         <div className="absolute w-40 h-40 bg-green-600 rounded-full flex items-center justify-center z-20 shadow-lg">
//           <span className="text-white font-semibold text-lg text-center px-4">
//             Project Ideas
//           </span>
//         </div>

//         {/* Project Topics arranged in circular layout */}
//         {topics.map((topic, index) => {
//           const angle = (index * (360 / topics.length) * Math.PI) / 180
//           const radius = 220 // Distance between the center and topic cards
//           const x = Math.cos(angle) * radius
//           const y = Math.sin(angle) * radius

//           return (
//             <div
//               key={topic.title}
//               className="absolute transform -translate-x-1/2 -translate-y-1/2"
//               style={{
//                 left: `calc(50% + ${x}px)`,
//                 top: `calc(50% + ${y}px)`,
//               }}
//             >
//               <Card className="w-36 p-3 flex flex-col items-center gap-2 text-center bg-white shadow-md hover:shadow-lg transition-shadow">
//                 <div className="p-2 bg-blue-100 rounded-full">
//                   {topic.icon}
//                 </div>
//                 <span className="text-xs font-medium text-blue-800">{topic.title}</span>
//               </Card>
//               {/* Connector Line */}
//               <div
//                 className="absolute left-1/2 top-1/2 h-[1px] bg-blue-300 -z-10 origin-left"
//                 style={{
//                   width: `${radius - 40}px`, // Set width based on radius minus the card radius
//                   transform: `rotate(${(angle * 180) / Math.PI}deg)`,
//                 }}
//               />
//             </div>
//           )
//         })}
//       </div>

//       {/* Tag or Initials Badge */}
//       <div className="absolute top-2 right-2 bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">
//         NS
//       </div>
//     </div>
//   )
// }









import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  GitBranch,
  Container,
  Box,
  BarChart,
  Shield,
  Workflow,
  Globe,
} from "lucide-react"
import Image from "next/image"

export default function Component() {
  const steps = [
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Microservices Setup",
      description:
        "Define microservices (frontend, API, database) and set up Git repositories with branching strategies.",
    },
    {
      icon: <Container className="w-6 h-6" />,
      title: "Docker Implementation",
      description:
        "Create and optimize Dockerfiles, test containers, and push to a container registry.",
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Kubernetes Deployment",
      description:
        "Set up a Kubernetes cluster, deploy services with manifests, and configure autoscaling/load balancing.",
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "GitOps Integration",
      description:
        "Implement GitOps via Argo CD for continuous deployment, with auto-sync and rollback features.",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Monitoring Setup",
      description:
        "Set up Prometheus for metrics collection, create Grafana dashboards, and configure alerting.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Implementation",
      description:
        "Scan Docker images with Trivy, manage secrets securely, and enforce RBAC policies.",
    },
  ]

  const avatars = [
    { src: "/placeholder.svg", alt: "User 1", top: "20%", left: "20%" },
    { src: "/placeholder.svg", alt: "User 2", top: "30%", left: "50%" },
    { src: "/placeholder.svg", alt: "User 3", top: "60%", left: "30%" },
    { src: "/placeholder.svg", alt: "User 4", top: "70%", left: "70%" },
    { src: "/placeholder.svg", alt: "User 5", top: "40%", left: "80%" },
  ]

  return (
    <div className=" bg-[#1a1f36] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* World Map with Avatars */}
          <div className="relative aspect-[4/3] hidden lg:block">
            <svg viewBox="0 0 800 600" className="w-full h-full">
              <path
                d="M50,250 Q200,100 400,250 T750,250"
                fill="none"
                stroke="#00ffff"
                strokeWidth="0.5"
              />
              <path
                d="M50,350 Q200,500 400,350 T750,350"
                fill="none"
                stroke="#00ffff"
                strokeWidth="0.5"
              />
              {[...Array(20)].map((_, i) => (
                <circle
                  key={i}
                  cx={Math.random() * 800}
                  cy={Math.random() * 600}
                  r="1"
                  fill="#00ffff"
                  opacity="0.5"
                />
              ))}
            </svg>
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className="absolute w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400"
                style={{ top: avatar.top, left: avatar.left }}
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Hey there, <span className="text-emerald-400">developer!</span>
            </h1>
            <p className="text-xl mb-6">
              Join our global community. Prep for tech interviews and upskill yourself. Get access to
              coveted tech jobs and collaborate to build the future of tech in our
              hackathons.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg">
              Join now
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Capstone Project: <span className="text-emerald-400">Secure, Observable, and Scalable</span> Application Deployment
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="bg-[#252b43] border-none">
                <CardContent className="p-6">
                  <div className="mb-4 text-cyan-400">{step.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-[#252b43] border-none">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Practice Platform</h3>
                <p className="text-gray-300 mb-4">Use our practice platform to hone your coding skills and light up the leaderboard!</p>
                <Button className="bg-cyan-500 hover:bg-cyan-600">
                  Start practice
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#252b43] border-none">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Interview Prep</h3>
                <p className="text-gray-300 mb-4">Need help with an interview? These developer-friendly resources will help you land that dream job!</p>
                <Button className="bg-cyan-500 hover:bg-cyan-600">
                  Start prep
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#252b43] border-none">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Hackathons</h3>
                <p className="text-gray-300 mb-4">Participate in hackathons and hiring challenges to showcase your coding skills and win cool prizes.</p>
                <Button className="bg-cyan-500 hover:bg-cyan-600">
                  Join a challenge
                </Button>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </div>
  )
}