import { motion } from 'framer-motion';
import { 
  FaLaptop, 
  FaUserTie, 
  FaGraduationCap, 
  FaRocket, 
  FaHandshake 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../components/common/Hero';

const Careers = () => {
  const careerHighlights = [
    {
      icon: <FaLaptop className="text-primary-600" size={32} />,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest technologies and innovative solutions across diverse domains.'
    },
    {
      icon: <FaUserTie className="text-primary-600" size={32} />,
      title: 'Professional Growth',
      description: 'Continuous learning programs and clear career progression paths.'
    },
    {
      icon: <FaGraduationCap className="text-primary-600" size={32} />,
      title: 'Learning & Development',
      description: 'Comprehensive training and skill enhancement opportunities.'
    },
    {
      icon: <FaRocket className="text-primary-600" size={32} />,
      title: 'Innovation Culture',
      description: 'Encouraging creativity, innovation, and out-of-the-box thinking.'
    },
    {
      icon: <FaHandshake className="text-primary-600" size={32} />,
      title: 'Collaborative Environment',
      description: 'Supportive and inclusive workplace that values teamwork and diversity.'
    }
  ];

  const openPositions = [
    {
      title: 'Software Engineer',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Digital Marketing Specialist',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Business Analyst',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Sales Executive',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <>
      <Hero
        title="Join Our Team"
        subtitle="Explore career opportunities at RDR Software Solutions and be part of our innovative journey"
        primaryButtonText="View Openings"
        primaryButtonLink="#job-openings"
        backgroundImage="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        overlayColor="tertiary"
      />

      <section className="section bg-secondary-50" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}>
        <div className="absolute inset-0 bg-secondary-50/90"></div>
        <div className="container relative z-10">
          <h2 className="section-title">Why Join Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {careerHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-center">{highlight.title}</h3>
                <p className="text-center text-secondary-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="job-openings">
        <div className="container">
          <h2 className="section-title">Current Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="hidden md:block w-16 h-16 mr-6 rounded-full overflow-hidden">
                  <img 
                    src={position.image} 
                    alt={position.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-800">{position.title}</h3>
                  <p className="text-secondary-600">{position.type} | {position.location}</p>
                </div>
                <Link 
                  to={`/careers/apply/${position.title.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="btn btn-outline-primary"
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary-800 text-white" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div className="absolute inset-0 bg-primary-800/80"></div>
        <div className="container relative z-10">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4 text-3xl font-bold">Ready to Advance Your Career?</h2>
              <p className="mb-6 text-lg">
                We're always looking for talented professionals who are passionate about technology and innovation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-right"
            >
              <Link to="/careers/apply" className="btn btn-secondary">
                Explore Opportunities
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;