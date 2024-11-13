import dynamic from 'next/dynamic'
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Dynamic imports for Tooltip components
const TooltipProvider = dynamic(
  () => import("@/components/ui/tooltip").then((mod) => mod.TooltipProvider),
  { ssr: false }
);
const Tooltip = dynamic(
  () => import("@/components/ui/tooltip").then((mod) => mod.Tooltip),
  { ssr: false }
);
const TooltipTrigger = dynamic(
  () => import("@/components/ui/tooltip").then((mod) => mod.TooltipTrigger),
  { ssr: false }
);
const TooltipContent = dynamic(
  () => import("@/components/ui/tooltip").then((mod) => mod.TooltipContent),
  { ssr: false }
);
import { ChevronDown } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import technologyImage from "../../../app/public/assets/docker.png";
import mentorImage from "../../../app/public/assets/mentor.jpeg";
import { Badge } from "@/components/ui/badge";

// Sample JSON data
const courseData = [
    {
      "id": "course1",
      "title": "World of Docker Containers",
      "description": "Go Deep in Containers - Step by Step",
      "sections": [
        {
          "subheading": "Know what really Containers are / Why it launch in < 1 sec ? It's Just a Process",
          "points": [
            "Introduction to Docker and containerization basics",
            "Installing Docker and first Docker run",
            "Managing Docker containers (start, stop, remove, inspect)",
            "Manage Multiple Containers"
          ]
        },
        {
          "subheading": "Docker Image Building - Dockerfile",
          "points": [
            "Building Docker images",
            "FROM (best practices from security vulnerabilities)",
            "ADD / COPY",
            "CMD / ENTRYPOINT / RUN",
            "EXPOSE",
            "ENV / WORKDIR / ARG",
            "HEALTHCHECK / ONBUILD"
          ]
        },
        {
          "subheading": "Working with Docker Volumes and Networks",
          "points": [
            "Storage persistence with Docker Volumes",
            "Networking in Docker, linking containers"
          ]
        },
        {
          "subheading": "Advanced Docker Concepts",
          "points": [
            "Image layering, optimization, and security best practices",
            "Multi-stage builds and working with Docker Registries",
            "Multi Tier App Container App Deployment: Docker Compose",
            "Docker Security - Docker Scout / Trivy",
            "Understanding Docker security, best practices, and vulnerability scanning tools"
          ]
        }
      ]
    },
    {
      "id": "course2",
      "title": "Universe of Kubernetes",
      "description": "Kubernetes Fundamentals and Advanced Concepts",
      "sections": [
        {
          "subheading": "Kubernetes Fundamentals",
          "points": [
            "Introduction to Kubernetes, core concepts, and architecture",
            "Setting up Kubernetes clusters",
            "Working with Pods, Deployments, and Services",
            "Understanding Pods, ReplicaSets, Deployments"
          ]
        },
        {
          "subheading": "Networking: Services, Ingress, Load Balancing",
          "points": [
            "Services, Ingress, Load Balancing"
          ]
        },
        {
          "subheading": "Deployment Strategies",
          "points": [
            "Rolling Update",
            "Canary Deployment",
            "Blue Green"
          ]
        },
        {
          "subheading": "Storage and Configuration Management",
          "points": [
            "Volumes, Persistent Volumes, Persistent Volume Claims",
            "ConfigMaps and Secrets"
          ]
        },
        {
          "subheading": "Scaling, Rolling Updates, and Rollbacks",
          "points": [
            "Horizontal Pod Autoscaling, managing updates, rollbacks"
          ]
        },
        {
          "subheading": "Kubernetes Security",
          "points": [
            "RBAC, Network Policies, and Security Contexts"
          ]
        },
        {
          "subheading": "Advanced Kubernetes Networking",
          "points": [
            "Service Mesh basics, Istio overview, and setup"
          ]
        },
        {
          "subheading": "Monitoring and Logging",
          "points": [
            "Prometheus and Grafana integration with Kubernetes"
          ]
        },
        {
          "subheading": "CI/CD with Kubernetes",
          "points": [
            "Integrating Jenkins and Argo CD for GitOps in Kubernetes"
          ]
        }
      ]
    },
    {
      "id": "course3",
      "title": "Istio Service Mesh / Kiali",
      "description": "Introduction to Service Mesh and Traffic Management with Istio",
      "sections": [
        {
          "subheading": "Introduction to Service Mesh",
          "points": [
            "What is Service Mesh? Benefits and Use Cases",
            "Introduction to Istio, core components"
          ]
        },
        {
          "subheading": "Installing and Configuring Istio",
          "points": [
            "Setting up Istio on a Kubernetes cluster",
            "Istio control plane and data plane"
          ]
        },
        {
          "subheading": "Traffic Management in Istio",
          "points": [
            "Virtual Services, Destination Rules, and Gateway configuration",
            "Traffic splitting, mirroring, and fault injection"
          ]
        },
        {
          "subheading": "Observability in Istio - Kiali",
          "points": [
            "Distributed tracing, metrics, and logging"
          ]
        },
        {
          "subheading": "Advanced Istio Features",
          "points": [
            "Rate limiting, circuit breaking, advanced traffic shaping"
          ]
        }
      ]
    },
    {
      "id": "course4",
      "title": "Argo CD for GitOps",
      "description": "Continuous Deployment with GitOps and Argo CD",
      "sections": [
        {
          "subheading": "Introduction to GitOps",
          "points": [
            "Overview of GitOps principles, benefits, and key concepts"
          ]
        },
        {
          "subheading": "Setting Up Argo CD",
          "points": [
            "Installing Argo CD on a Kubernetes cluster",
            "Connecting Argo CD with Git repositories"
          ]
        },
        {
          "subheading": "Application Deployment with Argo CD",
          "points": [
            "Syncing applications, managing application lifecycle",
            "Multi-environment configurations"
          ]
        },
        {
          "subheading": "Argo CD Configuration and Management",
          "points": [
            "Customizing configurations, defining project structure",
            "Automating Rollbacks and Syncing Strategies"
          ]
        },
        {
          "subheading": "Integrating Argo CD with CI/CD Pipelines",
          "points": [
            "Jenkins integration"
          ]
        }
      ]
    },
    {
      "id": "course5",
      "title": "Prometheus & Grafana",
      "description": "Monitoring and Observability with Prometheus and Grafana",
      "sections": [
        {
          "subheading": "Introduction to Monitoring and Observability",
          "points": [
            "Introduction to Prometheus and Grafana",
            "Setting Up Prometheus",
            "Installing Prometheus, configuring targets, scraping metrics",
            "Customizing Prometheus configurations and data retention"
          ]
        },
        {
          "subheading": "Grafana Basics",
          "points": [
            "Setting up Grafana, connecting with Prometheus",
            "Building basic dashboards for visualizing data"
          ]
        },
        {
          "subheading": "Kubernetes Monitoring",
          "points": [
            "Monitoring Kubernetes nodes, pods, and services with Prometheus and Grafana"
          ]
        }
      ]
    },
    {
      "id": "course6",
      "title": "DevSecOps Tools - Trivy / Falco / AquaSec / ELK",
      "description": "Security in Development and Operations with DevSecOps",
      "sections": [
        {
          "subheading": "Introduction to DevSecOps",
          "points": [
            "Evolution of DevSecOps, key principles, and benefits",
            "Integrating security within the CI/CD pipeline"
          ]
        },
        {
          "subheading": "Security in Development and CI/CD Pipelines",
          "points": [
            "Common vulnerabilities and security tools for CI/CD",
            "Code scanning tool Trivy"
          ]
        },
        {
          "subheading": "Container Security",
          "points": [
            "Docker security scanning tools and practices",
            "Kubernetes security with tools like Falco and Aqua Security"
          ]
        },
        {
          "subheading": "Monitoring and Auditing Security",
          "points": [
            "Centralized logging and monitoring with ELK, security audits"
          ]
        },
        {
          "subheading": "Automating Compliance and Vulnerability Patching",
          "points": [
            "Automating compliance checks, vulnerability patching tools, and workflows"
          ]
        },
        {
          "subheading": "Best Practices in DevSecOps",
          "points": [
            "Building a culture of security, best practices, and continuous improvement"
          ]
        },
        {
          "subheading": "Capstone Use Cases / Project",
          "points": [
            "Secure, Observable, and Scalable Application Deployment"
          ]
        }
      ]
    }
  ];
  

// Main Component
const CourseCard = () => {
  return (
    <div className="space-y-6">
      {/* Map over course data to generate course cards */}
      {courseData.map((course, courseIndex) => (
        <Card key={course.id} className="max-w-3xl mx-auto shadow-lg rounded-xl border border-gray-200">
          <div className="p-6">
            {/* Accordion for each course */}
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value={`course-${courseIndex}`} className="border-none">
                <AccordionTrigger className="p-0 hover:no-underline">
                  <div className="flex w-full items-start gap-4">
                    {/* Left: Technology Image */}
                    <div className="flex flex-col items-center">
                      <img 
                        src={technologyImage.src.toString()}
                        alt="technology"
                        className="rounded-full w-12 h-12 mb-2"
                      />
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm">
                        10:00 AM
                      </span>
                    </div>

                    {/* Title and Description */}
                    <div className="flex-1">
                      <div className='text-left'>
                        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{course.description}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                          vimal sir
                        </span>
                        <span className="text-sm text-gray-500">
                          45 min session
                        </span>
                      </div>
                    </div>

                    {/* Right: Tooltip Section for Mentor */}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex-shrink-0">
                            <img 
                              src={mentorImage.src.toString()}
                              alt="Mentor" 
                              className="rounded-full w-20 h-20 border-yellow-400 p-2"
                            />
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:text-yellow-900 font-bold">
                            Vimal Sir
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="w-64">
                          <p>Vimal sir is a public speaker...</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </AccordionTrigger>

                {/* Accordion Content for Course Sections */}
                <AccordionContent>
                  <div className="mt-8">
                    <Accordion type="single" collapsible className="space-y-2">
                      {course.sections.map((section, sectionIndex) => (
                        <AccordionItem
                          key={`section-${sectionIndex}`}
                          value={`section-${sectionIndex}`}
                          className="border border-gray-100 rounded-lg"
                        >
                          <AccordionTrigger className="px-4 py-4 hover:no-underline">
                            <div className="flex items-center gap-4 w-full">
                              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-medium">
                                {sectionIndex + 1}
                              </div>
                              <div className="text-left flex-1">
                                <h3 className="font-semibold text-gray-900">{section.subheading}</h3>
                                <p className="text-sm text-gray-500">{section.points.join(', ')}</p>
                              </div>
                              <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-200" />
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-16 py-3">
                            <ul className="space-y-3">
                              {section.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="flex items-center gap-2">
                                  <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                  </div>
                                  <span className="text-gray-700">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
              {/* Guest Lecture Section (Static) */}
      <div className="mt-8">
        <Separator className="mb-6" />
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img 
                src="/api/placeholder/48/48" 
                alt="Guest Lecturer" 
                className="rounded-full w-12 h-12 border-2 border-yellow-400"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <span className="mt-2 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-lg text-sm font-medium">
              11:30 AM
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              Special Guest Lecture
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Advanced Kubernetes Security Patterns & Best Practices
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                Guest Speaker
              </span>
              <span className="text-sm text-gray-500">
                1 hour session
              </span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img 
                    src={mentorImage.src.toString()} 
                    alt="Guest Lecturer" 
                    className="rounded-full w-20 h-20 border-yellow-400 p-2"
                  />
                </TooltipTrigger>
                <TooltipContent className="w-64">
                  <p>Guest speaker is a cybersecurity expert...</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
          </div>
        </Card>
      ))}

    
    </div>
  );
};

export default CourseCard;
