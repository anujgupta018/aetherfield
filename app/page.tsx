import CaseStudySection from "@/components/caseStudySection";
import FeatureSection from "@/components/featureSection";
import FloatingCard from "@/components/floatingCard";
import Footer from "@/components/footerSection";
import Hero from "@/components/hero";
import JournalSection from "@/components/journalSection";
import LowerSection from "@/components/lowerSection";
import Navbar from "@/components/navbar";
import TestimonialSection from "@/components/testimonialSection";
import ValueSection from "@/components/valueSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FloatingCard />
      <FeatureSection />
      <ValueSection />
      <CaseStudySection />
      <JournalSection />
      <TestimonialSection />
      <LowerSection />
      <Footer />
    </div>
  );
}
