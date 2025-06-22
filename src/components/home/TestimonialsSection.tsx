import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Property Manager',
      company: 'Skyline Residences',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: 'Comet transformed how we manage our 500-unit complex. Resident satisfaction increased by 40% in just 3 months. The AI-powered maintenance requests alone save us 10 hours per week.',
      highlight: 'AI-powered maintenance requests',
      metrics: { value: '40%', label: 'Satisfaction Increase' },
      category: 'Residential'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Facilities Director',
      company: 'Elite Sports Center',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: 'The member management and booking system is phenomenal. We\'ve streamlined operations and increased bookings by 60%. Our trainers love the integrated scheduling tools.',
      highlight: 'integrated scheduling tools',
      metrics: { value: '60%', label: 'Booking Increase' },
      category: 'Sports'
    },
    {
      id: 3,
      name: 'Jennifer Park',
      role: 'Community Manager',
      company: 'Innovation Hub',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: 'The white-label solution perfectly matches our brand. Event management has never been easier, and our coworking members are more engaged than ever. ROI was immediate.',
      highlight: 'white-label solution',
      metrics: { value: '85%', label: 'Member Engagement' },
      category: 'Commercial'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Operations Manager',
      company: 'Metro Living',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: 'Implementation was seamless and the support team is outstanding. Our residents now have everything they need at their fingertips. Communication has never been clearer.',
      highlight: 'seamless implementation',
      metrics: { value: '95%', label: 'Communication Clarity' },
      category: 'Residential'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Facility Coordinator',
      company: 'Urban Fitness',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      quote: 'The analytics dashboard gives us insights we never had before. Member retention improved significantly, and our staff efficiency is through the roof.',
      highlight: 'analytics dashboard',
      metrics: { value: '75%', label: 'Member Retention' },
      category: 'Sports'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Gradient Background with Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-blue-50">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003366' fill-opacity='0.3'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-4 h-4 bg-yellow-400/10 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-yellow-100 border border-yellow-200 rounded-full px-4 py-2 mb-6"
          >
            <Star className="h-4 w-4 text-yellow-600 fill-current" />
            <span className="text-yellow-800 text-sm font-medium">Client Success Stories</span>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-blue-900 mb-6"
          >
            What Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-primary-yellow-light">
              Clients Say
            </span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how property managers, facility directors, and community leaders are 
            transforming their operations with Comet's innovative platform.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="relative"
        >
          {/* Large Featured Testimonial */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-blue-600"></div>
            
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Quote Section */}
                <div className="lg:col-span-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Quote Icon */}
                      <Quote className="h-12 w-12 text-yellow-400 mb-6" />
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-6">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="h-6 w-6 text-yellow-500 fill-current" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Quote Text */}
                      <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                        "{currentTestimonial.quote.split(currentTestimonial.highlight)[0]}
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-medium">
                          {currentTestimonial.highlight}
                        </span>
                        {currentTestimonial.quote.split(currentTestimonial.highlight)[1]}"
                      </blockquote>

                      {/* Client Info */}
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="absolute inset-0 rounded-full ring-4 ring-yellow-200 ring-offset-2" />
                        </div>
                        <div>
                          <div className="font-bold text-xl text-blue-900">{currentTestimonial.name}</div>
                          <div className="text-gray-600 font-medium">{currentTestimonial.role}</div>
                          <div className="text-yellow-600 font-semibold">{currentTestimonial.company}</div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Metrics & Category */}
                <div className="lg:col-span-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      {/* Category Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                        {currentTestimonial.category} Solution
                      </div>

                      {/* Metric */}
                      <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-2xl p-8 border border-yellow-200">
                        <div className="text-5xl font-bold text-blue-900 mb-2">
                          {currentTestimonial.metrics.value}
                        </div>
                        <div className="text-gray-600 font-medium">
                          {currentTestimonial.metrics.label}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous/Next Buttons */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-3 bg-white border-2 border-gray-200 rounded-full hover:border-yellow-300 hover:bg-yellow-50 transition-all"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-3 bg-white border-2 border-gray-200 rounded-full hover:border-yellow-300 hover:bg-yellow-50 transition-all"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-yellow-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isAutoPlaying 
                  ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                  : 'bg-gray-100 text-gray-600 border border-gray-200'
              }`}
            >
              {isAutoPlaying ? 'Auto-play ON' : 'Auto-play OFF'}
            </motion.button>
          </div>
        </motion.div>

        {/* Thumbnail Grid */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToTestimonial(index)}
              className={`p-4 rounded-xl border-2 transition-all ${
                index === currentIndex
                  ? 'border-yellow-400 bg-yellow-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
              />
              <div className="text-sm font-medium text-gray-900 truncate">
                {testimonial.name}
              </div>
              <div className="text-xs text-gray-600 truncate">
                {testimonial.company}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '4.9/5', label: 'Average Rating' },
              { number: '500+', label: 'Happy Clients' },
              { number: '99.9%', label: 'Uptime SLA' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="text-3xl font-bold text-blue-900 mb-1 group-hover:text-yellow-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Join Our Happy Clients!
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your community management? Start your journey with Comet today 
            and experience the difference our platform can make.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold"
              icon={ArrowRight} 
              iconPosition="right"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;