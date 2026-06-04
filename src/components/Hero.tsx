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
        <div className="relative z-20 w-full lg:w-1/2 h-full flex flex-col justify-end lg:justify-center p-5 sm:p-8 pb-20 sm:pb-24 lg:p-10 lg:px-16 lg:py-8 lg:bg-beige pointer-events-none lg:pointer-events-auto">
          <div className="max-w-2xl w-full flex flex-col gap-5 sm:gap-6 lg:gap-8 pointer-events-auto">
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
                    <span className="hidden sm:block text-gold lg:text-walnut text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2 sm:mb-3 drop-shadow-sm">
                      Welcome to RK Plywood
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight text-white lg:text-charcoal drop-shadow-md lg:drop-shadow-none uppercase">
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
                  <p className="text-sm md:text-base text-white/80 lg:text-charcoal/70 tracking-wide leading-relaxed max-w-[280px] sm:max-w-[340px] drop-shadow-sm lg:drop-shadow-none border-l-[2px] sm:border-l-[3px] border-gold pl-3 sm:pl-4 mt-2 sm:mt-4">
                    <span className="sm:hidden">
                      Strong, durable & elegant.
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
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight text-white lg:text-charcoal drop-shadow-xl lg:drop-shadow-none uppercase sm:normal-case">
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
                  <p className="text-sm md:text-base text-white/80 lg:text-charcoal/70 tracking-wide leading-relaxed max-w-[280px] sm:max-w-[340px] drop-shadow-md lg:drop-shadow-none border-l-[2px] sm:border-l-[3px] border-gold pl-3 sm:pl-4 mt-2 sm:mt-4">
                    <span className="sm:hidden">
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
              className="pt-4 lg:pt-2"
            >
              <MagneticButton
                onClick={onExplore}
                className="group flex items-center gap-2 w-max !bg-transparent !p-0 !border-none !shadow-none text-white lg:text-charcoal uppercase tracking-[0.15em] text-[11px] sm:text-xs md:text-sm font-semibold hover:!text-gold lg:hover:!text-gold transition-colors duration-300"
              >
                <span className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-gold group-hover:after:w-full after:transition-all after:duration-300">
                  Explore Collection
                </span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
