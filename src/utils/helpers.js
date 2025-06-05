import { motion } from 'framer-motion';

export const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren
      }
    }
  };
};

export const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: 50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay
      }
    }
  };
};

export const getIconComponent = (iconName, props = {}) => {
  const { [iconName]: IconComponent } = require('react-icons/fa');
  return IconComponent ? <IconComponent {...props} /> : null;
};

export const validateContactForm = (values) => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/;

  if (!values.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  if (!values.phone) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = 'Phone number is invalid';
  }

  if (!values.message) {
    errors.message = 'Message is required';
  } else if (values.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
};