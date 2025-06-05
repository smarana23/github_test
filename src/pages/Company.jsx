import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaRocket, FaCogs, FaHandshake, FaHeadset, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import Hero from '../components/common/Hero';

const Company = () => {
  const location = useLocation();
  const aboutUsRef = useRef(null);
  const howWeWorkRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const ourTeamRef = useRef(null);

  const whyChooseUsReasons = [
    {
      icon: <FaUsers className="text-primary-600" size={32} />,
      title: 'Expert Team',
      description: 'Our team consists of industry experts with years of experience in their respective fields.'
    },
    {
      icon: <FaRocket className="text-primary-600" size={32} />,
      title: 'Innovation',
      description: 'We stay at the forefront of technology to deliver innovative solutions that drive results.'
    },
    {
      icon: <FaCogs className="text-primary-600" size={32} />,
      title: 'Customization',
      description: 'Every solution we provide is tailored to meet your specific business needs and goals.'
    },
    {
      icon: <FaHandshake className="text-primary-600" size={32} />,
      title: 'Client Partnership',
      description: 'We view our clients as partners and are committed to their long-term success.'
    },
    {
      icon: <FaHeadset className="text-primary-600" size={32} />,
      title: 'Exceptional Support',
      description: 'We provide ongoing support to ensure the continued success of our solutions.'
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "15+ years of experience in software architecture and development",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Lead Software Engineer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Expert in full-stack development and cloud architecture",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "UX/UI Design Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Passionate about creating intuitive and engaging user experiences",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "David Kim",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Certified PMP with expertise in agile methodologies",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  const companyImages = [
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Modern Office Space"
    },
    {
      url: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Team Collaboration"
    },
    {
      url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Innovation Hub"
    }
  ];

  useEffect(() => {
    if (location.state?.scrollTo) {
      let targetRef;
      switch(location.state.scrollTo) {
        case 'about-us':
          targetRef = aboutUsRef;
          break;
        case 'how-we-work':
          targetRef = howWeWorkRef;
          break;
        case 'why-choose-us':
          targetRef = whyChooseUsRef;
          break;
        case 'our-team':
          targetRef = ourTeamRef;
          break;
        default:
          targetRef = null;
      }

      if (targetRef?.current) {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
      }

      window.history.replaceState(null, '', location.pathname);
    }
  }, [location]);

  return (
    <>
      <Hero
        title="About Our Company"
        subtitle="Learn about RDR Software Solutions and our mission to deliver innovative technology solutions"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        overlayColor="primary"
      />

      {/* About Us Section */}
      <section ref={aboutUsRef} id="about-us" className="section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-6 text-lg">
                RDR Software Solutions is a leading provider of innovative software solutions and IT services, dedicated to helping businesses thrive in the digital era.
              </p>
              <p className="mb-6">
                Founded with a vision to bridge the gap between technology and business success, we have grown into a trusted partner for organizations of all sizes across various industries.
              </p>
              <p>
                Our team of experienced professionals combines technical expertise with industry knowledge to deliver solutions that not only meet but exceed our clients' expectations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {companyImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="object-cover w-full h-48 transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="section bg-secondary-50">
        <div className="container">
          <h2 className="section-title">Leadership</h2>
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="John Anderson - CEO"
                  className="object-cover w-full h-[400px] transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white">John Anderson</h3>
                  <p className="text-white/90">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-6 text-2xl font-bold text-primary-700">Meet Our CEO</h3>
              <p className="mb-6 text-lg">
                John Anderson is a visionary leader with over 15 years of experience in technology innovation and business transformation. His forward-thinking approach and strategic vision have been the driving force behind RDR Software Solutions' success.
              </p>
              <p className="mb-8">
                Under his leadership, the company has achieved remarkable growth, expanded into new markets, and developed cutting-edge solutions that have revolutionized how businesses operate in the digital landscape.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a 
                  href="/ceo-founder" 
                  className="inline-flex items-center px-6 py-3 text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Know More About Our CEO
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section ref={howWeWorkRef} id="how-we-work" className="section bg-secondary-50">
        <div className="container">
          <h2 className="section-title">How We Work</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white bg-primary-600 rounded-full">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Discovery & Planning</h3>
              <p>
                We begin by understanding your business, goals, and challenges. This helps us create a strategic plan tailored to your specific needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white bg-primary-600 rounded-full">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Design & Development</h3>
              <p>
                Our expert team designs and develops solutions with a focus on quality, user experience, and alignment with your business objectives.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white bg-primary-600 rounded-full">
                <span className="text-xl font-bold">03</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Implementation & Support</h3>
              <p>
                We ensure smooth implementation and provide ongoing support to help you maximize the value of your solution over time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseUsRef} id="why-choose-us" className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUsReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center bg-white rounded-lg shadow-md"
              >
                <div className="flex justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold">{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section ref={ourTeamRef} id="our-team" className="section bg-secondary-50">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden bg-white rounded-lg shadow-lg group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                      <a href={member.social.linkedin} className="text-white hover:text-primary-400 transition-colors">
                        <FaLinkedin size={20} />
                      </a>
                      <a href={member.social.twitter} className="text-white hover:text-primary-400 transition-colors">
                        <FaTwitter size={20} />
                      </a>
                      <a href={member.social.github} className="text-white hover:text-primary-400 transition-colors">
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{member.name}</h3>
                  <p className="mb-3 text-primary-600">{member.role}</p>
                  <p className="text-secondary-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;