import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaAward, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';
import Hero from '../components/common/Hero';

const CeoFounder = () => {
  const achievements = [
    {
      icon: <FaAward className="text-primary-600" size={32} />,
      title: "Industry Recognition",
      description: "Named among Top 50 Tech Leaders by Tech Magazine 2023"
    },
    {
      icon: <FaLightbulb className="text-primary-600" size={32} />,
      title: "Innovation Awards",
      description: "Multiple patents in software architecture and AI integration"
    },
    {
      icon: <FaHandshake className="text-primary-600" size={32} />,
      title: "Global Partnerships",
      description: "Established strategic partnerships with Fortune 500 companies"
    },
    {
      icon: <FaChartLine className="text-primary-600" size={32} />,
      title: "Business Growth",
      description: "Led company to 300% growth in 5 years"
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Global Expansion",
      description: "Successfully expanded operations to 5 new countries"
    },
    {
      year: "2021",
      title: "AI Innovation",
      description: "Launched revolutionary AI-powered software solutions"
    },
    {
      year: "2019",
      title: "Company Founding",
      description: "Established RDR Software Solutions with a vision for innovation"
    },
    {
      year: "2017",
      title: "Tech Leadership",
      description: "Led major digital transformation projects for Fortune 500 companies"
    }
  ];

  return (
    <>
      <Hero
        title="Meet Our Founder & CEO"
        subtitle="Visionary leader driving innovation in software solutions"
        primaryButtonText="Connect on LinkedIn"
        primaryButtonLink="#"
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        overlayColor="primary"
      />

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
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
                  alt="CEO Profile"
                  className="object-cover w-full h-[600px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 rounded-lg shadow-lg transform rotate-12 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">CEO</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-4xl font-bold text-primary-700">John Anderson</h2>
              <p className="mb-6 text-xl text-primary-600">Founder & Chief Executive Officer</p>
              <p className="mb-8 text-lg text-secondary-600">
                With over 15 years of experience in technology leadership and innovation, John has been at the forefront of digital transformation. His vision and expertise have been instrumental in establishing RDR Software Solutions as a leader in the industry.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-3 text-white transition-colors bg-primary-600 rounded-full hover:bg-primary-700">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="p-3 text-white transition-colors bg-primary-600 rounded-full hover:bg-primary-700">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="p-3 text-white transition-colors bg-primary-600 rounded-full hover:bg-primary-700">
                  <FaGithub size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="mb-4 text-3xl font-bold text-primary-700">Key Achievements</h2>
            <p className="text-lg text-secondary-600">
              A track record of success in technology leadership and business innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center bg-white rounded-lg shadow-md"
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{achievement.title}</h3>
                <p className="text-secondary-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="mb-4 text-3xl font-bold text-primary-700">Leadership Journey</h2>
            <p className="text-lg text-secondary-600">
              A timeline of key milestones and achievements
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {item.year}
                </div>
                <div className="flex-grow p-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-secondary-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-primary-800 text-white relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-primary-900/90"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold">Vision for the Future</h2>
              <p className="mb-8 text-lg">
                "Our mission is to empower businesses with innovative technology solutions that drive growth and success. We're committed to pushing the boundaries of what's possible in software development and digital transformation."
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="px-8 py-3 text-primary-900 bg-white rounded-lg hover:bg-primary-50 transition-colors">
                  Read Full Vision
                </a>
                <a href="#" className="px-8 py-3 text-white border border-white rounded-lg hover:bg-white/10 transition-colors">
                  Contact CEO
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CeoFounder; 