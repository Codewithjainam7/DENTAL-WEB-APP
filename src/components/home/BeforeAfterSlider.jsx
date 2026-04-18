import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (event) => {
    if (!isResizing) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = event.type === 'mousemove' ? event.pageX : event.touches[0].pageX;
    const relativeX = x - containerRect.left;
    const position = (relativeX / containerRect.width) * 100;
    
    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  useEffect(() => {
    const handleUp = () => setIsResizing(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <section className="section-padding bg-light-orange/20">
      <SectionHeading 
        badge="Transformations"
        title="Smile Gallery"
        subtitle="See the amazing results we've achieved for our patients in Palghar."
      />

      <div className="max-w-4xl mx-auto">
        <div 
          ref={containerRef}
          className="relative aspect-video rounded-[40px] overflow-hidden cursor-col-resize select-none border-8 border-white shadow-2xl"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseDown={() => setIsResizing(true)}
          onTouchStart={() => setIsResizing(true)}
        >
          {/* After Image */}
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200" 
            alt="After Treatment"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200" 
              alt="Before Treatment"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-warm-primary rounded-full flex items-center justify-center shadow-xl border-4 border-white">
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-white rounded-full" />
                <div className="w-1 h-4 bg-white rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
            BEFORE
          </div>
          <div className="absolute top-4 right-4 bg-warm-primary/80 text-white px-4 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
            AFTER
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-muted-text italic">
            Drag the slider to see the transformation of a Full Mouth Rehabilitation case.
          </p>
        </div>
      </div>
    </section>
  );
}
