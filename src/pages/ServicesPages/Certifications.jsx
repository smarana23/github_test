import { motion } from 'framer-motion';
import { 
  FaCertificate, 
  FaGraduationCap, 
  FaBookOpen, 
  FaChalkboardTeacher, 
  FaClipboardCheck,
  FaStar,
  FaAward,
  FaBriefcase,
  FaChartLine,
  FaUsers,
  FaLaptopCode
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero';

const Certifications = () => {
  const services = [
    {
      icon: <FaGraduationCap className="text-primary-600" size={32} />,
      title: 'Professional Certifications',
      description: 'Comprehensive certification programs for industry-recognized professional credentials.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaBookOpen className="text-primary-600" size={32} />,
      title: 'Skill Enhancement',
      description: 'Targeted learning paths to develop and validate your technical and professional skills.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaChalkboardTeacher className="text-primary-600" size={32} />,
      title: 'Expert-Led Training',
      description: 'Instructor-led certification courses with hands-on practical training and guidance.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaCertificate className="text-primary-600" size={32} />,
      title: 'Certification Exam Prep',
      description: 'Comprehensive preparation programs for major industry certification exams.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaClipboardCheck className="text-primary-600" size={32} />,
      title: 'Continuous Learning',
      description: 'Ongoing education and recertification programs to keep your skills current.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Skills Assessment',
      description: 'Comprehensive evaluation of your current skills and professional development goals.'
    },
    {
      number: '02',
      title: 'Certification Roadmap',
      description: 'Personalized certification strategy aligned with your career objectives.'
    },
    {
      number: '03',
      title: 'Training & Preparation',
      description: 'Intensive training programs with expert instructors and comprehensive study materials.'
    },
    {
      number: '04',
      title: 'Exam Readiness',
      description: 'Practice exams, mock tests, and targeted coaching to ensure exam success.'
    },
    {
      number: '05',
      title: 'Certification & Support',
      description: 'Exam registration assistance, certification tracking, and ongoing career guidance.'
    }
  ];

  const stats = [
    { value: '95%', label: 'Exam Pass Rate', icon: <FaStar className="text-yellow-500" size={24} /> },
    { value: '25,000+', label: 'Certifications Awarded', icon: <FaAward className="text-primary-600" size={24} /> },
    { value: '200+', label: 'Industry Partners', icon: <FaBriefcase className="text-secondary-600" size={24} /> },
    { value: '40+', label: 'Certification Tracks', icon: <FaChartLine className="text-green-600" size={24} /> }
  ];
  
  const certificationPartners = [
    { name: 'Microsoft', logo: '/images/logos/microsoft.svg' },
    { name: 'AWS', logo: '/images/logos/aws.svg' },
    { name: 'Google', logo: '/images/logos/google.svg' },
    { name: 'Cisco', logo: '/images/logos/cisco.svg' },
    { name: 'CompTIA', logo: '/images/logos/comptia.svg' },
    { name: 'Oracle', logo: '/images/logos/oracle.svg' }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      role: "IT Professional",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "The certification program exceeded my expectations. The structured curriculum and expert guidance helped me pass my exam on the first attempt and led to an immediate promotion at work."
    },
    {
      name: "Sophia Chen",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "The personalized certification roadmap aligned perfectly with my career goals. Their exam prep resources were comprehensive, and the mock exams accurately reflected the actual certification exam."
    }
  ];

  return (
    <>
      <Hero
        title="Professional Certification Programs"
        subtitle="Accelerate your career with our comprehensive certification and skill development programs trusted by industry leaders."
        primaryButtonText="Start Your Certification Journey"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1571504211935-1c936b327411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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

      <section className="section bg-secondary-50">
        <div className="container">
          <h2 className="section-title">Our Certification Services</h2>
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

      {/* Featured Certification Tracks */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Popular Certification Tracks</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-6 overflow-hidden bg-white rounded-lg shadow-md group hover:shadow-lg"
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-blue-500 rounded-full opacity-10"></div>
              <FaUsers className="mb-4 text-blue-500" size={36} />
              <h3 className="mb-3 text-xl font-bold">Project Management</h3>
              <p className="mb-4 text-secondary-600">Master project management methodologies with certifications like PMP, PRINCE2, and Agile.</p>
              <Link to="/certifications/project-management" className="text-blue-500 hover:underline">
                Learn More
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative p-6 overflow-hidden bg-white rounded-lg shadow-md group hover:shadow-lg"
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-green-500 rounded-full opacity-10"></div>
              <FaChartLine className="mb-4 text-green-500" size={36} />
              <h3 className="mb-3 text-xl font-bold">Data Science & Analytics</h3>
              <p className="mb-4 text-secondary-600">Build data expertise with certifications in Python, R, machine learning, and data visualization.</p>
              <Link to="/certifications/data-science" className="text-green-500 hover:underline">
                Learn More
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative p-6 overflow-hidden bg-white rounded-lg shadow-md group hover:shadow-lg"
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-purple-500 rounded-full opacity-10"></div>
              <FaLaptopCode className="mb-4 text-purple-500" size={36} />
              <h3 className="mb-3 text-xl font-bold">Cloud Computing</h3>
              <p className="mb-4 text-secondary-600">Become cloud-certified with AWS, Azure, Google Cloud, and multi-cloud architecture training.</p>
              <Link to="/certifications/cloud-computing" className="text-purple-500 hover:underline">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Certification Process</h2>
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

      {/* Testimonials */}
      <section className="section bg-secondary-50">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>
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

      {/* Certification Partners */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="mb-12 text-2xl font-bold text-center">Certification Partners</h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
            {certificationPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm"
              >
                <img src={partner.logo} alt={`${partner.name} Logo`} className="h-12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary-800 text-white" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
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
              <h2 className="mb-4 text-3xl font-bold">Elevate Your Professional Credentials</h2>
              <p className="mb-6 text-lg">
                Connect with our certification experts to map out your professional development path and take your career to new heights.
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
                Explore Certification Options
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
              <h3 className="mb-3 text-xl font-semibold">How long does it typically take to complete a certification?</h3>
              <p className="text-secondary-600">Certification timelines vary based on the program complexity and your prior experience. Most courses range from 4-12 weeks, with flexible scheduling options to accommodate working professionals.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">Do you offer financial assistance or payment plans?</h3>
              <p className="text-secondary-600">Yes, we offer several financing options including installment plans, employer sponsorship programs, and scholarships for qualifying candidates. Our team can help you find the best option for your situation.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">What happens if I don't pass my certification exam?</h3>
              <p className="text-secondary-600">Our exam pass guarantee means we'll continue to support you until you succeed. If you don't pass on your first attempt, we provide additional coaching, exam vouchers, and customized study plans at no extra cost.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;