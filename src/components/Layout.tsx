import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-white font-sans">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-stone-950 border-b-2 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Spacer for centering the title */}
            <div className="w-10 md:w-32"></div>
            
            {/* Center Title */}
            <Link to="/" className="text-xl md:text-2xl font-sans font-medium tracking-wide text-white hover:text-gold-500 transition-colors">
              Serving Redding, CA
            </Link>
            
            {/* Right Menu Button */}
            <div className="flex items-center justify-end w-10 md:w-32">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gold-500 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-stone-950/95 backdrop-blur-md pt-24 px-6 flex flex-col items-center"
          >
            <div className="flex flex-col space-y-8 text-center w-full max-w-md">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={`text-3xl font-display tracking-wider uppercase transition-colors ${
                    location.pathname === item.path ? 'text-neon-500' : 'text-white hover:text-gold-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-grow relative flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 border-t-2 border-gold-500 py-4 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <p className="text-white font-display text-xl tracking-widest">LIC. 1007154</p>
        </div>
      </footer>
    </div>
  );
}
