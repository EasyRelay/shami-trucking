import React, { useEffect } from 'react';
import { Shield, Eye, Lock, Phone } from 'lucide-react';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const PrivacyPolicy: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <ScrollAnimatedSection animation="fadeIn" className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-swamp-100 p-4 rounded-full">
                <Shield className="h-12 w-12 text-swamp-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-swamp-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              SHAMI TRUCKING LLC is committed to protecting your privacy and personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
          </ScrollAnimatedSection>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ScrollAnimatedSection animation="slideUp" delay={0.1} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2 text-swamp-600" />
                Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Request freight transportation services or quotes</li>
                <li>Contact us through our website, email, or phone</li>
                <li>Provide shipment details and delivery instructions</li>
                <li>Enter into transportation contracts with us</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-swamp-800 mt-6 mb-3">Types of Information</h3>
              <p className="text-gray-600">
                The personal information we collect may include your name, business name, email address, 
                phone number, shipping addresses, and payment information necessary for providing 
                transportation services.
              </p>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.2} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-2 text-swamp-600" />
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide freight transportation and logistics services</li>
                <li>Process and fulfill service requests and contracts</li>
                <li>Communicate with you about your shipments and services</li>
                <li>Comply with legal and regulatory requirements (DOT, MC compliance)</li>
                <li>Improve our services and customer experience</li>
                <li>Send important updates about our services</li>
              </ul>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.3} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4 flex items-center">
                <Phone className="h-6 w-6 mr-2 text-swamp-600" />
                RingCentral Integration
              </h2>
              <p className="text-gray-600 mb-4">
                Our service uses RingCentral's APIs to facilitate communication. When you connect your 
                RingCentral account, we may access and use data such as:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Your RingCentral account information</li>
                <li>Call and message metadata (not message content)</li>
                <li>Contact and directory information</li>
              </ul>
              <p className="text-gray-600 mt-4">
                This data is not shared with third parties except as required to operate the service.
              </p>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.4} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>With service providers who assist us in operating our business</li>
                <li>When required by law, regulation, or legal process</li>
                <li>To comply with DOT and motor carrier regulatory requirements</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.5} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the internet or electronic storage is completely secure.
              </p>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.6} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Access and review the personal information we have about you</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
                <li>Opt out of non-essential communications</li>
              </ul>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.7} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Regulatory Compliance</h2>
              <p className="text-gray-600">
                As a licensed motor carrier (MC: 780535, DOT: 2252265), we maintain records as required 
                by federal transportation regulations. Some information may be retained to comply with 
                Department of Transportation and other regulatory requirements.
              </p>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.8} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy or how we handle your information, 
                please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-swamp-900 mb-2">SHAMI TRUCKING LLC</p>
                <p className="text-gray-600">1924 NW 11 Court, Cape Coral, FL 33993</p>
                <p className="text-gray-600">Email: shamitrucking@yahoo.com</p>
                <p className="text-gray-600">MC: 780535 | DOT: 2252265</p>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="fadeIn" delay={0.9} className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                This Privacy Policy may be updated periodically to reflect changes in our practices 
                or legal requirements. We will notify you of any material changes by posting the 
                updated policy on our website.
              </p>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;