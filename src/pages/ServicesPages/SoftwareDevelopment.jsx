import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaLaptopCode, 
  FaDatabase, 
  FaCheckCircle, 
  FaCogs,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaBolt,
  FaServer,
  FaChartLine,
  FaCloudUploadAlt,
  FaMobileAlt,
  FaRobot,
  FaHandshake,
  FaStar,
  FaCheck
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero';

const SoftwareDevelopment = () => {
  const services = [
    {
      icon: <FaCode className="text-primary-600" size={32} />,
      title: 'Custom Software Solutions',
      description: 'Tailored software development that addresses your unique business requirements and challenges.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaLaptopCode className="text-primary-600" size={32} />,
      title: 'Web Application Development',
      description: 'Robust, scalable web applications built with modern technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaDatabase className="text-primary-600" size={32} />,
      title: 'Database Design',
      description: 'Efficient and secure database architectures optimized for performance and data integrity.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaCheckCircle className="text-primary-600" size={32} />,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and validation to ensure software reliability and performance.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaCogs className="text-primary-600" size={32} />,
      title: 'Maintenance & Support',
      description: 'Ongoing technical support and software maintenance to keep your systems running smoothly.',
      image: 'https://images.unsplash.com/photo-1541728472741-03e45a58cf88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Requirements Analysis',
      description: 'Detailed consultation to understand your business needs and technical requirements.',
      icon: <FaUsers className="text-white" size={24} />
    },
    {
      number: '02',
      title: 'Architecture Design',
      description: 'Creating a robust software architecture that ensures scalability and performance.',
      icon: <FaServer className="text-white" size={24} />
    },
    {
      number: '03',
      title: 'Development',
      description: 'Agile development process with regular updates and transparent communication.',
      icon: <FaCode className="text-white" size={24} />
    },
    {
      number: '04',
      title: 'Testing & Validation',
      description: 'Rigorous testing across multiple environments to ensure software quality.',
      icon: <FaCheckCircle className="text-white" size={24} />
    },
    {
      number: '05',
      title: 'Deployment & Support',
      description: 'Smooth implementation and continuous technical support post-deployment.',
      icon: <FaBolt className="text-white" size={24} />
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Project Delivery Success', icon: <FaCheckCircle className="text-primary-600" size={24} /> },
    { value: '45+', label: 'Industry Solutions', icon: <FaServer className="text-primary-600" size={24} /> },
    { value: '24/7', label: 'Dedicated Support', icon: <FaClock className="text-primary-600" size={24} /> },
    { value: '100%', label: 'Secure Coding Practices', icon: <FaShieldAlt className="text-primary-600" size={24} /> }
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

  return (
    <>
      <Hero
        title="Software Development Services"
        subtitle="Transform your business with cutting-edge software solutions designed to drive efficiency, innovation, and growth."
        primaryButtonText="Get Custom Quote"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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

      {/* Services Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary-700 md:text-4xl">Our Software Development Services</h2>
            <p className="text-lg text-secondary-600">
              We specialize in creating tailored software solutions that address your specific business challenges and drive growth.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                className="overflow-hidden bg-white rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="flex items-center justify-center w-12 h-12 mb-3 bg-white rounded-full shadow-md">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-secondary-600 leading-relaxed">{service.description}</p>
                  {/* <div className="mt-4 pt-4 border-t border-secondary-100">
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
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary-700 md:text-4xl">Our Development Process</h2>
            <p className="text-lg text-secondary-600">
              A structured approach to deliver high-quality software on time and within budget.
            </p>
          </motion.div>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-5 md:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-lg shadow-md bg-white border border-secondary-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="pt-4 text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2 opacity-30">{step.number}</div>
                  <h3 className="mb-3 text-xl font-bold text-primary-800">{step.title}</h3>
                  <p className="text-secondary-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary-700 md:text-4xl">Technologies We Use</h2>
              <p className="text-lg text-secondary-600 mb-8">
                We leverage the latest technologies to build robust, scalable, and secure software solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {['React', 'Node.js', 'Python', '.NET', 'Angular', 'AWS', 'Azure', 'MongoDB'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center p-3 rounded-lg bg-white shadow-sm"
                  >
                    <FaCheck className="text-primary-500 mr-3" size={12} />
                    <span className="font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Software Development Technologies" 
                className="rounded-lg shadow-xl object-cover h-96 w-full"
              />
              <div className="absolute -bottom-5 -right-5 w-full h-full border-4 border-primary-500 rounded-lg z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white relative" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
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
              <h2 className="text-3xl font-bold mb-4 md:text-4xl">Ready to Drive Digital Transformation?</h2>
              <p className="text-xl mb-6 text-primary-100">
                Let's discuss how our software development expertise can solve your business challenges.
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
                Start Your Project
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

export default SoftwareDevelopment;