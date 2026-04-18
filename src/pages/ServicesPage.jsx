import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';
import Breadcrumb from '../components/shared/Breadcrumb';
import ServiceCard from '../components/shared/ServiceCard';
import { services } from '../data/services';

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'All';
  const [filter, setFilter] = useState(initialFilter);

  const categories = ['All', 'Preventive', 'Cosmetic', 'Restorative', 'Orthodontic', 'Pediatric'];

  useEffect(() => {
    const currentFilter = searchParams.get('filter') || 'All';
    setFilter(currentFilter);
  }, [searchParams]);

  const filteredServices = filter === 'All' 
    ? services 
    : services.filter(s => s.category === filter);

  const handleFilterChange = (cat) => {
    setFilter(cat);
    if (cat === 'All') {
      searchParams.delete('filter');
    } else {
      searchParams.set('filter', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <SEOHead title="Our Services" />
      
      {/* Hero Section */}
      <section className="bg-light-orange/20 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Services' }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">Our Dental Services</h1>
            <p className="text-xl text-muted-text max-w-3xl">
              From routine check-ups to advanced oral surgery, we provide a full spectrum of dental care tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  filter === cat 
                    ? 'bg-warm-primary text-white shadow-lg' 
                    : 'bg-cream text-muted-text hover:bg-light-teal hover:text-deep-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding min-h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </AnimatePresence>
        </div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-text">No services found in this category.</p>
            <button 
              onClick={() => handleFilterChange('All')}
              className="mt-4 text-warm-primary font-bold underline"
            >
              View all services
            </button>
          </div>
        )}
      </section>

      {/* Trust Section */}
      <section className="bg-deep-teal py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading mb-8">Not sure which treatment you need?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation with our expert doctors. We'll examine your oral health and recommend the best treatment plan for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary">Book Free Consultation</button>
            <button className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-deep-teal">Call +91 XXXXX XXXXX</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
