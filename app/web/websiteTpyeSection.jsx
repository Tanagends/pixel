// components/WebsiteTypeSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa'; // Import all icons from react-icons/fa

const WebsiteTypeSection = ({ type, description, price, duration, features }) => {
  // Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children by 0.1 seconds
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    // Add this Tailwind class to your section
    <section className="min-h-screen w-full flex items-center justify-center p-8 lg:p-16 bg-gray-50 even:bg-white relative overflow-hidden snap-center">
      {/* Optional background element for visual interest (can be animated) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 opacity-20" // Changed indigo-50 to orange-100 for consistency with price color
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        {/* Left Side: Title, Description, Price, Duration */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of element is in view
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight"
            variants={itemVariants}
          >
            {type}
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-gray-700 mb-6 max-w-prose mx-auto lg:mx-0"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center sm:items-baseline gap-4 mb-8"
            variants={itemVariants}
          >
            <p className="text-5xl lg:text-6xl font-bold text-orange-500">{price}</p>
            <p className="text-xl lg:text-2xl text-gray-600">/{duration}</p>
          </motion.div>
        </motion.div>

        {/* Right Side: List of Items/Features */}
        <motion.div
          className="flex-1 w-full bg-white bg-opacity-90 rounded-xl shadow-2xl p-6 lg:p-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center lg:text-left">What's Included:</h3>
          <ul className="space-y-4">
            {features.map((feature, index) => {
              const IconComponent = FaIcons[feature.icon]; // Dynamically get icon component
              return (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-lg text-gray-700"
                  variants={itemVariants}
                >
                  {IconComponent && <IconComponent className="text-orange-500 text-2xl mt-1 shrink-0" />}
                  <span>{feature.text}</span>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteTypeSection;