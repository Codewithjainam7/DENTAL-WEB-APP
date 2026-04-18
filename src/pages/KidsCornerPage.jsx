import { motion } from 'framer-motion';
import { Smile, Star, Heart, Music, Gamepad2, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';
import Breadcrumb from '../components/shared/Breadcrumb';

export default function KidsCornerPage() {
  const features = [
    { icon: Music, title: 'Fun Music', desc: 'Child-friendly tunes to keep them relaxed.' },
    { icon: Gamepad2, title: 'Gaming Zone', desc: 'Tablets and games in the waiting area.' },
    { icon: Gift, title: 'Bravery Awards', desc: 'Stickers and small gifts for every visit.' },
    { icon: Smile, title: 'Cartoon TV', desc: 'Watch favorite shows during treatment.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <SEOHead title="Kids Corner" />
      
      {/* Hero Section */}
      <section className="bg-warm-yellow/20 py-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 text-warm-yellow/30 animate-pulse">
          <Star size={300} fill="currentColor" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Kids Corner' }]} />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-heading mb-6 text-dark-text">
                Welcome to the <span className="text-warm-primary">Kids Corner!</span> 🎈
              </h1>
              <p className="text-xl text-muted-text leading-relaxed">
                We've created a magical space where visiting the dentist is an adventure, not a chore. Our gentle team loves working with children!
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/appointment" className="btn-primary bg-blue-500 hover:bg-blue-600 border-none">
                  Book First Visit
                </Link>
                <Link to="/services/pediatric-dentistry" className="btn-secondary">
                  Learn About Pediatric Care
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1513412803932-41f776353282?auto=format&fit=crop&q=80&w=800" 
                  alt="Happy Kids" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 text-8xl">🧸</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <SectionHeading 
          badge="Fear-Free Dentistry"
          title="Why Kids Love Us"
          subtitle="We go the extra mile to make sure your little ones leave with a smile."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[40px] shadow-lg text-center border-4 border-cream hover:border-warm-yellow transition-all"
            >
              <div className="w-20 h-20 bg-warm-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <f.icon className="w-10 h-10 text-warm-yellow" />
              </div>
              <h3 className="text-2xl font-heading mb-4">{f.title}</h3>
              <p className="text-muted-text">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tips for Parents */}
      <section className="bg-light-teal/20 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-heading mb-8">Tips for a Great First Visit</h2>
              <div className="space-y-6">
                {[
                  "Talk about the dentist in a positive way.",
                  "Read books or watch videos about dentist visits.",
                  "Bring their favorite toy for comfort.",
                  "Schedule appointments when they are well-rested.",
                  "Avoid using words like 'pain' or 'needle'."
                ].map((tip, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-deep-teal text-white flex items-center justify-center shrink-0 font-bold">
                      {i + 1}
                    </div>
                    <p className="text-lg text-muted-text">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1471306224500-6d0d218be372?auto=format&fit=crop&q=80&w=800" 
                  alt="Parent and Child" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Fact */}
      <section className="section-padding text-center">
        <div className="max-w-3xl mx-auto bg-warm-primary text-white p-12 rounded-[60px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 text-white/10 -mr-10 -mt-10">
            <Smile size={200} fill="currentColor" />
          </div>
          <h3 className="text-3xl font-heading mb-6 relative z-10">Did You Know? 🦷</h3>
          <p className="text-xl leading-relaxed relative z-10">
            Humans are the only animals that have to brush their teeth! Most animals have teeth that grow back or they eat food that cleans their teeth.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
