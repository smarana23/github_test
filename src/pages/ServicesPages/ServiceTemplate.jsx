import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const ServiceTemplate = ({ 
  title, 
  description, 
  features, 
  image, 
  benefits,
  process 
}) => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link 
          to="/services" 
          className="flex items-center text-primary-600 hover:text-primary-800 mb-6 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-8 mb-16"
        >
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md transition-colors">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Process Section */}
        {process && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
            <div className="relative">
              <div className="absolute left-4 h-full w-0.5 bg-primary-200 md:left-1/2 md:-ml-1"></div>
              {process.map((step, index) => (
                <div key={index} className={`mb-8 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className={`flex-1 p-4 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-gray-600 ml-12">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ServiceTemplate;