import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Phone, ArrowRight } from 'lucide-react';

export default function AppointmentCTA() {
  return (
    <section className="section-padding">
      <div className="bg-deep-teal rounded-[60px] p-8 md:p-16 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-warm-yellow/10 rounded-full -ml-20 -mb-20" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-heading text-white mb-6 leading-tight">
              Ready for a <span className="text-warm-yellow">Healthy, Confident</span> Smile?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Book your free consultation today and join 10,000+ happy families in Palghar who trust Dr. Smile.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
              <Link to="/appointment" className="bg-warm-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-warm-primary/90 transition-all flex items-center justify-center">
                Book Appointment <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+91XXXXXXXXXX" className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" /> +91 XXXXX XXXXX
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block w-full max-w-md"
          >
            <div className="bg-white p-8 rounded-[40px] shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-light-teal rounded-full flex items-center justify-center">
                  <Calendar className="text-deep-teal w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-text">Quick Booking</h4>
                  <p className="text-xs text-muted-text">Response within 30 mins</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-cream rounded-2xl border border-warm-primary/10">
                  <p className="text-xs font-bold text-warm-primary uppercase mb-1">Next Available Slot</p>
                  <p className="font-bold text-dark-text">Today, 4:30 PM</p>
                </div>
                <div className="p-4 bg-cream rounded-2xl border border-warm-primary/10">
                  <p className="text-xs font-bold text-warm-primary uppercase mb-1">Emergency Service</p>
                  <p className="font-bold text-dark-text">Available 24/7</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
