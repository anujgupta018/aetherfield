import CaseStudySection from "@/components/caseStudySection";
import FeatureSection from "@/components/featureSection";
import FloatingCard from "@/components/floatingCard";
import Hero from "@/components/hero";
import JournalSection from "@/components/journalSection";
import Navbar from "@/components/navbar";
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
    </div>
  );
}
