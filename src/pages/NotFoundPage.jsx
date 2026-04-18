import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import SEOHead from '../components/shared/SEOHead';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-cream px-4">
      <SEOHead title="404 - Page Not Found" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full text-center"
      >
        <div className="relative mb-12">
          <h1 className="text-[150px] md:text-[200px] font-heading text-warm-primary/10 leading-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl md:text-8xl">🦷💨</div>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-heading mb-6 text-dark-text">Oops! Page Missing</h2>
        <p className="text-xl text-muted-text mb-12">
          It looks like the page you're looking for has been extracted! Let's get you back to a healthy smile.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary flex items-center">
            <Home className="mr-2 w-5 h-5" /> Back to Home
          </Link>
          <Link to="/services" className="btn-secondary flex items-center">
            <Search className="mr-2 w-5 h-5" /> Explore Services
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
