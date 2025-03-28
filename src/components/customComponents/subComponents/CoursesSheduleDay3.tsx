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

import { Card } from "@/components/ui/card";

import mentorImage from "../../../app/public/assets/mentor.jpeg";
import { Badge } from "@/components/ui/badge";
import ProjectImage from "../../../app/public/assets/project.png"

// Sample JSON data




// Main Component
const CourseCardDay3 = () => {
  const courseData = [
    //  day 1 schedule

  
    {
      // DAY 3 schedule 
      "id": "course4",
      "title": "Capstone Use Cases / Project :Secure, Observable, and Scalable Application Deployment",
      "description": "Continuous Deployment with GitOps and Argo CD",
      "imageSrc": `${ProjectImage.src.toString()}`,
      "time":"09:00 PM",
      "duration":"180",
      "guestImage":"",
      "guestName":"",
      "guestSessionTopic":"",
      "guestSessionDesc":"",
      "guestTime":"12:30 PM",
      "guestSessionDuration":"20",
      "sections": [
        {
          "subheading": "Define microservices (frontend, API, database) and set up Git repositories with branching strategies.",
          "points": [

          ]
        },
        {
          "subheading": "Create and optimize Dockerfiles, test containers, and push to a container registry.",
          "points": [

          ]
        },
        {
          "subheading": "Set up a Kubernetes cluster, deploy services with manifests, and configure autoscaling/load balancing.",
          "points": [

          ]
        },
        {
          "subheading": "Implement GitOps via Argo CD for continuous deployment, with auto-sync and rollback features.",
          "points": [

          ]
        },
        {
          "subheading": "Set up Prometheus for metrics collection, create Grafana dashboards, and configure alerting.",
          "points": [

          ]
        },
        {
            "subheading": "Scan Docker images with Trivy, manage secrets securely, and enforce RBAC policies.",
            "points": [
  
            ]
          },
          {
            "subheading": "Automate build, test, and deployment stages using CI/CD tools like Jenkins with Argo CD integration.",
            "points": [
  
            ]
          }
      ]
    },
  
 
  ];
  return (
    <div className="space-y-6">
    {courseData.map((course) => (
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
                        {`${course.duration}`} mins session
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
                      className="rounded-full ml-4 w-20 h-20 border-yellow-400 p-2"
                    />
                  </div>
                  <Badge className="bg-yellow-100  text-yellow-800 hover:text-yellow-900 font-bold">
                    Mr. Vimal Daga
                  </Badge>
                </TooltipTrigger>
                <TooltipContent className="w-64">
                  <p>Vimal Daga reinvents training, promoting collaboration for India&apos;s future readiness.</p>
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
                        <h3 className="font-semibold text-white text-sm">{section.subheading}</h3>
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
          
          </div>
        </div>
      </Card>
    ))}
  </div>
  
  );
};

export default CourseCardDay3;
