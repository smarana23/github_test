import { motion } from 'framer-motion';
import { 
  FaMobile, 
  FaAndroid, 
  FaApple, 
  FaTabletAlt, 
  FaWrench,
  FaCode,
  FaRocket,
  FaMagic,
  FaCog,
  FaShieldAlt,
  FaStar,
  FaUserCheck,
  FaChartLine,
  FaRegLightbulb,
  FaCheck
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero';

const MobileAppDevelopment = () => {
  const services = [
    {
      icon: <FaAndroid className="text-primary-600" size={32} />,
      title: 'Android Development',
      description: 'Native Android applications designed for optimal performance and user experience.',
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaApple className="text-primary-600" size={32} />,
      title: 'iOS Development',
      description: 'Robust iOS applications leveraging the latest Apple technologies and design guidelines.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaTabletAlt className="text-primary-600" size={32} />,
      title: 'Cross-Platform Solutions',
      description: 'Unified mobile applications that work seamlessly across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaMobile className="text-primary-600" size={32} />,
      title: 'UI/UX Design',
      description: 'Intuitive and engaging mobile app interfaces that enhance user interaction.',
      image: 'https://images.unsplash.com/photo-1551650992-ee4fd47df41f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaWrench className="text-primary-600" size={32} />,
      title: 'App Maintenance',
      description: 'Ongoing support and updates to keep your mobile application current and competitive.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaCog className="text-primary-600" size={32} />,
      title: 'API Integration',
      description: 'Seamless connection with third-party services and backend systems.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Concept & Planning',
      description: 'Detailed consultation to define app objectives, target audience, and core features.'
    },
    {
      number: '02',
      title: 'Design Phase',
      description: 'Creating wireframes and interactive prototypes to visualize the app experience.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Agile development process with iterative builds and continuous client feedback.'
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Comprehensive testing across devices, platforms, and use scenarios.'
    },
    {
      number: '05',
      title: 'Deployment & Support',
      description: 'App store submission and ongoing technical support and maintenance.'
    }
  ];

  const stats = [
    { value: '200+', label: 'Apps Delivered', icon: <FaMobile className="text-green-500" size={24} /> },
    { value: '4.8', label: 'Average App Store Rating', icon: <FaStar className="text-yellow-500" size={24} /> },
    { value: '85%', label: 'User Retention Rate', icon: <FaUserCheck className="text-blue-500" size={24} /> },
    { value: '40+', label: 'Industries Served', icon: <FaChartLine className="text-purple-500" size={24} /> }
  ];

  const testimonials = [
    {
      name: "Jason Richards",
      role: "Founder, HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "The mobile app developed by this team has transformed our patient engagement. User downloads exceeded our targets by 200% and the intuitive interface has received outstanding feedback from healthcare professionals and patients alike."
    },
    {
      name: "Sophia Chen",
      role: "CMO, RetailConnect",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "We approached them with a challenging retail app concept and they delivered beyond our expectations. The cross-platform solution they created works flawlessly on both iOS and Android, driving a 45% increase in our mobile sales conversion rate."
    }
  ];

  const keyFeatures = [
    {
      icon: <FaCode className="text-blue-500" />,
      title: "Clean, Efficient Code",
      description: "Our apps are built with optimized code for maximum performance and battery efficiency."
    },
    {
      icon: <FaShieldAlt className="text-red-500" />,
      title: "Security-First Approach",
      description: "Enterprise-grade security protocols protect your users' data and your business assets."
    },
    {
      icon: <FaRocket className="text-green-500" />,
      title: "Scalable Architecture",
      description: "Apps built to handle growing user bases and expanding feature sets without performance issues."
    }
  ];

  return (
    <>
      <Hero
        title="Mobile App Development"
        subtitle="Transform your business idea into a powerful mobile application that engages users and drives digital innovation."
        primaryButtonText="Start Your App"
        primaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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
          <h2 className="section-title">Our Mobile App Development Services</h2>
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
          <h2 className="section-title">What Sets Our Apps Apart</h2>
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
          <h2 className="section-title">Our App Development Process</h2>
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

      {/* Technology Stack Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Our Mobile Technology Stack</h2>
          <div className="p-8 mb-8 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-primary-600">We Build With Leading Technologies</h3>
                <p className="mb-6 text-secondary-600">
                  Our mobile developers leverage modern frameworks and tools to create robust, scalable applications:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="mb-6 space-y-2">
                    {[
                      'React Native',
                      'Flutter',
                      'Swift',
                      'Kotlin'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="flex-shrink-0 mt-1 mr-2 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mb-6 space-y-2">
                    {[
                      'Firebase',
                      'AWS Mobile',
                      'Node.js Backend',
                      'GraphQL'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="flex-shrink-0 mt-1 mr-2 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-lg font-bold text-blue-700">App Performance Guarantee:</p>
                  <p className="text-blue-600">We optimize all applications to load in under 2 seconds and operate smoothly even on older devices.</p>
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
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Mobile app development" 
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1481887328591-3e277f9473dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
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
              <h2 className="mb-4 text-3xl font-bold">Ready to Build Your Next-Gen Mobile App?</h2>
              <p className="mb-6 text-lg">
                Partner with our expert mobile developers to create an innovative app that engages users and grows your business.
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
                Get Free App Consultation
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
              <h3 className="mb-3 text-xl font-semibold">How long does it take to develop a mobile app?</h3>
              <p className="text-secondary-600">Development timelines vary based on complexity and feature set. Simple apps can be completed in 2-3 months, while more complex applications may take 4-6 months. Our agile approach delivers core functionality early and iterates based on user feedback.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">Should I build a native app or cross-platform app?</h3>
              <p className="text-secondary-600">This depends on your specific requirements. Native apps (iOS/Android) offer optimal performance and access to platform-specific features. Cross-platform solutions like React Native provide cost efficiency and faster development with a single codebase while maintaining near-native performance. We can help you choose the best approach based on your budget, timeline, and feature requirements.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">How much does mobile app development cost?</h3>
              <p className="text-secondary-600">App development costs vary widely based on complexity, features, platforms, and design requirements. Basic apps typically start around $25,000-$50,000, while complex enterprise solutions can range from $75,000-$150,000+. We provide detailed estimates after understanding your specific needs and offer flexible engagement models including fixed-price and time & materials options.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileAppDevelopment;