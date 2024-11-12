import Image from "next/image";
import Hero from "@/components/customComponents/Hero";
import CityCardGrid from "@/components/customComponents/CityCards";
import GalleryCarousel from "@/components/customComponents/Gallery";
export default function Home() {
  return (
   <>
   <Hero></Hero>
   <CityCardGrid></CityCardGrid>
   <GalleryCarousel></GalleryCarousel>
   </>
  );
}
