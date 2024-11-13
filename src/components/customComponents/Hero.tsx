// "use client"
// import React, { useState } from 'react';
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { Play } from "lucide-react";
// import tgsHeroImage from "../../app/public/assets/tgsHeroImg.jpg"
// import HeroImage from "../../app/public/assets/TGS-home-text.png"

// const Hero = () => {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);
//   console.log(tgsHeroImage)
//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background Image with exact overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url(${tgsHeroImage.src.toString()})`
//         }}
//       >
//         <div className="absolute inset-0 bg-[#000000]/75" />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//         {/* Title - Now in two lines */}
//         <div className="mb-8">
//           <h1 className="flex flex-col items-center">
//             <div className="text-[56px] md:text-[72px] text-white font-extrabold tracking-wide leading-tight">
//               THE ANNUAL
//             </div>
//             <div className="text-[56px] md:text-[72px] leading-tight">
//               <span className="text-[#FF1744]">MARKETING</span>
//               <span className="text-white"> CONFERENCE</span>
//             </div>
//           </h1>
          
//           {/* Subtitle with adjusted spacing */}
//           <p className="text-[20px] md:text-[24px] text-white/90 font-normal mt-12">
//             10-12 December, Downtown Conference Center, New York
//           </p>
//         </div>



                





//         {/* Play Button Section with adjusted spacing */}
//         <div className="mt-20 flex flex-col items-center gap-6">
//           {/* Play Button */}
//           <button
//             onClick={() => setIsVideoOpen(true)}
//             className="group relative w-20 h-20"
//             aria-label="Play video about the event"
//           >
//             <div className="absolute inset-0 bg-black/40 rounded-full" />
//             <div className="absolute inset-2 bg-[#FF1744] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
//               <Play 
//                 className="w-9 h-9 text-white ml-1" 
//                 strokeWidth={1}
//               />
//             </div>
//           </button>

//           {/* About Event Button */}
//           <button
//             onClick={() => setIsVideoOpen(true)}
//             className="px-10 py-2.5 rounded-full border-2 border-[#FF1744] text-white hover:bg-[#FF1744]/10 transition-colors duration-300"
//           >
//             About The Event
//           </button>
//         </div>
//       </div>

//       {/* Video Dialog */}
//       <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
//         <DialogContent className="sm:max-w-[800px] p-0">
//           <div className="aspect-video w-full">
//             <iframe
//               width="100%"
//               height="100%"
//               src="https://www.youtube.com/embed/your-video-id"
//               title="Conference Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full"
//             />
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default Hero;




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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with exact overlay */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${tgsHeroImage.src.toString()})`
        }}
      >
        <div className="absolute inset-0 bg-[]/75" />
      </div> */}



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
            <div className="absolute inset-0 bg-black/40 rounded-full" />
            <div className="absolute inset-2 bg-[#FF1744] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Play 
                className="w-9 h-9 text-white ml-1" 
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
              src="https://www.youtube.com/embed/your-video-id"
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
