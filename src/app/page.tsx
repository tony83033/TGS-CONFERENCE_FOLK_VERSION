import Image from "next/image";
import Hero from "@/components/customComponents/Hero";
import CityCardGrid from "@/components/customComponents/CityCards";
import GalleryCarousel from "@/components/customComponents/Gallery";
import About from "@/components/customComponents/About";
import MentorProfile from "@/components/customComponents/Mentor";
import PricingComponent from "@/components/customComponents/PricingTickets";
import Faq from "@/components/customComponents/Faq";
import Testimonials from "@/components/customComponents/CourseTestimonials"
import Levels from "@/components/customComponents/Levels";
export default function Home() {
  return (
   <>
   <Hero></Hero>
   <About></About>
   <CityCardGrid></CityCardGrid>
   <MentorProfile></MentorProfile>
   <Levels></Levels>
   {/* <GalleryCarousel></GalleryCarousel> */}
   <Faq></Faq>
   
   
   <PricingComponent></PricingComponent>
   <Testimonials></Testimonials>
   </>
  );
}
