import { motion } from 'framer-motion';
import { Star, Quote, MessageSquare, PlayCircle } from 'lucide-react';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';
import Breadcrumb from '../components/shared/Breadcrumb';
import { testimonials } from '../data/testimonials';

export default function TestimonialsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <SEOHead title="Testimonials" />
      
      {/* Hero Section */}
      <section className="bg-light-orange/20 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Testimonials' }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">Patient Stories</h1>
            <p className="text-xl text-muted-text max-w-3xl">
              Don't just take our word for it. Hear what our patients in Palghar have to say about their experience at Dr. Smile.
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews Badge */}
      <section className="py-12 bg-white border-b border-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-warm-yellow text-warm-yellow" />)}
                <span className="ml-2 font-bold text-xl">4.9/5</span>
              </div>
              <p className="text-muted-text">Based on 500+ Google Reviews</p>
            </div>
          </div>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary flex items-center"
          >
            Write a Review <MessageSquare className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="organic-card flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-light-teal flex items-center justify-center text-xl font-bold text-deep-teal">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-dark-text">{t.name}</h4>
                  <p className="text-xs text-muted-text uppercase tracking-widest">{t.location}</p>
                </div>
              </div>
              
              <div className="flex space-x-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warm-yellow text-warm-yellow" />
                ))}
              </div>

              <div className="relative mb-6 flex-grow">
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-cream" />
                <p className="text-muted-text leading-relaxed relative z-10 italic">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-6 border-t border-cream mt-auto">
                <p className="text-xs font-bold text-warm-primary uppercase tracking-widest">
                  Service: {t.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            badge="Video Reviews"
            title="Watch Their Smiles"
            subtitle="See the real-life transformations and hear the stories directly from our patients."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((v) => (
              <div key={v} className="relative aspect-video rounded-[40px] overflow-hidden group cursor-pointer shadow-xl">
                <img 
                  src={`https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800`} 
                  alt="Video Testimonial" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-12 h-12 text-white fill-white/20" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">Patient Transformation Story #{v}</p>
                  <p className="text-sm opacity-80">Full Mouth Rehabilitation</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refer a Friend */}
      <section className="section-padding">
        <div className="bg-warm-primary rounded-[60px] p-8 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading mb-6">Refer a Friend, Get ₹200 Off!</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              We grow through your trust. Refer a friend or family member to Dr. Smile and get a discount on your next visit as a token of our appreciation.
            </p>
            <button className="bg-white text-warm-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-cream transition-all">
              Refer Someone Now
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
