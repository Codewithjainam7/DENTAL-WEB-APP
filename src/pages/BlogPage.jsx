import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';
import Breadcrumb from '../components/shared/Breadcrumb';
import { blogPosts } from '../data/blogPosts';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <SEOHead title="Blog" />
      
      {/* Hero Section */}
      <section className="bg-light-teal py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Blog' }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">Dental Tips & Insights</h1>
            <p className="text-xl text-muted-text max-w-3xl">
              Stay up to date with the latest in dental health, technology, and tips from the experts at Dr. Smile.
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
              placeholder="Search articles..." 
              className="w-full pl-12 pr-6 py-3 rounded-full bg-cream border-none focus:ring-2 focus:ring-warm-primary outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding min-h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="organic-card group overflow-hidden p-0"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-warm-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 text-xs text-muted-text mb-4">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-heading mb-4 group-hover:text-warm-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-text mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-deep-teal font-bold hover:text-warm-primary transition-colors"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-text">No articles found matching your criteria.</p>
            <button 
              onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
              className="mt-4 text-warm-primary font-bold underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-deep-teal py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading mb-8">Subscribe to our Newsletter</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get the latest dental tips and exclusive offers delivered straight to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-warm-yellow"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </motion.div>
  );
}
