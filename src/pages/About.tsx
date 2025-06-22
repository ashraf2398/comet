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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-navy to-primary-navy/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose Comet?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We're not just another software company. We're your partners in building stronger communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Industry Expertise',
                description: 'Deep understanding of community management challenges across residential, commercial, and recreational spaces.'
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: 'Our clients see average improvements of 40% in operational efficiency and 60% in resident satisfaction.'
              },
              {
                icon: Globe,
                title: 'Global Scale',
                description: 'From local communities to international property portfolios, our platform scales with your growth.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                  <item.icon className="h-8 w-8 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;