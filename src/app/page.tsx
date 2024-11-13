import Image from "next/image";
import Hero from "@/components/customComponents/Hero";
import CityCardGrid from "@/components/customComponents/CityCards";
import GalleryCarousel from "@/components/customComponents/Gallery";
<<<<<<< HEAD
import About from "@/components/customComponents/About";
=======
import MentorProfile from "@/components/customComponents/Mentor";
import PricingComponent from "@/components/customComponents/PricingTickets";
import Faq from "@/components/customComponents/Faq";
>>>>>>> d99480d71f828d48c8a4073dcf0c03a841ef89de
export default function Home() {
  return (
   <>
   <Hero></Hero>
<<<<<<< HEAD
   <About></About>
   <CityCardGrid/>
   <GalleryCarousel></GalleryCarousel>
=======
   <CityCardGrid></CityCardGrid>
   <MentorProfile></MentorProfile>
   {/* <GalleryCarousel></GalleryCarousel> */}
   <Faq></Faq>
   
   <PricingComponent></PricingComponent>
>>>>>>> d99480d71f828d48c8a4073dcf0c03a841ef89de
   </>
  );
}
