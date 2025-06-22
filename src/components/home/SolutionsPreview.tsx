import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building, 
  Trophy, 
  ArrowRight,
  Users,
  Calendar,
  CreditCard,
  Shield
} from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

const SolutionsPreview: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const solutions = [
    {
      icon: Home,
      title: 'Residential Solutions',
      description: 'Transform apartment living with real-time announcements, event management, resident directories, and community engagement tools.',
      features: ['Real-time Announcements', 'Event Management', 'Resident Directory', 'Community Forum'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-blue-600',
      delay: 0
    },
    {
      icon: Trophy,
      title: 'Sports & Recreation',
      description: 'Elevate sports facilities with member profiles, training program management, booking systems, and integrated payment processing.',
      features: ['Member Profiles', 'Training Programs', 'Court Booking', 'Payment Processing'],
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-teal-500 to-teal-600',
      delay: 0.2
    },
    {
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Optimize office buildings with space booking, access control, visitor management, and comprehensive community tools.',
      features: ['Space Booking', 'Access Control', 'Visitor Management', 'Community Tools'],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-orange-600',
      delay: 0.4
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100 to-red-100 rounded-full blur-3xl opacity-30 translate-y-48 -translate-x-48" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-6"
          >
            <Building className="h-4 w-4" />
            <span className="text-sm font-medium">Solutions</span>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Tailored for Every
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-primary-yellow-light">
              Community Type
            </span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you're managing residential complexes, sports facilities, or commercial spaces, 
            our platform adapts to your unique needs with industry-specific features.
          </motion.p>
        </motion.div>

        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              initial="initial"
              animate={isVisible ? "animate" : "initial"}
              transition={{ delay: solution.delay }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg mb-8">
                  <solution.icon className="h-8 w-8 text-gray-700" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {solution.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {solution.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`} />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/services">
                  <Button
                    variant="outline"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="group"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${solution.color} opacity-20`} />
                  </div>
                  
                  {/* Floating Stats */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${solution.color}`} />
                      <div>
                        <div className="text-2xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-600">Satisfaction</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="relative py-20 md:py-24 px-4 sm:px-6 lg:px-8 mt-24"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-700 to-teal-700 rounded-3xl p-8 md:p-12 lg:px-16 lg:py-16 overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90 mb-6 border border-white/20">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Join Our Growing Community
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Transform <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-100">
                    Your Community?
                  </span>
                </h3>
                
                <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of property managers and community leaders who trust Comet 
                  to streamline operations and enhance resident experiences.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    size="xl" 
                    variant="secondary"
                    className="group relative overflow-hidden px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <span className="relative z-10">Start Free Trial</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                  
                  <Button 
                    size="xl" 
                    variant="outline"
                    className="group relative overflow-hidden px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 bg-transparent hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Schedule Demo</span>
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center justify-center space-x-2 text-sm text-blue-100/80">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required • 14-day free trial</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsPreview;