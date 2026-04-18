import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-text text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Clinic Info */}
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-warm-primary rounded-xl flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M12,2C10.34,2,9,3.34,9,5c0,1.66,1.34,3,3,3s3-1.34,3-3C15,3.34,13.66,2,12,2z M12,10c-3.31,0-6,2.69-6,6 c0,3.31,2.69,6,6,6s6-2.69,6-6C18,12.69,15.31,10,12,10z M12,20c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4s4,1.79,4,4 C16,18.21,14.21,20,12,20z" />
              </svg>
            </div>
            <span className="text-2xl font-heading text-white">Dr. Smile</span>
          </Link>
          <p className="text-white/70 mb-8 leading-relaxed">
            Providing expert dental care with a gentle touch in Palghar since 2009. We believe in healthy smiles for the whole family.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-warm-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-warm-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-warm-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-heading mb-6 text-warm-primary">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/gallery" className="text-white/70 hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</Link></li>
            <li><Link to="/blog" className="text-white/70 hover:text-white transition-colors">Latest Blog</Link></li>
            <li><Link to="/faq" className="text-white/70 hover:text-white transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-heading mb-6 text-warm-primary">Our Services</h3>
          <ul className="space-y-4">
            <li><Link to="/services/general-dentistry" className="text-white/70 hover:text-white transition-colors">General Dentistry</Link></li>
            <li><Link to="/services/dental-implants" className="text-white/70 hover:text-white transition-colors">Dental Implants</Link></li>
            <li><Link to="/services/orthodontics-braces" className="text-white/70 hover:text-white transition-colors">Braces & Aligners</Link></li>
            <li><Link to="/services/root-canal-treatment" className="text-white/70 hover:text-white transition-colors">Root Canal</Link></li>
            <li><Link to="/services/teeth-whitening" className="text-white/70 hover:text-white transition-colors">Teeth Whitening</Link></li>
            <li><Link to="/services/pediatric-dentistry" className="text-white/70 hover:text-white transition-colors">Kids Dentistry</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-heading mb-6 text-warm-primary">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-warm-primary shrink-0 mt-1" />
              <span className="text-white/70">Near Railway Station, Palghar West, Maharashtra 401404</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-warm-primary shrink-0" />
              <a href="tel:+91XXXXXXXXXX" className="text-white/70 hover:text-white">+91 XXXXX XXXXX</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-warm-primary shrink-0" />
              <a href="mailto:info@drsmilepalghar.com" className="text-white/70 hover:text-white">info@drsmilepalghar.com</a>
            </li>
            <li className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-warm-primary shrink-0 mt-1" />
              <div className="text-white/70">
                <p>Mon - Sat: 9am - 8pm</p>
                <p>Sun: 10am - 2pm</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-white/50 text-sm">
          &copy; {currentYear} Dr. Smile Dental Clinic. All rights reserved.
        </p>
        <div className="flex items-center space-x-6 text-sm text-white/50">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          <span className="flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-warm-primary fill-warm-primary" /> for Palghar
          </span>
        </div>
      </div>
    </footer>
  );
}
