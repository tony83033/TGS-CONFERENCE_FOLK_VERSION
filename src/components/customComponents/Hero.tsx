"use client"

import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import tgsHeroImage from "../../app/public/assets/TGS-home-page1.jpg";
import HeroImage from "../../app/public/assets/tgs_front_page_protrait.png";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden md:max-w-7xl mx-auto">
      {/* Background Image Container for large screens */}
      <div 
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: `url(${tgsHeroImage.src})`,
          height: "100%",
          width: "100%",
        }}
      >
        <div className="absolute inset-0" /> {/* Overlay */}
      </div>

      {/* Background Image for small screens */}
      <div className="absolute inset-0 bg-cover bg-center md:hidden">
        <img
          src={HeroImage.src}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[100svh] text-center px-4 
                    sm:px-6 md:px-8
                    transform -translate-y-[8vh] sm:-translate-y-[10vh]">
        
        {/* Play Button Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {/* Play Button with responsive sizing */}
          <button
            onClick={() => setIsVideoOpen(true)}
            className="group relative w-16 h-16 sm:w-20 sm:h-20"
            aria-label="Play video about the event"
          >
            <div className="absolute animate-ping delay-1000 inset-0 bg-red-400 rounded-full" />
            <div className="absolute inset-2 bg-[#FF1744] rounded-full 
                          flex items-center justify-center 
                          transition-transform duration-300 
                          group-hover:scale-105">
              <Play
                className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1"
                strokeWidth={1}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Video Dialog with responsive sizing */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-[800px] p-0 mx-4 sm:mx-auto">
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8kiUJTaBsMI?feature=youtu.be"
              title="Conference Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
