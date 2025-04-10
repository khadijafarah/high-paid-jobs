import CareerPath from "@/components/CareerPath/CareerPath";
import CareerPathSelection from "@/components/CareerPathSelection/CareerPathSelection";
import CountdownTimer from "@/components/CountdownCounter/CountdownCounter";
import FAQSection from "@/components/FAQ/FAQSection";
import PricingPage from "@/components/PricingPage/PricingPage";
import PromoBanner from "@/components/PromoBanner/PromoBanner";
import Footer from "@/components/Shared/Footer";
// import Navbar from "@/components/Shared/Home";
import TicketToSuccess from "@/components/TicketToSuccess/TicketToSuccess";
import VideoTestimonials from "@/components/VideoTestimonials/VideoTestimonials";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

// import Image from "next/image";

export default function Home() {
  return (
   <div>
    {/* <Navbar/> */}
 
    <TicketToSuccess/>
    <CareerPath/>
    <CareerPathSelection/>
    <VideoTestimonials/>
    <WhyChooseUs/>
    <PricingPage/>
    <FAQSection/>
    <CountdownTimer/>
  <PromoBanner/>
  <Footer/>
   </div>
  );
}
