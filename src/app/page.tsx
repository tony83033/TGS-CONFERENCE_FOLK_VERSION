import Image from "next/image";
import Hero from "@/components/customComponents/Hero";
import CityCardGrid from "@/components/customComponents/CityCards";
import GalleryCarousel from "@/components/customComponents/Gallery";
import MentorProfile from "@/components/customComponents/Mentor";
export default function Home() {
  return (
   <>
   <Hero></Hero>
   <CityCardGrid></CityCardGrid>
   <MentorProfile></MentorProfile>
   <GalleryCarousel></GalleryCarousel>
   </>
  );
}
