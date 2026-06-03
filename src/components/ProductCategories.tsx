import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Premium Plywood',
    description: 'BWP & BWR grade structurally calibrated core for ultimate durability.',
    image: '/doorply.webp',
    number: '01'
  },
  {
    title: 'Natural Veneers',
    description: 'Exotic wood grains sourced globally for architectural excellence.',
    image: '/doors.webp',
    number: '02'
  },
  {
    title: 'Decorative Laminates',
    description: 'Anti-scratch, HD textures in matte, gloss, and suede finishes.',
    image: '/hendles.webp',
    number: '03'
  },
  {
    title: 'Flush Doors',
    description: 'High-density, sound-insulating core doors engineered for strength.',
    image: '/leminate.webp',
    number: '04'
  }
];

export default function ProductCategories() {
  return (
    <section className="bg-beige text-charcoal py-24 border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-charcoal/40 mb-2">
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-display leading-[1.1] text-charcoal">
              Product <span className="italic text-walnut">Categories</span>
            </h3>
          </div>
          <p className="max-w-xs text-xs text-charcoal/60 leading-relaxed">
            Every material in our catalog is rigorously selected to meet standard international benchmarks of quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 border border-charcoal/10">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4 text-white text-[10px] uppercase font-mono tracking-widest drop-shadow-md z-10">
                  // {cat.number}
                </div>
              </div>
              <h4 className="text-xl font-display mb-2 flex items-center justify-between group-hover:text-gold transition-colors">
                {cat.title}
                <ArrowRight size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
              </h4>
              <p className="text-xs text-charcoal/60 leading-relaxed max-w-[90%]">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
