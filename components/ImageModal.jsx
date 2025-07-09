"use client";

import { motion, AnimatePresence } from 'framer-motion';

// Simple X-icon for the close button
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ImageModal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <AnimatePresence>
      <motion.div
        // The backdrop
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer p-4"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50"
          aria-label="Close image view"
        >
          <CloseIcon />
        </button>
        
        {/* The Image Itself */}
        <motion.img
          layoutId={`project-image-${imageUrl}`} // For potential magic motion animation
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          src={imageUrl}
          alt="Enlarged project view"
          // Stop propagation so clicking the image doesn't close the modal
          onClick={(e) => e.stopPropagation()} 
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
