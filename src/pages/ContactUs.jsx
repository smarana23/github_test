import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaHeadset } from 'react-icons/fa';
import Hero from '../components/common/Hero';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={28} />,
      title: 'Our Location',
      details: '123 Tech Park Avenue, Suite 500, San Francisco, CA 94103'
    },
    {
      icon: <FaPhoneAlt size={28} />,
      title: 'Phone Number',
      details: '+1 (555) 123-4567'
    },
    {
      icon: <FaEnvelope size={28} />,
      title: 'Email Address',
      details: 'info@rdrsoftware.com'
    },
    {
      icon: <FaClock size={28} />,
      title: 'Working Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/[^\d]/g, ''))) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.comments.trim()) {
      newErrors.comments = 'Please provide some comments';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        comments: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with our team for any inquiries."
        primaryButtonText="Email Us"
        primaryButtonLink="mailto:info@rdrsoftware.com"
        backgroundImage="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        overlayColor="primary"
      />

      {/* Contact Form & Info Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Column - Contact Info and Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-6 text-2xl font-bold text-primary-700">Contact Information</h3>
              <p className="mb-8 text-lg">
                Have questions or ready to start your project? Fill out the form, and our team will get back to you shortly.
              </p>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 mr-4 text-white bg-primary-600 rounded-full shadow-md">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{info.title}</h3>
                      <p className="text-secondary-600">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Customer support team"
                  className="object-cover w-full h-[300px] transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-primary-600 rounded-full mr-4 shadow-lg">
                        <FaHeadset className="text-white" size={28} />
            </div>
            <div>
                        <h4 className="text-xl font-bold text-white">24/7 Support</h4>
                        <p className="text-white/90">We're here to help you succeed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 mb-6 text-white bg-green-600 rounded-lg shadow-md"
                >
                  <h3 className="mb-4 text-xl font-bold">Message Sent Successfully!</h3>
                  <p>
                    Thank you for contacting us! We will get back to you soon.
                  </p>
                </motion.div>
              ) : (
              <div className="p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-center">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-secondary-800">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                          errors.name ? 'border-red-500' : 'border-secondary-300'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-secondary-800">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                          errors.email ? 'border-red-500' : 'border-secondary-300'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-secondary-800">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                          errors.phone ? 'border-red-500' : 'border-secondary-300'
                        }`}
                        placeholder="Your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="comments" className="block mb-2 text-sm font-medium text-secondary-800">
                        How can we help you?
                      </label>
                      <textarea
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        rows="4"
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                          errors.comments ? 'border-red-500' : 'border-secondary-300'
                        }`}
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                      {errors.comments && (
                        <p className="mt-1 text-sm text-red-600">{errors.comments}</p>
                      )}
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 font-medium text-white transition-colors duration-300 rounded-lg shadow-md ${
                          isSubmitting ? 'bg-primary-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'
                        }`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Send Message'}
                      </button>
                    </motion.div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="section bg-secondary-50">
        <div className="container">
          <h2 className="section-title">Our Locations</h2>
          <p className="max-w-3xl mx-auto text-lg text-secondary-600 text-center mb-12">
            Visit us at one of our office locations or reach out to us online.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Headquarters",
                address: "123 Tech Park Avenue, Suite 500",
                city: "San Francisco, CA 94103",
                phone: "+1 (555) 123-4567",
                email: "info@rdrsoftware.com",
                hours: "Mon - Fri: 9AM - 6PM",
                image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              },
              {
                name: "Development Center",
                address: "456 Innovation Drive",
                city: "Boston, MA 02110",
                phone: "+1 (555) 987-6543",
                email: "dev@rdrsoftware.com",
                hours: "Mon - Fri: 8AM - 5PM",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              }
            ].map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-60">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white">{location.name}</h3>
                      <p className="text-white/90">{location.city}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 mt-1 text-white bg-primary-600 rounded-full shadow-sm">
                        <FaMapMarkerAlt size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-secondary-600">{location.address}</p>
                        <p className="text-secondary-600">{location.city}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 mt-1 text-white bg-primary-600 rounded-full shadow-sm">
                        <FaPhoneAlt size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-secondary-600">{location.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 mt-1 text-white bg-primary-600 rounded-full shadow-sm">
                        <FaEnvelope size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-secondary-600">{location.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 mt-1 text-white bg-primary-600 rounded-full shadow-sm">
                        <FaClock size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Business Hours</h4>
                        <p className="text-secondary-600">{location.hours}</p>
                      </div>
                    </div>
              </div>
            </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0934966699602!2d-122.41941532357734!3d37.77692901564481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580989a43e76f%3A0x45f1b189ee3b07b3!2sSan%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sus!4v1693439326468!5m2!1sen!2sus" 
                width="100%"
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RDR Software Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-700 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
              <p className="text-xl mb-8 text-white/90">
                Let's collaborate to bring your technology vision to life.
              </p>
              <motion.a
                href="mailto:info@rdrsoftware.com"
                className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg shadow-lg hover:bg-primary-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Consultation
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;