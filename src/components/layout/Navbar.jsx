import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { services } from '../../data/services';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Preventive', path: '/services?filter=Preventive' },
        { name: 'Cosmetic', path: '/services?filter=Cosmetic' },
        { name: 'Restorative', path: '/services?filter=Restorative' },
        { name: 'Orthodontic', path: '/services?filter=Orthodontic' },
        { name: 'Pediatric', path: '/services?filter=Pediatric' },
      ]
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-warm-primary rounded-xl flex items-center justify-center transition-transform">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
              <path d="M12,2C10.34,2,9,3.34,9,5c0,1.66,1.34,3,3,3s3-1.34,3-3C15,3.34,13.66,2,12,2z M12,10c-3.31,0-6,2.69-6,6 c0,3.31,2.69,6,6,6s6-2.69,6-6C18,12.69,15.31,10,12,10z M12,20c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4s4,1.79,4,4 C16,18.21,14.21,20,12,20z" />
            </svg>
          </div>
          <span className="text-2xl font-heading text-dark-text">Dr. Smile</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={link.path}
                className={`flex items-center font-medium transition-colors hover:text-warm-primary ${location.pathname === link.path ? 'text-warm-primary' : 'text-dark-text'}`}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl py-4 border border-cream overflow-hidden"
                  >
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-6 py-2 text-sm text-dark-text hover:bg-light-teal hover:text-deep-teal transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link to="/appointment" className="btn-primary py-2 px-6 text-sm">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-dark-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-cream pt-24 px-8"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-3xl font-heading text-dark-text hover:text-warm-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="mt-4 ml-4 flex flex-col space-y-3">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="text-lg text-muted-text hover:text-deep-teal"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/appointment" className="btn-primary text-center mt-8">
                Book Appointment
              </Link>
              
              <div className="mt-auto pb-12 flex flex-col items-center">
                <p className="text-muted-text mb-4">Need help? Call us</p>
                <a href="tel:+91XXXXXXXXXX" className="flex items-center text-2xl font-bold text-warm-primary">
                  <Phone className="mr-2" /> +91 XXXXX XXXXX
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
