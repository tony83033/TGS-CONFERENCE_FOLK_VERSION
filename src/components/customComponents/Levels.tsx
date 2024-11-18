import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { MoveDown } from 'lucide-react';
import EventImage from "../../app/public/assets/event-gallery/event-gallery-1.jpg"
// Background shapes component
const BackgroundShape = ({ position }: { position: 'left' | 'right' }) => (
  <div className={`absolute -z-10 opacity-80 hover:opacity-100 blur-sm ${position === 'left' ? '-left-20' : '-right-20'} w-[300px]`}>
    {position === 'left' ? (
      <div className="w-full h-[200px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform -rotate-12" />
    ) : (
      <div className="w-full h-[200px] rounded-3xl transform -rotate-12 overflow-hidden">
        <img 
          src={EventImage.src.toString()}
          alt="Background shape"
          className="w-full h-full object-cover"
        />
      </div>
    )}
  </div>
);

const TimelineStage = ({ number, type, title, description, position }: {
  number: number;
  type: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}) => (
  <div className="relative">
    <BackgroundShape position={position} />
    <Card className="bg-zinc-900 border-none mb-8 relative z-10">
      <CardHeader className="space-y-1">
        <p className="text-sm text-teal-400">Stage {number}: {type}</p>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
        <div className="flex justify-center mt-2">
          <div className="w-8 h-8 rounded-full border border-orange-500 flex items-center justify-center p-2 hover:bg-orange-500/10 transition-all duration-300">
            <MoveDown className="w-4 h-4 text-orange-500 font-bold transition-all duration-300 ease-in-out transform hover:translate-y-1" />
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
      description: "Get the platform to pitch your ideas to investor allies and the Masters' Union Investment Fund, and secure your first pre-seed funding.",
      position: 'left' as const
    },
    {
      number: 2,
      type: "Development",
      title: "MVP Challenge",
      description: "Create your MVP, gain valuable feedback from potential investors, and secure additional funding for your startup.",
      position: 'right' as const
    },
    {
      number: 3,
      type: "Execution",
      title: "GTM Challenge",
      description: "Identify target markets, craft a winning marketing plan, and present your final go-to-market strategy to secure additional grants.",
      position: 'left' as const
    },
    {
      number: 4,
      type: "Growth",
      title: "Scale Challenge",
      description: "Scale your business operations, expand into new markets, and establish partnerships to accelerate your startup's growth trajectory.",
      position: 'right' as const
    }
  ];

  return (
    <div className="relative max-w-2xl mx-auto p-6 bg-black/95 ">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] -z-20" />
      
      {/* Vertical dashed line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-700 -translate-x-1/2" />
      
      {/* Timeline stages */}
      <div className="relative z-10">
        {stages.map((stage, index) => (
          <TimelineStage key={index} {...stage} />
        ))}
      </div>
    </div>
  );
};

export default Levels;