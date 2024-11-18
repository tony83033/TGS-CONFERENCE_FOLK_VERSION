

"use client"
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import tgsHeroImage from "../../app/public/assets/TGS-home-page1.jpg"
import HeroImage from "../../app/public/assets/TGS-home-text.png"

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  console.log(tgsHeroImage)
  return (
    <div className="relative h-screen w-full overflow-hidden max-w-7xl mx-auto ">
    

    
<div 
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${tgsHeroImage.src})`,
    height: "100%",   // Set height to fill container
    width: "100%",    // Set width to fill container
  }}
>
  <div className="absolute inset-0 " /> {/* Overlay */}
</div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 -mt-16">
        {/* Title - Now replaced with HeroImage */}
        {/* <div className="">
          <img
            src={HeroImage.src} 
            alt="The Annual Marketing Conference"
            // className="max-w-full h-auto"
             className="max-w-full h-auto aspect-w-12 aspect-h-6"
          />
        </div> */}

        {/* Play Button Section with adjusted spacing */}
        <div className="-mt-6 flex flex-col items-center gap-6">
          {/* Play Button */}
          <button
            onClick={() => setIsVideoOpen(true)}
            className="group relative w-20 h-20"
            aria-label="Play video about the event"
          >
            <div className="absolute animate-ping delay-1000 inset-0 bg-red-400 rounded-full" />
            <div className="absolute   inset-2 bg-[#FF1744]   rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Play 
                className="  w-9 h-9 text-white ml-1" 
                strokeWidth={1}
              />
            </div>
          </button>

          {/* About Event Button */}
          
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[800px] p-0">
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
