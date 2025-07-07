import React from 'react';
import { motion, useInView } from 'framer-motion';

// Example Icon Components (you can replace these with actual imports from Lucide React or your icon library)
const IconArrowRight = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const IconPlus = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

/**
 * CustomShapeDisplay Component
 *
 * This component creates a display element with a distinct
 * rectangular body, an adjacent large circle, and a smaller
 * dot, directly inspired by the provided image. All elements
 * are `motion.div` for potential animation capabilities,
 * but without button-specific interactions.
 *
 * It now includes scroll-triggered animations:
 * - When in view, circles rotate clockwise.
 * - When in view, the rectangle slides in from the right.
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Content to be rendered inside the main rectangle (text, icons, etc.)
 * @param {string} [props.className] - Additional Tailwind CSS classes for the main container.
 * @param {string} [props.rectangleColor="bg-gray-700"] - Tailwind background color for the main rectangular body.
 * @param {string} [props.largeCircleColor="bg-gray-400"] - Tailwind background color for the large adjacent circle.
 * @param {string} [props.smallDotColor="bg-orange-500"] - Tailwind background color for the small dot.
 * @param {object} [props.whileHover] - Framer Motion whileHover props for the overall shape.
 * @param {object} [props.whileTap] - Framer Motion whileTap props for the overall shape.
 */
const CustomValueDisplay = ({
  title,
  description,
  icon = <IconPlus className="w-6 h-6 text-white" />,
}) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 }); // Trigger once when 50% of the element is in view

  // Animation variants for the rectangle
  const rectangleVariants = {
    hidden: { x: 100, opacity: 0 }, // Starts 100px to the right, invisible
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }, // Slides into place
  };

  // Animation variants for the circles (large and small dot)
  const circleVariants = {
    hidden: { rotate: -180 }, // Starts rotated clockwise, invisible
    visible: { rotate: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }, // Rotates to original position
  };

  return (
    <motion.div
      ref={ref} // Attach ref to the main container
      className={`flex items-center`} // Use flex to align rectangle and circle horizontally
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    >
      {/* Main rectangular body - rounded on the left, straight on the right */}
      <motion.div
        className={`flex items-center md:h-16 h-12 pl-8 pr-6 rounded-l-full bg-gray-200`}
        style={{ minWidth: '120px' }} // Ensure enough width for the content and shape
        variants={rectangleVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="text-black font-light text-[10px] md:text-sm z-10">
          {description}
        </motion.div>
      </motion.div>

      {/* Large Circle - positioned adjacent to the rectangle */}
      <motion.div
        className={`relative md:w-32 md:h-32 w-24 h-24 rounded-full flex items-center justify-center -ml-4 bg-black`} // -ml-4 creates a slight visual overlap, adjust as needed
        style={{
          boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.15)' // Inner shadow for depth
        }}
        variants={circleVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >

        <p>{title}</p>
        {/* Small Dot - positioned on top of the large circle */}
        <motion.div
          className={`absolute w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center`}
          style={{
            top: '0', // Position at the top of the large circle
            right: '0', // Position at the right of the large circle
            transform: 'translate(30%, -30%)', // Adjust to fine-tune overlap with large circle
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)' // Outer shadow for pop-out effect
          }}
          variants={circleVariants} // Use the same variants for the small dot
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* You can optionally place an icon inside the small dot here */}
        {icon}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CustomValueDisplay;