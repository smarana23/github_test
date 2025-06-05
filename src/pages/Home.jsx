import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaCode, FaMobileAlt, FaChartLine, FaRocket, FaLightbulb, FaUsers, FaGlobe } from 'react-icons/fa';
import Hero from '../components/common/Hero';
import ServiceCard from '../components/common/ServiceCard';
import Button from '../components/common/Button';
import { fadeIn, fadeInLeft, fadeInRight, staggerContainer, childVariants } from '../utils/animations';

const Home = () => {
    const targetRef = useRef(null);
    const isInView = useInView(targetRef, { once: false, amount: 0.3 });
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
    
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearTimeout(timer);
    }, [currentTestimonial]);

    const services = [
        {
            title: 'Academic Excellence',
            description: 'Comprehensive academic programs designed to elevate student performance and knowledge.',
            icon: <FaGraduationCap size={24} />,
            path: '/services/academic-excellence',
            imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
        },
        {
            title: 'Software Development',
            description: 'Custom software solutions tailored to meet your specific business requirements.',
            icon: <FaCode size={24} />,
            path: '/services/software-development',
            imageUrl: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
        },
        {
            title: 'Mobile App Development',
            description: 'Cross-platform mobile applications with intuitive interfaces and powerful functionality.',
            icon: <FaMobileAlt size={24} />,
            path: '/services/mobile-app-development',
            imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
        },
        {
            title: 'Digital Marketing',
            description: 'Strategic digital marketing campaigns to boost your online presence and drive growth.',
            icon: <FaChartLine size={24} />,
            path: '/services/digital-marketing',
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
        }
    ];

    const stats = [
        { number: 200, label: 'Clients Worldwide', icon: <FaGlobe /> },
        { number: 450, label: 'Projects Completed', icon: <FaRocket /> },
        { number: 15, label: 'Years Experience', icon: <FaLightbulb /> },
        { number: 40, label: 'Team Members', icon: <FaUsers /> }
    ];

    const testimonials = [
        {
            quote: "RDR Software transformed our business with their innovative solutions. Their team was professional, responsive, and delivered beyond our expectations.",
            author: "Sarah Johnson",
            position: "CTO, TechVision Inc.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        },
        {
            quote: "Working with RDR Software was a game-changer for our company. Their academic excellence program completely revolutionized our training procedures.",
            author: "David Chen",
            position: "Director, Global Education Systems",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        },
        {
            quote: "The mobile application RDR built for us generated a 200% increase in user engagement within just three months of launch. Exceptional work!",
            author: "Emily Rodriguez",
            position: "Marketing VP, NexGen Solutions",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
        }
    ];

    return (
        <>
            {/* Modern Hero Section with Parallax */}
            <section ref={targetRef} className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
                <motion.div 
                    className="absolute inset-0 w-full h-full z-0"
                    style={{ y, opacity }}
                >
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Technology Background" 
                        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                    />
                </motion.div>
                
                <div className="container relative z-10 h-full flex flex-col justify-center items-start">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center mb-6 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-md">
                            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-secondary-400"></span> 
                            Transforming Ideas into Digital Reality
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-300">Solutions</span> for a Digital World
                        </h1>
                        <p className="text-xl text-white/80 mb-8 max-w-xl">
                            RDR Software Solutions provides cutting-edge software development and IT services to help businesses thrive in today's competitive landscape.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link 
                                    to="/services" 
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-secondary-500 text-white rounded-md shadow-lg hover:bg-secondary-600 transition-all"
                                >
                                    Explore Our Services
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </Link>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link 
                                    to="/contact-us" 
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-primary-600 text-primary-700 bg-white/80 rounded-md shadow-md hover:bg-primary-50 transition-all"
                                >
                                    Get in Touch
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto -mb-1">
                        <path 
                            fill="#ffffff" 
                            fillOpacity="1" 
                            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,165.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center p-6 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-600">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-bold text-primary-800 mb-2">
                                    <span className="counter">{stat.number}</span>+
                                </div>
                                <p className="text-secondary-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-secondary-500 bg-secondary-50 rounded-full">OUR SERVICES</div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Solutions for Your Business</h2>
                        <p className="text-lg text-gray-600">
                            We offer a wide range of services to help your business grow and succeed in the digital landscape.
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ServiceCard {...service} />
                            </motion.div>
                        ))}
                    </div>
                    
                    <div className="mt-16 text-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link 
                                to="/services" 
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-md shadow-md hover:bg-primary-700 transition-colors"
                            >
                            View All Services
                        </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section with 3D Card Effect */}
            <section className="py-24 bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="container">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-primary-500 bg-primary-50 rounded-full">ABOUT US</div>
                            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Transforming Businesses Through Technology</h2>
                            <p className="mb-6 text-lg text-gray-600">
                                RDR Software Solutions is a leading provider of innovative software solutions and IT services, dedicated to helping businesses thrive in the digital era.
                            </p>
                            <p className="mb-8 text-gray-600">
                                With expertise spanning across various domains including software development, web development, mobile app development, and digital marketing, we deliver tailored solutions that drive business growth and enhance operational efficiency.
                            </p>
                            
                            <div className="flex flex-wrap gap-6 mb-8">
                                <div className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 bg-green-100 rounded-full p-2">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Innovative Solutions</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 bg-green-100 rounded-full p-2">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Expert Team</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 bg-green-100 rounded-full p-2">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Custom Development</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 bg-green-100 rounded-full p-2">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Client-Focused Approach</span>
                                </div>
                            </div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link 
                                    to="/company" 
                                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-md shadow-md hover:bg-primary-700 transition-colors"
                                >
                                Learn More About Us
                            </Link>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="perspective-card-container">
                                <motion.div 
                                    whileHover={{ rotateY: 5, rotateX: -5, z: 10 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="overflow-hidden rounded-2xl shadow-2xl"
                                >
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                    alt="About RDR Software Solutions"
                                        className="object-cover w-full"
                                />
                                </motion.div>
                                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-secondary-500 rounded-full opacity-80 blur-2xl"></div>
                                <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary-500 rounded-full opacity-80 blur-2xl"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-secondary-500 bg-secondary-50 rounded-full">TESTIMONIALS</div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                        <p className="text-lg text-gray-600">
                            Don't just take our word for it. Here's what some of our clients have to say about working with us.
                        </p>
                    </motion.div>
                    
                    <div className="relative">
                        <div className="max-w-4xl mx-auto">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ 
                                        opacity: currentTestimonial === index ? 1 : 0,
                                        x: currentTestimonial === index ? 0 : 100,
                                        position: currentTestimonial === index ? 'relative' : 'absolute'
                                    }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="bg-white p-8 rounded-2xl shadow-xl"
                                >
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <img 
                                                src={testimonial.image} 
                                                alt={testimonial.author}
                                                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" 
                                            />
                                        </div>
                                        <div>
                                            <svg className="w-10 h-10 text-primary-200 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                                                <path d="M10 8v6a6 6 0a016 6h2c0-4.4-3.6-8-8-8zm12 0v6a6 6 0 016 6h2c0-4.4-3.6-8-8-8z" />
                                            </svg>
                                            <p className="text-lg text-gray-700 mb-6 italic">{testimonial.quote}</p>
                                            <div>
                                                <h4 className="text-xl font-semibold text-gray-900">{testimonial.author}</h4>
                                                <p className="text-secondary-600">{testimonial.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        
                        <div className="flex justify-center mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 mx-1 rounded-full ${currentTestimonial === index ? 'bg-primary-600' : 'bg-gray-300'}`}
                                    aria-label={`View testimonial ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-gradient-to-r from-primary-800 to-secondary-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-grid-white-pattern opacity-5"></div>
                    <svg className="absolute -bottom-20 -left-20 text-white/5" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                        <defs>
                            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-secondary-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <svg className="absolute -top-20 -right-20 text-white/5" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                        <defs>
                            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa28" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-primary-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)" />
                    </svg>
                </div>
                
                <div className="container text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="mb-6 text-4xl font-bold">Ready to Transform Your Business?</h2>
                        <p className="mb-10 text-xl text-white/80">
                        Contact us today to discuss how our software solutions and IT services can help you achieve your business goals.
                    </p>
                        
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Link 
                                to="/contact-us" 
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-primary-800 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                Schedule a Consultation
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                    </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            
            {/* Custom Styles */}
            <style jsx global>{`
                .bg-grid-pattern {
                    background-size: 40px 40px;
                    background-image: 
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
                }
                
                .bg-grid-white-pattern {
                    background-size: 40px 40px;
                    background-image: 
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
                }
                
                .perspective-card-container {
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }
                
                @keyframes count-up {
                    from { 
                        opacity: 0;
                        transform: translateY(10px); 
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .counter {
                    animation: count-up 2s ease-out forwards;
                    display: inline-block;
                }
            `}</style>
        </>
    );
};

export default Home;