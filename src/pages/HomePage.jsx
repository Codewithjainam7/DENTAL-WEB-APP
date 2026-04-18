import { motion } from 'framer-motion';
import SEOHead from '../components/shared/SEOHead';
import HeroSection from '../components/home/HeroSection';
import EmergencyBanner from '../components/home/EmergencyBanner';
import StatsCounter from '../components/home/StatsCounter';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import DoctorProfile from '../components/home/DoctorProfile';
import BeforeAfterSlider from '../components/home/BeforeAfterSlider';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import AppointmentCTA from '../components/home/AppointmentCTA';
import BlogPreview from '../components/home/BlogPreview';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEOHead 
        title="Home" 
        description="Welcome to Dr. Smile Dental Clinic in Palghar. We provide expert dental care for the whole family with a gentle touch."
      />
      
      <HeroSection />
      <EmergencyBanner />
      <StatsCounter />
      <ServicesPreview />
      <WhyChooseUs />
      <DoctorProfile />
      <BeforeAfterSlider />
      <TestimonialsSlider />
      <BlogPreview />
      <AppointmentCTA />
    </motion.div>
  );
}
