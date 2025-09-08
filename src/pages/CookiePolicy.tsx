import React, { useEffect } from 'react';
import { Cookie, Settings, Info } from 'lucide-react';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const CookiePolicy: React.FC = () => {

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
                <Cookie className="h-12 w-12 text-swamp-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-swamp-900 mb-4">Cookie Policy</h1>
            <p className="text-lg text-gray-600">
              Learn how SHAMI TRUCKING LLC uses cookies and similar technologies on our website.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
          </ScrollAnimatedSection>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ScrollAnimatedSection animation="slideUp" delay={0.1} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4 flex items-center">
                <Info className="h-6 w-6 mr-2 text-swamp-600" />
                What Are Cookies?
              </h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, tablet) 
                when you visit our website. They help us provide you with a better experience by remembering 
                your preferences and understanding how you use our site.
              </p>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.2} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-swamp-800 mb-3">Essential Cookies</h3>
                  <p className="text-gray-600">
                    These cookies are necessary for our website to function properly. They enable basic 
                    features like page navigation, form submissions, and access to secure areas of our website. 
                    Without these cookies, some services cannot be provided.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-swamp-800 mb-3">Functional Cookies</h3>
                  <p className="text-gray-600">
                    These cookies enable enhanced functionality and personalization, such as remembering 
                    your contact form information and preferences. They may be set by us or by third-party 
                    providers whose services we use on our pages.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-swamp-800 mb-3">Analytics Cookies</h3>
                  <p className="text-gray-600">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously. This helps us improve our website's performance 
                    and user experience.
                  </p>
                </div>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.3} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">We use cookies to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Improve the functionality of our contact forms</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Enhance security and prevent fraud</li>
                <li>Ensure our website loads efficiently</li>
                <li>Remember information you've entered on forms</li>
              </ul>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.4} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4 flex items-center">
                <Settings className="h-6 w-6 mr-2 text-swamp-600" />
                Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-600 mb-4">
                You have several options for managing cookies:
              </p>
              
              <h3 className="text-xl font-semibold text-swamp-800 mt-6 mb-3">Browser Settings</h3>
              <p className="text-gray-600 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Block all cookies</li>
                <li>Allow only first-party cookies</li>
                <li>Delete cookies when you close your browser</li>
                <li>Be notified before cookies are stored</li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-4">
                <p className="text-amber-800">
                  <strong>Please note:</strong> Disabling certain cookies may impact the functionality 
                  of our website and your ability to access some features, including our contact forms 
                  and quote request system.
                </p>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.5} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 mb-4">
                Our website may contain links to external sites or embed content from third-party services. 
                These third parties may set their own cookies. We do not control these cookies and 
                recommend reviewing the privacy policies of these third parties.
              </p>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.6} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any material 
                changes by posting the updated policy on our website.
              </p>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideUp" delay={0.7} className="mb-8">
              <h2 className="text-2xl font-bold text-swamp-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-swamp-900 mb-2">SHAMI TRUCKING LLC</p>
                <p className="text-gray-600">1924 NW 11 Court, Cape Coral, FL 33993</p>
                <p className="text-gray-600">Email: shamitrucking@yahoo.com</p>
                <p className="text-gray-600">MC: 780535 | DOT: 2252265</p>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="fadeIn" delay={0.8} className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                By continuing to use our website, you consent to our use of cookies as described in 
                this Cookie Policy.
              </p>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;