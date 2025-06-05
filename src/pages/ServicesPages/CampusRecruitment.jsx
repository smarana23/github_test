import { motion } from 'framer-motion';
import { 
  FaUserTie, 
  FaUniversity, 
  FaClipboardList, 
  FaUserCheck, 
  FaLaptop 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero';

const CampusRecruitment = () => {
  const services = [
    {
      icon: <FaUserTie className="text-primary-600" size={32} />,
      title: 'Talent Acquisition',
      description: 'Strategic recruitment strategies to identify and attract top emerging talent from premier institutions.',
      image: 'https://images.unsplash.com/photo-1519075519308-a6e149a36cbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaUniversity className="text-primary-600" size={32} />,
      title: 'Campus Partnerships',
      description: 'Building strong collaborative networks with leading educational institutions nationwide.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaClipboardList className="text-primary-600" size={32} />,
      title: 'Assessment Solutions',
      description: 'Comprehensive skill evaluation and screening processes to match candidates with organizational needs.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaUserCheck className="text-primary-600" size={32} />,
      title: 'Candidate Screening',
      description: 'In-depth candidate profiling and background verification to ensure quality recruitment.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaLaptop className="text-primary-600" size={32} />,
      title: 'Virtual Recruitment',
      description: 'Advanced digital platforms for seamless online campus recruitment drives.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Campus Mapping',
      description: 'Identifying and prioritizing top-tier educational institutions aligned with our client requirements.'
    },
    {
      number: '02',
      title: 'Engagement Strategy',
      description: 'Developing customized recruitment strategies and engagement plans for each campus.'
    },
    {
      number: '03',
      title: 'Skill Assessment',
      description: 'Conducting comprehensive skill tests and interviews to evaluate candidate potential.'
    },
    {
      number: '04',
      title: 'Selection Process',
      description: 'Rigorous candidate screening and matching with organizational job profiles.'
    },
    {
      number: '05',
      title: 'Onboarding Support',
      description: 'Providing seamless transition and integration support for selected candidates.'
    }
  ];

  const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '1200+', label: 'Placements' },
    { value: '150+', label: 'Campus Partners' },
    { value: '45+', label: 'Industries Served' }
  ];

  return (
    <>
      <Hero
        title="Campus Recruitment Solutions"
        subtitle="Transforming campus talent acquisition with strategic, comprehensive recruitment approaches that connect top graduates with industry-leading opportunities."
        primaryButtonText="Explore Recruitment Services"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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
          <h2 className="section-title">Our Campus Recruitment Services</h2>
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

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Why Choose Our Campus Recruitment Services?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-8 overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary-600"></div>
              <h3 className="mb-4 text-2xl font-semibold">Cost-Effective Hiring</h3>
              <p className="text-secondary-600">
                Streamline your recruitment process and reduce hiring costs with our targeted campus recruitment strategies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative p-8 overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary-600"></div>
              <h3 className="mb-4 text-2xl font-semibold">Future-Ready Talent</h3>
              <p className="text-secondary-600">
                Access to fresh perspectives and innovative thinking through newly graduated talent equipped with the latest skills.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative p-8 overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary-600"></div>
              <h3 className="mb-4 text-2xl font-semibold">Enhanced Brand Visibility</h3>
              <p className="text-secondary-600">
                Strengthen your employer brand on campuses through strategic partnerships and engaging recruitment activities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative p-8 overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary-600"></div>
              <h3 className="mb-4 text-2xl font-semibold">Long-Term Growth</h3>
              <p className="text-secondary-600">
                Build a sustainable talent pipeline for your organization's future leadership and specialized roles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Campus Recruitment Process</h2>
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

      <section className="section bg-primary-800 text-white" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
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
              <h2 className="mb-4 text-3xl font-bold">Unlock Your Recruitment Potential</h2>
              <p className="mb-6 text-lg">
                Connect with our campus recruitment experts to develop a winning talent acquisition strategy tailored to your organization's needs.
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
                Start Recruiting Top Talent
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section bg-secondary-50">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white rounded-lg shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="Client" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                <p className="text-secondary-600">HR Director, Tech Innovations Inc.</p>
              </div>
            </div>
            <p className="mb-4 text-lg italic text-secondary-700">
              "Their campus recruitment services have transformed our hiring process. We've been able to attract exceptional talent directly from top universities, significantly reducing our time-to-hire and improving the quality of our workforce."
            </p>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CampusRecruitment;