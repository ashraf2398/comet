import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';
import CTASection from '../components/common/CTASection';
import Card from '../components/common/Card';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const About: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();
  const { ref: teamRef, isVisible: teamVisible } = useScrollReveal();

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that anticipate future needs.',
      color: 'text-primary-navy'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Every feature we build is designed to strengthen connections and foster thriving communities.',
      color: 'text-primary-yellow'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We prioritize data security and privacy, ensuring your community information is always protected.',
      color: 'text-primary-navy/80'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'Your success is our success. We provide dedicated support to help you achieve your goals.',
      color: 'text-primary-yellow/80'
    }
  ];

  const stats = [
    { number: '2019', label: 'Founded' },
    { number: '50+', label: 'Team Members' },
    { number: '10K+', label: 'Communities Served' },
    { number: '25+', label: 'Countries' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former VP of Operations at WeWork, passionate about reimagining community spaces.'
    },
    {
      name: 'David Chen',
      role: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ex-Google engineer with 15+ years in scalable platform architecture.'
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning UX designer focused on intuitive, accessible user experiences.'
    },
    {
      name: 'Alex Thompson',
      role: 'VP of Customer Success',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Customer-first advocate with expertise in community management and support.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-20 lg:py-32 bg-gradient-to-br from-primary-navy/5 to-primary-navy/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-navy/20 to-primary-navy/30 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary-yellow/20 to-primary-yellow/30 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Building the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-navy to-primary-yellow">
                Community Management
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
            >
              At Comet, we believe that technology should bring people together, not drive them apart. 
              We're on a mission to create platforms that foster genuine connections and thriving communities.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-navy mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              animate={heroVisible ? "animate" : "initial"}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-navy/5 to-primary-navy/10 rounded-2xl mb-8">
                <Target className="h-8 w-8 text-primary-navy" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower property managers, community leaders, and residents with intelligent, 
                integrated tools that streamline operations and enhance the living experience for everyone.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We're democratizing access to enterprise-grade community management technology, 
                making it affordable and accessible for communities of all sizes.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="initial"
              animate={heroVisible ? "animate" : "initial"}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-yellow/5 to-primary-yellow/10 rounded-2xl mb-8">
                <Eye className="h-8 w-8 text-primary-yellow" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A world where every community - whether residential, commercial, or recreational - 
                operates seamlessly through technology that prioritizes human connection.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision communities that are more engaged, efficient, and enjoyable places 
                to live, work, and play through the power of thoughtful technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={valuesVisible ? "animate" : "initial"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Core Values
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              These principles guide every decision we make and every feature we build.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={valuesVisible ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  icon={value.icon}
                  iconColor={value.color}
                  title={value.title}
                  description={value.description}
                  className="h-full text-center"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section ref={teamRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={teamVisible ? "animate" : "initial"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Meet Our Leadership Team
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Passionate leaders with decades of combined experience in technology, 
              community management, and customer success.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={teamVisible ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 rounded-full ring-4 ring-primary-yellow/30 ring-offset-4 mx-auto w-24 h-24" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-yellow font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden bg-white">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZjhmOGY4IiBvcGFjaXR5PSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=) opacity-5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-blue-600 bg-blue-50 rounded-full border border-blue-100">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Built for the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Community Living</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're redefining community management with innovative technology and unparalleled support to create exceptional living and working experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: 'Industry Expertise',
                description: 'Deep understanding of community management challenges across residential, commercial, and recreational spaces.',
                stats: '15+ Years Experience'
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: 'Our clients see average improvements of 40% in operational efficiency and 60% in resident satisfaction.',
                stats: '95% Client Retention'
              },
              {
                icon: Globe,
                title: 'Global Scale',
                description: 'From local communities to international property portfolios, our platform scales with your growth.',
                stats: '500+ Communities'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-blue-50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 mx-auto rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border border-blue-100 group-hover:border-blue-200 transition-all duration-300">
                    <item.icon className="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <div className="text-sm font-medium text-blue-500 mt-4 pt-4 border-t border-gray-100">
                    {item.stats}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg mb-8">
              Join the community of forward-thinking property managers
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;