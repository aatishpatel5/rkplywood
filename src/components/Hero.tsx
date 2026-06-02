import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import MagneticButton from './MagneticButton';

const images = [
  "/public/heroSection.png", 
  "https://images.unsplash.com/photo-1620645607598-a6caab94a4ae?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1618220179428-22790b46a014?auto=format&fit=crop&w=1200&q=80"
]; 

const textVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 1.2, ease: [0.19, 1.0, 0.22, 1.0] } 
  }
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row pt-[96px] border-b border-charcoal/10 bg-beige overflow-hidden">
      {/* Left Side: Auto Scroll Image Slider */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden bg-charcoal/10 border-b md:border-b-0 md:border-r border-charcoal/10">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          >
            <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply" />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1 transition-all duration-500 rounded-full ${idx === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-24 bg-beige">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <div className="overflow-hidden">
              <motion.h1 
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-6xl lg:text-[90px] xl:text-[110px] font-display leading-[0.9] tracking-tight text-charcoal"
              >
                Elevating<br/>Spaces
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-6xl lg:text-[90px] xl:text-[110px] font-display leading-[0.9] tracking-tight text-charcoal"
              >
                with <span className="italic text-walnut">Premium</span><br/>
                Surfaces.
              </motion.h1>
            </div>
          </div>
          
          <div className="overflow-hidden">
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-sm md:text-base text-charcoal/60 leading-relaxed max-w-[280px]"
            >
              Curating high-end architectural veneers and calibrated plywood for the modern visionary.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-4"
          >
            <MagneticButton>
              Explore Collection
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

