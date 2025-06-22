import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Users, Building, Sparkles, Network, Wifi, MapPin } from 'lucide-react';
import Button from '../common/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/5 via-white to-primary-yellow/5">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='hsl(225 70% 25%)' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Floating Smart City Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Buildings */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-20 left-10 text-primary-yellow/30"
        >
          <Building className="h-16 w-16" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [20, -20, 20],
            x: [-10, 10, -10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-40 right-20 text-primary-navy/20"
        >
          <Network className="h-20 w-20" />
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute bottom-32 left-1/4 text-primary-yellow/40"
        >
          <Wifi className="h-12 w-12" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [15, -15, 15],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="absolute bottom-20 right-1/3 text-primary-navy/30"
        >
          <MapPin className="h-14 w-14" />
        </motion.div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M100,200 Q300,100 500,300 T900,200"
            stroke="hsl(45 100% 60%)"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M200,400 Q400,300 600,500 T1000,400"
            stroke="hsl(225 70% 25%)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-primary-yellow/10 border border-primary-yellow/20 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="h-4 w-4 text-primary-yellow/80" />
              <span className="text-primary-navy text-sm font-medium">
                Smart City Solutions
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={{
                initial: { opacity: 0, y: 60 },
                animate: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-navy mb-6 leading-tight"
            >
              Smart City
              <span className="block text-primary-yellow">
                Community
              </span>
              <span className="block">
                Solutions
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={{
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              Our products are applied within a connected and growing ecosystem of users, 
              including real estate developers, property managers, and service providers.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {[
                { icon: Zap, text: 'AI-Powered', color: 'bg-primary-yellow/5 text-primary-yellow/90 border-primary-yellow/20' },
                { icon: Building, text: 'Smart Buildings', color: 'bg-primary-navy/5 text-primary-navy/90 border-primary-navy/20' },
                { icon: Users, text: 'Connected Communities', color: 'bg-gray-50/50 text-gray-700 border-gray-200' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-2 border rounded-full px-4 py-2 ${feature.color}`}
                >
                  <feature.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary-yellow hover:bg-primary-yellow/90 text-primary-navy font-semibold shadow-lg hover:shadow-xl border-0 px-8 py-4 rounded-xl"
                  icon={ArrowRight} 
                  iconPosition="right"
                >
                  Get Started
                </Button>
              </motion.div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-3 text-primary-navy hover:text-primary-navy/80 transition-colors group"
              >
                <div className="p-3 bg-white border-2 border-primary-navy/10 rounded-full group-hover:border-primary-navy/20 group-hover:bg-primary-navy/5 transition-all">
                  <Play className="h-5 w-5 ml-0.5" />
                </div>
                <span className="font-medium">Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-200"
            >
              {[
                { number: '500+', label: 'Smart Buildings' },
                { number: '50K+', label: 'Connected Users' },
                { number: '25+', label: 'Cities Worldwide' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-navy mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            {/* Main Illustration Container */}
            <div className="relative">
              {/* Background Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 w-96 h-96 mx-auto"
              >
                <div className="w-full h-full border-2 border-dashed border-primary-yellow/30 rounded-full"></div>
              </motion.div>

              {/* Central Hub */}
              <div className="relative z-10 w-96 h-96 mx-auto flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 10px 30px hsla(45, 100%, 60%, 0.2)',
                      '0 20px 40px hsla(45, 100%, 60%, 0.3)',
                      '0 10px 30px hsla(45, 100%, 60%, 0.2)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-32 h-32 bg-gradient-to-br from-primary-yellow to-primary-yellow/80 rounded-3xl flex items-center justify-center shadow-2xl"
                >
                  <Zap className="h-16 w-16 text-primary-navy" />
                </motion.div>

                {/* Orbiting Elements */}
                {[
                  { icon: Building, angle: 0, delay: 0, color: 'bg-primary-navy/5 text-primary-navy/90' },
                  { icon: Users, angle: 72, delay: 0.5, color: 'bg-primary-yellow/5 text-primary-yellow/90' },
                  { icon: Network, angle: 144, delay: 1, color: 'bg-primary-navy/10 text-primary-navy/90' },
                  { icon: Wifi, angle: 216, delay: 1.5, color: 'bg-primary-yellow/10 text-primary-yellow/90' },
                  { icon: MapPin, angle: 288, delay: 2, color: 'bg-primary-navy/5 text-primary-navy/90' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    animate={{ 
                      rotate: [item.angle, item.angle + 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 2, delay: item.delay, repeat: Infinity, ease: 'easeInOut' }
                    }}
                    className="absolute w-16 h-16 flex items-center justify-center"
                    style={{
                      transformOrigin: '8rem 8rem',
                      transform: `rotate(${item.angle}deg) translateX(8rem)`
                    }}
                  >
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Connection Pulses */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 1,
                    repeat: Infinity,
                    ease: 'easeOut'
                  }}
                  className="absolute inset-0 w-96 h-96 mx-auto border-2 border-primary-yellow/40 rounded-full"
                />
              ))}
            </div>

            {/* Floating Data Points */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-yellow rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Live Data</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-lg font-bold text-primary-navy">99.9%</div>
                <div className="text-xs text-gray-600">Uptime</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="w-6 h-10 border-2 border-primary-navy/30 rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-navy/50 rounded-full mt-2" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;