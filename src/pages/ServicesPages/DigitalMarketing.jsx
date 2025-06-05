import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaSearchengin, 
  FaFacebookSquare, 
  FaEnvelope, 
  FaShareAlt,
  FaLaptop,
  FaBullhorn,
  FaMobileAlt,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaStar,
  FaCheck,
  FaUsers,
  FaGlobe
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero';

const DigitalMarketing = () => {
  const services = [
    {
      icon: <FaSearchengin className="text-primary-600" size={32} />,
      title: 'SEO Optimization',
      description: 'Comprehensive search engine optimization to improve online visibility and organic traffic.',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaFacebookSquare className="text-primary-600" size={32} />,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns to engage audiences and build brand awareness.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaEnvelope className="text-primary-600" size={32} />,
      title: 'Email Marketing',
      description: 'Targeted email campaigns designed to nurture leads and drive conversions.',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaChartLine className="text-primary-600" size={32} />,
      title: 'Performance Analytics',
      description: 'Detailed marketing analytics to track, measure, and optimize campaign performance.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaShareAlt className="text-primary-600" size={32} />,
      title: 'Content Strategy',
      description: 'Compelling content marketing that resonates with your target audience.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Market Research',
      description: 'In-depth analysis of your industry, target audience, and competitive landscape.'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Creating a customized digital marketing strategy aligned with your business goals.'
    },
    {
      number: '03',
      title: 'Campaign Execution',
      description: 'Implementing multi-channel marketing campaigns across digital platforms.'
    },
    {
      number: '04',
      title: 'Performance Tracking',
      description: 'Real-time monitoring and analysis of campaign performance and key metrics.'
    },
    {
      number: '05',
      title: 'Continuous Optimization',
      description: 'Iterative improvements based on data-driven insights and market trends.'
    }
  ];

  const stats = [
    { value: '147%', label: 'Average ROI', icon: <FaChartLine className="text-green-500" size={24} /> },
    { value: '500+', label: 'Clients Worldwide', icon: <FaGlobe className="text-blue-500" size={24} /> },
    { value: '15M+', label: 'Ad Impressions Monthly', icon: <FaBullhorn className="text-yellow-500" size={24} /> },
    { value: '94%', label: 'Client Retention', icon: <FaUsers className="text-purple-500" size={24} /> }
  ];

  const marketingPartners = [
    { name: 'Google', logo: '/images/logos/google.svg' },
    { name: 'Facebook', logo: '/images/logos/facebook.svg' },
    { name: 'Instagram', logo: '/images/logos/instagram.svg' },
    { name: 'LinkedIn', logo: '/images/logos/linkedin.svg' },
    { name: 'Twitter', logo: '/images/logos/twitter.svg' },
    { name: 'HubSpot', logo: '/images/logos/hubspot.svg' }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechNova",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "Their digital marketing team transformed our online presence. Within six months, our organic traffic increased by 200% and lead generation improved by 85%. The ROI has been tremendous."
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, GrowthMasters",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "The comprehensive digital strategy developed by the team helped us navigate a challenging market. Their data-driven approach and creative campaigns delivered consistent results quarter after quarter."
    }
  ];

  const specializedServices = [
    {
      icon: <FaYoutube className="text-red-500" />,
      title: "Video Marketing",
      description: "Engaging video content that boosts audience engagement and brand storytelling across platforms."
    },
    {
      icon: <FaMobileAlt className="text-blue-500" />,
      title: "Mobile Marketing",
      description: "Targeted mobile campaigns reaching customers on smartphones and tablets with precision."
    },
    {
      icon: <FaInstagram className="text-purple-500" />,
      title: "Influencer Marketing",
      description: "Strategic partnerships with key industry influencers to amplify your brand message."
    }
  ];

  return (
    <>
      <Hero
        title="Digital Marketing Solutions"
        subtitle="Transform your online presence with data-driven strategies that deliver measurable results and exceptional ROI."
        primaryButtonText="Get Your Marketing Strategy"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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
          <h2 className="section-title">Our Digital Marketing Services</h2>
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

      {/* Specialized Marketing Services */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Specialized Marketing Solutions</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full opacity-10 bg-primary-500"></div>
                <div className="mb-4 text-3xl">{service.icon}</div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="mb-4 text-secondary-600">{service.description}</p>
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
          <h2 className="section-title">Our Marketing Process</h2>
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
          <h2 className="section-title">Success Stories</h2>
          <div className="p-8 mb-8 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-primary-600">E-Commerce Revenue Growth</h3>
                <p className="mb-6 text-secondary-600">
                  An online retailer struggled with cart abandonment and low conversion rates. Our comprehensive digital strategy included:
                </p>
                <ul className="mb-6 space-y-2">
                  {[
                    'Search engine optimization for product pages',
                    'Targeted social media advertising campaign',
                    'Email remarketing automation',
                    'User experience improvements'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="flex-shrink-0 mt-1 mr-2 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-lg font-bold text-green-700">Results:</p>
                  <p className="text-green-600">67% increase in conversion rate and 112% growth in quarterly revenue.</p>
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
                  src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="E-commerce growth case study" 
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

      {/* Marketing Partners */}
      <section className="py-16 bg-secondary-50">
        <div className="container">
          <h2 className="mb-12 text-2xl font-bold text-center">Marketing Platform Partners</h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
            {marketingPartners.map((partner, index) => (
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
              <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Digital Presence?</h2>
              <p className="mb-6 text-lg">
                Connect with our digital marketing experts to evaluate your current strategy and discover untapped growth opportunities.
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
                Schedule a Strategy Session
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
              <h3 className="mb-3 text-xl font-semibold">How quickly can I expect to see results from digital marketing?</h3>
              <p className="text-secondary-600">Results timelines vary by channel and strategy. SEO typically shows initial improvements in 3-6 months, while paid advertising can generate results immediately. We provide detailed timelines and expectations during our strategy development phase.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">How do you measure the success of marketing campaigns?</h3>
              <p className="text-secondary-600">We establish clear KPIs aligned with your business objectives from the start. Our comprehensive analytics tracking includes conversions, ROI, traffic quality, engagement metrics, and more. You'll receive regular detailed reports with insights and recommendations.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">What budget should I allocate for digital marketing?</h3>
              <p className="text-secondary-600">Marketing budgets should be viewed as investments with expected returns. We work with businesses of all sizes and can develop strategies for various budget levels. Our focus is always on delivering measurable ROI regardless of budget size.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;
