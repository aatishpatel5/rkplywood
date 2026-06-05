import Hero from './components/Hero';
import Collections from './components/Collections';
import About from './components/About';
import SlidingRack from './components/SlidingRack';
import PeelReveal from './components/PeelReveal';
import { Phone, Instagram, MapPin, ExternalLink, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'collections' | 'about'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-beige min-h-screen text-white font-sans flex flex-col relative overflow-hidden">
      {/* Navigation Overlay */}
      <header className={`fixed top-0 left-0 w-full h-16 px-6 md:px-12 py-6 z-50 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent lg:bg-[#1a1a1a]/20 lg:backdrop-blur-sm border-b border-transparent'}`}>
        <div 
          className={`flex items-center cursor-pointer transition-all duration-300 ${(!isScrolled && currentPage !== 'home') ? 'text-charcoal' : (isScrolled ? 'text-[#F5E6D3]' : 'text-white')}`} 
          onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
        >
           <img className={`w-12 transition-all duration-300 ${(!isScrolled && currentPage !== 'home') ? 'brightness-0' : ''}`} src="/logo.webp" alt="RK Plywood Logo" />
        <div className={`text-xl md:text-2xl font-bold tracking-tighter ml-2 transition-colors duration-300 ${isScrolled ? 'text-white' : 'lg:text-black'}`}>
          RK <span className={`font-medium transition-colors duration-300 ${(!isScrolled && currentPage === 'home') ? 'text-black' : ''}`}>Plywood</span>
        </div> 
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <nav className={`hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors ${isScrolled ? 'text-[#F5E6D3]/80' : (currentPage === 'home' ? 'text-[#F5E6D3]/80 lg:text-charcoal/80' : 'text-charcoal/80')}`}>
            <a href="#collections" onClick={(e) => { e.preventDefault(); setCurrentPage('collections'); window.scrollTo(0, 0); }} className={`hover:text-gold transition-colors ${isScrolled ? '' : (currentPage === 'home' ? 'lg:hover:text-gold' : '')}`}>Collections</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0, 0); }} className={`hover:text-gold transition-colors ${isScrolled ? '' : (currentPage === 'home' ? 'lg:hover:text-gold' : '')}`}>About Us</a>
          </nav>
          <a href="https://maps.app.goo.gl/1KC2Am8iZtoaJLFU6" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 border transition-colors rounded-2xl ${isScrolled ? 'border-[#F5E6D3]/30 text-[#F5E6D3] hover:bg-[#F5E6D3]/10' : (currentPage === 'home' ? 'border-[#F5E6D3]/30 text-[#F5E6D3] hover:bg-[#F5E6D3]/10 lg:border-charcoal/30 lg:text-charcoal lg:hover:bg-charcoal/10' : 'border-charcoal/30 text-charcoal hover:bg-charcoal/10')}`}>
            <MapPin size={14} /> <span className="hidden md:inline text-[9px] uppercase tracking-widest font-semibold">Locate</span>
          </a>
          <a href="tel:+919928712712" className={`hidden md:flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 font-semibold text-[9px] uppercase tracking-widest transition-colors border-2 rounded-2xl ${isScrolled ? 'bg-white text-black hover:bg-gray-300 border-white' : (currentPage === 'home' ? 'bg-white text-black hover:bg-gray-300 border-white lg:bg-charcoal lg:text-white lg:hover:bg-charcoal/90 lg:border-charcoal' : 'bg-charcoal text-white hover:bg-charcoal/90 border-charcoal')}`}>
            <Phone size={14} /> <span className="hidden md:inline">Call Now</span>
          </a>

          {/* Hamburger Icon */}
          <button 
            className={`md:hidden flex items-center justify-center p-1 hover:text-gold transition-colors z-50 ${isScrolled ? 'text-[#F5E6D3]' : (currentPage === 'home' ? 'text-[#F5E6D3]' : 'text-charcoal')}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#1A1412] pt-24 px-6 flex flex-col gap-8 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-xl tracking-[0.1em] font-medium text-[#F5E6D3]">
              <a 
                href="#collections" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('collections'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} 
                className="hover:text-gold transition-colors border-b border-white/10 pb-4"
              >
                Collections
              </a>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('about'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} 
                className="hover:text-gold transition-colors border-b border-white/10 pb-4"
              >
                About Us
              </a>
              <a 
                href="tel:+919928712712" 
                className="flex items-center justify-center gap-3 bg-white text-black font-bold uppercase tracking-widest text-[14px] py-4 rounded-xl mt-4 hover:bg-gray-200 transition-colors"
              >
                <Phone size={20} /> 
                <span>Call Now</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      
      {currentPage === 'home' ? (
        <>
          <Hero onExplore={() => { setCurrentPage('collections'); window.scrollTo(0, 0); }} />
          <SlidingRack />
          <PeelReveal />
        </>
      ) : currentPage === 'collections' ? (
        <div className="pt-16 min-h-screen">
          <Collections />
        </div>
      ) : (
        <About />
      )}
      
      <footer className="px-6 md:px-12 py-8 bg-charcoal text-white flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.2em] font-light z-10 relative">
        <div className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} RK Plywood Industries</div>
        <div className="flex gap-6 my-4 md:my-0 items-center flex-wrap justify-center">
          <a href="https://maps.app.goo.gl/1KC2Am8iZtoaJLFU6" target="_blank" rel="noopener noreferrer" className="hover:text-gold cursor-pointer transition-colors flex items-center gap-2 border border-white/20 px-3 py-1.5 rounded-full bg-white/5">
             <MapPin size={12} /> 
             <span>Locate Store</span>
             <ExternalLink size={10} className="-ml-1 opacity-70" />
          </a>
          <a href="https://www.instagram.com/rkplywood_banswara?igsh=MWFsajNhejB3Z2FlcA==" className="hover:text-gold cursor-pointer transition-colors flex items-center gap-2">
             <Instagram size={14} /> <span className="hidden md:inline">Instagram</span>
          </a>
        </div>
        <div className="text-gold font-bold mt-4 md:mt-0">Exclusive Architectural Partner</div>
      </footer>

      {/* Floating Action Buttons */}

      {/* Sticky Right Side Call Now */}
      {/* <a 
        href="tel:+910000000000" 
        className="fixed top-1/2 right-0 -translate-y-1/2 bg-charcoal text-white hover:text-gold p-3 rounded-l-md shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:pr-5 transition-all z-50 flex flex-col items-center gap-3 border border-r-0 border-white/20 group"
      >
        <Phone size={18} className="group-hover:animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Call Now</span>
      </a> */}

      {/* Floating WhatsApp Bottom Right */}
      <a 
        href="https://wa.me/919928712712" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:-translate-y-1 transition-all z-50 flex items-center justify-center group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16" className="group-hover:animate-bounce">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-charcoal text-white text-[10px] uppercase tracking-widest px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with us
        </span>
      </a>

    </main>
  );
}
