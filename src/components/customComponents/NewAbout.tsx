import React from 'react';
import { PlayCircle, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

const TGSAboutSection = () => {
  return (
    <section className="min-h-full bg-black py-4 px-4 relative overflow-hidden">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff0a_0,#00000000_50%)] pointer-events-none" />
      
      {/* Main Content Container with Shadow */}
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center space-y-6 backdrop-blur-sm p-8 rounded-2xl">
          <h1 className="text-3xl md:text-3xl font-bold relative text-white -mb-4">
             <span className='text-[#ebff00]'>About TGS</span> - The Growth String Initiative        
          </h1>
          <div className="h-1 w-16 bg-red-500 mx-auto"></div>
          <p className="text-xl ">
            <span className="text-white  drop-shadow-[0_0_15px_rgba(255,255,0,0.3)]">
              Your Launchpad to Mastery Across Technologies!
            </span>
          </p>
        </div>

        {/* New Compact Video Section with Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <div className="group cursor-pointer mx-auto max-w-md bg-zinc-900/80 rounded-xl p-6 
                          border border-zinc-800 backdrop-blur-sm
                          hover:bg-zinc-900/90 transition-all duration-300
                          shadow-[0_0_15px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-4">
                <div className="bg-zinc-800 rounded-full p-3">
                  <PlayCircle className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-200">Watch Introduction Video</h3>
                  <p className="text-sm text-gray-400">Learn more about TGS Initiative</p>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="aspect-video w-full bg-black">
              {/* Replace src with your actual video URL */}
              <iframe 
                className="w-full h-full"
                src="about:blank" // Replace with actual video URL
                title="TGS Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>

        {/* Enhanced Content Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-zinc-900/80 border-zinc-800 
                         shadow-[0_4px_25px_rgba(255,255,255,0.1)]
                         hover:shadow-[0_4px_30px_rgba(255,255,255,0.15)]
                         transition-all duration-300
                         backdrop-blur-sm">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-yellow-300 font-bold" />
                <h3 className="text-xl font-bold text-gray-300">Expert Leadership</h3>
              </div>
              <p className="text-gray-300 text-lg">
                Led by <span className="font-semibold">Mr. Vimal Daga</span>&quot;
                this unique 3-day immersive experience is designed to revolutionize how tech 
                professionals learn&quot; connect&quot; and grow.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/80 border-zinc-800 
                         shadow-[0_4px_25px_rgba(255,255,255,0.1)]
                         hover:shadow-[0_4px_30px_rgba(255,255,255,0.15)]
                         transition-all duration-300
                         backdrop-blur-sm">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-400 font-bold" />
                <h3 className="text-xl font-bold text-gray-300">Multi-City Experience</h3>
              </div>
              <p className="text-gray-300 text-lg">
                Join us across six major tech cities: Mumbai, Bengaluru, Hyderabad, Pune
                Chennai, and Gurugram.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Hands-on Training",
              content: "Engage in practical, real-world training with immediate application."
            },
            {
              title: "Capstone Project",
              content: "Build an end-to-end DevOps pipeline through collaborative projects."
            },
            {
              title: "Networking & Collaboration",
              content: "Connect with industry speakers and build career-shaping relationships."
            }
          ].map((feature, index) => (
            <div key={index} 
                 className="p-8 rounded-xl bg-zinc-900/80 
                          shadow-[0_4px_20px_rgba(255,255,255,0.1)]
                          hover:shadow-[0_4px_25px_rgba(255,255,255,0.15)]
                          transition-all duration-300
                          backdrop-blur-sm">
              <h4 className="font-bold mb-3 text-gray-300 text-lg">{feature.title}</h4>
              <p className="text-gray-300">{feature.content}</p>
            </div>
          ))}
        </div>

        {/* Enhanced Closing Statement */}
        <div className="text-center p-10 rounded-2xl 
                      bg-zinc-900/50 backdrop-blur-sm
                      shadow-[0_4px_30px_rgba(255,255,255,0.15)]">
          <p className="text-2xl font-medium italic">
            <span className="text-[#ff0000] drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">
TGS: Where Every Edition Empowers You with the Technology of Today & Tomorrow!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TGSAboutSection;