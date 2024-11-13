import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock } from 'lucide-react';
import { Card } from "@/components/ui/card";

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
    <Card className="max-w-3xl mx-auto p-6 shadow-lg">
      <div className="relative mb-8">
        {/* Top section with images and title */}
        <div className="flex items-center justify-between mb-6">
          {/* Mentor image */}
          <div className="relative">
            <img 
              src="/api/placeholder/48/48" 
              alt="Mentor" 
              className="rounded-full border-2 border-blue-500"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          
          {/* Tech image */}
          <img 
            src="/api/placeholder/48/48" 
            alt="Technology" 
            className="rounded-full border-2 border-blue-500"
          />
        </div>

        {/* Title and time */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            Universe of Kubernetes
          </h1>
          <div className="flex items-center justify-center text-gray-600 gap-1">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">10:00 AM</span>
          </div>
        </div>
      </div>

      {/* Enhanced Accordion */}
      <Accordion type="single" collapsible className="space-y-4">
        {courseData.map((item, index) => (
          <AccordionItem 
            key={item.id} 
            value={item.id}
            className="border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <AccordionTrigger className="px-4 py-3">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                  {index + 1}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3">
              {item.subItems ? (
                <ul className="space-y-2">
                  {item.subItems.map((subItem, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700">{subItem}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">
                  Detailed content for this section will be revealed during the session.
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};

export default CourseSchedule;