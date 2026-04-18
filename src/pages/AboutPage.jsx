import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, Zap, Users, Clock } from 'lucide-react';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';
import Breadcrumb from '../components/shared/Breadcrumb';
import { teamMembers } from '../data/teamMembers';

export default function AboutPage() {
  const values = [
    { icon: Heart, title: 'Compassion', desc: 'We treat every patient like family, with empathy and care.' },
    { icon: Award, title: 'Excellence', desc: 'We strive for the highest standards in every treatment we provide.' },
    { icon: ShieldCheck, title: 'Integrity', desc: 'Transparent pricing and honest advice are our core principles.' },
    { icon: Zap, title: 'Innovation', desc: 'We continuously invest in the latest dental technology.' },
  ];

  const milestones = [
    { year: '2009', title: 'Clinic Founded', desc: 'Dr. Sameer Patil opened the first Dr. Smile clinic in Palghar.' },
    { year: '2014', title: '1,000+ Happy Patients', desc: 'Reached our first major milestone of community trust.' },
    { year: '2018', title: 'Advanced Tech Upgrade', desc: 'Introduced digital X-rays and 3D scanning technology.' },
    { year: '2022', title: 'New Specialized Wing', desc: 'Opened a dedicated wing for Pediatric and Orthodontic care.' },
    { year: '2025', title: '10,000+ Smiles', desc: 'Proudly serving over 10,000 families in the Palghar region.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <SEOHead title="About Us" />
      
      {/* Hero Section */}
      <section className="bg-light-teal py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">Our Story & Mission</h1>
            <p className="text-xl text-muted-text max-w-3xl">
              Serving the Palghar community since 2009, Dr. Smile Dental Clinic has grown from a small practice to a leading center for dental excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Smile Clinic" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-warm-primary text-white p-8 rounded-3xl shadow-xl">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm font-medium">Years of Service</p>
            </div>
          </div>
          
          <div>
            <SectionHeading 
              align="left"
              badge="About Us"
              title="A Legacy of Healthy Smiles in Palghar"
            />
            <div className="space-y-6 text-lg text-muted-text">
              <p>
                Dr. Smile Dental Clinic was founded by Dr. Sameer Patil with a simple vision: to provide high-quality dental care that is accessible to everyone in Palghar. We believe that a visit to the dentist shouldn't be a source of anxiety.
              </p>
              <p>
                Over the years, we have built a team of specialized doctors who share this vision. Today, we are proud to be the most trusted dental clinic in the region, known for our gentle touch and clinical excellence.
              </p>
              <p>
                Our mission is to improve the oral health of our community through education, prevention, and state-of-the-art treatments. We speak your language—Marathi, Hindi, and English—to ensure you feel right at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            badge="Our Values"
            title="What We Stand For"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] shadow-lg text-center hover:-translate-y-2 transition-all"
              >
                <div className="w-16 h-16 bg-light-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-deep-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-text text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <SectionHeading 
          badge="Our Team"
          title="Meet Our Expert Doctors"
          subtitle="A team of highly qualified specialists dedicated to your oral health."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 rounded-[40px] overflow-hidden aspect-[4/5]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <p className="text-white text-sm italic mb-2">"{member.bio.substring(0, 100)}..."</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark-text group-hover:text-warm-primary transition-colors">{member.name}</h3>
              <p className="text-warm-primary font-medium text-sm mb-2">{member.role}</p>
              <p className="text-muted-text text-xs uppercase tracking-widest">{member.qualifications}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-light-orange/20 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            badge="Our Journey"
            title="Clinic Milestones"
          />
          <div className="relative mt-12">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 h-full w-1 bg-warm-primary/20" />
            
            <div className="space-y-12 relative z-10">
              {milestones.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Desktop Year */}
                  <div className="hidden md:block md:w-1/2 md:pr-16 text-right">
                    <span className="text-warm-primary font-bold text-3xl">{item.year}</span>
                  </div>
                  
                  {/* Dot */}
                  <div className="w-12 h-12 rounded-full bg-warm-primary border-4 border-white shadow-lg flex-shrink-0 flex items-center justify-center text-white text-xs md:mx-0">
                    <Clock size={16} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pl-8 md:pl-16">
                    <div className="organic-card !p-6 md:!p-8">
                      <span className="text-warm-primary font-bold text-xl mb-2 block md:hidden">{item.year}</span>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-text text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
