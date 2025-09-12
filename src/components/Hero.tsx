import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-swamp-900 to-swamp-800 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url("/image/shami-truck-hero-bg.webp")'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            RELIABLE FREIGHT
            <span className="block text-swamp-300">TRANSPORTATION</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Professional trucking services with a commitment to safety, compliance, and on-time delivery. 
            Your freight, our priority.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a
              href="#contact"
              className="bg-swamp-600 hover:bg-swamp-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <a
              href="mailto:shamitrucking@yahoo.com"
              className="border-2 border-white text-white hover:bg-white hover:text-swamp-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Us</span>
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-swamp-300">MC: 780535</div>
              <div className="text-gray-300">Motor Carrier</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-swamp-300">DOT: 2252265</div>
              <div className="text-gray-300">Department of Transportation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-swamp-300">24/7</div>
              <div className="text-gray-300">Professional Service</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;