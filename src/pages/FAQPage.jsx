import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';
import Breadcrumb from '../components/shared/Breadcrumb';
import { faqs } from '../data/faqs';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'General', 'Treatments', 'Pricing', 'Emergency', 'Children'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <SEOHead title="FAQs" />
      
      {/* Hero Section */}
      <section className="bg-light-orange/20 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'FAQs' }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-text max-w-3xl">
              Find answers to common questions about our treatments, pricing, and clinic policies.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-warm-primary text-white shadow-lg' 
                    : 'bg-cream text-muted-text hover:bg-light-teal hover:text-deep-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search FAQs..." 
              className="w-full pl-12 pr-6 py-3 rounded-full bg-cream border-none focus:ring-2 focus:ring-warm-primary outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding min-h-[600px]">
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => (
              <motion.details
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group bg-white border border-cream rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <summary className="flex justify-between items-center p-8 cursor-pointer font-bold text-xl text-dark-text list-none">
                  <span className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-light-teal text-deep-teal text-xs flex items-center justify-center mr-4 shrink-0">
                      {faq.category[0]}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown className="w-6 h-6 transition-transform group-open:rotate-180 text-warm-primary" />
                </summary>
                <div className="px-8 pb-8 pt-2 text-muted-text leading-relaxed text-lg border-t border-cream/50 mt-2">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </AnimatePresence>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-text">No questions found matching your search.</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                className="mt-4 text-warm-primary font-bold underline"
              >
                View all FAQs
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-deep-teal py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="w-10 h-10 text-warm-yellow" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading mb-8">Still have questions?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, please don't hesitate to reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <a href="tel:+91XXXXXXXXXX" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-deep-teal">Call +91 XXXXX XXXXX</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
