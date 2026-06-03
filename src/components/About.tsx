import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="min-h-screen bg-beige flex flex-col pt-16">
      {/* Elegant Editorial Header */}
      <div className="w-full px-6 md:px-12 lg:px-24 pt-24 pb-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-charcoal text-center drop-shadow-sm tracking-tight mb-12">
          A Legacy of <span className="italic text-gold">Excellence.</span>
        </h1>
        
        {/* Integrated Image (No Card Styling) */}
        <div className="w-full flex justify-center mt-4">
          <img 
            src="/heroSection.webp" 
            alt="RK Plywood Craftsmanship" 
            className="w-full max-w-full md:max-w-5xl lg:max-w-6xl h-auto max-h-[70vh] object-contain block opacity-95"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-display text-charcoal leading-[1.2]">
            Curators of <br />
            Extraordinary Surfaces.
          </h2>
          <div className="w-16 h-[1px] bg-gold" />
        </motion.div>

        {/* Right Copywriting */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6 text-charcoal/70"
        >
          <p className="text-sm md:text-base leading-relaxed">
            For decades, RK Plywood has stood at the intersection of nature's raw beauty and modern architectural precision. We are not merely suppliers of wood; we are artisans dedicated to sourcing the most exquisite timber and veneers from across the globe.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Our commitment goes beyond aesthetics. Every sheet of plywood and laminate is engineered for unparalleled durability, structural integrity, and sustainable excellence. From marine-grade substrates to ultra-luxury decorative veneers, our collections empower architects and interior designers to build spaces that transcend time.
          </p>
          
          <div className="pt-8 grid grid-cols-2 gap-8 border-t border-charcoal/10">
            <div>
              <div className="text-3xl font-display text-charcoal mb-2">20+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Years of Trust</div>
            </div>
            <div>
              <div className="text-3xl font-display text-charcoal mb-2">100%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Calibrated Precision</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
