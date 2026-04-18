import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';
import Breadcrumb from '../components/shared/Breadcrumb';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone must be 10 digits'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Contact Form Data:', data);
    toast.success('Message sent successfully! We will get back to you soon.');
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <SEOHead title="Contact Us" />
      
      {/* Hero Section */}
      <section className="bg-light-orange/20 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-text max-w-3xl">
              Have a question or need to book an appointment? We're here to help. Reach out to us via any of the methods below.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="organic-card"
          >
            <h2 className="text-3xl font-heading mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-dark-text mb-2">Full Name</label>
                  <input 
                    {...register('name')}
                    type="text" 
                    placeholder="John Doe" 
                    className={`w-full px-6 py-3 rounded-2xl bg-cream border-none focus:ring-2 focus:ring-warm-primary outline-none ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark-text mb-2">Email Address</label>
                  <input 
                    {...register('email')}
                    type="email" 
                    placeholder="john@example.com" 
                    className={`w-full px-6 py-3 rounded-2xl bg-cream border-none focus:ring-2 focus:ring-warm-primary outline-none ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-dark-text mb-2">Phone Number</label>
                  <input 
                    {...register('phone')}
                    type="tel" 
                    placeholder="9876543210" 
                    className={`w-full px-6 py-3 rounded-2xl bg-cream border-none focus:ring-2 focus:ring-warm-primary outline-none ${errors.phone ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark-text mb-2">Subject</label>
                  <input 
                    {...register('subject')}
                    type="text" 
                    placeholder="General Inquiry" 
                    className={`w-full px-6 py-3 rounded-2xl bg-cream border-none focus:ring-2 focus:ring-warm-primary outline-none ${errors.subject ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-dark-text mb-2">Your Message</label>
                <textarea 
                  {...register('message')}
                  rows="5" 
                  placeholder="How can we help you?" 
                  className={`w-full px-6 py-4 rounded-2xl bg-cream border-none focus:ring-2 focus:ring-warm-primary outline-none resize-none ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : (
                  <>Send Message <Send className="ml-2 w-5 h-5" /></>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-deep-teal text-white p-10 rounded-[40px] shadow-xl">
              <h2 className="text-3xl font-heading mb-8">Contact Information</h2>
              <ul className="space-y-8">
                <li className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-warm-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-white/70">Near Railway Station, Palghar West, Maharashtra 401404</p>
                  </div>
                </li>
                <li className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-warm-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-white/70">+91 XXXXX XXXXX</p>
                    <p className="text-white/70">+91 XXXXX XXXXX</p>
                  </div>
                </li>
                <li className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-warm-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-white/70">info@drsmilepalghar.com</p>
                    <p className="text-white/70">appointments@drsmilepalghar.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white organic-card">
              <h3 className="text-2xl font-heading mb-6">Clinic Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-cream">
                  <span className="font-bold">Mon - Sat</span>
                  <span className="text-muted-text">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-cream">
                  <span className="font-bold">Sunday</span>
                  <span className="text-muted-text">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-warm-primary font-bold">
                  <span>Emergency</span>
                  <span>24 / 7 Available</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <a href="#" className="w-14 h-14 rounded-full bg-cream flex items-center justify-center text-dark-text hover:bg-warm-primary hover:text-white transition-all shadow-sm">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-14 h-14 rounded-full bg-cream flex items-center justify-center text-dark-text hover:bg-warm-primary hover:text-white transition-all shadow-sm">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-14 h-14 rounded-full bg-cream flex items-center justify-center text-dark-text hover:bg-warm-primary hover:text-white transition-all shadow-sm">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="w-14 h-14 rounded-full bg-cream flex items-center justify-center text-dark-text hover:bg-warm-primary hover:text-white transition-all shadow-sm">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.16147456722!2d72.7555!3d19.6936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71c944f6f6f6f%3A0x4f6f6f6f6f6f6f6f!2sPalghar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Dr. Smile Clinic Location"
        ></iframe>
      </section>
    </motion.div>
  );
}
