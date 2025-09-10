import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, MapPin, Shield } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="rounded-lg transition-colors">
                <img src="/image/image.png" alt="SHAMI TRUCKING" className="h-20 w-36" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-swamp-900">SHAMI TRUCKING</h1>
                <p className="text-sm text-swamp-600">MC: 780535 | DOT: 2252265</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors duration-300 hover:text-swamp-700 ${
                  isActive('/') ? 'text-swamp-800' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/privacy-policy" 
                className={`font-medium transition-colors duration-300 hover:text-swamp-700 ${
                  isActive('/privacy-policy') ? 'text-swamp-800' : 'text-gray-700'
                }`}
              >
                Privacy
              </Link>
              <Link 
                to="/cookie-policy" 
                className={`font-medium transition-colors duration-300 hover:text-swamp-700 ${
                  isActive('/cookie-policy') ? 'text-swamp-800' : 'text-gray-700'
                }`}
              >
                Cookies
              </Link>
              <Link 
                to="/terms-of-service" 
                className={`font-medium transition-colors duration-300 hover:text-swamp-700 ${
                  isActive('/terms-of-service') ? 'text-swamp-800' : 'text-gray-700'
                }`}
              >
                Terms
              </Link>
            </nav>

            {/* Contact Button */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+1234567890"
                className="bg-swamp-800 text-white px-6 py-2 rounded-lg hover:bg-swamp-700 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                Request Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 animate-slide-up">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`font-medium transition-colors duration-300 hover:text-swamp-700 ${
                    isActive('/') ? 'text-swamp-800' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/privacy-policy" 
                  className={`font-medium transition-colors duration-300 hover:text-swamp-700 ${
                    isActive('/privacy-policy') ? 'text-swamp-800' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/cookie-policy" 
                  className={`font-medium transition-colors duration-300 hover:text-swamp-700 ${
                    isActive('/cookie-policy') ? 'text-swamp-800' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cookie Policy
                </Link>
                <Link 
                  to="/terms-of-service" 
                  className={`font-medium transition-colors duration-300 hover:text-swamp-700 ${
                    isActive('/terms-of-service') ? 'text-swamp-800' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms of Service
                </Link>
                <a
                  href="tel:+1234567890"
                  className="bg-swamp-800 text-white px-6 py-2 rounded-lg hover:bg-swamp-700 transition-colors duration-300 font-medium text-center"
                >
                  Request Quote
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="rounded-lg">
                  <img src="/image/image.png" alt="SHAMI TRUCKING" className="h-16 w-24" />
                </div>
                <h3 className="text-xl font-bold">SHAMI TRUCKING <br /> LLC</h3>
              </div>
              <p className="text-gray-300">
                Professional freight transportation services with a commitment to reliability, safety, and compliance.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-swamp-400" />
                  <a href="mailto:shamitrucking@yahoo.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                    shamitrucking@yahoo.com
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-swamp-400 mt-1" />
                  <address className="text-gray-300 not-italic">
                    1924 NW 11 Court<br />
                    Cape Coral, FL 33993
                  </address>
                </div>
              </div>
            </div>

            {/* Compliance */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Compliance & Licensing</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-swamp-400" />
                  <span className="text-gray-300">MC: 780535</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-swamp-400" />
                  <span className="text-gray-300">DOT: 2252265</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-swamp-400" />
                  <span className="text-gray-300">EIN: 45-3641552</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Legal</h4>
              <div className="space-y-2">
                <Link to="/privacy-policy" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/cookie-policy" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link to="/terms-of-service" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 SHAMI TRUCKING LLC. All rights reserved. | MC: 780535 | DOT: 2252265
            </p>
            <p className='text-gray-400'>
              Created by <Link to="" className='hover:text-blue-500'>EasyIT</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;