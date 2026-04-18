import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-cream">
      <SectionHeading 
        badge="Latest News"
        title="Dental Tips & Insights"
        subtitle="Stay informed with the latest dental health tips from our expert team."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
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
      </div>
    </section>
  );
}
