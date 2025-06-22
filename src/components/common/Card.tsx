import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  icon?: LucideIcon;
  iconColor?: string;
  title?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  icon: Icon,
  iconColor = 'text-blue-600',
  title,
  description,
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl border border-white/20 transition-all duration-300 ${className}`}
    >
      <div className="p-6">
        {Icon && (
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 mb-4`}>
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
        )}
        
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        )}
        
        {description && (
          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        )}
        
        {children}
      </div>
    </motion.div>
  );
};

export default Card;