




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
import Docker from "../../app/public/assets/docker.png"

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
    { src: Docker, alt: "User 1", top: "25%", left: "10%" },
    { src: Docker, alt: "User 2", top: "30%", left: "40%" },
    { src: Docker, alt: "User 3", top: "60%", left: "30%" },
    { src: Docker, alt: "User 4", top: "50%", left: "70%" },
    { src: Docker, alt: "User 5", top: "35%", left: "90%" },
    { src: Docker, alt: "User 6", top: "60%", left: "12%" },
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
  Master Capstone Projects in <span className="text-emerald-400">Cloud DevOps</span>
</h1>
<p className="text-xl mb-6">
  Develop secure, observable, and scalable application deployments. From designing microservices and optimizing containers to setting up GitOps workflows and monitoring with Grafana, these projects will elevate your DevOps expertise to production-grade standards.
</p>

            {/* <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg">
              Join now
            </Button> */}
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