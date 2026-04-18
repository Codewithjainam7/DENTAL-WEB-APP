import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { testimonials } from '../../data/testimonials';

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <section className="section-padding bg-cream overflow-hidden">
      <SectionHeading 
        badge="Patient Stories"
        title="What Our Patients Say"
        subtitle="Real experiences from families in Palghar who trusted us with their smiles."
      />

      <div className="relative max-w-4xl mx-auto px-4 h-[400px] md:h-[350px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 flex flex-col items-center text-center bg-white organic-card justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-light-orange flex items-center justify-center text-2xl font-bold text-warm-primary mb-6">
              {testimonials[currentIndex].avatar}
            </div>
            
            <div className="flex space-x-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warm-yellow text-warm-yellow" />
              ))}
            </div>

            <Quote className="w-10 h-10 text-light-teal mb-4" />
            
            <p className="text-xl md:text-2xl font-heading text-dark-text mb-6 italic px-4">
              "{testimonials[currentIndex].review}"
            </p>

            <div>
              <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-muted-text">{testimonials[currentIndex].location} • {testimonials[currentIndex].service}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-dark-text hover:bg-warm-primary hover:text-white transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-dark-text hover:bg-warm-primary hover:text-white transition-all z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-warm-primary w-8' : 'bg-warm-primary/20'}`}
          />
        ))}
      </div>
    </section>
  );
}
