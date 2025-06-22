import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Residential', href: '/services#residential' },
        { name: 'Commercial', href: '/services#commercial' },
        { name: 'Sports & Recreation', href: '/services#sports' },
        { name: 'Enterprise', href: '/services#enterprise' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Partners', href: '/partners' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Status Page', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR', href: '#' },
      ],
    },
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@comet-platform.com', href: 'mailto:hello@comet-platform.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group mb-6">
              <div className="relative">
                <Zap className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Comet
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The all-in-one coworking and property management platform that transforms how communities connect, collaborate, and thrive.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <item.icon className="h-4 w-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span className="text-sm">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Comet Platform. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;