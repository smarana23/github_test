import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaMobile, 
  FaShoppingCart, 
  FaSearch, 
  FaChartLine, 
  FaCogs,
  FaCheckCircle,
  FaLayerGroup,
  FaTachometerAlt,
  FaGlobe,
  FaDesktop,
  FaFileCode,
  FaLaptopCode,
  FaUsers,
  FaUserCog,
  FaServer,
  FaShieldAlt,
  FaCheck
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero';

const WebDevelopment = () => {
  const benefits = [
    {
      icon: <FaMobile className="text-primary-600" size={32} />,
      title: 'Responsive Design',
      description: 'Websites that look and perform flawlessly across all devices and screen sizes.'
    },
    {
      icon: <FaShoppingCart className="text-primary-600" size={32} />,
      title: 'E-Commerce Ready',
      description: 'Scalable online stores with secure payment gateways and inventory management.'
    },
    {
      icon: <FaSearch className="text-primary-600" size={32} />,
      title: 'SEO Optimized',
      description: 'Built with search engines in mind to improve your online visibility and rankings.'
    },
    {
      icon: <FaTachometerAlt className="text-primary-600" size={32} />,
      title: 'Performance Focused',
      description: 'Fast-loading websites that engage users and reduce bounce rates.'
    },
    {
      icon: <FaCogs className="text-primary-600" size={32} />,
      title: 'Easy Management',
      description: 'User-friendly content management systems that make updates simple.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Requirements Analysis',
      description: 'We begin by understanding your business goals, target audience, and specific requirements for your website.',
      icon: <FaDesktop className="text-white" size={24} />
    },
    {
      number: '02',
      title: 'Design Phase',
      description: 'Our designers create wireframes and mockups that align with your brand identity and user experience goals.',
      icon: <FaLayerGroup className="text-white" size={24} />
    },
    {
      number: '03',
      title: 'Development',
      description: 'Using modern technologies, we build your website with clean, efficient code that ensures performance and security.',
      icon: <FaCode className="text-white" size={24} />
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing across devices and browsers ensures your website functions flawlessly for all users.',
      icon: <FaCheckCircle className="text-white" size={24} />
    },
    {
      number: '05',
      title: 'Deployment & Support',
      description: 'We launch your website and provide ongoing support and maintenance to keep it running smoothly.',
      icon: <FaGlobe className="text-white" size={24} />
    }
  ];

  const stats = [
    { value: '100%', label: 'Responsive Websites', icon: <FaMobile className="text-primary-600" size={24} /> },
    { value: '500+', label: 'Websites Delivered', icon: <FaGlobe className="text-primary-600" size={24} /> },
    { value: '99%', label: 'Client Satisfaction', icon: <FaCheckCircle className="text-primary-600" size={24} /> },
    { value: '45%', label: 'Average Conversion Boost', icon: <FaChartLine className="text-primary-600" size={24} /> }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const service_cards = [
    {
      title: 'Corporate Websites',
      description: 'Professional websites that establish your brand identity and showcase your business to potential customers.',
      icon: <FaDesktop className="text-white" size={24} />,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'E-Commerce Platforms',
      description: 'Full-featured online stores with secure checkout, inventory management, and customer accounts.',
      icon: <FaShoppingCart className="text-white" size={24} />,
      image: 'https://images.unsplash.com/photo-1531973486364-5fa64260d75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Web Applications',
      description: 'Complex web-based applications with interactive interfaces and robust backend functionality.',
      icon: <FaFileCode className="text-white" size={24} />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Web Development Services"
        subtitle="Create a powerful online presence with our custom web development services that drive growth and engagement."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        overlayColor="primary"
      />

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-secondary-100">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 rounded-lg hover:bg-secondary-50 transition-colors duration-300"
              >
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="mb-2 text-3xl font-bold text-primary-600 md:text-4xl">{stat.value}</div>
                <div className="text-secondary-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary-700 md:text-4xl">Our Web Development Services</h2>
            <p className="text-lg text-secondary-600">
              From responsive business websites to complex web applications, we deliver solutions that drive results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {service_cards.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden bg-white rounded-lg shadow-lg group h-full"
              >
                <div className="absolute top-0 left-0 w-full h-40 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-600/70 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary-600 p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 pt-44">
                  <h3 className="text-xl font-bold mb-3 text-primary-700">{service.title}</h3>
                  <p className="text-secondary-600 mb-4">{service.description}</p>
                  {/* <div className="pt-4 border-t border-secondary-100">
                    <span className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-500 transition-colors duration-300">
                      Learn More
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInFromLeft}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="Web Development Overview"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-primary-600 flex items-center justify-center rounded-lg shadow-lg transform rotate-12">
                  <FaCode className="text-white" size={40} />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInFromRight}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold mb-6 text-primary-700">Custom Web Solutions for Your Business</h2>
              <p className="mb-6 text-lg text-secondary-600">
                At RDR Software Solutions, we specialize in creating custom websites and web applications that align with your business goals and deliver exceptional user experiences.
              </p>
              <div className="space-y-4">
                {[
                  'Custom designs that reflect your brand identity',
                  'User-friendly interfaces that engage visitors',
                  'Scalable solutions that grow with your business',
                  'Search engine optimized to improve visibility',
                  'Integration with third-party services and APIs'
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <FaCheck className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary-700 md:text-4xl">Benefits of Our Web Development Services</h2>
            <p className="text-lg text-secondary-600">
              Discover the advantages of partnering with us for your web development needs.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary-500"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-50 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-bold text-center text-primary-700">{benefit.title}</h3>
                <p className="text-center text-secondary-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute -left-24 -top-24 w-48 h-48 rounded-full bg-primary-100 opacity-50"></div>
        <div className="absolute -right-24 -bottom-24 w-48 h-48 rounded-full bg-secondary-100 opacity-50"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary-700 md:text-4xl">Our Web Development Process</h2>
            <p className="text-lg text-secondary-600">
              A proven methodology that ensures quality results and client satisfaction.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-0.5 h-full bg-primary-200 transform -translate-y-1/2 -translate-x-1/2"></div>
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-1">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 ${
                      index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:items-end'
                    }`}
                  >
                    <div className="relative">
                      <div className="z-20 flex items-center justify-center w-16 h-16 text-white bg-primary-600 rounded-full shadow-lg md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2">
                        {step.icon}
                      </div>
                    </div>
                    <div className={`p-6 bg-white rounded-lg shadow-md border-l-4 border-primary-500 md:w-full ${
                      index % 2 === 0 ? 'md:mr-14' : 'md:ml-14'
                    }`}>
                      <div className="mb-2 text-primary-600 opacity-50 font-bold">{step.number}</div>
                      <h3 className="mb-3 text-xl font-bold text-primary-700">{step.title}</h3>
                      <p className="text-secondary-600">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInFromLeft}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary-700 md:text-4xl">Technologies We Use</h2>
              <p className="text-lg text-secondary-600 mb-8">
                We work with the latest web technologies and frameworks to build modern, efficient websites.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'React', 'Next.js', 'Vue.js', 
                  'Angular', 'Node.js', 'PHP', 
                  'WordPress', 'Shopify', 'Laravel', 
                  'TailwindCSS', 'Bootstrap', 'TypeScript'
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                  >
                    <span className="font-medium text-primary-700">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInFromRight}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg shadow-xl h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Code" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-xl h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Web Design" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="overflow-hidden rounded-lg shadow-xl h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Web Application" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-xl h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Development" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary-800 text-white relative" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 bg-primary-900/90 backdrop-blur-sm"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 md:text-4xl">Ready to Transform Your Online Presence?</h2>
              <p className="text-xl mb-6 text-primary-100">
                Let's discuss how our web development services can help your business grow and succeed online.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-right"
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-primary-900 bg-white rounded-lg shadow-lg hover:bg-primary-50 transition-colors duration-300"
              >
                Get Started Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopment;