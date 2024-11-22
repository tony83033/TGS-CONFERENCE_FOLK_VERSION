"use client";
import React from 'react';
import Image from 'next/image';





const CertScroll = () => {
  const logos = [
    { src: "https://utfs.io/f/eTRmNYrLOXzGpk7gzlWTJ5oMCX3zgnwFaikv2t87bOQyrTGW", alt: "Gallery Image 1" },
    { src: "https://utfs.io/f/eTRmNYrLOXzGLv7N1Mow2fTdzxvAgRP36VyWHFCLoY9sMjuh", alt: "Gallery Image 2" },
    { src: "https://utfs.io/f/eTRmNYrLOXzG6BKzCcs4lFMyP2RuqN0Tx7GJhWQ4afcDHKXi", alt: "Gallery Image 3" },
    { src: "https://utfs.io/f/eTRmNYrLOXzGsao0wBRj7eE4XFhuV5GBpPr0gMU6oOfIviWC", alt: "Gallery Image 4" },
    { src: "https://utfs.io/f/eTRmNYrLOXzGaCkxqIny5qYCim1jBXZMVUrSWAPTvEa4xHRn", alt: "Gallery Image 5" },
    { src: "https://utfs.io/f/eTRmNYrLOXzGCWJq10NO9aELGADxOnTSI3d24mb50FjyhVrU", alt: "Gallery Image 6" },
    { src: "https://utfs.io/f/eTRmNYrLOXzGhsayE0Lv1odxYcIF206hQRzPZ5aC9XWVGjkE", alt: "Gallery Image 7" },
    { src: "https://utfs.io/f/eTRmNYrLOXzGpkXxEA8TJ5oMCX3zgnwFaikv2t87bOQyrTGW", alt: "Gallery Image 8" },
    { src: "https://utfs.io/f/eTRmNYrLOXzGpk7gzlWTJ5oMCX3zgnwFaikv2t87bOQyrTGW", alt: "Gallery Image 9" },
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