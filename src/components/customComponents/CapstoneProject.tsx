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
import k8sImage from "../../app/public/assets/k8s.png";
import istioImage from "../../app/public/assets/istio.svg"
import argoImage from "../../app/public/assets/argo.png"
import grafanaImage from "../../app/public/assets/grafana.svg"
import Linux from "../../app/public/assets/linux.png"

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
    { src: k8sImage, alt: "User 2", top: "30%", left: "40%" },
    { src: istioImage, alt: "User 3", top: "60%", left: "30%" },
    { src: argoImage, alt: "User 4", top: "50%", left: "70%" },
    { src: grafanaImage, alt: "User 5", top: "35%", left: "90%" },
    { src: Linux, alt: "User 6", top: "60%", left: "12%" },
  ]

  return (
    <div className=" bg-[#1a1f36] text-white mt-0 p-2 pt-0">
      <div className="max-w-6xl pt-0 mx-auto h-full">
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
          <h1 className="text-3xl font-bold mb-2">
  Master Capstone Projects in <span className="text-[#ebff00]">Kubernetes DevOps</span>
</h1>
<p className="text-md mb-6">
Gain hands-on experience in Kubernetes and DevOps. Deploy microservices, optimize containers, set up autoscaling Kubernetes clusters, and integrate CI/CD workflows with Jenkins and Argo CD. Focus on security and performance by scanning images with Trivy, managing secrets, and performing load testing and security audits for production-grade deployments.
</p>

      
          </div>
        </div>

        <div className="-mt-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Kubernetes ScaleOps <span className="text-[#ffff00]">Secure and Scalable</span> Microservice Management
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="bg-[#252b43] border-none">
                <CardContent className="p-6">
                  <div className="mb-4 text-cyan-400">{step.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  )
}