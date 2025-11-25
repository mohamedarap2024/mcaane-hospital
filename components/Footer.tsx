import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Macaane Hospital</h3>
            <p className="text-sm leading-relaxed">
              Providing world-class healthcare with a compassionate touch. Our mission is to enhance the health and well-being of our community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-400 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Our Doctors</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Departments</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Appointments</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Departments</h3>
            <ul className="space-y-2 text-sm">
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Pediatrics</li>
              <li>Oncology</li>
              <li>Orthopedics</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin size={18} className="mt-1 flex-shrink-0 text-emerald-500" />
              <span>123 Health Ave, Wellness City, ST 12345</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone size={18} className="text-emerald-500" />
              <span>+1 (555) 012-3456</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail size={18} className="text-emerald-500" />
              <span>info@macaanehospital.com</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Macaane Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;