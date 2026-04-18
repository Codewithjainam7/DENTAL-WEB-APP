import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <div className="bg-warm-primary py-4 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-white">
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
          >
            <PhoneCall className="w-5 h-5" />
          </motion.div>
          <span className="font-bold text-lg uppercase tracking-wider">Dental Emergency?</span>
        </div>
        
        <p className="text-white/90 font-medium text-center">
          We are here for you 24/7. Call our emergency helpline now:
        </p>
        
        <a 
          href="tel:+91XXXXXXXXXX" 
          className="text-2xl font-bold hover:underline transition-all"
        >
          +91 XXXXX XXXXX
        </a>
      </div>
    </div>
  );
}
