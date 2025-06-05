import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({ 
  title, 
  subtitle, 
  primaryButtonText, 
  primaryButtonLink, 
  secondaryButtonText, 
  secondaryButtonLink,
  backgroundImage,
  overlayColor = 'primary',
}) => {
  const overlayColors = {
    primary: 'from-primary-900/80 to-primary-800/50',
    secondary: 'from-secondary-900/80 to-secondary-800/50',
    tertiary: 'from-tertiary-900/80 to-tertiary-800/50',
  };

  return (
    <section className="relative pt-20 text-white min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="object-cover w-full h-full"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayColors[overlayColor]}`}></div>
      </div>
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-lg text-white/90 md:text-xl"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
          >
            {primaryButtonText && (
              <Link 
                to={primaryButtonLink} 
                className="btn btn-secondary"
              >
                {primaryButtonText}
              </Link>
            )}
            {secondaryButtonText && (
              <Link 
                to={secondaryButtonLink} 
                className="btn btn-outline text-white border-white hover:bg-white/10"
              >
                {secondaryButtonText}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L80,117.3C160,139,320,181,480,186.7C640,192,800,160,960,149.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;