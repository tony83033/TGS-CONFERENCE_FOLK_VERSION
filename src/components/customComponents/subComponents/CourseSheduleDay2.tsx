import dynamic from 'next/dynamic'
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronUp } from "lucide-react";
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

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import technologyImage from "../../../app/public/assets/docker.png";
import k8sImage from "../../../app/public/assets/k8s.png";
import istioImage from "../../../app/public/assets/istio.svg"
import argoImage from "../../../app/public/assets/argo.png"
import grafanaImage from "../../../app/public/assets/grafana.svg"
import trivy from "../../../app/public/assets/Trivy--Streamline-Simple-Icons.png"
import mentorImage from "../../../app/public/assets/mentor.jpeg";
import { Badge } from "@/components/ui/badge";

// Sample JSON data




// Main Component
const CourseCardDay2 = () => {
  const courseData = [
    //  day 1 schedule

  
    {
      // DAY 2 schedule 
      "id": "course4",
      "title": "Argo CD for GitOps",
      "description": "Continuous Deployment with GitOps and Argo CD",
      "imageSrc": `${argoImage.src.toString()}`,
      "time":"09:00 PM",
      "duration":"210",
      "guestImage":"",
      "guestName":"",
      "guestSessionTopic":"",
      "guestSessionDesc":"",
      "guestTime":"12:30 PM",
      "guestSessionDuration":"20",
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
      "imageSrc": `${grafanaImage.src.toString()}`,
      "time":"1:50 PM",
      "duration":"130",
      "guestImage":"",
      "guestName":"",
      "guestSessionTopic":"",
      "guestSessionDesc":"",
      "guestTime":"4:00 PM",
      "guestSessionDuration":"20",
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
      "imageSrc": `${trivy.src.toString()}`,
      "time":"4:20 PM",
      "duration":"180",
      "guestImage":"",
      "guestName":"",
      "guestSessionTopic":"",
      "guestSessionDesc":"",
      "guestTime":"6:20 PM",
      "guestSessionDuration":"20",
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
  return (
    <div className="space-y-6">
    {courseData.map((course, courseIndex) => (
      <Card key={course.id} className="max-w-3xl mx-auto shadow-lg rounded-xl border border-gray-200 bg-[#494F52]">
        <div className="p-6">
          {/* Static Course Overview */}
          <div className="flex w-full items-start gap-4">
            {/* Left: Technology Image */}
            <div className="flex flex-col items-center">
              <img
                src={course.imageSrc.toString()}
                alt={course.title}
                className="rounded-full w-12 h-12 mb-2"
              />
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm">
                {/* time should be dynamically display from json. TODO  */}
               {course.time}

              </span>
            </div>
  
            {/* Title and Description */}
            <div className="flex-1">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                <p className="text-sm text-white">{course.description}</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                  Mr.Vimal Daga
                </span>
                <span className="text-sm text-green-200">
                  {/* sessin duration should be dynamically display from json TODO*/}
                        {`${course.duration}`} min session
                </span>
              </div>
            </div>
  
            {/* Right: Tooltip Section for Mentor */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex-shrink-0 items-center">
                    <img
                      src={mentorImage.src.toString()}
                      alt="Mentor"
                      className="rounded-full w-20 h-20 border-yellow-400 p-2"
                    />
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:text-yellow-900 font-bold">
                    Mr.Vimal Daga
                  </Badge>
                </TooltipTrigger>
                <TooltipContent className="w-64">
                  <p>Mr. Vimal sir is a Technologist ...</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
  
          {/* Nested Course Sections */}
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
                      <div className="text-left flex-1 ">
                        <h3 className="font-semibold text-white text-lg">{section.subheading}</h3>
                        <p className="text-sm text-white">{section.points.join(', ')}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-16 py-2">
                    <ul className="space-y-2">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                          <span className="text-green-400">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                    {/* session timing should display from json dynamic TODO */}
                   {course.guestTime}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    Special Guest Lecture
                  </h3>
                  <p className="text-sm text-white mt-1">
                    Advanced Kubernetes Security Patterns & Best Practices
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                      Guest Speaker
                    </span>
                    <span className="text-sm text-green-200">
                      {/* session durating should be dynamic from json TODO */}
                  {course.guestSessionDuration}  min session
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {/* <TooltipProvider>
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
            </TooltipProvider> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    ))}
  </div>
  
  );
};

export default CourseCardDay2;
