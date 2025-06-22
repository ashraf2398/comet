import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Building,
  User,
  Globe
} from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const Contact: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    industry: '',
    country: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch with our team',
      contact: 'hello@comet-platform.com',
      href: 'mailto:hello@comet-platform.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our experts',
      contact: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters',
      contact: 'San Francisco, CA',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'We\'re here to help',
      contact: 'Mon-Fri 9AM-6PM PST',
      href: '#'
    }
  ];

  const industries = [
    'Property Management',
    'Sports & Recreation',
    'Coworking Spaces',
    'Residential Communities',
    'Commercial Real Estate',
    'Healthcare Facilities',
    'Educational Institutions',
    'Government',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Thank You for Your Interest!
          </h2>
          <p className="text-gray-600 mb-8">
            We've received your message and will get back to you within 24 hours. 
            Our team is excited to learn more about your community management needs.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-20 lg:py-32 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={heroVisible ? "animate" : "initial"}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Let's Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Amazing Together
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
            >
              Ready to transform your community management? Get in touch with our team 
              to discuss your needs and see how Comet can help you succeed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={heroVisible ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center group cursor-pointer">
                  <a href={info.href} className="block">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{info.description}</p>
                    <p className="text-blue-600 font-medium">{info.contact}</p>
                  </a>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={formRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 ga p-16 items-start">
            {/* Form */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              animate={formVisible ? "animate" : "initial"}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Get Your Demo
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline h-4 w-4 mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Company & Industry */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        <Building className="inline h-4 w-4 mr-1" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select Industry</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Country & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                        <Globe className="inline h-4 w-4 mr-1" />
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="United States"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline h-4 w-4 mr-1" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Message */}
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
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your community management needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                    icon={isSubmitting ? undefined : Send}
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              variants={fadeInRight}
              initial="initial"
              animate={formVisible ? "animate" : "initial"}
              className="lg:pl-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Comet?
              </h3>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Expert Consultation',
                    description: 'Get personalized recommendations based on your specific community management needs.'
                  },
                  {
                    title: 'Free Trial',
                    description: 'Test drive all features with a 30-day free trial. No credit card required.'
                  },
                  {
                    title: 'Quick Setup',
                    description: 'Our team handles the complete setup and migration process for you.'
                  },
                  {
                    title: 'Ongoing Support',
                    description: '24/7 customer support and dedicated success manager for enterprise clients.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Customer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Chen</div>
                    <div className="text-sm text-gray-600">Property Manager</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The Comet team was incredibly helpful during our onboarding. 
                  They customized the platform to fit our exact needs and provided 
                  excellent training for our staff."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;