import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import TrustBar from "./components/sections/TrustBar";
import FeaturesOverview from "./components/sections/FeaturesOverview";
import ObligationIntroSection from "./components/sections/ObligationIntroSection";
import FeatureSection from "./components/sections/FeatureSection";
import RegulatoryStandardsSection from "./components/sections/RegulatoryStandardsSection";
import IndustryTabs from "./components/sections/IndustryTabs";
import ComplianceCoreModule from "./components/sections/ComplianceCoreModule";
import AdvisorySection from "./components/sections/AdvisorySection";
import TestimonialSection from "./components/sections/TestimonialSection";
import CaseStudySection from "./components/sections/CaseStudySection";
import VideoFaqSection from "./components/sections/VideoFaqSection";
import FinalCTA from "./components/sections/FinalCTA";
import { alternatingFeatures } from "./data/features";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <FeaturesOverview />
        <ObligationIntroSection />
        {alternatingFeatures.map((feature) => (
          <FeatureSection
            key={feature.id}
            title={feature.title}
            subtitle={feature.subtitle}
            bullets={feature.bullets}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
            aspectRatio={feature.aspectRatio}
            reverse={feature.reverse}
            cta={feature.cta}
            className={feature.reverse ? "bg-surface" : "bg-white"}
          />
        ))}
        <RegulatoryStandardsSection />
        <IndustryTabs />
        <ComplianceCoreModule />
        <AdvisorySection />
        <TestimonialSection />
        <CaseStudySection />
        <VideoFaqSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
