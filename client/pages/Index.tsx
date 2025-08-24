import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ConsultantGrid from '../components/ConsultantGrid';
import {
  MainCTASection,
  StatisticsSection,
  WhyChooseUsSection,
  ContactCTASection
} from '../components/CTASections';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <ConsultantGrid />
        <TestimonialsSection />
        <StatisticsSection />
        <ContactCTASection />
        <MainCTASection />
      </main>
      <Footer />
    </div>
  );
}
