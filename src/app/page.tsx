import Image from "next/image";
import Hero from "@/components/customComponents/Hero";
import CityCardGrid from "@/components/customComponents/CityCards";
import GalleryCarousel from "@/components/customComponents/Gallery";
import About from "@/components/customComponents/About";
export default function Home() {
  return (
   <>
   <Hero></Hero>
   <About></About>
   <CityCardGrid/>
   <GalleryCarousel></GalleryCarousel>
   </>
  );
}
