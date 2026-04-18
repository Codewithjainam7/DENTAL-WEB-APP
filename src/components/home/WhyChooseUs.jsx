import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Heart, Zap, Users, Clock, Camera, Sparkles } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

export default function WhyChooseUs() {
  const reasons = [
    { icon: Zap, title: 'State-of-the-art Equipment', desc: 'We use the latest digital X-rays and 3D scanning technology.' },
    { icon: Shield, title: 'Certified & Experienced', desc: 'Our doctors are highly qualified with 15+ years of experience.' },
    { icon: Heart, title: 'Painless Treatments', desc: 'Advanced anesthesia techniques for a stress-free experience.' },
    { icon: Sparkles, title: 'Hygienic & Sterilized', desc: 'We follow strict international sterilization protocols.' },
    { icon: Users, title: 'Child-friendly Environment', desc: 'Specialized care and a fun environment for our little patients.' },
    { icon: Clock, title: 'Emergency Care', desc: 'Available 24/7 for urgent dental needs in Palghar.' },
    { icon: Camera, title: 'Digital Diagnosis', desc: 'Precise treatment planning with high-resolution imaging.' },
    { icon: CheckCircle2, title: 'Affordable Pricing', desc: 'Quality care with transparent pricing and EMI options.' },
  ];

  return (
    <section className="bg-light-orange/30 section-padding overflow-hidden relative">
      {/* Decorative SVG */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-warm-primary/5 rounded-full -mr-32 -mt-32" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading 
            align="left"
            badge="Why Dr. Smile?"
            title="The Most Trusted Dental Clinic in Palghar"
            subtitle="We combine clinical excellence with a warm, patient-centered approach to give you the best dental experience."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="mt-1 w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <reason.icon className="w-5 h-5 text-warm-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-text mb-1">{reason.title}</h4>
                  <p className="text-sm text-muted-text leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
              alt="Modern Dental Clinic" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-deep-teal text-white p-8 rounded-3xl shadow-xl max-w-[200px]">
            <p className="text-3xl font-bold mb-1">15+</p>
            <p className="text-sm font-medium opacity-80">Years of Excellence in Palghar</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
