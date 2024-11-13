import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import aboutBg from "../../app/public/assets/aboutBg.jpg"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 max-w-6xl">
          {/* About The Event */}
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold text-white">About The TGS</h2>
            <p className="text-gray-300 leading-relaxed">
              Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet
              accusamus 
            </p>
          </div>

          {/* WHERE */}
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-white">WHERE</h3>
            <p className="text-gray-300">
              Downtown Conference Center, New York
            </p>
          </div>

          {/* WHEN */}
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-white">WHEN</h3>
            <p className="text-gray-300">
              Monday to Wednesday<br />
              10-12 December
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;