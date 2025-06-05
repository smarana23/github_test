import { motion } from 'framer-motion';
import { 
  FaCalculator, 
  FaFileInvoiceDollar, 
  FaLock, 
  FaPrint, 
  FaUserTie,
  FaChartLine,
  FaCloudDownloadAlt,
  FaShieldAlt,
  FaClock,
  FaMoneyBillWave,
  FaStar,
  FaCheck,
  FaHandshake,
  FaRegLightbulb
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero';

const PayrollManagement = () => {
  const services = [
    {
      icon: <FaCalculator className="text-primary-600" size={32} />,
      title: 'Salary Calculation',
      description: 'Automated and precise salary calculations with multiple components and deductions.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaFileInvoiceDollar className="text-primary-600" size={32} />,
      title: 'Tax & Compliance',
      description: 'Comprehensive tax reporting and statutory compliance management.',
      image: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaPrint className="text-primary-600" size={32} />,
      title: 'Payroll Reporting',
      description: 'Detailed and customizable payroll reports for management insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaUserTie className="text-primary-600" size={32} />,
      title: 'Employee Self-Service',
      description: 'Secure portal for employees to access payslips, tax documents, and personal information.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaLock className="text-primary-600" size={32} />,
      title: 'Data Security',
      description: 'Advanced encryption and secure data management for sensitive payroll information.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaCloudDownloadAlt className="text-primary-600" size={32} />,
      title: 'Cloud Integration',
      description: 'Seamless integration with your existing HR and accounting systems.',
      image: 'https://images.unsplash.com/photo-1579389083395-f9c1b67f3b71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Requirement Analysis',
      description: 'Comprehensive review of your current payroll processes and organizational structure.'
    },
    {
      number: '02',
      title: 'System Configuration',
      description: 'Custom setup of payroll system aligned with your specific business rules and policies.'
    },
    {
      number: '03',
      title: 'Data Migration',
      description: 'Secure transfer and integration of existing employee and payroll data.'
    },
    {
      number: '04',
      title: 'Testing & Validation',
      description: 'Rigorous testing to ensure accuracy of calculations and compliance.'
    },
    {
      number: '05',
      title: 'Training & Support',
      description: 'Comprehensive training for HR and ongoing technical support.'
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Calculation Accuracy', icon: <FaCalculator className="text-green-500" size={24} /> },
    { value: '45%', label: 'Time Saved vs Manual', icon: <FaClock className="text-blue-500" size={24} /> },
    { value: '100%', label: 'Regulatory Compliance', icon: <FaShieldAlt className="text-red-500" size={24} /> },
    { value: '90+', label: 'Countries Supported', icon: <FaHandshake className="text-purple-500" size={24} /> }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "HR Director, GlobalTech Inc.",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "Implementing this payroll system has transformed our HR operations. Our processing time has been reduced by 60% and errors have virtually disappeared. The team is exceptionally responsive whenever we need assistance."
    },
    {
      name: "Michael Anderson",
      role: "CFO, Enterprise Solutions",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "The tax compliance features alone have saved us countless hours and potential penalties. The system handles multi-state and international regulations flawlessly, giving our finance team confidence every pay period."
    }
  ];

  const keyFeatures = [
    {
      icon: <FaMoneyBillWave className="text-green-500" />,
      title: "Cost Efficiency",
      description: "Reduce payroll processing costs by up to 40% while minimizing errors and compliance risks."
    },
    {
      icon: <FaChartLine className="text-blue-500" />,
      title: "Data-Driven Insights",
      description: "Advanced analytics and reporting tools to optimize your compensation strategy and budget."
    },
    {
      icon: <FaRegLightbulb className="text-amber-500" />,
      title: "Automated Compliance",
      description: "Stay current with ever-changing tax laws and regulations with automatic updates and alerts."
    }
  ];

  return (
    <>
      <Hero
        title="Payroll Management Solutions"
        subtitle="Streamline your payroll processes with our secure, efficient, and compliant payroll management system."
        primaryButtonText="Get Payroll Consultation"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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
          <h2 className="section-title">Our Payroll Management Services</h2>
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
          <h2 className="section-title">Why Choose Our Payroll System</h2>
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
      <section className="section bg-secondary-50">
        <div className="container">
          <h2 className="section-title">Our Payroll Implementation Process</h2>
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

      {/* Compliance Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Payroll Compliance Assurance</h2>
          <div className="p-8 mb-8 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-primary-600">Stay Compliant in Every Jurisdiction</h3>
                <p className="mb-6 text-secondary-600">
                  Our payroll system automatically keeps track of regulatory changes to ensure your business remains compliant:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="mb-6 space-y-2">
                    {[
                      'Federal Tax Updates',
                      'State & Local Taxes',
                      'Overtime Calculations',
                      'Benefits Deductions'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="flex-shrink-0 mt-1 mr-2 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mb-6 space-y-2">
                    {[
                      'ACA Compliance',
                      'Year-End Reporting',
                      'New Hire Reporting',
                      'Garnishment Processing'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="flex-shrink-0 mt-1 mr-2 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-lg font-bold text-blue-700">Audit-Ready:</p>
                  <p className="text-blue-600">Our system maintains detailed audit trails and generates compliance reports that keep you prepared for any regulatory inspection.</p>
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
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Payroll compliance" 
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-secondary-50">
        <div className="container">
          <h2 className="section-title">Client Success Stories</h2>
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
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
              <h2 className="mb-4 text-3xl font-bold">Simplify Your Payroll Management</h2>
              <p className="mb-6 text-lg">
                Connect with our payroll experts to optimize your employee compensation processes and ensure compliance.
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
                Schedule a Free Demo
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
              <h3 className="mb-3 text-xl font-semibold">How quickly can you implement a new payroll system?</h3>
              <p className="text-secondary-600">Implementation timelines vary based on your company size and complexity. Typically, small to medium businesses can be fully operational within 2-4 weeks, while larger enterprises with multiple locations or countries may require 6-8 weeks. Our phased approach ensures critical functions are up and running quickly.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">Can your system handle multiple pay schedules and employee types?</h3>
              <p className="text-secondary-600">Absolutely. Our payroll system is designed to manage various pay frequencies (weekly, bi-weekly, semi-monthly, monthly) simultaneously. It also handles different employee classifications including full-time, part-time, contractors, and international employees, each with their own tax and compliance requirements.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">What kind of support do you provide after implementation?</h3>
              <p className="text-secondary-600">We offer comprehensive support including a dedicated account manager, 24/7 technical assistance, regular system updates, and ongoing training. Our clients also have access to a knowledge base, video tutorials, and quarterly system reviews to ensure your payroll processes remain optimized as your business evolves.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayrollManagement;