// import Image from "next/image";
// import Hero from "@/components/customComponents/Hero";
// import CityCardGrid from "@/components/customComponents/CityCards";
// import Carousel from "@/components/customComponents/Carousel"
// import About from "@/components/customComponents/About";
// import MentorProfile from "@/components/customComponents/Mentor";
// import PricingComponent from "@/components/customComponents/PricingTickets";
// import Faq from "@/components/customComponents/Faq";
// import Testimonials from "@/components/customComponents/CourseTestimonials"
// import Levels from "@/components/customComponents/Levels";
// import CapstoneProject from "@/components/customComponents/CapstoneProject";
// import EventSchedule from "@/components/customComponents/Shedule";
// import TrainingCertificate from "@/components/customComponents/Cert";
// import ContactUs from "@/components/customComponents/ContactUs"
// import TGSAboutSection from "@/components/customComponents/NewAbout";
// export default function Home() {
//   return (
//    <>
//    <Hero></Hero>
//    <About></About> 
// {/* AGENDA 2 */}
//    <EventSchedule></EventSchedule> 
//    {/* VISIONARY BEHIND TGS 3 */}
//    <MentorProfile></MentorProfile>
//    {/* ON  INDIA TOUR 4  */}
//    <CityCardGrid></CityCardGrid>
// {/* TGS PASS 5 */}
   
// <PricingComponent></PricingComponent>
// {/* LEVES 6 */}
// <Levels></Levels>
//   {/* CAPSTONE PROJECT 7 */}
//   <CapstoneProject></CapstoneProject>

//   {/* ABOUT TGS  8 */}
//   <TGSAboutSection></TGSAboutSection>

// {/* CERTIFCATE 9 */}
//    <TrainingCertificate></TrainingCertificate>
   
// {/* GALLARY  10*/}
//    <Carousel></Carousel>

// {/*  TESTIMONIAL 11 */}

// <Testimonials></Testimonials>
// {/* FAQ 12 */}
//    <Faq></Faq>
  
   

   
//   {/* CANTACT */}
   
//    <ContactUs></ContactUs>
//    </>
//   );
// }




import React from "react";
import Hero from "@/components/customComponents/Hero";
import CityCardGrid from "@/components/customComponents/CityCards";
import Carousel from "@/components/customComponents/Carousel";
import About from "@/components/customComponents/About";
import MentorProfile from "@/components/customComponents/Mentor";
import PricingComponent from "@/components/customComponents/PricingTickets";
import Faq from "@/components/customComponents/Faq";
import Testimonials from "@/components/customComponents/CourseTestimonials";
import Levels from "@/components/customComponents/Levels";
import CapstoneProject from "@/components/customComponents/CapstoneProject";
import EventSchedule from "@/components/customComponents/Shedule";
import TrainingCertificate from "@/components/customComponents/Cert";
import ContactUs from "@/components/customComponents/ContactUs";
import TGSAboutSection from "@/components/customComponents/NewAbout";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* Hero Section */}
      <section className="mb-12">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="mb-12">
        <About />
      </section>

      {/* Event Schedule */}
      <section id="schedule" className="mb-12">
        <EventSchedule />
      </section>

      {/* Mentor Profile */}
      <section id="mentor" className="mb-12">
        <MentorProfile />
      </section>

      {/* City Cards Grid */}
      <section id="city-grid" className="mb-12">
        <CityCardGrid />
      </section>

      {/* Pricing */}
      <section id="pricing" className="mb-12">
        <PricingComponent />
      </section>

      {/* Levels */}
      <section id="levels" className="mb-12">
        <Levels />
      </section>

      {/* Capstone Project */}
      <section id="capstone" className="mb-12">
        <CapstoneProject />
      </section>

      {/* About TGS */}
      <section id="about-tgs" className="mb-12">
        <TGSAboutSection />
      </section>

      {/* Training Certificate */}
      <section id="certificate" className="mb-12">
        <TrainingCertificate />
      </section>

      {/* Carousel / Gallery */}
      <section id="gallery" className="mb-12">
        <Carousel />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mb-12">
        <Testimonials />
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <Faq />
      </section>

      {/* Contact Us */}
      <section id="contact" className="mb-12">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
