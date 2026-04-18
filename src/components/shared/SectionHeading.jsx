import { motion } from 'framer-motion';

export default function SectionHeading({ 
  title, 
  subtitle, 
  badge, 
  align = 'center', 
  light = false 
}) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col mb-12 ${alignmentClasses[align]}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1 rounded-full bg-light-orange text-warm-primary text-sm font-bold mb-4 uppercase tracking-wider"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-5xl font-heading mb-4 ${light ? 'text-white' : 'text-dark-text'}`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`max-w-2xl text-lg ${light ? 'text-white/80' : 'text-muted-text'}`}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`h-1.5 w-24 rounded-full mt-6 ${light ? 'bg-warm-yellow' : 'bg-warm-primary'}`}
      />
    </div>
  );
}
