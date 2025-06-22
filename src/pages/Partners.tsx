import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  CreditCard, 
  Cloud, 
  Database,
  Smartphone,
  Globe,
  BarChart3,
  Users,
  Building,
  Mail,
  Calendar
} from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Partners: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: partnersRef, isVisible: partnersVisible } = useScrollReveal();

  const partnerCategories = [
    {
      title: 'Payment Solutions',
      icon: CreditCard,
      description: 'Secure, global payment processing with multiple payment methods',
      partners: [
        { name: 'Stripe', logo: '💳', description: 'Global payment processing' },
        { name: 'PayPal', logo: '💰', description: 'Digital wallet integration' },
        { name: 'Apple Pay', logo: '🍎', description: 'Mobile payment solution' },
        { name: 'PayTabs', logo: '💎', description: 'Middle East payment gateway' }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      icon: Cloud,
      description: 'Reliable, scalable cloud infrastructure for global deployment',
      partners: [
        { name: 'Amazon Web Services', logo: '☁️', description: 'Cloud computing platform' },
        { name: 'Microsoft Azure', logo: '🔵', description: 'Enterprise cloud services' },
        { name: 'Google Cloud', logo: '🌈', description: 'AI-powered cloud platform' },
        { name: 'Cloudflare', logo: '🔶', description: 'Global CDN and security' }
      ]
    },
    {
      title: 'Business Applications',
      icon: Building,
      description: 'Seamless integration with popular business and productivity tools',
      partners: [
        { name: 'Salesforce', logo: '☁️', description: 'CRM and customer success' },
        { name: 'Microsoft 365', logo: '📊', description: 'Productivity suite integration' },
        { name: 'Slack', logo: '💬', description: 'Team communication platform' },
        { name: 'Zoom', logo: '📹', description: 'Video conferencing solution' }
      ]
    },
    {
      title: 'Analytics & Insights',
      icon: BarChart3,
      description: 'Advanced analytics and business intelligence capabilities',
      partners: [
        { name: 'Google Analytics', logo: '📈', description: 'Web analytics platform' },
        { name: 'Mixpanel', logo: '📊', description: 'Product analytics tool' },
        { name: 'Tableau', logo: '📉', description: 'Data visualization platform' },
        { name: 'Power BI', logo: '⚡', description: 'Business intelligence suite' }
      ]
    },
    {
      title: 'Communication',
      icon: Mail,
      description: 'Multi-channel communication and messaging solutions',
      partners: [
        { name: 'Twilio', logo: '📱', description: 'SMS and voice communication' },
        { name: 'SendGrid', logo: '📧', description: 'Email delivery platform' },
        { name: 'Mailchimp', logo: '🐵', description: 'Email marketing automation' },
        { name: 'WhatsApp Business', logo: '💚', description: 'Business messaging platform' }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      description: 'Enterprise-grade security and compliance solutions',
      partners: [
        { name: 'Auth0', logo: '🔐', description: 'Identity and access management' },
        { name: 'Okta', logo: '🛡️', description: 'Single sign-on solution' },
        { name: 'Compliance.ai', logo: '✅', description: 'Regulatory compliance tools' },
        { name: 'CyberArk', logo: '🔒', description: 'Privileged access security' }
      ]
    }
  ];

  const integrationStats = [
    { number: '150+', label: 'Integrations Available' },
    { number: '99.9%', label: 'API Uptime' },
    { number: '<100ms', label: 'Average Response Time' },
    { number: '24/7', label: 'Integration Support' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-20 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200 to-green-200 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={heroVisible ? "animate" : "initial"}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Integration Partners</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Connect with the Tools
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                You Already Use
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
            >
              Comet integrates seamlessly with 150+ popular business tools and platforms, 
              ensuring your workflow remains uninterrupted while gaining powerful new capabilities.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              {integrationStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section ref={partnersRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={partnersVisible ? "animate" : "initial"}
            className="space-y-16"
          >
            {partnerCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={fadeInUp}>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg mb-6">
                    <category.icon className="h-8 w-8 text-gray-700" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <motion.div
                      key={partnerIndex}
                      whileHover={{ y: -4 }}
                      className="group"
                    >
                      <Card className="h-full text-center group-hover:shadow-xl transition-all duration-300">
                        <div className="text-4xl mb-4">{partner.logo}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {partner.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {partner.description}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Our Integrations Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our extensive integration ecosystem ensures you can leverage existing investments 
              while gaining new capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: 'Unified Data',
                description: 'All your community data synchronized across platforms in real-time, eliminating data silos and ensuring consistency.'
              },
              {
                icon: Zap,
                title: 'Automated Workflows',
                description: 'Trigger actions across multiple platforms automatically, reducing manual work and improving operational efficiency.'
              },
              {
                icon: Globe,
                title: 'Single Dashboard',
                description: 'Monitor and manage all your integrated tools from one central dashboard, simplifying your daily operations.'
              }
            ].map((benefit, index) => (
              <Card
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                className="text-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Build Custom Integrations
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Don't see your favorite tool? Use our comprehensive REST API and webhooks 
                to build custom integrations that fit your unique workflow requirements.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'RESTful API with comprehensive documentation',
                  'Real-time webhooks for instant notifications',
                  'SDKs available in multiple programming languages',
                  'Sandbox environment for testing',
                  'Dedicated developer support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg">
                  View API Docs
                </Button>
                <Button size="lg" variant="outline">
                  Contact Developer Support
                </Button>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-green-400 font-mono text-sm overflow-x-auto">
              <div className="mb-4 text-gray-400">// Example API Request</div>
              <div className="space-y-2">
                <div><span className="text-blue-400">POST</span> /api/v1/communities</div>
                <div><span className="text-yellow-400">Content-Type:</span> application/json</div>
                <div><span className="text-yellow-400">Authorization:</span> Bearer your_api_key</div>
                <div className="mt-4 text-gray-400">// Request Body</div>
                <div>{'{'}</div>
                <div className="ml-4">"name": "Downtown Lofts",</div>
                <div className="ml-4">"type": "residential",</div>
                <div className="ml-4">"units": 150,</div>
                <div className="ml-4">"integrations": ["stripe", "mailchimp"]</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Connect Your Tools?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Start integrating your favorite tools with Comet today and experience 
            the power of a truly connected community management platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View All Integrations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;