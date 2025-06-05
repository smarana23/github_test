// src/components/common/Footer.jsx
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">RDR Software Solutions</h3>
            <p className="mb-4 text-secondary-300">
              Providing innovative software solutions and IT services to businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-secondary-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-secondary-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-secondary-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-secondary-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/company" className="text-secondary-300 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/company" className="text-secondary-300 hover:text-white transition-colors">Company</Link>
              </li>
              <li>
                <Link to="/ceo-founder" className="text-secondary-300 hover:text-white transition-colors">CEO & Founder</Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/software-development" className="text-secondary-300 hover:text-white transition-colors">Software Development</Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-secondary-300 hover:text-white transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="text-secondary-300 hover:text-white transition-colors">Mobile App Development</Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-secondary-300 hover:text-white transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services/academic-excellence" className="text-secondary-300 hover:text-white transition-colors">Academic Excellence</Link>
              </li>
              <li>
                <Link to="/services/campus-recruitment" className="text-secondary-300 hover:text-white transition-colors">Campus Recruitment</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Contact Us</h3>
            <address className="not-italic text-secondary-300">
              <div className="flex items-start mb-3">
                <FaMapMarkerAlt className="mr-2 mt-1 text-primary-500" />
                <p>123 Tech Park Avenue, Suite 500<br />San Francisco, CA 94103</p>
              </div>
              <div className="flex items-center mb-3">
                <FaEnvelope className="mr-2 text-primary-500" />
                <p>info@rdrsoftware.com</p>
              </div>
              <div className="flex items-center mb-3">
                <FaPhoneAlt className="mr-2 text-primary-500" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 text-primary-500" />
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </address>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-secondary-700">
          <p className="text-secondary-400">
            &copy; {currentYear} RDR Software Solutions. All rights reserved.
          </p>
          <div className="mt-4 text-secondary-400 text-sm">
            <Link to="/privacy-policy" className="hover:text-white mx-2 transition-colors">Privacy Policy</Link>
            <span className="mx-1">|</span>
            <Link to="/terms-of-service" className="hover:text-white mx-2 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
