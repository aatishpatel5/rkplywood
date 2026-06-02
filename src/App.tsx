import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import SlidingRack from './components/SlidingRack';
import PeelReveal from './components/PeelReveal';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

export default function App() {
  return (
    <main className="bg-beige min-h-screen text-white font-sans flex flex-col relative overflow-hidden">
      {/* Navigation Overlay */}
      <header className="fixed top-0 left-0 w-full px-6 md:px-12 py-6 z-50 flex justify-between items-center border-b border-charcoal/10 bg-transparent backdrop-blur-md text-charcoal">
        <div className="flex items-center">
           <img className="w-16" src="/logo.png" alt="" />
        <div className="text-xl md:text-2xl font-bold tracking-tighter">
          RK <span className="font-light text-walnut">PLYWOOD</span>
        </div>
        </div>
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
            <a href="#" className="hover:text-gold transition-colors">Collections</a>
            <a href="#" className="hover:text-gold transition-colors">Veneers</a>
            <a href="#" className="hover:text-gold transition-colors">Laminates</a>
            <a href="#" className="hover:text-gold transition-colors">The Studio</a>
          </nav>
          <a href="tel:+910000000000" className="flex items-center gap-2 px-4 py-2 border border-gold text-gold text-[9px] uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-colors">
            <Phone size={12} /> <span className="hidden md:inline">Call Now</span>
          </a>
        </div>
      </header>
      
      <Hero />
      <ProductCategories />
      <SlidingRack />
      <PeelReveal />
      
      <footer className="px-6 md:px-12 py-8 bg-charcoal text-white flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.2em] font-light z-10 relative">
        <div className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} RK Plywood Industries</div>
        <div className="flex gap-8 my-4 md:my-0 items-center">
          <a href="#" className="hover:text-gold cursor-pointer transition-colors flex items-center gap-2">
             <Instagram size={14} /> <span className="hidden md:inline">Instagram</span>
          </a>
          <span className="hover:text-gold cursor-pointer transition-colors">Behance</span>
          <span className="hover:text-gold cursor-pointer transition-colors">LinkedIn</span>
        </div>
        <div className="text-gold font-bold mt-4 md:mt-0">Exclusive Architectural Partner</div>
      </footer>

      {/* Floating Action Buttons */}

      {/* Sticky Right Side Call Now */}
      <a 
        href="tel:+910000000000" 
        className="fixed top-1/2 right-0 -translate-y-1/2 bg-charcoal text-white hover:text-gold p-3 rounded-l-md shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:pr-5 transition-all z-50 flex flex-col items-center gap-3 border border-r-0 border-white/20 group"
      >
        <Phone size={18} className="group-hover:animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Call Now</span>
      </a>

      {/* Floating WhatsApp Bottom Right */}
      <a 
        href="https://wa.me/910000000000" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:-translate-y-1 transition-all z-50 flex items-center justify-center group"
      >
        <MessageCircle size={28} className="group-hover:animate-bounce" />
        <span className="absolute right-full mr-4 bg-charcoal text-white text-[10px] uppercase tracking-widest px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with us
        </span>
      </a>

    </main>
  );
}
