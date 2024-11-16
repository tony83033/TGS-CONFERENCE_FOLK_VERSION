import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import aboutBg from "../../app/public/assets/aboutBg.jpg"
import { Quote } from 'lucide-react';
import { CheckCheck,CircleCheckBig  } from 'lucide-react';
const About = () => {
  return (
    <div className="relative w-full bg-slate-900 py-16">
      {/* Background overlay with texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${aboutBg.src.toString()})`,
        }}
      />
      
      <div className="container mx-auto px-4 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 relative z-10 max-w-6xl">
          {/* About The Event */}
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold text-white"> <Quote className='inline mb-4 rotate-180 text-red-500' /> Its not just about in-person hands-on training</h2>
            <h2 className="text-2xl font-bold text-white">Its about experiencing a uniquely <span className='text-yellow-400 hover:text-yellow-600 font-bold'>Re-invented </span>  training model that redefines</h2>
           
          </div>

          {/* WHERE */}
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-white"><CircleCheckBig  className='inline m-2 text-green-400'/>Learning</h3>
            <h3 className="text-2xl font-bold text-white"><CircleCheckBig  className='inline m-2 text-green-400'/>Pearning</h3>

            <h2 className="text-2xl font-bold text-white"> you for real-world challenges & connects you directly with experts and peers <Quote className='inline mt-2 text-red-500'/></h2>

          </div>

      
         
        </div>
      </div>
    </div>
  );
};

export default About;