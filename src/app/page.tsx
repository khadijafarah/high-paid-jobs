import Banner from "@/components/Banner/Banner";
import CareerConsultationForm from "@/components/CareerConsultationForm/CareerConsultationForm";
import CareerPath from "@/components/CareerPath/CareerPath";
// import CareerPathSelection from "@/components/CareerPathSelection/CareerPathSelection";
import CountdownTimer from "@/components/CountdownCounter/CountdownCounter";
import FAQSection from "@/components/FAQ/FAQSection";
import DreamJob from "@/components/LandDreamJob/DreamJob";
import PricingPage from "@/components/PricingPage/PricingPage";
import PromoBanner from "@/components/PromoBanner/PromoBanner";
import Footer from "@/components/Shared/Footer";
import SuccessStories from "@/components/SuccessStories/SuccessStories";
import TicketToSuccess from "@/components/TicketToSuccess/TicketToSuccess";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <TicketToSuccess />
      <CareerPath />
      <DreamJob />
      <SuccessStories />
      <WhyChooseUs />
      <PricingPage />
      <FAQSection />
      <CountdownTimer />
      <CareerConsultationForm />
      <PromoBanner />
      <Footer />
    </div>
  );
}
