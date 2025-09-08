import React, { useState } from 'react';
import { Mail, MapPin, Send, Clock, Shield } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
  
    try {
      // remove empty fields
      const filteredData = Object.fromEntries(
        Object.entries(formData).filter(([_, value]) => value.trim() !== "")
      );
  
      // objectni string ko‘rinishga o‘tkazamiz
      const data = Object.entries(filteredData)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");
  
      const res = await fetch('https://eo6fd094zqrclmh.m.pipedream.net', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: data }), // text property ichida string yuboramiz
      });
  
      if (!res.ok) throw new Error('Network response was not ok');
  
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };
  


  return (
    <section id="contact" className="py-20 bg-swamp-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimatedSection animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your Freight Quote
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contact us today for reliable, professional freight transportation services.
            We're here to handle your logistics needs.
          </p>
        </ScrollAnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollAnimatedSection animation="slideRight" className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-swamp-900 mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swamp-600 focus:border-transparent transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swamp-600 focus:border-transparent transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swamp-600 focus:border-transparent transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swamp-600 focus:border-transparent transition-colors duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swamp-600 focus:border-transparent transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="Flatbed Transport">Flatbed Transport</option>
                  <option value="Step Deck Hauling">Step Deck Hauling</option>
                  <option value="Reefer Shipping">Reefer Shipping</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-swamp-600 focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Please describe your freight transportation needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-swamp-800 hover:bg-swamp-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
                <span>
                  {status === 'sending'
                    ? 'Sending...'
                    : status === 'success'
                      ? 'Sent!'
                      : 'Send Quote Request'}
                </span>
              </button>
              {status === 'success' && (
              <p className="text-green-600 font-medium text-center">
                ✅ Your message has been sent successfully!
              </p>
            )}

            {status === 'error' && (
              <p className="text-red-600 font-medium text-center">
                ❌ Something went wrong. Please try again.
              </p>
            )}
            </form>
          </ScrollAnimatedSection>

          <div className="space-y-8">
            <ScrollAnimatedSection animation="slideLeft" delay={0.2}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-swamp-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:shamitrucking@yahoo.com" className="text-gray-300 hover:text-white transition-colors duration-300" > shamitrucking@yahoo.com </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-swamp-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <address className="text-gray-300 not-italic"> 1924 NW 11 Court<br /> Cape Coral, FL 33993 </address>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-swamp-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-gray-300">24/7 Professional Service</p>
                    <p className="text-gray-300">Emergency Support Available</p>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>

            {/* Compliance Info */}
            <ScrollAnimatedSection animation="slideLeft" delay={0.4} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Compliance & Licensing</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-swamp-400" />
                  <div>
                    <div className="font-semibold text-white">MC: 780535</div>
                    <div className="text-sm text-gray-300">Motor Carrier</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-swamp-400" />
                  <div>
                    <div className="font-semibold text-white">DOT: 2252265</div>
                    <div className="text-sm text-gray-300">Department of Transportation</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-swamp-400" />
                  <div>
                    <div className="font-semibold text-white">EIN: 45-3641552</div>
                    <div className="text-sm text-gray-300">Employer Identification Number</div>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;