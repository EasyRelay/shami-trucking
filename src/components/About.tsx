import React from 'react';
import { Truck, Users, MapPin, Phone } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollAnimatedSection animation="slideRight">
            <h2 className="text-4xl md:text-5xl font-bold text-swamp-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At SHAMI TRUCKING LLC, we specialize in providing reliable freight 
              solutions across the United States. With a versatile fleet and 
              strict DOT and MC compliance, we make sure every load is delivered 
              safely and on time.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our services include <strong>Flatbed</strong> for oversized and heavy 
              equipment, <strong>Step Deck</strong> for taller freight that requires 
              lower deck clearance, and <strong>Reefer</strong> for temperature-sensitive 
              goods such as food and pharmaceuticals.
            </p>

            {/* Company Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-swamp-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-swamp-900">Location</h4>
                  <p className="text-gray-600">Cape Coral, FL 33993</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Truck className="h-6 w-6 text-swamp-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-swamp-900">Service Area</h4>
                  <p className="text-gray-600">Nationwide Coverage</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:shamitrucking@yahoo.com"
                className="bg-swamp-800 hover:bg-swamp-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Get Quote</span>
              </a>
              <a
                href="#contact"
                className="border-2 border-swamp-800 text-swamp-800 hover:bg-swamp-800 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Users className="h-5 w-5" />
                <span>Learn More</span>
              </a>
            </div>
          </ScrollAnimatedSection>

          {/* Image */}
          <ScrollAnimatedSection animation="slideLeft" delay={0.2}>
            <div className="relative">
              <img
                src="/image/refer-image.png"
                alt="Freight truck on highway"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-swamp-900/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-swamp-100 p-3 rounded-lg">
                    <Truck className="h-8 w-8 text-swamp-700" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-swamp-900">MC: 780535</div>
                    <div className="text-sm text-gray-600">DOT: 2252265</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;