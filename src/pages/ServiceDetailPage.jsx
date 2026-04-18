import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Calendar, Phone, ChevronRight } from 'lucide-react';
import SEOHead from '../components/shared/SEOHead';
import Breadcrumb from '../components/shared/Breadcrumb';
import { services } from '../data/services';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = services.filter(s => service.relatedServices.includes(s.id));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <SEOHead title={service.name} description={service.shortDescription} />
      
      {/* Hero Section */}
      <section className="bg-light-teal py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb 
            items={[
              { label: 'Services', link: '/services' },
              { label: service.name }
            ]} 
          />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="px-4 py-1 rounded-full bg-white text-deep-teal text-sm font-bold mb-4 inline-block uppercase tracking-wider">
                {service.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-heading mb-6">{service.name}</h1>
              <p className="text-xl text-muted-text leading-relaxed">
                {service.shortDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/appointment" className="btn-primary flex items-center">
                  <Calendar className="mr-2 w-5 h-5" /> Book Appointment
                </Link>
                <a href="tel:+91XXXXXXXXXX" className="btn-secondary flex items-center">
                  <Phone className="mr-2 w-5 h-5" /> Call Now
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={`https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800`} 
                  alt={service.name} 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-heading mb-6">What is {service.name}?</h2>
              <p className="text-lg text-muted-text leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cream p-8 rounded-[32px]">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <CheckCircle2 className="text-warm-primary mr-2" /> Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-3 text-muted-text">
                      <div className="w-1.5 h-1.5 rounded-full bg-warm-primary mt-2 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-light-teal/30 p-8 rounded-[32px]">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <CheckCircle2 className="text-deep-teal mr-2" /> Who Needs It?
                </h3>
                <p className="text-muted-text leading-relaxed">
                  {service.whoNeedsIt}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-heading mb-8">The Procedure</h2>
              <div className="space-y-6">
                {service.procedure.map((step, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="w-10 h-10 rounded-full bg-warm-primary text-white flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div className="pt-2">
                      <p className="text-lg text-dark-text font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {service.faqs && (
              <div>
                <h2 className="text-3xl font-heading mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <details key={i} className="group bg-white border border-cream rounded-2xl overflow-hidden shadow-sm">
                      <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-dark-text">
                        {faq.question}
                        <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                      </summary>
                      <div className="px-6 pb-6 text-muted-text leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-dark-text text-white p-8 rounded-[40px] shadow-xl">
              <h3 className="text-2xl font-heading mb-6">Related Services</h3>
              <div className="space-y-4">
                {relatedServices.map(s => (
                  <Link 
                    key={s.id} 
                    to={`/services/${s.slug}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <span className="font-medium">{s.name}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-warm-yellow p-8 rounded-[40px] shadow-xl text-dark-text">
              <h3 className="text-2xl font-heading mb-4">Need Help?</h3>
              <p className="mb-6 opacity-80">Our experts are here to help you choose the right treatment.</p>
              <Link to="/contact" className="w-full bg-dark-text text-white py-4 rounded-full font-bold flex items-center justify-center hover:bg-dark-text/90 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
