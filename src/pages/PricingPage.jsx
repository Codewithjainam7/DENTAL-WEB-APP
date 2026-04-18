import { motion } from 'framer-motion';
import { Check, ShieldCheck, CreditCard, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';
import Breadcrumb from '../components/shared/Breadcrumb';

export default function PricingPage() {
  const priceList = [
    {
      category: 'Preventive Care',
      items: [
        { name: 'Consultation', price: '₹300', desc: 'Comprehensive oral examination' },
        { name: 'Scaling & Polishing', price: '₹1,500 - ₹2,500', desc: 'Professional cleaning' },
        { name: 'Digital X-Ray', price: '₹200', desc: 'Per view' },
        { name: 'Fluoride Treatment', price: '₹800', desc: 'Cavity prevention for kids' },
      ]
    },
    {
      category: 'Restorative',
      items: [
        { name: 'Composite Filling', price: '₹1,200 - ₹2,000', desc: 'Tooth-colored filling' },
        { name: 'Root Canal Treatment', price: '₹4,000 - ₹7,000', desc: 'Single sitting available' },
        { name: 'Dental Crown (PFM)', price: '₹3,500+', desc: 'Metal ceramic crown' },
        { name: 'Zirconia Crown', price: '₹8,000 - ₹15,000', desc: 'Premium metal-free crown' },
      ]
    },
    {
      category: 'Cosmetic & Others',
      items: [
        { name: 'Teeth Whitening', price: '₹8,000+', desc: 'In-office professional whitening' },
        { name: 'Dental Implants', price: '₹25,000+', desc: 'Per implant (excluding crown)' },
        { name: 'Orthodontic Braces', price: '₹30,000+', desc: 'Metal/Ceramic/Invisible' },
        { name: 'Tooth Extraction', price: '₹800 - ₹3,500', desc: 'Simple to surgical' },
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <SEOHead title="Pricing" />
      
      {/* Hero Section */}
      <section className="bg-light-teal py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Pricing' }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">Transparent Pricing</h1>
            <p className="text-xl text-muted-text max-w-3xl">
              We believe in honest, upfront pricing with no hidden costs. Quality dental care should be accessible and affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {priceList.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[40px] p-8 shadow-xl border border-cream h-fit"
            >
              <h2 className="text-2xl font-heading mb-8 text-warm-primary">{section.category}</h2>
              <div className="space-y-6">
                {section.items.map((item, j) => (
                  <div key={j} className="flex justify-between items-start group">
                    <div>
                      <h4 className="font-bold text-dark-text group-hover:text-warm-primary transition-colors">{item.name}</h4>
                      <p className="text-xs text-muted-text">{item.desc}</p>
                    </div>
                    <span className="font-bold text-deep-teal whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-12 text-center text-muted-text italic">
          * Prices are indicative and may vary based on the complexity of the case. A final estimate will be provided after consultation.
        </p>
      </section>

      {/* Payment Options */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            badge="Payment & Insurance"
            title="Flexible Payment Options"
            subtitle="We make it easy for you to pay for your dental care."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[32px] shadow-lg text-center">
              <div className="w-16 h-16 bg-light-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-deep-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">All Cards & UPI</h3>
              <p className="text-muted-text text-sm">We accept all major credit/debit cards, Google Pay, PhonePe, and Paytm.</p>
            </div>
            <div className="bg-white p-8 rounded-[32px] shadow-lg text-center">
              <div className="w-16 h-16 bg-light-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-deep-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">Insurance Support</h3>
              <p className="text-muted-text text-sm">We assist with dental insurance claims for all major corporate providers.</p>
            </div>
            <div className="bg-white p-8 rounded-[32px] shadow-lg text-center">
              <div className="w-16 h-16 bg-light-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-deep-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">EMI Facilities</h3>
              <p className="text-muted-text text-sm">0% interest EMI options available for major treatments through Bajaj Finserv.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="bg-dark-text text-white rounded-[60px] p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-heading mb-6">Get a Detailed Estimate</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Book a consultation today for a personalized treatment plan and a precise cost breakdown.
          </p>
          <Link to="/appointment" className="btn-primary">
            Book Consultation
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
