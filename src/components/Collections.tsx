import { motion } from 'motion/react';

const categories = [
  {
    id: 'plywood',
    name: 'Premium Plywood',
    description: 'BWP & BWR grade structurally calibrated core for ultimate durability.',
    products: [
      { id: 'p1', name: 'Marine Grade BWP', image: '/doorply.webp' },
      { id: 'p2', name: 'Calibrated Plywood', image: '/doorply.webp' },
      { id: 'p3', name: 'Fire Retardant Ply', image: '/doorply.webp' },
      { id: 'p4', name: 'Flexible Plywood', image: '/doorply.webp' },
      { id: 'p5', name: 'Shuttering Plywood', image: '/doorply.webp' },
      { id: 'p6', name: 'Blockboard', image: '/doorply.webp' },
    ]
  },
  {
    id: 'veneers',
    name: 'Luxury Veneers',
    description: 'Exotic wood grains sourced globally for architectural excellence.',
    products: [
      { id: 'v1', name: 'Smoked Walnut', image: '/doorply.webp' },
      { id: 'v2', name: 'Natural Teak', image: '/doorply.webp' },
      { id: 'v3', name: 'Dyed Ash', image: '/doorply.webp' },
      { id: 'v4', name: 'Burl Veneer', image: '/doorply.webp' },
      { id: 'v5', name: 'Metallic Veneer', image: '/doorply.webp' },
    ]
  },
  {
    id: 'laminates',
    name: 'Decorative Laminates',
    description: 'Anti-scratch, HD textures in matte, gloss, and suede finishes.',
    products: [
      { id: 'l1', name: 'High Gloss White', image: '/leminate.webp' },
      { id: 'l2', name: 'Matte Charcoal', image: '/leminate.webp' },
      { id: 'l3', name: 'Suede Finish Wood', image: '/leminate.webp' },
      { id: 'l4', name: 'Metallic Bronze', image: '/leminate.webp' },
      { id: 'l5', name: 'Marble Texture', image: '/leminate.webp' },
      { id: 'l6', name: 'Solid Colors', image: '/leminate.webp' },
    ]
  },
  {
    id: 'doors',
    name: 'Architectural Doors',
    description: 'High-density, sound-insulating core doors engineered for strength.',
    products: [
      { id: 'd1', name: 'Flush Doors', image: '/doors.webp' },
      { id: 'd2', name: 'Veneered Doors', image: '/doors.webp' },
      { id: 'd3', name: 'Laminated Doors', image: '/doors.webp' },
      { id: 'd4', name: 'Panel Doors', image: '/doors.webp' },
      { id: 'd5', name: 'Fire Rated Doors', image: '/doors.webp' },
    ]
  },
  {
    id: 'fittings',
    name: 'Interior Fittings',
    description: 'Premium hardware and architectural fittings for modern spaces.',
    products: [
      { id: 'f1', name: 'Designer Handles', image: '/hendles.webp' },
      { id: 'f2', name: 'Soft Close Hinges', image: '/hendles.webp' },
      { id: 'f3', name: 'Sliding Systems', image: '/hendles.webp' },
      { id: 'f4', name: 'Kitchen Baskets', image: '/hendles.webp' },
      { id: 'f5', name: 'Wardrobe Accessories', image: '/hendles.webp' },
    ]
  }
];

export default function Collections() {
  return (
    <section className="py-20 bg-beige" id="collections">
      <div className="px-6 md:px-12 mb-16">
        <h2 className="text-4xl md:text-6xl font-display text-charcoal">Our Collections</h2>
        <div className="w-24 h-[1px] bg-charcoal/30 mt-6" />
      </div>

      <div className="space-y-24">
        {categories.map((category) => (
          <div key={category.id} className="w-full">
            <div className="px-6 md:px-12 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h3 className="text-3xl font-display text-charcoal">{category.name}</h3>
                <p className="text-charcoal/60 mt-2 text-sm max-w-md">{category.description}</p>
              </div>
              <button className="text-xs font-semibold tracking-widest uppercase border-b border-charcoal pb-1 text-charcoal self-start md:self-end hover:text-gold hover:border-gold transition-colors">
                Explore Category
              </button>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full overflow-x-auto pb-8 hide-scrollbar pl-6 md:pl-12">
              <div className="flex gap-6 w-max pr-6 md:pr-12">
                {category.products.map((product) => (
                  <motion.div 
                    key={product.id} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="w-[280px] md:w-[320px] flex-shrink-0 group cursor-pointer"
                  >
                    <div className="w-full aspect-[4/5] overflow-hidden rounded-sm bg-charcoal/5 relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg font-medium text-charcoal group-hover:text-gold transition-colors">{product.name}</h4>
                      <p className="text-xs uppercase tracking-widest text-charcoal/50 mt-1">View Details</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
