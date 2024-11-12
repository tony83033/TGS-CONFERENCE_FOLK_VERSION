"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils" // Helper for conditional classes


// Define your image type and data array for gallery images
interface ImageData {
  src: string
  alt: string
}

const galleryImages: ImageData[] = [
  { src: "/../../app/public/assets/cityCards", alt: "Gallery Image 1" },
  { src: "/../../app/public/assets/cityCards", alt: "Gallery Image 2" },
  { src: "/../../app/public/assets/cityCards", alt: "Gallery Image 3" },
  { src: "/../../app/public/assets/cityCards", alt: "Gallery Image 4" },
  { src: "/../../app/public/assets/cityCards", alt: "Gallery Image 5" },
  { src: "/../../app/public/assets/cityCards", alt: "Gallery Image 6" },
  { src: "/../../app/public/assets/cityCards", alt: "Gallery Image 7" },
]

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Automatically slide images to the left every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    }, 3000) // Adjust the interval time as needed
    return () => clearInterval(interval)
  }, [])

  // Get the 5 images to display with the centered image highlighted
  const visibleImages = [
    galleryImages[(currentIndex - 2 + galleryImages.length) % galleryImages.length],
    galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length],
    galleryImages[currentIndex],
    galleryImages[(currentIndex + 1) % galleryImages.length],
    galleryImages[(currentIndex + 2) % galleryImages.length],
  ]

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-4">Gallery</h2>
      
      <div className="relative w-full max-w-6xl flex overflow-hidden justify-center">
        <div className="flex transition-transform duration-500 ease-in-out">
          {visibleImages.map((image, index) => {
            const isCenter = index === 2 // Center image is the third in visibleImages array
            return (
              <div
                key={index}
                className={cn(
                  "flex-shrink-0 transition-all duration-500 ease-in-out",
                  isCenter ? "w-48 h-48 border-4 border-red-500" : "w-32 h-32 border-none opacity-70"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={isCenter ? 192 : 128}
                  height={isCenter ? 192 : 128}
                  className="rounded-lg object-cover"
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex space-x-2 mt-4">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-4 h-4 rounded-full border-2",
              index === currentIndex
                ? "bg-red-500 border-red-500"
                : "bg-white border-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  )
}
