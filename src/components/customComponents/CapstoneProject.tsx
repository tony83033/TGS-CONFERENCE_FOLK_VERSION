

import { Card, CardContent } from "@/components/ui/card";
import {
  GitBranch,
  Container,
  Box,
  BarChart,
  Shield,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Docker from "../../app/public/assets/docker.png";
import k8sImage from "../../app/public/assets/k8s.png";
import istioImage from "../../app/public/assets/istio.svg";
import argoImage from "../../app/public/assets/argo.png";
import grafanaImage from "../../app/public/assets/grafana.svg";
import Linux from "../../app/public/assets/linux.png";

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
  ];

  const avatars = [
    { src: Docker, alt: "Docker", top: "25%", left: "10%" },
    { src: k8sImage, alt: "Kubernetes", top: "30%", left: "40%" },
    { src: istioImage, alt: "Istio", top: "60%", left: "30%" },
    { src: argoImage, alt: "Argo CD", top: "50%", left: "70%" },
    { src: grafanaImage, alt: "Grafana", top: "35%", left: "90%" },
    { src: Linux, alt: "Linux", top: "60%", left: "12%" },
  ];

  return (
    <div className="bg-[#1a1f36] text-white mt-0 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* World Map with Avatars */}
          <div className="relative aspect-[4/3] hidden sm:block">
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
                className="absolute w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400"
                style={{ top: avatar.top, left: avatar.left }}
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">
              Master Capstone Projects in{" "}
              <span className="text-[#ebff00]">Kubernetes DevOps</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-300 text-center sm:text-left">
              Gain hands-on experience in Kubernetes and DevOps. Deploy
              microservices, optimize containers, set up autoscaling Kubernetes
              clusters, and integrate CI/CD workflows with Jenkins and Argo CD.
              Focus on security and performance by scanning images with Trivy,
              managing secrets, and performing load testing and security audits
              for production-grade deployments.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
            Kubernetes ScaleOps:{" "}
            <span className="text-[#ffff00]">Secure and Scalable</span>{" "}
            Microservice Management
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <Card key={index} className="bg-[#252b43] border-none w-full">
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
  );
}
