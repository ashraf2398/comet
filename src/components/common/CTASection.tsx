import { motion } from 'framer-motion';
import Button from './Button';

interface CTASectionProps {
  title: React.ReactNode;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  showPattern?: boolean;
}

export default function CTASection({
  title,
  description,
  primaryButtonText = 'Start Free Trial',
  secondaryButtonText = 'Schedule Demo',
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
  showPattern = true,
}: CTASectionProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Decorative elements */}
      {showPattern && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjMDA3Y2I3IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=)]]"></div>
        </div>
      )}
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full border border-blue-100">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Ready to get started?
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button 
              size="lg"
              variant="primary"
              onClick={onPrimaryClick}
              className="group relative overflow-hidden px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">{primaryButtonText}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={onSecondaryClick}
              className="group relative overflow-hidden px-8 py-4 text-base font-semibold text-gray-700 border-2 border-gray-200 hover:border-gray-300 bg-transparent hover:bg-gray-50 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                <span>{secondaryButtonText}</span>
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-2 text-sm text-gray-500">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No credit card required • 14-day free trial</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
