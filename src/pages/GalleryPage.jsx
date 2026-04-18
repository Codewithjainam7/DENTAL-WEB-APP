import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';
import Breadcrumb from '../components/shared/Breadcrumb';
import { galleryImages } from '../data/galleryImages';

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [index, setIndex] = useState(-1);

  const categories = ['All', 'Clinic', 'Smile Makeover', 'Before & After', 'Team'];

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <SEOHead title="Gallery" />
      
      {/* Hero Section */}
      <section className="bg-light-teal py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Gallery' }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">Our Clinic Gallery</h1>
            <p className="text-xl text-muted-text max-w-3xl">
              Take a virtual tour of our modern facility and see some of the beautiful smiles we've created.
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
                onClick={() => setFilter(cat)}
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

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden rounded-[32px] shadow-lg"
                onClick={() => setIndex(i)}
              >
                <img 
                  src={img.image} 
                  alt={img.title} 
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-text/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <span className="text-warm-yellow text-xs font-bold uppercase tracking-widest mb-2">{img.category}</span>
                  <h3 className="text-white text-xl font-heading">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={filteredImages.map(img => ({ src: img.image, title: img.title }))}
      />

      {/* CTA Section */}
      <section className="bg-warm-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading mb-8">Ready to transform your smile?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join our gallery of happy patients. Book your appointment today and start your journey to a perfect smile.
          </p>
          <button className="bg-white text-warm-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-cream transition-all">
            Book Appointment Now
          </button>
        </div>
      </section>
    </motion.div>
  );
}
