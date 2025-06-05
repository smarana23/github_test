import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaLaptopCode, 
  FaCheckCircle, 
  FaClipboardList, 
  FaUserTie,
  FaChartLine,
  FaSearch,
  FaBriefcase,
  FaHandshake,
  FaRegLightbulb,
  FaRegClock,
  FaStar,
  FaCheck
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero';

const ITStaffing = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-primary-600" size={32} />,
      title: 'Technical Recruitment',
      description: 'Specialized recruitment for complex technical roles across various IT domains.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaUserTie className="text-primary-600" size={32} />,
      title: 'Executive Placement',
      description: 'Strategic placement of senior IT leadership and management professionals.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaClipboardList className="text-primary-600" size={32} />,
      title: 'Contract Staffing',
      description: 'Flexible staffing solutions for short-term and project-based technology needs.',
      image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaCheckCircle className="text-primary-600" size={32} />,
      title: 'Skill Validation',
      description: 'Comprehensive technical assessments to ensure candidate competency.',
      image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaUsers className="text-primary-600" size={32} />,
      title: 'Team Augmentation',
      description: 'Seamless integration of skilled professionals into your existing technology teams.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaSearch className="text-primary-600" size={32} />,
      title: 'Specialized Tech Talent',
      description: 'Sourcing rare and in-demand technical talent for specialized projects and positions.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Requirement Analysis',
      description: 'Detailed consultation to understand your specific staffing needs and technical requirements.'
    },
    {
      number: '02',
      title: 'Candidate Sourcing',
      description: 'Leveraging extensive networks and advanced sourcing techniques to identify top talent.'
    },
    {
      number: '03',
      title: 'Screening & Assessment',
      description: 'Rigorous technical and cultural fit evaluations to ensure quality candidates.'
    },
    {
      number: '04',
      title: 'Interview & Selection',
      description: 'Coordinating comprehensive interview processes and candidate presentations.'
    },
    {
      number: '05',
      title: 'Onboarding Support',
      description: 'Ensuring smooth integration and continued success of placed professionals.'
    }
  ];

  const stats = [
    { value: '97%', label: 'Client Retention Rate', icon: <FaHandshake className="text-green-500" size={24} /> },
    { value: '2,500+', label: 'IT Professionals Placed', icon: <FaUsers className="text-blue-500" size={24} /> },
    { value: '72hrs', label: 'Average Fulfillment Time', icon: <FaRegClock className="text-yellow-500" size={24} /> },
    { value: '85+', label: 'Technology Specializations', icon: <FaLaptopCode className="text-purple-500" size={24} /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechSolutions Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "RDR Software has transformed our tech hiring process. Their IT staffing solutions connected us with exceptional talent that would have taken months to find on our own. The quality of candidates and speed of delivery exceeded all expectations."
    },
    {
      name: "Michael Torres",
      role: "Director of Engineering, DataStream",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "Finding qualified developers for our specialized platform was a constant struggle until we partnered with RDR. Their team understood our technical requirements perfectly and delivered candidates who not only had the skills but also matched our company culture."
    }
  ];

  const keyBenefits = [
    {
      icon: <FaRegLightbulb className="text-amber-500" />,
      title: "Industry Expertise",
      description: "Recruiters specialized in niche tech domains who understand complex technical requirements."
    },
    {
      icon: <FaBriefcase className="text-blue-500" />,
      title: "Time Efficiency",
      description: "Reduce your time-to-hire by up to 60% with our pre-vetted talent pool and streamlined process."
    },
    {
      icon: <FaChartLine className="text-green-500" />,
      title: "Quality Assurance",
      description: "Rigorous screening process ensures only top-tier candidates reach your interview stage."
    }
  ];

  return (
    <>
      <Hero
        title="IT Staffing Solutions"
        subtitle="Connect with top-tier IT talent that drives innovation and accelerates your technology initiatives."
        primaryButtonText="Find Your Talent"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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
          <h2 className="section-title">Our IT Staffing Services</h2>
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

      {/* Key Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Why Choose Our IT Staffing</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full opacity-10 bg-primary-500"></div>
                <div className="mb-4 text-3xl">{benefit.icon}</div>
                <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
                <p className="mb-4 text-secondary-600">{benefit.description}</p>
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
          <h2 className="section-title">Our Staffing Process</h2>
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

      {/* Talent Showcase Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Talent Expertise</h2>
          <div className="p-8 mb-8 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-primary-600">We Specialize in These Tech Domains</h3>
                <p className="mb-6 text-secondary-600">
                  Our vast network of IT professionals spans across multiple technology domains, allowing us to quickly connect you with the right talent:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="mb-6 space-y-2">
                    {[
                      'Full-Stack Development',
                      'DevOps & Cloud',
                      'Data Science & AI',
                      'Cybersecurity'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="flex-shrink-0 mt-1 mr-2 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mb-6 space-y-2">
                    {[
                      'Product Management',
                      'UI/UX Design',
                      'Mobile Development',
                      'IT Leadership'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="flex-shrink-0 mt-1 mr-2 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-lg font-bold text-green-700">Our Commitment:</p>
                  <p className="text-green-600">We guarantee placement of qualified candidates within 15 business days or your first month's service fee is waived.</p>
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
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Tech talent collaboration" 
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
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
              <h2 className="mb-4 text-3xl font-bold">Ready to Find Your Perfect Tech Talent?</h2>
              <p className="mb-6 text-lg">
                Our specialized recruiters are standing by to help you build the team that will drive your technology vision forward.
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
                Schedule a Consultation
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
              <h3 className="mb-3 text-xl font-semibold">How quickly can you provide suitable candidates?</h3>
              <p className="text-secondary-600">For most technical positions, we present qualified candidates within 5-7 business days. For highly specialized or senior roles, it may take 7-10 days to ensure the right match. We maintain a database of pre-screened professionals ready for immediate deployment for urgent needs.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">What makes your technical screening process different?</h3>
              <p className="text-secondary-600">Our screening combines traditional technical assessments with real-world problem-solving scenarios relevant to your specific tech stack and business needs. We utilize a proprietary technical evaluation framework that goes beyond checking qualifications to assess critical thinking and adaptability.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">Do you offer any guarantees with your placements?</h3>
              <p className="text-secondary-600">Yes, we stand behind our talent matches. All full-time placements come with a 90-day guarantee period. If a placed candidate doesn't meet expectations within this timeframe, we'll provide a replacement at no additional cost. For contract positions, we offer immediate replacement options should any issues arise.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITStaffing;