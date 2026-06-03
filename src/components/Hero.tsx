import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import MagneticButton from "./MagneticButton";

const images = [
  "/doors.webp",
  "/leminate.webp",
  "/doorply.webp",
  "/hendles.webp",
];

const textVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.19, 1.0, 0.22, 1.0] },
  },
};

export default function Hero({ onExplore }: { onExplore?: () => void }) {
  const [introMode, setIntroMode] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroMode(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (introMode) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [introMode]);

  return (
    <div className="relative h-[100dvh] w-full">
      <AnimatePresence>
        {introMode ? (
          <motion.section
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-40 overflow-hidden bg-beige md:bg-charcoal flex flex-col md:block pt-16 md:pt-0"
          >
            {/* Mobile Layout (Static replica of Main Hero for 3s) */}
            <div className="flex md:hidden flex-col w-full h-full">
              <div className="w-full h-[45dvh] relative overflow-hidden border-b border-charcoal/10">
                <img
                  src="/heroSection.webp"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  alt="Intro Mobile"
                />
              </div>
              <div className="flex-1 flex items-center justify-center p-6 bg-beige relative z-10">
                <div className="max-w-2xl space-y-6 w-full">
                  <div className="space-y-4">
                    <h1 className="text-4xl font-display leading-[1.1] tracking-tight text-charcoal">
                      Elevating
                      <br />
                      Spaces
                    </h1>
                    <h1 className="text-4xl font-display leading-[1.1] tracking-tight text-charcoal">
                      with <span className="italic text-walnut">Premium</span>
                      <br />
                      Surfaces.
                    </h1>
                  </div>
                  <p className="text-sm text-charcoal/60 leading-relaxed max-w-[280px]">
                    Curating high-end architectural veneers and calibrated
                    plywood for the modern visionary.
                  </p>
                  {/* <div className="pt-4">
                  <MagneticButton>
                    Explore Collection
                  </MagneticButton>
                </div> */}
                </div>
              </div>
            </div>

            {/* Desktop Image & Layout */}
            <motion.img
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
              src="/herosection_large.webp"
              className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-90"
              alt="Intro Desktop"
            />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-black/30" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              className="hidden md:flex relative z-10 h-full flex-col items-center justify-center text-center px-6"
            >
              <h1 className="text-7xl lg:text-[100px] xl:text-[120px] text-white font-display tracking-[0.1em] uppercase font-light drop-shadow-2xl">
                RK Plywood
              </h1>
              <p className="text-white/90 mt-6 tracking-[0.3em] text-sm uppercase font-medium">
                Curators of Extraordinary Surfaces
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
                className="w-24 h-[1px] bg-gold mt-12 origin-left"
              />
            </motion.div>
          </motion.section>
        ) : null}
      </AnimatePresence>

      {!introMode && (
        <section
          key="main"
          className="absolute inset-0 z-30 flex flex-col md:flex-row pt-16 border-b border-charcoal/10 bg-beige overflow-hidden"
        >
          {/* Left Side: Auto Scroll Image Slider */}
          <div className="w-full md:w-1/2 h-[45dvh] md:h-full relative overflow-hidden bg-charcoal/10 border-b md:border-b-0 md:border-r border-charcoal/10">
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
                  className={`h-1 transition-all duration-500 rounded-full ${idx === currentIndex ? "w-8 bg-gold" : "w-2 bg-white/50"}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="relative z-10 w-full md:w-1/2 flex-1 flex items-center justify-center p-6 md:p-10 lg:px-16 lg:py-8 bg-beige">
            <div className="max-w-2xl space-y-6">
              <div className="space-y-4">
                <div className="overflow-hidden">
                  <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-[1.1] tracking-tight text-charcoal"
                  >
                    Elevating
                    <br />
                    Spaces
                  </motion.h1>
                </div>
                <div className="overflow-hidden">
                  <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-[1.1] tracking-tight text-charcoal"
                  >
                    with <span className="italic text-walnut">Premium</span>
                    <br />
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
                  Curating high-end architectural veneers and calibrated plywood
                  for the modern visionary.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="pt-4"
              >
                <MagneticButton onClick={onExplore}>
                  Explore Collection
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
