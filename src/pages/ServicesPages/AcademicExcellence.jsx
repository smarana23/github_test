import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaBookReader, 
  FaChalkboardTeacher, 
  FaLaptopCode, 
  FaChartLine,
  FaBrain,
  FaUsers,
  FaLightbulb
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero';

const AcademicExcellence = () => {
  const services = [
    {
      icon: <FaGraduationCap className="text-primary-600" size={32} />,
      title: 'Curriculum Development',
      description: 'Cutting-edge, industry-aligned academic programs designed to prepare students for future challenges.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaBookReader className="text-primary-600" size={32} />,
      title: 'Learning Resources',
      description: 'Comprehensive digital and physical learning materials to support holistic education.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaChalkboardTeacher className="text-primary-600" size={32} />,
      title: 'Faculty Training',
      description: 'Advanced professional development programs to enhance teaching methodologies.',
      image: 'https://images.unsplash.com/photo-1573166953836-1970168cebae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaLaptopCode className="text-primary-600" size={32} />,
      title: 'Digital Learning Solutions',
      description: 'Interactive online platforms and e-learning tools to enhance student engagement.',
      image: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaChartLine className="text-primary-600" size={32} />,
      title: 'Performance Analytics',
      description: 'Data-driven insights to track and improve student and institutional performance.',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Needs Assessment',
      description: 'Comprehensive evaluation of current academic infrastructure and learning goals.'
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description: 'Developing tailored academic excellence strategies aligned with institutional objectives.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Systematic rollout of academic enhancement programs and digital learning solutions.'
    },
    {
      number: '04',
      title: 'Training & Support',
      description: 'Continuous faculty and staff training to ensure successful program adoption.'
    },
    {
      number: '05',
      title: 'Continuous Improvement',
      description: 'Regular performance reviews and iterative improvements based on analytics.'
    }
  ];

  const stats = [
    { value: '93%', label: 'Student Success Rate' },
    { value: '500+', label: 'Partnered Institutions' },
    { value: '10K+', label: 'Faculty Trained' },
    { value: '25+', label: 'Countries Served' }
  ];

  const features = [
    {
      icon: <FaBrain className="text-white" size={28} />,
      title: 'Cognitive Development',
      description: 'Structured approaches to enhance critical thinking and problem-solving skills.'
    },
    {
      icon: <FaUsers className="text-white" size={28} />,
      title: 'Collaborative Learning',
      description: 'Team-based methodologies that foster peer interaction and knowledge sharing.'
    },
    {
      icon: <FaLightbulb className="text-white" size={28} />,
      title: 'Innovative Pedagogy',
      description: 'Advanced teaching techniques that adapt to diverse learning styles and needs.'
    }
  ];

  return (
    <>
      <Hero
        title="Academic Excellence Solutions"
        subtitle="Transform educational experiences with our comprehensive academic excellence services. We empower institutions to deliver world-class education through innovative strategies and digital solutions."
        primaryButtonText="Get Consultation"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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
                <div className="mb-2 text-3xl font-bold text-primary-600 md:text-4xl">{stat.value}</div>
                <div className="text-secondary-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary-50">
        <div className="container">
          <h2 className="section-title">Our Academic Excellence Services</h2>
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

      {/* Value Proposition Section */}
      <section className="section bg-primary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold">Our Approach to Academic Excellence</h2>
            <p className="text-lg text-white/80">
              We combine innovative educational methodologies with data-driven insights to create transformative learning environments that prepare students for real-world challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 text-center rounded-lg bg-primary-800/50 hover:bg-primary-800 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary-600 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Academic Excellence Approach</h2>
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
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden bg-white rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Case Study" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white rounded-full bg-primary-600">Case Study</span>
                <h3 className="mb-3 text-2xl font-bold">University of Innovation</h3>
                <p className="mb-6 text-gray-600">
                  Implemented a comprehensive digital transformation strategy that resulted in a 40% increase in student engagement and a 25% improvement in learning outcomes across all departments.
                </p>
                <Link to="/case-studies" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700">
                  Read Full Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-primary-800 text-white" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
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
              <h2 className="mb-4 text-3xl font-bold">Ready to Elevate Academic Performance?</h2>
              <p className="mb-6 text-lg">
                Let's discuss how our academic excellence solutions can transform your educational institution.
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
                Start Your Journey
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademicExcellence;