import Image from "next/image";
import Hero from "@/components/customComponents/Hero";
import CityCardGrid from "@/components/customComponents/CityCards";
import Carousel from "@/components/customComponents/Carousel"
import About from "@/components/customComponents/About";
import MentorProfile from "@/components/customComponents/Mentor";
import PricingComponent from "@/components/customComponents/PricingTickets";
import Faq from "@/components/customComponents/Faq";
import Testimonials from "@/components/customComponents/CourseTestimonials"
import Levels from "@/components/customComponents/Levels";
import CapstoneProject from "@/components/customComponents/CapstoneProject";
import EventSchedule from "@/components/customComponents/Shedule";
import TrainingCertificate from "@/components/customComponents/Cert";
import ContactUs from "@/components/customComponents/ContactUs"
import TGSAboutSection from "@/components/NewAbout";
export default function Home() {
  return (
   <>
   <Hero></Hero>
   <About></About>
   <EventSchedule></EventSchedule>
   <CityCardGrid></CityCardGrid>
   <MentorProfile></MentorProfile>
   <TrainingCertificate></TrainingCertificate>
   <Levels></Levels>
   <TGSAboutSection></TGSAboutSection>
   <Carousel></Carousel>
   <Faq></Faq>
   <CapstoneProject></CapstoneProject>
   

   
   <PricingComponent></PricingComponent>
   <Testimonials></Testimonials>
   <ContactUs></ContactUs>
   </>
  );
}
