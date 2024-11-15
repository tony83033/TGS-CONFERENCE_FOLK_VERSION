import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { MoveDown } from 'lucide-react';

const TimelineStage = ({ number, type, title, description }:any) => (
  <div className="relative">
    <Card className="bg-zinc-900 border-none mb-8 relative z-10">
      <CardHeader className="space-y-1">
        <p className="text-sm text-teal-400">Stage {number}: {type}</p>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
        <div className="flex justify-center mt-4">
          <div className="w-8 h-8 rounded-full border border-orange-500 flex items-center justify-center">
            <MoveDown className="w-4 h-4 text-orange-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Levels = () => {
  const stages = [
    {
      number: 1,
      type: "Ideation",
      title: "Pre-Seed Challenge",
      description: "Get the platform to pitch your ideas to investor allies and the Masters' Union Investment Fund, and secure your first pre-seed funding."
    },
    {
      number: 2,
      type: "Development",
      title: "MVP Challenge",
      description: "Create your MVP, gain valuable feedback from potential investors, and secure additional funding for your startup."
    },
    {
      number: 3,
      type: "Execution",
      title: "GTM Challenge",
      description: "Identify target markets, craft a winning marketing plan, and present your final go-to-market strategy to secure additional grants."
    }
  ];

  return (
    <div className="relative max-w-2xl mx-auto p-6">
      {/* Vertical dashed line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-700 -translate-x-1/2" />
      
      {/* Timeline stages */}
      {stages.map((stage, index) => (
        <TimelineStage key={index} {...stage} />
      ))}
    </div>
  );
};

export default Levels;