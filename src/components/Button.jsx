import {Link} from 'react-router-dom'
// src/components/PrimaryButton.js
const PrimaryButton = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  // Base button styles
  const baseClasses = 'transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full';
  
  // Variant styles
  const variantClasses = {
    primary: 'bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline',
    secondary: 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white'
  };

  return (
    <Link
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;



// const PrimaryButton = ({ children, ...props }) => (
//   <a 
//     className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
//     {...props}
//   >
//     {children}
//   </a>
// );

// export default PrimaryButton