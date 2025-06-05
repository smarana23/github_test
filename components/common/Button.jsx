import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to, 
  href, 
  onClick, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-secondary text-white hover:bg-secondary-600 focus:ring-secondary',
    secondary: 'bg-white text-primary hover:bg-neutral-gray focus:ring-primary',
    outline: 'bg-transparent border border-current text-secondary hover:bg-secondary-50 focus:ring-secondary',
    dark: 'bg-dark text-white hover:bg-dark/90 focus:ring-dark',
  };
  
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  // Render as Link if "to" prop is provided (internal link)
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        <motion.span
          whileTap={{ scale: 0.98 }}
          className="flex items-center"
        >
          {children}
        </motion.span>
      </Link>
    );
  }
  
  // Render as anchor tag if "href" prop is provided (external link)
  if (href) {
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer" {...props}>
        <motion.span
          whileTap={{ scale: 0.98 }}
          className="flex items-center"
        >
          {children}
        </motion.span>
      </a>
    );
  }
  
  // Render as button by default
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
      onClick={onClick}
      type={props.type || 'button'}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button; 