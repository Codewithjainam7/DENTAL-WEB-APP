import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="organic-card group"
    >
      <div className="w-16 h-16 rounded-2xl bg-light-teal flex items-center justify-center mb-6 group-hover:bg-warm-primary transition-colors duration-300">
        <Icon className="w-8 h-8 text-deep-teal group-hover:text-white transition-colors duration-300" />
      </div>
      
      <h3 className="text-2xl font-heading mb-3 group-hover:text-warm-primary transition-colors">
        {service.name}
      </h3>
      
      <p className="text-muted-text mb-6 line-clamp-3">
        {service.shortDescription}
      </p>
      
      <Link 
        to={`/services/${service.slug}`}
        className="inline-flex items-center text-deep-teal font-bold hover:text-warm-primary transition-colors"
      >
        Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
      </Link>
    </motion.div>
  );
}
