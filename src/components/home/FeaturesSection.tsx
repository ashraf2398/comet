import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Puzzle, 
  Palette, 
  Shield, 
  Zap, 
  Users,
  BarChart3,
  Globe,
  Clock
} from 'lucide-react';
import Card from '../common/Card';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const FeaturesSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Intelligence',
      description: 'Smart automation and predictive analytics that learn from your community patterns to optimize operations.',
      color: 'text-blue-600',
      gradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: Puzzle,
      title: 'Modular Architecture',
      description: 'Pick and choose the features you need. Scale up or down with flexible, interconnected modules.',
      color: 'text-teal-600',
      gradient: 'from-teal-50 to-teal-100'
    },
    {
      icon: Palette,
      title: 'White-Label Ready',
      description: 'Complete customization with your branding, colors, and domain. Make it truly yours.',
      color: 'text-orange-600',
      gradient: 'from-orange-50 to-orange-100'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, SOC 2 compliance, and robust access controls protect your data.',
      color: 'text-red-600',
      gradient: 'from-red-50 to-red-100'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second load times and real-time synchronization.',
      color: 'text-yellow-600',
      gradient: 'from-yellow-50 to-yellow-100'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Built-in social features, event management, and collaboration tools that bring people together.',
      color: 'text-purple-600',
      gradient: 'from-purple-50 to-purple-100'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into usage patterns, revenue trends, and community engagement metrics.',
      color: 'text-green-600',
      gradient: 'from-green-50 to-green-100'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Multi-language support, international payment processing, and worldwide CDN deployment.',
      color: 'text-indigo-600',
      gradient: 'from-indigo-50 to-indigo-100'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer success team with dedicated account managers for enterprise clients.',
      color: 'text-pink-600',
      gradient: 'from-pink-50 to-pink-100'
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6"
          >
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">Core Features</span>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Everything You Need in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-primary-yellow-light">
              One Platform
            </span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From AI-powered automation to enterprise-grade security, Comet provides all the tools 
            you need to create thriving communities and streamline property management.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card
                icon={feature.icon}
                iconColor={feature.color}
                title={feature.title}
                description={feature.description}
                className="h-full group relative overflow-hidden"
              >
                <div className={`absolute -inset-px bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="mt-20 bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '99.9%', label: 'Uptime SLA', icon: Shield },
              { number: '<100ms', label: 'Response Time', icon: Zap },
              { number: '150+', label: 'Integrations', icon: Puzzle },
              { number: '24/7', label: 'Support', icon: Clock },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg mb-3">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;