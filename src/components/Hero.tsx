import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import MagneticButton from "./MagneticButton";

const images = [
  "/Gemini_Generated_Image_2npidh2npidh2npi.webp",
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
    <div className="relative h-[100vh] w-full">
      <section
        key="main"
        className="absolute inset-0 z-30 flex lg:flex-row bg-[#1a1a1a] lg:bg-beige overflow-hidden"
      >
        {/* Background Image Slider (Top 75% on Mobile, Left Half on Desktop) */}
        <div className="absolute top-20 w-full h-[55%] lg:relative lg:w-1/2 lg:h-full overflow-hidden bg-[#1a1a1a] border-b-0 lg:border-r border-charcoal/20 z-10 lg:z-auto">
          <AnimatePresence initial={false}>
            {currentIndex === 0 ? (
              <motion.div
                key="slide-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center lg:bg-cover lg:bg-center"
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
                className="absolute inset-0 w-full h-full bg-cover bg-center lg:bg-cover lg:bg-center"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
              >
                {/* Desktop overlay only */}
                <div className="hidden lg:block absolute inset-0 bg-charcoal/10 mix-blend-multiply" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Dark Gradient Overlay for Seamless Blending */}
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent lg:hidden z-10 pointer-events-none" />

          {/* Slider Dots */}
          <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30 lg:z-20">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIndex ? "w-8 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
        </div>

        {/* Content (Overlaid at bottom on Mobile, Right Side on Desktop) */}
        <div className="absolute inset-x-0 bottom-0 z-20 w-full h-full lg:relative lg:w-1/2 flex flex-col justify-end lg:justify-center p-6 pb-8 sm:p-8 sm:pb-24 lg:p-10 lg:px-16 lg:py-8 bg-transparent lg:bg-beige pointer-events-none lg:pointer-events-auto">
          <div className="max-w-2xl w-full flex flex-col gap-4 sm:gap-6 lg:gap-8 pointer-events-auto">
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
                    <span className="text-gold lg:text-walnut text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3">
                      Welcome to RK Plywood
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight text-white lg:text-charcoal uppercase">
                      <span className="hidden sm:inline">
                        Crafting
                        <br />
                        <span className="italic text-gold lg:text-walnut text-3xl sm:text-4xl md:text-5xl lg:text-6xl lowercase font-light">
                          Premium
                        </span>{" "}
                      </span>
                      Plywood<span className="hidden sm:inline">.</span>
                    </h1>
                  </div>
                  <p className="text-sm md:text-base text-white/90 lg:text-charcoal/70 tracking-wide leading-relaxed max-w-[280px] sm:max-w-[340px] border-l-[2px] sm:border-l-[3px] border-gold pl-3 sm:pl-4 mt-2 sm:mt-4">
                    <span className="sm:hidden font-light">
                      Strong, durable & elegant interiors.
                    </span>
                    <span className="hidden sm:inline">
                      Discover top-grade plywood, blockboards, and veneers built
                      for lasting strength and unmatched elegance.
                    </span>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="otherSlides"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col gap-3 sm:gap-4"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight text-white lg:text-charcoal uppercase sm:normal-case">
                    <span className="hidden sm:inline">
                      Complete
                      <br />
                    </span>
                    Interiors
                    <span className="hidden sm:inline">
                      <br />
                      <span className="italic text-gold lg:text-walnut text-3xl sm:text-4xl md:text-5xl lg:text-6xl normal-case">
                        with Modern Hardware.
                      </span>
                    </span>
                  </h1>
                  <p className="text-sm md:text-base text-white/90 lg:text-charcoal/70 tracking-wide leading-relaxed max-w-[280px] sm:max-w-[340px] border-l-[2px] sm:border-l-[3px] border-gold pl-3 sm:pl-4 mt-2 sm:mt-4">
                    <span className="sm:hidden font-light">
                      Doors, laminates & designer handles.
                    </span>
                    <span className="hidden sm:inline">
                      From premium flush doors and stunning laminates to
                      architectural handles, find everything you need under one
                      roof.
                    </span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="pt-4 lg:pt-2 flex w-full"
            >
              <MagneticButton
                onClick={onExplore}
                className="w-max !bg-white !text-charcoal !py-3 !px-6 sm:!py-3.5 sm:!px-8 !rounded-full shadow-md hover:shadow-xl hover:!text-gold"
              >
                Explore Collection
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
