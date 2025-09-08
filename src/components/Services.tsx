import React from 'react';
import { Truck, Package, Clock, MapPin, Shield, CheckCircle } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const Services: React.FC = () => {
  const services = [
    {
      icon: Truck,
      title: 'Flatbed Transport',
      description: 'Reliable flatbed transportation for oversized, heavy, and irregularly shaped cargo.',
      features: ['Oversized load handling', 'Secure load fastening', 'Wide-area coverage']
    },
    {
      icon: Package,
      title: 'Step Deck Hauling',
      description: 'Versatile step deck trailers for tall or bulky freight requiring additional clearance.',
      features: ['Extra height capacity', 'Heavy equipment transport', 'Flexible loading options']
    },
    {
      icon: Clock,
      title: 'Reefer Shipping',
      description: 'Temperature-controlled reefer trailers to safely transport perishable goods.',
      features: ['Precise temperature control', 'Food & pharmaceuticals', '24/7 monitoring']
    },
    {
      icon: Shield,
      title: 'Safe & Secure Transport',
      description: 'Every load handled with strict safety standards and full cargo protection.',
      features: ['Full cargo insurance', 'Professional load securing', 'Trusted carrier network']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimatedSection animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-swamp-900 mb-6">
            Our Specialized Transportation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert trucking solutions tailored to your freight — from oversized flatbed loads 
            to temperature-sensitive reefer shipments, we’ve got you covered.
          </p>
        </ScrollAnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollAnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 0.15}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-swamp-100 rounded-xl p-4 flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-swamp-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-swamp-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-swamp-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimatedSection>
            );
          })}
        </div>

        {/* Service Areas */}
        <ScrollAnimatedSection animation="scaleIn" className="bg-white rounded-2xl shadow-lg p-8">
          <ScrollAnimatedSection animation="fadeIn" className="text-center mb-8">
            <h3 className="text-3xl font-bold text-swamp-900 mb-4">Service Coverage</h3>
            <p className="text-lg text-gray-600">
              Nationwide freight transportation with reliable flatbed, step deck, and reefer solutions.
            </p>
          </ScrollAnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <ScrollAnimatedSection animation="slideUp" delay={0.1}>
              <MapPin className="h-12 w-12 text-swamp-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-swamp-900 mb-2">Regional Routes</h4>
              <p className="text-gray-600">Dedicated lanes across key regions for faster delivery</p>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animation="slideUp" delay={0.2}>
              <Truck className="h-12 w-12 text-swamp-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-swamp-900 mb-2">Interstate Transport</h4>
              <p className="text-gray-600">Cross-country coverage with flatbed, step deck, and reefer trailers</p>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animation="slideUp" delay={0.3}>
              <Clock className="h-12 w-12 text-swamp-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-swamp-900 mb-2">Expedited Service</h4>
              <p className="text-gray-600">Fast-track shipping for time-sensitive freight</p>
            </ScrollAnimatedSection>
          </div>
        </ScrollAnimatedSection>
      </div>
    </section>
  );
};

export default Services;