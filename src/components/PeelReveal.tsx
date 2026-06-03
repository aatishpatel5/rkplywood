import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Layers, Droplet } from 'lucide-react';

export default function PeelReveal() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 bg-[#EAE7E2] border-t border-charcoal/10 p-10 flex flex-col md:flex-row gap-12 overflow-hidden items-center justify-center">
      <div className="w-full md:w-1/3 flex flex-col justify-center max-w-sm">
        <div className="text-xs uppercase tracking-widest font-bold mb-2 text-charcoal">Peel & Reveal</div>
        <p className="text-xs text-charcoal/60 leading-relaxed max-w-sm mb-12">
          Observe the precision-engineered layers of our 100% Calibrated Core. Beauty on the Surface. Absolute Strength Within.
        </p>

        <div className="space-y-6">
          <motion.div 
            className="flex gap-4 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="p-2 border border-charcoal/20 text-charcoal shrink-0">
              <Layers size={16} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal mb-1">100% Calibrated Core</h4>
              <p className="text-xs text-charcoal/60 leading-relaxed max-w-xs">Precision pressed under extreme pressure ensuring zero undulation across the entire substrate.</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex gap-4 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="p-2 border border-charcoal/20 text-charcoal shrink-0">
              <ShieldCheck size={16} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal mb-1">Borer & Termite Proof</h4>
              <p className="text-xs text-charcoal/60 leading-relaxed max-w-xs">Chemically treated core layers that guarantee lifetime immunity against biological degradation.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center p-12 lg:ml-24">
        <div 
          className="relative w-64 h-80 md:w-80 md:h-96 transform -rotate-12 group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(!isHovered)}
        >
          {/* Back Layer (Core) */}
          <div className="absolute inset-0 bg-[#BCAAA4] shadow-md z-10 rounded-sm border border-charcoal/10 flex items-center justify-center">
            <span className="text-[10px] text-charcoal/50 font-bold uppercase tracking-widest">100% Core</span>
          </div>

          {/* Middle Layer */}
          <motion.div 
            className="absolute inset-0 bg-[#D7CCC8] shadow-lg z-20 rounded-sm border border-charcoal/10 flex items-center justify-center origin-bottom-left"
            animate={{
              x: isHovered ? 24 : 0,
              y: isHovered ? -8 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] text-charcoal/50 font-bold uppercase tracking-widest">Cross-Band Layer</span>
          </motion.div>

          {/* Front Layer (Veneer) */}
          <motion.div 
            className="absolute inset-0 bg-walnut shadow-xl z-30 rounded-sm border border-gold/30 flex items-center justify-center origin-bottom-left overflow-hidden"
            animate={{
              x: isHovered ? 48 : 0,
              y: isHovered ? -16 : 0,
              clipPath: isHovered 
                ? 'polygon(100% 0, 100% 100%, 100% 100%, 100% 0)' 
                : 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            }}
            transition={{ 
              duration: 0.9, 
              ease: [0.32, 1, 0.4, 1] 
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ backgroundImage: 'url(/doorply.webp)' }}
            />
            <span className="relative z-10 text-[10px] text-white uppercase tracking-widest mix-blend-difference drop-shadow-xl">Premium Veneer</span>
          </motion.div>

          <div className="absolute -right-24 md:-right-32 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-gold"></div>
              <span className="text-[9px] font-bold uppercase tracking-tighter text-charcoal">Zero Gaps</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-gold"></div>
              <span className="text-[9px] font-bold uppercase tracking-tighter text-charcoal">Calibrated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
