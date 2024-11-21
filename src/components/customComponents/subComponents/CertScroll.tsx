"use client";
import React from 'react';
import Image from 'next/image';

import Event1Image from "../../../app/public/assets/certImages/cert-1.jpg";
import Event2Image from "../../../app/public/assets/certImages/cert-2.jpg";
import Event3Image from "../../../app/public/assets/certImages/cert-3.jpg";
import Event4Image from "../../../app/public/assets/certImages/cert-4.jpg";
import Event5Image from "../../../app/public/assets/certImages/cert-5.jpg";
import Event6Image from "../../../app/public/assets/certImages/cert-6.jpg";
import Event7Image from "../../../app/public/assets/certImages/cert-7.jpg";
import Event8Image from "../../../app/public/assets/certImages/cert-8.jpg";
import Event9Image from "../../../app/public/assets/certImages/cert-9.jpg";



const CertScroll = () => {
  const logos = [
    { src: Event1Image, alt: "Gallery Image 1" },
    { src: Event2Image, alt: "Gallery Image 2" },
    { src: Event3Image, alt: "Gallery Image 3" },
    { src: Event4Image, alt: "Gallery Image 4" },
    { src: Event5Image, alt: "Gallery Image 5" },
    { src: Event6Image, alt: "Gallery Image 6" },
    { src: Event7Image, alt: "Gallery Image 7" },
    { src: Event8Image, alt: "Gallery Image 8" },
    { src: Event9Image, alt: "Gallery Image 9" },
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="w-full overflow-hidden whitespace-nowrap">
        <div className="inline-flex items-center animate-scroll w-max">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-2 w-32 flex-shrink-0 border border-gray-200 rounded-lg shadow-md p-2 hover:scale-105 transition-transform duration-300 bg-white"
            >
              <div className="w-28 h-16 flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={112} 
                  height={64} 
                  objectFit="contain" 
                />
              </div>
            </div>
          ))}
        </div>
        <div className="inline-flex items-center animate-scroll w-max" aria-hidden="true">
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="mx-2 w-32 flex-shrink-0 border border-gray-200 rounded-lg shadow-md p-2 hover:scale-105 transition-transform duration-300 bg-white"
            >
              <div className="w-28 h-16 flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={112} 
                  height={64} 
                  objectFit="cover" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CertScroll;