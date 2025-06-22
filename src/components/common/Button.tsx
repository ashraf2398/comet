import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
type ButtonSize = 'sm' | 'md' | 'lg';

// Custom button props that we add to the component
interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  isLoading?: boolean;
  className?: string;
}

// Get all the HTML button props
// Omit the props we're overriding from the HTML button element
type ButtonHTMLProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  keyof ButtonBaseProps
>;

// Combine our custom props with HTML button props and motion button props
type ButtonProps = ButtonBaseProps & 
  ButtonHTMLProps & 
  Omit<HTMLMotionProps<'button'>, keyof ButtonBaseProps | keyof ButtonHTMLProps>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  fullWidth = false,
  isLoading = false,
  type = 'button',
  ...props
}, ref) => {
  const isDisabled = disabled || isLoading;

  // Base styles
  const baseClasses = [
    'inline-flex items-center justify-center',
    'font-medium rounded-lg transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-yellow',
    'disabled:opacity-70 disabled:cursor-not-allowed',
    fullWidth ? 'w-full' : '',
  ].join(' ');

  // Variant styles
  const variantClasses = {
    primary: [
      'bg-primary-yellow text-primary-navy',
      'hover:bg-yellow-500',
      'active:bg-yellow-600',
      'shadow-md hover:shadow-lg',
    ].join(' '),
    secondary: [
      'bg-primary-navy text-white',
      'hover:bg-primary-navy-light',
      'active:bg-primary-navy/90',
      'shadow-md hover:shadow-lg',
    ].join(' '),
    outline: [
      'border-2 border-primary-navy text-primary-navy',
      'hover:bg-primary-navy/5',
      'active:bg-primary-navy/10',
    ].join(' '),
    ghost: [
      'text-primary-navy',
      'hover:bg-primary-navy/5',
      'active:bg-primary-navy/10',
    ].join(' '),
    white: [
      'bg-white text-primary-navy',
      'hover:bg-gray-50',
      'active:bg-gray-100',
      'shadow-md hover:shadow-lg',
    ].join(' '),
  };

  // Size styles
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  // Icon size mapping
  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  // Loading spinner
  const Spinner = () => (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={isDisabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={!isDisabled ? { scale: 1.02 } : undefined}
      whileTap={!isDisabled ? { scale: 0.98 } : undefined}
      // Pass through all other props
      {...props}
    >
      {isLoading && <Spinner />}
      {!isLoading && Icon && iconPosition === 'left' && (
        <Icon className={`${iconSizeClasses[size]} ${children ? 'mr-2' : ''}`} />
      )}
      {children}
      {!isLoading && Icon && iconPosition === 'right' && (
        <Icon className={`${iconSizeClasses[size]} ${children ? 'ml-2' : ''}`} />
      )}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;