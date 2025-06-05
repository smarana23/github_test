import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaUserTie, 
  FaCertificate, 
  FaCode, 
  FaChartLine, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaUsers, 
  FaCogs, 
  FaCreditCard,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaCheck
} from 'react-icons/fa';
import ServiceCard from '../components/common/ServiceCard';
import Hero from '../components/common/Hero';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Academic Excellence',
      description: 'Comprehensive academic programs designed to elevate student performance and knowledge.',
      icon: <FaGraduationCap size={24} />,
      path: '/services/academic-excellence',
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      title: 'Campus Recruitment Training',
      description: 'Prepare students for successful placement through specialized training programs.',
      icon: <FaUserTie size={24} />,
      path: '/services/campus-recruitment',
      imageUrl: 'https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      title: 'Certifications',
      description: 'Industry-recognized certification programs to enhance skills and career prospects.',
      icon: <FaCertificate size={24} />,
      path: '/services/certifications',
      imageUrl: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to meet your specific business requirements.',
      icon: <FaCode size={24} />,
      path: '/services/software-development',
      imageUrl: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns to boost your online presence and drive growth.',
      icon: <FaChartLine size={24} />,
      path: '/services/digital-marketing',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      title: 'Web Development',
      description: 'Responsive and user-friendly websites that engage visitors and drive conversions.',
      icon: <FaLaptopCode size={24} />,
      path: '/services/web-development',
      imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications with intuitive interfaces and powerful functionality.',
      icon: <FaMobileAlt size={24} />,
      path: '/services/mobile-app-development',
      imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      title: 'IT Staffing',
      description: 'Connect with top tech talent through our specialized IT staffing services.',
      icon: <FaUsers size={24} />,
      path: '/services/it-staffing',
      imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      title: 'ERP Software',
      description: 'Integrated ERP solutions to streamline your business operations and enhance productivity.',
      icon: <FaCogs size={24} />,
      path: '/services/erp-software',
      imageUrl: 'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      title: 'Payroll Management',
      description: 'Efficient payroll management systems to simplify your HR processes.',
      icon: <FaCreditCard size={24} />,
      path: '/services/payroll-management',
      imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    }
  ];

  const stats = [
    { value: '10+', label: 'Years Experience', icon: <FaHandshake className="text-primary-500" size={24} /> },
    { value: '500+', label: 'Projects Completed', icon: <FaCheck className="text-green-500" size={24} /> },
    { value: '50+', label: 'Expert Team Members', icon: <FaUsers className="text-blue-500" size={24} /> },
    { value: '99%', label: 'Client Satisfaction', icon: <FaStar className="text-yellow-500" size={24} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      {/* Hero Section using the Hero component */}
      <Hero
        title="Our Services"
        subtitle="Comprehensive solutions tailored to meet your business needs and drive growth"
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        overlayColor="primary"
      />

      {/* Stats Section */}
      <section className="py-12 bg-secondary-100">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="mb-2 text-3xl font-bold text-primary-600 md:text-4xl">{stat.value}</div>
                <div className="text-secondary-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 bg-secondary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-3xl font-bold md:text-4xl text-primary-700"
            >
              Exceptional Services for Exceptional Results
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-secondary-700"
            >
              At RDR Software Solutions, we offer a comprehensive range of services designed to help businesses thrive in today's competitive landscape. From cutting-edge software development to strategic digital marketing, we have the expertise to deliver exceptional results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Explore Our Services</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
              >
                <Link to={service.path} className="block h-full">
                  <div className="overflow-hidden bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-70" />
                      <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                        <div className="text-primary-600">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="mb-3 text-xl font-bold text-primary-700 group-hover:text-primary-500 transition-colors duration-300">{service.title}</h3>
                      <p className="mb-4 text-secondary-600 flex-grow">{service.description}</p>
                      <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-500 transition-colors duration-300">
                        Learn More
                        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section bg-primary-50">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white rounded-lg shadow-md border-t-4 border-blue-500"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full">
                  <FaLaptopCode size={32} className="text-blue-500" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-center">Technology Solutions</h3>
              <p className="mb-6 text-center text-secondary-600">
                From custom software to mobile apps, we build scalable technology solutions tailored to your business.
              </p>
              <ul className="space-y-2">
                {['Software Development', 'Web Development', 'Mobile App Development', 'ERP Software'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="mr-2 text-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-white rounded-lg shadow-md border-t-4 border-green-500"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-100 rounded-full">
                  <FaUsers size={32} className="text-green-500" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-center">Business Services</h3>
              <p className="mb-6 text-center text-secondary-600">
                Streamline your operations with our comprehensive business services and management solutions.
              </p>
              <ul className="space-y-2">
                {['IT Staffing', 'Payroll Management', 'Digital Marketing', 'Business Consulting'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 bg-white rounded-lg shadow-md border-t-4 border-yellow-500"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-yellow-100 rounded-full">
                  <FaGraduationCap size={32} className="text-yellow-500" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-center">Educational Services</h3>
              <p className="mb-6 text-center text-secondary-600">
                Transform your educational institution with our specialized academic and training programs.
              </p>
              <ul className="space-y-2">
                {['Academic Excellence', 'Campus Recruitment Training', 'Certifications', 'Professional Development'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="mr-2 text-yellow-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="section bg-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 rounded-full w-64 h-64 bg-primary-200 opacity-20"></div>
        <div className="absolute -left-20 -bottom-20 rounded-full w-80 h-80 bg-secondary-200 opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-3xl font-bold md:text-4xl"
            >
              Need a Custom Solution?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg text-secondary-600"
            >
              Don't see exactly what you're looking for? We specialize in creating custom solutions tailored to your unique business needs. Our team of experts will work closely with you to understand your requirements and deliver a solution that exceeds your expectations.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/contact" className="btn btn-primary px-8 py-3 text-lg inline-flex items-center">
                <span>Contact Us for Custom Solutions</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-secondary-50">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Why Choose Our Services</h2>
              <p className="mb-8 text-lg text-secondary-600">
                We combine technical expertise with industry knowledge to deliver solutions that drive business growth and efficiency.
              </p>
              <ul className="space-y-4">
                {[
                  'Expert team with years of industry experience',
                  'Tailored solutions that address your specific needs',
                  'Commitment to quality and customer satisfaction',
                  'Transparent communication throughout the project',
                  'Ongoing support and maintenance'
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="mr-3 text-primary-600 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-secondary-800">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Professional team meeting" 
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-5 -right-5 w-full h-full border-4 border-primary-500 rounded-lg z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-800 text-white" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 bg-primary-800/80"></div>
        <div className="container relative z-10">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
              <p className="mb-6 text-lg">
                Let's discuss how our services can help you achieve your business goals and stay ahead of the competition.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-right"
            >
              <Link to="/contact" className="btn btn-secondary inline-flex items-center">
                <span>Get Started Today</span>
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

export default Services;
