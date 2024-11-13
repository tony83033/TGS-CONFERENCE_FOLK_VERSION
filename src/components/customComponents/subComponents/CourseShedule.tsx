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
import technologyImage from "../../../app/public/assets/docker.png"
import mentorImage from "../../../app/public/assets/mentor.jpeg"
import { Badge  } from "@/components/ui/badge"

const CourseSchedule = () => {
  const courseData = [
    {
      id: '1',
      title: 'Kubernetes Fundamentals',
      description: 'Foundation concepts and hands-on practice'
    },
    {
      id: '2',
      title: 'Working with Pods, Deployments, and Services',
      description: 'Image building practices and Dockerfile instructions'
    },
    {
      id: '3',
      title: 'Deployment Strategies',
      description: 'Storage and networking in Docker'
    },
    {
      id: '4',
      title: 'Storage and Configuration Management',
      description: 'Advanced Docker techniques',
      subItems: [
        'Volumes, Persistent Volumes, Persistent Volume Claims',
        'ConfigMaps and Secrets'
      ]
    }
  ];

  return (
    <Card className="max-w-3xl mx-auto shadow-lg rounded-xl border border-gray-200">
      <div className="p-6">
        {/* Main Accordion */}
        <Accordion type="single" collapsible className="space-y-2">
          <AccordionItem value="main" className="border-none">
            {/* Header section as Accordion Trigger */}
            <AccordionTrigger className="p-0 hover:no-underline">
  <div className="flex w-full items-start gap-4">
    {/* Left: Mentor Image */}
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

   {/* Left-Aligned Title and Subheading */}
   <div className="flex-1">
    <div className='text-left'>
              <h3 className="text-lg font-semibold text-gray-900">
              World of Docker Containers
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Advanced Kubernetes Security Patterns & Best Practices
              </p>
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

    {/* Right: Tooltip Section */}
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

            {/* Main Accordion Content with Sub-Accordions */}
            <AccordionContent>
              <div className="mt-8">
                <Accordion type="single" collapsible className="space-y-2">
                  {courseData.map((item, index) => (
                    <AccordionItem 
                      key={item.id} 
                      value={item.id}
                      className="border border-gray-100 rounded-lg data-[state=open]:bg-gray-50"
                    >
                      <AccordionTrigger className="px-4 py-4 hover:no-underline">
                        <div className="flex items-center gap-4 w-full">
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-medium">
                            {index + 1}
                          </div>
                          <div className="text-left flex-1">
                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                          </div>
                          <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-200" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-16 py-3">
                        {item.subItems ? (
                          <ul className="space-y-3">
                            {item.subItems.map((subItem, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>
                                <span className="text-gray-700">{subItem}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="text-gray-600">
                            Content will be revealed during the session.
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Guest Lecture Section */}
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
                  45 min session
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseSchedule;