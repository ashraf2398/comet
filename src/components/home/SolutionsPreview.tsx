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
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Community?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of property managers and community leaders who trust Comet 
                to streamline operations and enhance resident experiences.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" variant="secondary">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsPreview;