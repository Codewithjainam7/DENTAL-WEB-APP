import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Heart, Smile } from 'lucide-react';

export default function KidsCornerPreview() {
  return (
    <section className="section-padding bg-warm-yellow/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 text-warm-yellow/20"
      >
        <Star size={200} fill="currentColor" />
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <span className="text-2xl">🦷</span>
            <span className="text-warm-primary font-bold text-sm tracking-wide uppercase">We Make Dentist Visits Fun!</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-heading mb-6 text-dark-text">
            The <span className="text-warm-primary">Kids Corner</span> ✨
          </h2>
          
          <p className="text-xl text-muted-text mb-8 leading-relaxed">
            We believe that a lifetime of healthy smiles starts with a positive experience in childhood. Our specialized pediatric care is designed to be fear-free and even fun!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[
              { icon: Smile, text: "No-Fear Environment", color: "text-blue-500" },
              { icon: Heart, text: "Gentle Pediatric Specialists", color: "text-red-500" },
              { icon: Star, text: "Reward Stickers & Gifts", color: "text-yellow-500" },
              { icon: Smile, text: "Cartoons During Treatment", color: "text-green-500" },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-2xl shadow-sm">
                <item.icon className={`w-6 h-6 ${item.color}`} />
                <span className="font-bold text-dark-text">{item.text}</span>
              </div>
            ))}
          </div>
          
          <Link to="/kids-corner" className="btn-primary">
            Explore Kids Corner
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative"
        >
          <div className="rounded-[60px] overflow-hidden shadow-2xl border-8 border-white rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1513412803932-41f776353282?auto=format&fit=crop&q=80&w=800" 
              alt="Happy Child at Dentist" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Emoji */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 right-10 text-6xl"
          >
            🎈
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 left-10 text-6xl"
          >
            🧸
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
