import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import SEOHead from '../components/shared/SEOHead';
import Breadcrumb from '../components/shared/Breadcrumb';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <SEOHead title={post.title} description={post.excerpt} image={post.image} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 w-full">
            <Breadcrumb 
              items={[
                { label: 'Blog', link: '/blog' },
                { label: post.category }
              ]} 
            />
            <h1 className="text-3xl md:text-6xl font-heading text-white mt-6 mb-6 leading-tight max-w-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-medium">
              <span className="flex items-center"><User className="w-4 h-4 mr-2 text-warm-yellow" /> {post.author}</span>
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-warm-yellow" /> {post.date}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-warm-yellow" /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-muted-text leading-relaxed">
              {post.content.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-6">{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-cream flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <span className="font-bold text-dark-text">Share this post:</span>
                <div className="flex space-x-2">
                  <button className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-warm-primary hover:text-white transition-all">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-warm-primary hover:text-white transition-all">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-warm-primary hover:text-white transition-all">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-4 py-1 bg-light-teal text-deep-teal rounded-full text-xs font-bold uppercase tracking-wider">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Card */}
            <div className="mt-16 bg-cream p-8 rounded-[40px] flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Written by {post.author}</h4>
                <p className="text-muted-text">
                  Our expert team of dental surgeons and specialists are dedicated to providing the best oral health information to the Palghar community.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div className="bg-white organic-card">
              <h3 className="text-2xl font-heading mb-6">Related Posts</h3>
              <div className="space-y-8">
                {relatedPosts.map(rp => (
                  <Link key={rp.id} to={`/blog/${rp.slug}`} className="group block">
                    <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                      <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="font-bold text-dark-text group-hover:text-warm-primary transition-colors line-clamp-2">
                      {rp.title}
                    </h4>
                    <p className="text-xs text-muted-text mt-2 uppercase tracking-widest">{rp.date}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-deep-teal p-8 rounded-[40px] text-white">
              <h3 className="text-2xl font-heading mb-4">Need a Consultation?</h3>
              <p className="mb-8 opacity-80">Book an appointment with our experts today and get personalized advice for your oral health.</p>
              <Link to="/appointment" className="btn-primary w-full inline-block text-center">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
