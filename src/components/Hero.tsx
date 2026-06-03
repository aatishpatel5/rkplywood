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
            className="absolute inset-0 z-40 overflow-hidden bg-charcoal"
          >
            {/* Mobile & Tablet Layout (Overlaid Premium UI) */}
            <div className="flex lg:hidden w-full h-full relative items-end pb-28 pt-16">
              <img
                src="/heroSection.webp"
                className="absolute inset-0 w-full h-full object-cover object-center"
                alt="Intro Mobile"
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent z-10" />
              
              <div className="relative z-20 w-full p-6 space-y-6">
                <div className="space-y-3">
                  <h1 className="text-5xl sm:text-6xl font-display leading-[1.05] tracking-tight text-white drop-shadow-md">
                    Elevating
                    <br />
                    Spaces
                  </h1>
                 
                </div>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-[300px] drop-shadow-sm">
                  Curating high-end architectural veneers and calibrated
                  plywood.
                </p>
              </div>
            </div>

            {/* Desktop Image & Layout */}
            <motion.img
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
              src="/herosection_large.webp"
              className="hidden lg:block absolute inset-0 w-full h-full object-cover opacity-90"
              alt="Intro Desktop"
            />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-black/30" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              className="hidden lg:flex relative z-10 h-full flex-col items-center justify-center text-center px-6"
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
          className="absolute inset-0 z-30 flex lg:flex-row bg-[#1a1a1a] lg:bg-beige overflow-hidden"
        >
          {/* Background Image Slider (Full bg on Mobile, Left Side on Desktop) */}
          <div className="absolute inset-0 lg:relative lg:w-1/2 h-full overflow-hidden bg-charcoal/10 border-r-0 lg:border-r border-charcoal/20 z-10 lg:z-auto">
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
                {/* Desktop overlay only */}
                <div className="hidden lg:block absolute inset-0 bg-charcoal/10 mix-blend-multiply" />
              </motion.div>
            </AnimatePresence>

            {/* Mobile Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent lg:hidden z-10" />

            {/* Slider Dots */}
            <div className="absolute bottom-10 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30 lg:z-20">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 transition-all duration-500 rounded-full ${idx === currentIndex ? "w-8 bg-gold" : "w-2 bg-white/50"}`}
                />
              ))}
            </div>
          </div>

          {/* Content (Overlaid on Mobile, Right Side on Desktop) */}
          <div className="relative z-20 w-full lg:w-1/2 h-full flex flex-col justify-end lg:justify-center p-6 pb-24 lg:p-10 lg:px-16 lg:py-8 lg:bg-beige pointer-events-none lg:pointer-events-auto">
            <div className="max-w-2xl space-y-6 lg:space-y-8 pointer-events-auto">
              {/* <div className="space-y-3 lg:space-y-4">
                <div className="overflow-hidden">
                  <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-display leading-[1.05] lg:leading-[1.1] tracking-tight text-white lg:text-charcoal drop-shadow-md lg:drop-shadow-none"
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
                    className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-display leading-[1.05] lg:leading-[1.1] tracking-tight text-white lg:text-charcoal drop-shadow-md lg:drop-shadow-none"
                  >
                    with <span className="italic text-gold lg:text-walnut">Premium</span>
                    <br />
                    Surfaces.
                  </motion.h1>
                </div>
              </div> */}

              {/* <div className="overflow-hidden">
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-sm sm:text-base text-white/80 lg:text-charcoal/60 leading-relaxed max-w-[300px] drop-shadow-sm lg:drop-shadow-none"
                >
                  Curating high-end architectural veneers and calibrated plywood
                  for the modern visionary.
                </motion.p>
              </div> */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="pt-6 lg:pt-4"
              >
                <MagneticButton onClick={onExplore} className="!bg-white !text-charcoal lg:!bg-charcoal lg:!text-white shadow-2xl lg:shadow-none hover:!bg-white/90 lg:hover:!bg-charcoal/90">
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
