import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, Award, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-warm-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-deep-teal/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-light-orange px-4 py-2 rounded-full w-fit">
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
            <span className="text-warm-primary font-bold text-sm tracking-wide uppercase">Trusted by 10,000+ Palghar Families</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-heading leading-[1.1] text-dark-text">
            Healthy Smiles for Your <span className="text-warm-primary">Whole Family</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-muted-text max-w-lg leading-relaxed">
            From kids to grandparents, we make dental care comfortable, affordable, and even fun — right here in the heart of Palghar.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/appointment" className="btn-primary flex items-center justify-center">
              <Calendar className="mr-2 w-5 h-5" /> Book Appointment
            </Link>
            <Link to="/about" className="btn-secondary flex items-center justify-center">
              Meet Our Doctor
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-warm-primary/10">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-deep-teal">15+</span>
              <span className="text-xs text-muted-text uppercase tracking-wider">Years Exp.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-deep-teal">10k+</span>
              <span className="text-xs text-muted-text uppercase tracking-wider">Patients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-deep-teal">20+</span>
              <span className="text-xs text-muted-text uppercase tracking-wider">Services</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-deep-teal">4.9★</span>
              <span className="text-xs text-muted-text uppercase tracking-wider">Rating</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Illustration/Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
              alt="Happy Family at Dentist" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-light-teal rounded-full flex items-center justify-center">
                <ShieldCheck className="text-deep-teal w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-text font-bold uppercase">Safety First</p>
                <p className="text-sm font-bold">100% Sterilized</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-light-orange rounded-full flex items-center justify-center">
                <Award className="text-warm-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-text font-bold uppercase">Quality Care</p>
                <p className="text-sm font-bold">ISO Certified</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative SVG Blob */}
          <svg className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] fill-warm-yellow/20" viewBox="0 0 200 200">
            <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46.2C87.4,-33.3,90.1,-17.7,89.1,-2.4C88.1,12.9,83.4,27.8,75.2,40.8C67,53.8,55.3,64.9,41.9,72.4C28.5,79.9,13.4,83.8,-1.7,86.7C-16.8,89.6,-33.6,91.5,-47.8,85.1C-62,78.7,-73.6,64.1,-81.1,48.4C-88.6,32.7,-92,15.9,-91.1,-0.5C-90.2,-16.9,-85,-32.9,-75.8,-46.4C-66.6,-59.9,-53.4,-70.9,-39.3,-78.1C-25.2,-85.3,-12.6,-88.7,1.1,-90.6C14.8,-92.5,29.6,-92.9,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px] fill-light-teal" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
