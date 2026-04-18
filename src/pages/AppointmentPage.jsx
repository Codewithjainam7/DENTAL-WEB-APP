import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, ArrowRight, ShieldCheck, Heart, Info } from 'lucide-react';
import { toast } from 'react-toastify';
import SEOHead from '../components/shared/SEOHead';
import Breadcrumb from '../components/shared/Breadcrumb';
import { services } from '../data/services';

const appointmentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone must be 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  notes: z.string().optional(),
});

const timeSlots = {
  Morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
  Afternoon: ['01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 AM'],
  Evening: ['05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'],
};

export default function AppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [step, setStep] = useState(1); // 1: Info & Service, 2: Date & Time

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: zodResolver(appointmentSchema),
    mode: 'onChange'
  });

  const [personalData, setPersonalData] = useState(null);

  // Generate next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      full: d.toISOString().split('T')[0],
      day: d.toLocaleDateString('en-US', { weekday: 'short' }),
      date: d.getDate(),
      month: d.toLocaleDateString('en-US', { month: 'short' }),
    };
  });

  const onNext = (data) => {
    setPersonalData(data);
    setStep(2);
  };

  const onSubmitFinal = async () => {
    if (!selectedTimeSlot) {
      toast.error('Please select a time slot');
      return;
    }

    // Simulate API call
    toast.info('Sending your request...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    toast.success('Appointment booked successfully!');
  };

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-20 px-4 flex items-center justify-center min-h-screen bg-cream">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white rounded-[60px] p-12 text-center shadow-2xl"
        >
          <div className="w-24 h-24 bg-light-teal rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-deep-teal" />
          </div>
          <h1 className="text-4xl font-heading mb-4">Slot Reserved!</h1>
          <p className="text-xl text-muted-text mb-8">
            Thank you, <span className="text-warm-primary font-bold">{personalData.name}</span>. We've tentatively reserved <span className="font-bold">{selectedTimeSlot}</span> on <span className="font-bold">{selectedDate}</span> for your <span className="font-bold">{personalData.service}</span>.
          </p>
          <div className="bg-cream p-6 rounded-3xl mb-8 text-left">
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-warm-primary">What's Next?</h4>
            <ul className="space-y-3 text-sm text-muted-text">
              <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-warm-primary shrink-0 mt-0.5" /> Our team will call you shortly to confirm the appointment.</li>
              <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-warm-primary shrink-0 mt-0.5" /> You'll receive a location map and prep instructions via WhatsApp.</li>
            </ul>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="btn-primary"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-cream/30"
    >
      <SEOHead title="Book Appointment" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <Breadcrumb items={[{ label: 'Book Appointment' }]} />
        
        <div className="mt-8 flex flex-col md:flex-row gap-12">
          {/* Main Booking Area */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl"
                >
                  <h2 className="text-3xl font-heading mb-8">Step 1: Your Information</h2>
                  <form onSubmit={handleSubmit(onNext)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-dark-text ml-1">Patient Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text w-5 h-5" />
                          <input 
                            {...register('name')}
                            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-cream focus:ring-2 focus:ring-warm-primary outline-none text-dark-text"
                            placeholder="Full Name"
                          />
                        </div>
                        {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name.message}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-dark-text ml-1">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text w-5 h-5" />
                          <input 
                            {...register('phone')}
                            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-cream focus:ring-2 focus:ring-warm-primary outline-none text-dark-text"
                            placeholder="10-digit Mobile"
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs ml-1">{errors.phone.message}</p>}
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-bold text-dark-text ml-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text w-5 h-5" />
                          <input 
                            {...register('email')}
                            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-cream focus:ring-2 focus:ring-warm-primary outline-none text-dark-text"
                            placeholder="your@email.com"
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email.message}</p>}
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-bold text-dark-text ml-1">Select Service</label>
                        <select 
                          {...register('service')}
                          className="w-full px-6 py-4 rounded-2xl bg-cream focus:ring-2 focus:ring-warm-primary outline-none text-dark-text appearance-none"
                        >
                          <option value="">Choose a Service...</option>
                          {services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                        </select>
                        {errors.service && <p className="text-red-500 text-xs ml-1">{errors.service.message}</p>}
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={!isValid}
                      className="btn-primary w-full py-5 text-xl mt-8 disabled:opacity-50"
                    >
                      Select Date & Time <ArrowRight className="ml-2 inline w-6 h-6" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-heading">Step 2: Choose Slot</h2>
                    <button onClick={() => setStep(1)} className="text-warm-primary font-bold text-sm underline">Edit Info</button>
                  </div>

                  {/* Date Selector */}
                  <div className="mb-10 overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide">
                    <div className="flex space-x-4 min-w-max">
                      {dates.map((d) => (
                        <button
                          key={d.full}
                          onClick={() => setSelectedDate(d.full)}
                          className={`flex flex-col items-center justify-center w-20 h-28 rounded-3xl transition-all border-2 ${
                            selectedDate === d.full 
                              ? 'bg-warm-primary border-warm-primary text-white shadow-lg scale-105' 
                              : 'bg-cream border-transparent text-muted-text hover:border-warm-primary/30'
                          }`}
                        >
                          <span className="text-xs font-bold uppercase mb-1 opacity-70">{d.day}</span>
                          <span className="text-2xl font-bold mb-1">{d.date}</span>
                          <span className="text-xs font-bold uppercase opacity-70">{d.month}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots Area */}
                  <div className="space-y-10">
                    {Object.entries(timeSlots).map(([period, slots]) => (
                      <div key={period}>
                        <h4 className="flex items-center text-sm font-bold text-dark-text uppercase tracking-widest mb-4 opacity-50">
                          <Clock size={16} className="mr-2" /> {period} Slots
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {slots.map((slot) => (
                            <button
                              key={slot}
                              onClick={() => setSelectedTimeSlot(slot)}
                              className={`py-4 px-2 rounded-2xl font-bold text-sm transition-all border-2 ${
                                selectedTimeSlot === slot
                                  ? 'bg-deep-teal border-deep-teal text-white shadow-md'
                                  : 'bg-white border-cream text-muted-text hover:border-warm-primary/50'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary & Final Submit */}
                  <div className="mt-12 pt-8 border-t border-cream flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                      <p className="text-sm text-muted-text">Selected Service: <span className="text-dark-text font-bold">{personalData?.service}</span></p>
                      <p className="text-sm text-muted-text">Selected Slot: <span className="text-dark-text font-bold">{selectedDate} at {selectedTimeSlot || 'Not selected'}</span></p>
                    </div>
                    <button 
                      onClick={onSubmitFinal}
                      disabled={!selectedTimeSlot}
                      className="btn-primary w-full md:w-auto px-12 disabled:opacity-50"
                    >
                      Process Booking
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-80 space-y-8">
            <div className="bg-deep-teal text-white p-8 rounded-[40px] shadow-xl">
              <h3 className="text-xl font-heading mb-6 flex items-center">
                <ShieldCheck className="mr-2 text-warm-yellow" /> Our Promise
              </h3>
              <ul className="space-y-4 text-sm opacity-80">
                <li className="flex items-start"><CheckCircle size={16} className="mr-2 mt-1 shrink-0 text-warm-yellow" /> Priority Consultation</li>
                <li className="flex items-start"><CheckCircle size={16} className="mr-2 mt-1 shrink-0 text-warm-yellow" /> Transparent Pricing</li>
                <li className="flex items-start"><CheckCircle size={16} className="mr-2 mt-1 shrink-0 text-warm-yellow" /> COVID Safety Protocols</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-lg border border-cream">
              <div className="flex items-center text-warm-primary mb-4">
                <Info size={24} className="mr-2" />
                <h4 className="font-bold">Important Info</h4>
              </div>
              <p className="text-xs text-muted-text leading-relaxed">
                Online bookings represent a preference. Our coordinator will call you to finalize the exact time based on doctor availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
