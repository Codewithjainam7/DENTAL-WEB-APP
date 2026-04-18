import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote, Award, BookOpen, Star } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { teamMembers } from '../../data/teamMembers';

export default function DoctorProfile() {
  const doctor = teamMembers[0];

  return (
    <section className="bg-deep-teal section-padding overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-[60px] overflow-hidden border-8 border-white/10 shadow-2xl">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Experience Badge */}
          <div className="absolute -bottom-8 -right-8 bg-warm-yellow p-8 rounded-full shadow-2xl flex flex-col items-center justify-center w-40 h-40 border-4 border-deep-teal z-20">
            <span className="text-3xl font-bold text-dark-text">15+</span>
            <span className="text-xs font-bold text-dark-text uppercase text-center">Years of Experience</span>
          </div>
        </motion.div>

        <div className="text-white">
          <SectionHeading 
            align="left"
            light
            badge="Meet Our Expert"
            title={doctor.name}
            subtitle={doctor.role}
          />
          
          <div className="mb-8 relative">
            <Quote className="absolute -top-6 -left-8 w-12 h-12 text-white/10" />
            <p className="text-2xl font-heading italic leading-relaxed text-white/90">
              "My mission is to provide world-class dental care that is accessible and affordable for every family in Palghar. Your comfort is our priority."
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <BookOpen className="text-warm-yellow w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-white/60 uppercase tracking-widest">Qualifications</p>
                <p className="text-lg font-medium">{doctor.qualifications}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Award className="text-warm-yellow w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-white/60 uppercase tracking-widest">Specializations</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {doctor.specializations.map((spec, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link to="/appointment" className="btn-primary inline-flex items-center">
            Book a Consultation <Star className="ml-2 w-4 h-4 fill-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
