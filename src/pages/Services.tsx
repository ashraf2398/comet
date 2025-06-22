import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building, 
  Trophy, 
  Users,
  Calendar,
  CreditCard,
  Bell,
  Shield,
  MessageSquare,
  MapPin,
  Key,
  BarChart3,
  CheckCircle
} from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import CTASection from '../components/common/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const Services: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: residentialRef, isVisible: residentialVisible } = useScrollReveal();
  const { ref: sportsRef, isVisible: sportsVisible } = useScrollReveal();
  const { ref: commercialRef, isVisible: commercialVisible } = useScrollReveal();

  const solutions = [
    {
      id: 'residential',
      icon: Home,
      title: 'Residential Solutions',
      subtitle: 'Transform Apartment Living',
      description: 'Create vibrant residential communities with comprehensive management tools designed for modern apartment living.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-blue-500 to-blue-600',
      features: [
        {
          icon: Bell,
          title: 'Real-time Announcements',
          description: 'Keep residents informed with instant notifications about building updates, maintenance schedules, and community events.'
        },
        {
          icon: Calendar,
          title: 'Event Management',
          description: 'Organize community events, manage RSVPs, and foster neighborhood connections with integrated event planning tools.'
        },
        {
          icon: Users,
          title: 'Resident Directory',
          description: 'Secure, privacy-controlled resident directory that helps neighbors connect while maintaining personal boundaries.'
        },
        {
          icon: MessageSquare,
          title: 'Community Forum',
          description: 'Dedicated discussion spaces for residents to share recommendations, organize activities, and build relationships.'
        }
      ],
      benefits: [
        'Increase resident satisfaction by 40%',
        'Reduce management workload by 60%',
        'Improve communication efficiency',
        'Build stronger community connections'
      ]
    },
    {
      id: 'sports',
      icon: Trophy,
      title: 'Sports & Recreation',
      subtitle: 'Elevate Athletic Communities',
      description: 'Comprehensive management platform for sports facilities, fitness centers, and recreational communities.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-teal-500 to-teal-600',
      features: [
        {
          icon: Users,
          title: 'Member Profiles',
          description: 'Detailed member management with fitness goals, preferences, and participation history tracking.'
        },
        {
          icon: Calendar,
          title: 'Training Programs',
          description: 'Schedule and manage training sessions, classes, and coaching programs with automated reminders.'
        },
        {
          icon: MapPin,
          title: 'Facility Booking',
          description: 'Real-time court, field, and equipment booking system with conflict resolution and waitlist management.'
        },
        {
          icon: CreditCard,
          title: 'Payment Processing',
          description: 'Integrated payment system for memberships, classes, equipment rentals, and event fees.'
        }
      ],
      benefits: [
        'Increase facility utilization by 50%',
        'Streamline membership management',
        'Reduce booking conflicts',
        'Improve member engagement'
      ]
    },
    {
      id: 'commercial',
      icon: Building,
      title: 'Commercial Spaces',
      subtitle: 'Optimize Office Buildings',
      description: 'Intelligent office building management that creates productive, secure, and collaborative work environments.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-orange-500 to-orange-600',
      features: [
        {
          icon: MapPin,
          title: 'Space Booking',
          description: 'Conference room, desk, and common area reservations with real-time availability and smart scheduling.'
        },
        {
          icon: Key,
          title: 'Access Control',
          description: 'Secure, role-based access management with visitor tracking and temporary access provisioning.'
        },
        {
          icon: Shield,
          title: 'Visitor Management',
          description: 'Professional visitor check-in system with photo capture, badge printing, and host notifications.'
        },
        {
          icon: Users,
          title: 'Community Tools',
          description: 'Internal communication platform with announcements, directory, and collaboration features.'
        }
      ],
      benefits: [
        'Optimize space utilization',
        'Enhance building security',
        'Improve tenant satisfaction',
        'Reduce operational costs'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
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
              Solutions Tailored for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Every Community
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
            >
              Whether you're managing residential complexes, sports facilities, or commercial spaces, 
              our platform adapts to your unique needs with industry-specific features and workflows.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              {solutions.map((solution) => (
                <a
                  key={solution.id}
                  href={`#${solution.id}`}
                  className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:bg-white transition-colors"
                >
                  <solution.icon className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">{solution.title}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-20 lg:py-32 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Content */}
              <motion.div
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                initial="initial"
                animate={
                  (index === 0 && residentialVisible) ||
                  (index === 1 && sportsVisible) ||
                  (index === 2 && commercialVisible)
                    ? "animate" : "initial"
                }
                className={index % 2 === 1 ? 'lg:col-start-2' : ''}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg mb-8">
                  <solution.icon className="h-8 w-8 text-gray-700" />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {solution.subtitle}
                  </h3>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button size="lg" className="group">
                  Get Started
                  <BarChart3 className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                initial="initial"
                animate={
                  (index === 0 && residentialVisible) ||
                  (index === 1 && sportsVisible) ||
                  (index === 2 && commercialVisible)
                    ? "animate" : "initial"
                }
                className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                ref={
                  index === 0 ? residentialRef :
                  index === 1 ? sportsRef :
                  commercialRef
                }
              >
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${solution.color} opacity-20`} />
                  </div>
                  
                  {/* Floating Card */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100 max-w-xs"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${solution.color}`} />
                      <span className="font-semibold text-gray-900">Success Rate</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">98.7%</div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <CTASection
        title={
          <>
            Transform Your Community{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Today
            </span>
          </>
        }
        description="Join thousands of community managers who trust our platform to create more connected, efficient, and engaging spaces."
        primaryButtonText="Start Free Trial"
        secondaryButtonText="Schedule Demo"
      />
    </div>
  );
};

export default Services;