import React from 'react';
import { Shield, Award, CheckCircle, Clock } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const Trust: React.FC = () => {
  const trustElements = [
    {
      icon: Shield,
      title: 'Fully Licensed & Insured',
      description: 'DOT and MC compliant with comprehensive insurance coverage'
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'Committed to safety standards and regulatory compliance'
    },
    {
      icon: CheckCircle,
      title: 'Reliable Service',
      description: 'On-time delivery with real-time tracking and updates'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and support'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimatedSection animation="fadeIn" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-swamp-900 mb-4">
            Why Choose SHAMI TRUCKING
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We build trust through transparency, compliance, and exceptional service delivery
          </p>
        </ScrollAnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustElements.map((element, index) => {
            const IconComponent = element.icon;
            return (
              <ScrollAnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 0.1}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-swamp-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="h-10 w-10 text-swamp-700" />
                </div>
                <h3 className="text-xl font-semibold text-swamp-900 mb-2">
                  {element.title}
                </h3>
                <p className="text-gray-600">
                  {element.description}
                </p>
              </ScrollAnimatedSection>
            );
          })}
        </div>

        {/* Compliance Badges */}
        <ScrollAnimatedSection animation="scaleIn" delay={0.2} className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-swamp-700" />
              <span className="font-semibold text-swamp-900">MC: 780535</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-swamp-700" />
              <span className="font-semibold text-swamp-900">DOT: 2252265</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-swamp-700" />
              <span className="font-semibold text-swamp-900">Fully Compliant</span>
            </div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </section>
  );
};

export default Trust;