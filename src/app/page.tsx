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
import TGSAboutSection from "@/components/customComponents/NewAbout";
import ParticipateNowButton from "@/components/customComponents/ParticipateNow";
import GalleryCarousel from "@/components/customComponents/Carousel";
export default function Home() {
  return (
   <>
   <Hero></Hero>
   <About></About> 
{/* AGENDA 2 */}
   <EventSchedule></EventSchedule> 
   {/* VISIONARY BEHIND TGS 3 */}
   <MentorProfile></MentorProfile>
   {/* <GalleryCarousel></GalleryCarousel> */}
   {/* ON  INDIA TOUR 4  */}
   <CityCardGrid></CityCardGrid>
{/* TGS PASS 5 */}
   
<PricingComponent></PricingComponent>
{/* LEVES 6 */}
<Levels></Levels>
  {/* CAPSTONE PROJECT 7 */}
  <CapstoneProject></CapstoneProject>

  {/* ABOUT TGS  8 */}
  <TGSAboutSection></TGSAboutSection>

{/* CERTIFCATE 9 */}
   <TrainingCertificate></TrainingCertificate>
   
{/* GALLARY  10*/}
   <Carousel></Carousel>

{/*  TESTIMONIAL 11 */}

<Testimonials></Testimonials>
{/* FAQ 12 */}
   <Faq></Faq>
  
   
   <ParticipateNowButton></ParticipateNowButton>
   
  {/* CANTACT */}
   
   <ContactUs></ContactUs>
   </>
  );
}



