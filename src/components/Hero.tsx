import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import MagneticButton from "./MagneticButton";

const images = [
  "/heroSection.webp",
  "/doors.webp",
  "/leminate.webp",
  "/doorply.webp",
  "/hendles.webp",
];

export default function Hero({ onExplore }: { onExplore?: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[100dvh] w-full">
      <section
        key="main"
        className="absolute inset-0 z-30 flex lg:flex-row bg-[#1a1a1a] lg:bg-beige overflow-hidden"
      >
        {/* Background Image Slider / Framed Image for First Slide */}
        <div className="absolute inset-0 lg:relative lg:w-1/2 h-full overflow-hidden bg-[#1a1a1a] border-r-0 lg:border-r border-charcoal/20 z-10 lg:z-auto">
          <AnimatePresence initial={false}>
            {currentIndex === 0 ? (
              <motion.div
                key="slide-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-no-repeat bg-[length:100%_auto] bg-top lg:bg-cover lg:bg-center pt-[90px] sm:pt-[100px] lg:pt-0 bg-origin-content"
                style={{ backgroundImage: `url(${images[0]})` }}
              >
                {/* Desktop overlay only */}
                <div className="hidden lg:block absolute inset-0 bg-charcoal/10 mix-blend-multiply" />
              </motion.div>
            ) : (
              <motion.div
                key={`slide-${currentIndex}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
              >
                {/* Desktop overlay only */}
                <div className="hidden lg:block absolute inset-0 bg-charcoal/10 mix-blend-multiply" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Premium Gradient Overlay for Text Visibility and Image Blending */}
          {currentIndex === 0 && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a] to-transparent lg:hidden z-10 pointer-events-none opacity-90" />
          )}

          {/* Slider Dots */}
          <div className="absolute bottom-10 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30 lg:z-20">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIndex ? "w-8 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
        </div>

        {/* Content (Overlaid on Mobile, Right Side on Desktop) */}
        <div className="relative z-20 w-full lg:w-1/2 h-full flex flex-col justify-end lg:justify-center p-6 pb-24 lg:p-10 lg:px-16 lg:py-8 lg:bg-beige pointer-events-none lg:pointer-events-auto">
          <div className="max-w-2xl w-full flex flex-col gap-6 lg:gap-8 pointer-events-auto">
            
            {/* Dynamic Typography based on Slide */}
            <AnimatePresence mode="wait">
              {currentIndex === 0 ? (
                <motion.div
                  key="slide0"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col">
                    <span className="text-gold lg:text-walnut text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-3 drop-shadow-md">
                      Welcome to RK Plywood
                    </span>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight text-white lg:text-charcoal drop-shadow-xl lg:drop-shadow-none uppercase">
                      Experience<br />
                      <span className="italic text-gold lg:text-walnut text-4xl sm:text-5xl lg:text-6xl lowercase font-light">the</span> Masterpiece.
                    </h1>
                  </div>
                  <p className="text-sm sm:text-base text-white/70 lg:text-charcoal/70 tracking-wide leading-relaxed max-w-[340px] drop-shadow-md lg:drop-shadow-none border-l-[3px] border-gold pl-4 mt-2">
                    Step inside our curated showroom. Where exceptional craftsmanship meets architectural elegance.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="otherSlides"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="hidden lg:flex flex-col gap-3 sm:gap-4"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight text-white lg:text-charcoal drop-shadow-xl lg:drop-shadow-none">
                    Elevating<br />
                    Spaces<br />
                    <span className="italic text-gold lg:text-walnut text-4xl sm:text-5xl lg:text-6xl">with Premium Surfaces.</span>
                  </h1>
                  <p className="text-sm sm:text-base text-white/80 lg:text-charcoal/70 tracking-wide leading-relaxed max-w-[340px] drop-shadow-md lg:drop-shadow-none border-l-[3px] border-gold pl-4 mt-2">
                    Curating high-end architectural veneers and calibrated plywood for the modern visionary.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="pt-4 lg:pt-2"
            >
              <MagneticButton 
                onClick={onExplore} 
                className="group flex items-center justify-center gap-3 w-max lg:w-auto px-8 lg:px-7 !py-3.5 lg:!py-3 !bg-white lg:!bg-charcoal !text-[#1a1a1a] lg:!text-white !border-none !rounded-full uppercase tracking-[0.15em] lg:tracking-normal lg:normal-case text-xs lg:text-base font-bold lg:font-medium shadow-[0_15px_35px_rgba(0,0,0,0.4)] lg:shadow-none hover:scale-[1.02] lg:hover:!bg-charcoal/90 active:scale-95 transition-all duration-300"
              >
                <span>Explore Collection</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </MagneticButton>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
