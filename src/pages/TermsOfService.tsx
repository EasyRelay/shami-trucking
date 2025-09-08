import React, { useEffect } from 'react';
import { FileText, Scale, Truck } from 'lucide-react';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const TermsOfService: React.FC = () => {
  
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
                <FileText className="h-12 w-12 text-swamp-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-swamp-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">
              Legal terms and conditions for freight transportation services provided by SHAMI TRUCKING LLC.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
          </ScrollAnimatedSection>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ScrollAnimatedSection animation="slideUp" delay={0.1} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4 flex items-center">
                <Scale className="h-6 w-6 mr-2 text-swamp-600" />
                Agreement to Terms
              </h2>
              <p className="text-gray-600 mb-4">
                By accessing our website, requesting quotes, or using our freight transportation services, 
                you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.2} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Company Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-swamp-900 mb-2">SHAMI TRUCKING LLC</p>
                <p className="text-gray-600">Licensed Motor Carrier</p>
                <p className="text-gray-600">MC Number: 780535</p>
                <p className="text-gray-600">DOT Number: 2252265</p>
                <p className="text-gray-600">EIN: 45-3641552</p>
                <p className="text-gray-600">1924 NW 11 Court, Cape Coral, FL 33993</p>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.3} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4 flex items-center">
                <Truck className="h-6 w-6 mr-2 text-swamp-600" />
                Transportation Services
              </h2>
              <p className="text-gray-600 mb-4">
                SHAMI TRUCKING LLC provides freight transportation services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Interstate freight transportation</li>
                <li>Long-haul trucking services</li>
                <li>Freight logistics coordination</li>
                <li>Time-sensitive delivery services</li>
              </ul>
              <p className="text-gray-600 mt-4">
                All transportation services are subject to individual agreements and are governed by 
                applicable federal and state regulations including DOT and motor carrier requirements.
              </p>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.4} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Service Agreements</h2>
              <p className="text-gray-600 mb-4">
                Specific transportation services will be governed by individual service agreements or 
                bills of lading that will include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Detailed service descriptions and specifications</li>
                <li>Pickup and delivery locations and timeframes</li>
                <li>Pricing, payment terms, and applicable fees</li>
                <li>Liability limitations and insurance coverage</li>
                <li>Special handling requirements or restrictions</li>
              </ul>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.5} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Liability and Insurance</h2>
              <p className="text-gray-600 mb-4">
                SHAMI TRUCKING LLC maintains appropriate insurance coverage as required by federal regulations. 
                Our liability for freight loss or damage is subject to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Terms specified in individual transportation agreements</li>
                <li>Applicable federal motor carrier liability regulations</li>
                <li>Standard limitations per industry practice</li>
                <li>Insurance policy terms and conditions</li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-4">
                <p className="text-amber-800">
                  <strong>Important:</strong> Customers are encouraged to maintain their own cargo 
                  insurance for additional protection beyond carrier liability limits.
                </p>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.6} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Unless otherwise specified in individual agreements:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Payment is due within 30 days of service completion</li>
                <li>Late payments may be subject to interest charges</li>
                <li>We reserve the right to require advance payment for certain services</li>
                <li>Disputed charges must be reported within 30 days</li>
              </ul>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.7} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Regulatory Compliance</h2>
              <p className="text-gray-600 mb-4">
                As a licensed motor carrier, SHAMI TRUCKING LLC operates in compliance with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Federal Motor Carrier Safety Regulations (FMCSR)</li>
                <li>Department of Transportation requirements</li>
                <li>Interstate Commerce Commission regulations</li>
                <li>State and local transportation laws</li>
                <li>Hazardous materials regulations (when applicable)</li>
              </ul>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.8} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Prohibited Items</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to refuse transportation of:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Illegal or contraband materials</li>
                <li>Hazardous materials without proper permits and documentation</li>
                <li>Items that exceed our equipment capacity or capabilities</li>
                <li>Perishable items without appropriate arrangements</li>
                <li>Items that violate federal or state transportation regulations</li>
              </ul>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.9} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Force Majeure</h2>
              <p className="text-gray-600">
                SHAMI TRUCKING LLC shall not be liable for delays, failures, or damages resulting from 
                circumstances beyond our reasonable control, including but not limited to: weather conditions, 
                natural disasters, accidents, road closures, equipment failures, labor disputes, or 
                government regulations.
              </p>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={1.0} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                Disputes regarding our transportation services shall be resolved through:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Direct negotiation between parties</li>
                <li>Mediation if necessary</li>
                <li>Applicable regulatory dispute resolution procedures</li>
                <li>Florida state court jurisdiction for legal proceedings</li>
              </ul>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={1.1} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Modifications</h2>
              <p className="text-gray-600">
                SHAMI TRUCKING LLC reserves the right to modify these Terms of Service at any time. 
                Updated terms will be posted on our website with an updated date. Continued use of 
                our services after changes indicates acceptance of the modified terms.
              </p>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={1.2} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service or our transportation services, contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-swamp-900 mb-2">SHAMI TRUCKING LLC</p>
                <p className="text-gray-600">1924 NW 11 Court, Cape Coral, FL 33993</p>
                <p className="text-gray-600">Email: shamitrucking@yahoo.com</p>
                <p className="text-gray-600">MC: 780535 | DOT: 2252265</p>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="fadeIn" delay={1.3} className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                These Terms of Service constitute the entire agreement between you and SHAMI TRUCKING LLC 
                regarding the use of our website and general service terms, superseding any prior agreements. 
                Individual transportation services are subject to specific agreements and applicable regulations.
              </p>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;