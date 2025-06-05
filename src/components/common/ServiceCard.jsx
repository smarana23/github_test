// src/components/common/ServiceCard.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ServiceCard = ({ title, description, icon, path, imageUrl }) => {
  return (
    <motion.div
      className="h-full overflow-hidden bg-white rounded-lg shadow-md group"
      whileHover={{
        scale: 1.03,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-70" />
        <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
            <div className="text-primary-600">{icon}</div>
          </div>
        <div className="absolute bottom-0 left-0 p-6">
          
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="mb-4 text-dark/80">{description}</p>
        <Link
          to={path}
          className="inline-flex items-center text-secondary hover:text-secondary-600 font-medium group"
        >
          Learn More
          <motion.span
            className="inline-block ml-1"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRightIcon className="w-4 h-4" />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
