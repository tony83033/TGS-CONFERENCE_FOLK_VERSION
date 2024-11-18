"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Youtube, Instagram, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import MentorFeatured from './subComponents/MentorFeatured'
import mentor7 from "../../app/public/assets/mentor-with-VIPS/mentor-gallery-1.jpeg";
import { CircleCheck } from 'lucide-react';
import mentor3 from "../../app/public/assets/mentor-with-VIPS/mentor-gallery-3.jpeg";
import mentor4 from "../../app/public/assets/mentor-with-VIPS/mentor-gallery-4.jpeg";
import mentor5 from "../../app/public/assets/mentor-with-VIPS/mentor-gallery-5.jpeg";
import mentor6 from "../../app/public/assets/mentor-with-VIPS/mentor-gallery-6.jpeg";
import mentor1 from "../../app/public/assets/mentor-with-VIPS/mentor-gallery-7.jpeg";
import mentor8 from "../../app/public/assets/mentor-with-VIPS/mentor-gallery-8.jpeg";
import mentor9 from "../../app/public/assets/mentor-with-VIPS/mentor-gallery-9.jpeg";
import mentor10 from "../../app/public/assets/mentor-with-VIPS/mentor-gallery-10.jpeg";

const MentorProfile = () => {
  const mentorImages = [
    mentor1.src.toString(),
    mentor3.src.toString(),
    mentor4.src.toString(),
    mentor5.src.toString(),
    mentor6.src.toString(),
    mentor7.src.toString(),
    mentor8.src.toString(),
    mentor9.src.toString(),
    mentor10.src.toString(),
  ];

  // Social stats data with URLs
  const socialStats = [
    { 
      icon: <Youtube className="w-6 h-6 text-red-600" />, 
      targetCount: 300000, 
      label: "subscribers", 
      url: "https://www.youtube.com/@IIECconnect" // Replace with your YouTube link
    },
    { 
      icon: <Instagram className="w-6 h-6 text-pink-600" />, 
      targetCount: 1100000, 
      label: "followers", 
      url: "https://www.instagram.com/vimaldaga.india/?hl=en" // Replace with your Instagram link
    },
    { 
      icon: <Linkedin className="w-6 h-6 text-blue-600" />, 
      targetCount: 60000, 
      label: "followers", 
      url: "https://www.instagram.com/vimaldaga.india/?hl=en" // Replace with your LinkedIn link
    }
  ];

  // State to track if the component is in view
  const [isVisible, setIsVisible] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer to set isVisible to true when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.4 } // 40% of the component in view to trigger
    );

    if (profileRef.current) observer.observe(profileRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter function to animate each number
  const useCounter = (target: number, duration: number, start: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return; // Only start if the component is visible
      let startValue = 0;
      const increment = Math.ceil(target / (duration / 16)); // Calculate increment

      const counter = setInterval(() => {
        startValue += increment;
        if (startValue >= target) {
          setCount(target); // Snap to target count
          clearInterval(counter);
        } else {
          setCount(startValue);
        }
      }, 16); // Update every 16ms for 60fps

      return () => clearInterval(counter);
    }, [target, duration, start]);

    return count;
  };

  return (
    <div ref={profileRef} className="max-w-6xl mx-auto p-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image Carousel and Mentor Details */}
        <div className="space-y-6">
          <div className="rounded-xl overflow-hidden border-2 border-gray-100 shadow-lg bg-white p-1">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="w-full h-[500px] rounded-lg overflow-hidden"
            >
              {mentorImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Mentor Image ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mentor Details Card */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-blue-800 text-sm font-medium bg-blue-100/50 px-3 py-1 rounded-full">
                Internationally Recognised Industry Expert
              </span>
            </div>
            <div className="space-y-1 pl-5">
              <h2 className="text-2xl font-bold text-gray-900">Mr. Vimal Daga</h2>
              <p className="text-gray-600 font-medium">Founder of LinuxWorld | #13 | IIEC | JAZBAA </p>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <div className="space-y-6 -mb-3">
            <h1 className="text-3xl font-bold text-white leading-extra-tight -mb-4">
              The Visionary Behind <span className="text-red-600">TGS</span> (The Growth String)
            </h1>
            <div className="space-y-4 text-black-800">
              <ul className="grid grid-cols-2 gap-y-2 list-disc pl-5 text-white -mb-1 list-none">
                <li className="leading-relaxed text-sm leading-tight"><CircleCheck className='inline text-green-400 ml-2' /> World Record Holder</li>
                <li className="leading-relaxed text-sm leading-tight"><CircleCheck className='inline text-green-400 ml-2' /> Two-Time TEDx Speaker</li>
                <li className="leading-relaxed text-sm leading-tight"><CircleCheck className='inline text-green-400 ml-2' /> Senior Principal IT Consultant</li>
                <li className="leading-relaxed text-sm leading-tight"><CircleCheck className='inline text-green-400 ml-2' /> Philanthropist</li>
                <li className="leading-relaxed text-sm leading-tight"><CircleCheck className='inline text-green-400 ml-2' /> 22+ Years of Rich Experience</li>
              </ul>

              <p className="text-white text-md -mb-2 pl-6">
              Mr. Vimal Daga, the driving force behind TGS, is on an exclusive India Tour, visiting cities across the country to re-invent technical training. His mission is not only to provide hands-on learning but to bring together industry expert interactions, real-world capstone projects, and valuable industry insights—all in one place
              </p>
              <p className="text-white pl-6">
              He firmly believes that networking and collaboration are the key to personal and professional growth, and this tour is designed to foster both. His vision of “Making India, Future Ready” goes beyond skills training—it’s about creating a thriving ecosystem where learners and professionals can collaborate, innovate, and succeed together.

              </p>
            </div>
          </div>

          {/* Social Stats with Counter */}
          <div className="grid grid-cols-3 gap-4">
            {socialStats.map((stat, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-2 text-center border border-blue-100 shadow-sm hover:shadow-md transition-all duration-200 -mb-2">
                <a href={stat.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex justify-center">{stat.icon}</div>
                </a>
                <div className="font-bold text-md text-gray-900">
                  {useCounter(stat.targetCount, 2000, isVisible).toLocaleString()}+
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Enhanced Featured Section */}
          <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white backdrop-blur-sm">
            <p className="text-black text-sm mb-2">Companies benefited with his trainings & consultancy</p>
            <MentorFeatured />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
