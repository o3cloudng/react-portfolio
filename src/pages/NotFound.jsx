// src/pages/NotFound.js
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PrimaryButton from '../components/Button';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-900 text-white py-20 flex flex-col items-center justify-center min-h-screen p-4"
    >
      <motion.div 
        initial={{ y: -50, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full"
      >
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <PrimaryButton to="/">Go Back Home</PrimaryButton>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;