import { motion } from 'framer-motion';
import { 
  FaChartBar, 
  FaClipboardList, 
  FaCogs, 
  FaDatabase, 
  FaShoppingCart,
  FaUsersCog,
  FaChartLine,
  FaServer,
  FaMobileAlt,
  FaStar,
  FaCheck,
  FaFileInvoiceDollar,
  FaRegClock,
  FaRegLightbulb
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero';

const ERPSoftware = () => {
  const services = [
    {
      icon: <FaShoppingCart className="text-primary-600" size={32} />,
      title: 'Sales Management',
      description: 'Comprehensive sales tracking and customer relationship management solutions.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaClipboardList className="text-primary-600" size={32} />,
      title: 'Inventory Control',
      description: 'Real-time inventory tracking and automated stock management systems.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaChartBar className="text-primary-600" size={32} />,
      title: 'Financial Reporting',
      description: 'Advanced financial analytics and customizable reporting tools.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaCogs className="text-primary-600" size={32} />,
      title: 'Process Automation',
      description: 'Streamline business processes with intelligent workflow automation.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaDatabase className="text-primary-600" size={32} />,
      title: 'Data Integration',
      description: 'Seamless integration of multiple business systems and data sources.',
      image: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaMobileAlt className="text-primary-600" size={32} />,
      title: 'Mobile Accessibility',
      description: 'Access critical business data and operations from any device, anywhere.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Business Analysis',
      description: 'In-depth consultation to understand your unique business requirements and challenges.'
    },
    {
      number: '02',
      title: 'Solution Design',
      description: 'Customized ERP solution architecture tailored to your specific business needs.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Agile development with modular approach ensuring scalability and flexibility.'
    },
    {
      number: '04',
      title: 'Testing & Validation',
      description: 'Comprehensive testing across all modules and business scenarios.'
    },
    {
      number: '05',
      title: 'Deployment & Training',
      description: 'Smooth implementation and comprehensive staff training and support.'
    }
  ];

  const stats = [
    { value: '63%', label: 'Average Cost Reduction', icon: <FaFileInvoiceDollar className="text-green-500" size={24} /> },
    { value: '250+', label: 'Successful Implementations', icon: <FaServer className="text-blue-500" size={24} /> },
    { value: '80%', label: 'Workflow Efficiency Gain', icon: <FaRegClock className="text-yellow-500" size={24} /> },
    { value: '95%', label: 'Client Satisfaction', icon: <FaUsersCog className="text-purple-500" size={24} /> }
  ];

  const testimonials = [
    {
      name: "Jonathan Richards",
      role: "CTO, TechManufacturing Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "Implementing this ERP solution transformed our operations. We've reduced inventory costs by 32% and improved order fulfillment times by 47%. The system has paid for itself within the first year."
    },
    {
      name: "Emily Watkins",
      role: "Operations Director, Global Logistics",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "The customized ERP solution provided unprecedented visibility into our supply chain. Real-time analytics have enabled us to make data-driven decisions that improved our overall business performance."
    }
  ];

  const keyFeatures = [
    {
      icon: <FaRegLightbulb className="text-amber-500" />,
      title: "Intelligent Analytics",
      description: "AI-powered business intelligence that delivers actionable insights from your operational data."
    },
    {
      icon: <FaUsersCog className="text-blue-500" />,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed for maximum productivity with minimal training requirements."
    },
    {
      icon: <FaChartLine className="text-green-500" />,
      title: "Scalable Architecture",
      description: "Flexible systems that grow with your business, from startup to enterprise scale."
    }
  ];

  return (
    <>
      <Hero
        title="Enterprise Resource Planning Solutions"
        subtitle="Streamline operations, enhance productivity, and drive growth with our integrated ERP software solutions."
        primaryButtonText="Get ERP Consultation"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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

      {/* Services Section */}
      <section className="section bg-secondary-50">
        <div className="container">
          <h2 className="section-title">Our ERP Software Services</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden bg-white rounded-lg shadow-md group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex items-center justify-center w-12 h-12 mb-3 text-white bg-secondary rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-secondary-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Key ERP Features</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full opacity-10 bg-primary-500"></div>
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="mb-4 text-secondary-600">{feature.description}</p>
                <Link to="/contact" className="inline-flex items-center text-primary-600 hover:text-primary-700 group-hover:underline">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our ERP Implementation Process</h2>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-6 p-6 bg-white rounded-lg shadow-md"
              >
                <div className="text-5xl font-bold text-primary-600">{step.number}</div>
                <div>
                  <h3 className="mb-2 text-2xl font-semibold">{step.title}</h3>
                  <p className="text-secondary-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section bg-secondary-50">
        <div className="container">
          <h2 className="section-title">ERP Success Story</h2>
          <div className="p-8 mb-8 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-primary-600">Manufacturing Efficiency Transformation</h3>
                <p className="mb-6 text-secondary-600">
                  A mid-sized manufacturing company struggled with inventory management and production planning. Our ERP solution delivered:
                </p>
                <ul className="mb-6 space-y-2">
                  {[
                    'Real-time production floor monitoring',
                    'Automated materials replenishment',
                    'Integrated quality control systems',
                    'Predictive maintenance scheduling'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="flex-shrink-0 mt-1 mr-2 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-lg font-bold text-green-700">Results:</p>
                  <p className="text-green-600">41% reduction in production downtime and 53% improvement in on-time delivery performance.</p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22731d2958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Manufacturing ERP implementation" 
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-secondary-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mb-4 text-lg italic text-secondary-700">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-800 text-white" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
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
              <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business Operations?</h2>
              <p className="mb-6 text-lg">
                Connect with our ERP experts to evaluate your current systems and discover a tailored solution for your business needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-right"
            >
              <Link to="/contact" className="btn btn-secondary">
                Schedule an ERP Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">How long does an ERP implementation typically take?</h3>
              <p className="text-secondary-600">Implementation timelines vary based on the complexity of your business and scope of the solution. Simple implementations can be completed in 3-6 months, while more complex enterprise-wide solutions may take 9-12 months. Our phased approach ensures you begin seeing benefits quickly.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">How will an ERP solution integrate with our existing systems?</h3>
              <p className="text-secondary-600">Our ERP solutions are built with open APIs and modern integration capabilities. We can connect with virtually any existing system, from legacy databases to specialized industry applications, ensuring a unified data ecosystem without replacing systems that work well for you.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">What ROI can we expect from implementing an ERP system?</h3>
              <p className="text-secondary-600">Most clients see ROI within 12-18 months of full implementation. Benefits include reduced operational costs (15-30% on average), improved inventory management (20-50% reduction in excess stock), enhanced productivity (10-25% improvement in process efficiency), and better decision making through real-time analytics.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ERPSoftware;