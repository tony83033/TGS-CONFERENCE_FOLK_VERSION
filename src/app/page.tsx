import Image from "next/image";
import Hero from "@/components/customComponents/Hero";
import CityCardGrid from "@/components/customComponents/CityCards";
import GalleryCarousel from "@/components/customComponents/Gallery";
import MentorProfile from "@/components/customComponents/Mentor";
import PricingComponent from "@/components/customComponents/PricingTickets";
import Faq from "@/components/customComponents/Faq";
export default function Home() {
  return (
   <>
   <Hero></Hero>
   <CityCardGrid></CityCardGrid>
   <MentorProfile></MentorProfile>
   {/* <GalleryCarousel></GalleryCarousel> */}
   <Faq></Faq>
   
   <PricingComponent></PricingComponent>
   </>
  );
}
