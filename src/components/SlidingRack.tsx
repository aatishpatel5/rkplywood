import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const products = [
  { id: 1, name: 'Royal American Walnut', spec: 'BWP Marine Grade', tag: 'Termite Proof', img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80', color: '#3D2B1F' },
  { id: 2, name: 'Charcoal Matte Laminate', spec: 'Anti-Fingerprint', tag: 'Architectural', img: 'https://images.unsplash.com/photo-1598928302484-48f8cbe22aef?auto=format&fit=crop&w=800&q=80', color: '#1C1C1C' },
  { id: 3, name: 'BWP Marine Door', spec: 'Boiling Water Proof', tag: 'Core', img: 'https://images.unsplash.com/photo-1618220179428-22790b46a014?auto=format&fit=crop&w=800&q=80', color: '#8D6E63' },
  { id: 4, name: 'Smoked Walnut Veneer', spec: 'FSC Certified', tag: 'Sustainable', img: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80', color: '#5D4037' },
  { id: 5, name: 'Acoustic Panel', spec: 'Sound Absorption 0.8 NRC', tag: 'Specialty', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', color: '#2D1B0F' },
];

export default function SlidingRack() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="bg-beige text-charcoal px-4 md:px-12 py-24 overflow-hidden border-b border-charcoal/10 flex flex-col justify-center">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-charcoal/40 mb-2">
            Sliding Display Rack // 01
          </h2>
          <div className="flex gap-2">
            <div className="w-8 h-[1px] bg-charcoal mt-2"></div>
            <span className="text-[10px] font-mono">RK-2024-VNR</span>
          </div>
        </div>
        <p className="max-w-sm text-charcoal/60 font-light text-sm mt-6 md:mt-0 leading-relaxed">
          Slide through our extensive rack of physical material samples. Every grain tells a story of unmatched craftsmanship.
        </p>
      </div>

      <div className="w-full flex h-[500px] md:h-[600px] gap-4 overflow-x-auto snap-x hide-scrollbar">
        {products.map((product, i) => {
          const isHovered = hoveredIndex === i;
          
          return (
            <motion.div
              layout
              key={product.id}
              className="relative h-full transition-all cursor-pointer snap-center shrink-0 flex-none group bg-walnut border border-white/10 shadow-2xl overflow-hidden"
              style={{ backgroundColor: product.color }}
              onMouseEnter={() => setHoveredIndex(i)}
              onClick={() => setHoveredIndex(i)}
              animate={{
                width: isHovered ? (isMobile ? '85vw' : '60vw') : (isMobile ? '15vw' : '4rem'),
                opacity: isHovered ? 1 : 0.4
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center origin-center opacity-40 mix-blend-overlay"
                style={{ backgroundImage: `url(${product.img})` }}
              />
              
              <AnimatePresence>
                {isHovered && (
                  <motion.div 
                    className="absolute bottom-8 left-8 text-white pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="text-[10px] uppercase tracking-widest mb-1 opacity-60">
                      Selected Material
                    </div>
                    <h3 className="text-2xl md:text-5xl font-display italic mb-4 truncate text-white">
                      {product.name}
                    </h3>
                    
                    <div className="mt-4 flex gap-4">
                      <span className="px-2 py-1 border border-white/30 text-[9px] uppercase whitespace-nowrap">
                        {product.spec}
                      </span>
                      <span className="px-2 py-1 border border-white/30 text-[9px] uppercase whitespace-nowrap">
                        {product.tag}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <AnimatePresence>
                {!isHovered && (
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none pb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-white text-[10px] font-sans tracking-[0.2em] uppercase -rotate-90 whitespace-nowrap opacity-100 group-hover:text-gold transition-colors">
                      View Material
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
