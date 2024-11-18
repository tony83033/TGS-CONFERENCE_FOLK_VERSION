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
    <Card className="bg-zinc-900 border-none mb-16 relative z-10">
      <CardHeader className="space-y-1">
        <p className="text-sm text-teal-400">Stage {number}: {type}</p>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 text-sm">{description}</p>
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
      type: "Immersive Learning",
      title: "From Fundamentals to Real-World Expertise",
      description: "Dive deep into hands-on sessions led by Mr. Vimal Daga, mastering every tool and technology outlined in our agenda. Experience practical training designed to meet market demands, with real-world challenges at the core.",
      position: 'left' as const
    },
    {
      number: 2,
      type: " Real Production Use Cases",
      title: "Hands-On with Industry Experts",
      description: "Elevate your knowledge as you tackle genuine industry scenarios presented by experts. Gain invaluable experience by understanding how complex problem statements are solved in live production environments.",
      position: 'right' as const
    },
    {
      number: 3,
      type: "Capstone Project",
      title: "Build an End-to-End Pipeline",
      description: "Develop a comprehensive project that brings together everything you’ve learned. This integration-level challenge ensures your skills are ready for the real world and reinforces how your learning translates into impactful solutions.",
      position: 'left' as const
    },
    {
      number: 4,
      type: "Network & Collaborate",
      title: "Collaboration Fuels Your Growth",
      description: "Engage with professionals from diverse companies. Work alongside them on innovative projects, learning and co-creating solutions. TGS is your unique chance to connect, collaborate, and grow in a dynamic tech ecosystem.",
      position: 'right' as const
    },
    {
      number: 5,
      type: "Get Recognized",
      title: "Skill Validation that Matters",
      description: "Earn a distinguished Skill Validated Certificate, endorsed by Mr. Vimal Daga. This credential highlights your expertise, showcasing both your learning and your ability to execute complex projects—making you a recruiters top choice.",
      position: 'left' as const
    },
    {
      number: 6,
      type: "A Lifetime of Support and Opportunities",
      title: "A Lifetime of Support and Opportunities",
      description: "Become a member of the TGS community after attending an event. Enjoy lifelong perks, including free tech support, networking with peers across India, exclusive job opportunities, and a platform dedicated to your ongoing growth.",
      position: 'right' as const
    }
  ];

  return (
   
       <>
        <div className="flex items-center justify-center w-full mx-auto mt-12">
        <h2 className="text-3xl  font-bold text-[#ffff00] text-center">Our Story in Frames</h2>

      </div>
      <div className="h-1 w-48 bg-red-500 mb-6 mx-auto"></div>
    <div className="relative max-w-2xl mx-auto p-6 bg-black/95 ">

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] -z-20" />
      
      {/* Vertical dashed line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-500 -translate-x-1/2" />

      
      {/* Timeline stages */}
      <div className="relative z-10">
        {stages.map((stage, index) => (
          <TimelineStage key={index} {...stage} />
        ))}
      </div>
    </div>
    </>           
  );
};

export default Levels;