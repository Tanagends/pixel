// Make sure you have these imports at the top of your file
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageModal from './ImageModal'; // <-- Import the new modal component

//================================================================//
// Helper Icons (You can place these inside your component)
//================================================================//
const ViewIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
);
const VisitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
);


// Your main component
const FeaturedWorkSection = () => {

    // (Your projects array and variants should be defined here)
    
    const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
              opacity: 1,
              transition: {
                  staggerChildren: 0.2
              }
          }
      };

      const itemVariants = {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
      };
                                                                                                                                        const projects = [                                                                                                                       { title: "Corporate Branding", category: "Graphic Design", img: "images/upmilk.jpeg", viewable: true },                                                                                                                                        { title: "Corporate Branding", category: "Graphic Design", img: "images/serenee.jpg", viewable: true },
          { title: "Business Website", category: "Web Development", img: "images/rehobotheng.jpeg", liveUrl: "https://www.rehobothengineering.co.zw/" },             { title: "E-commerce Platform", category: "Web Development", img: "images/amazonb.jpeg", liveUrl: "https://affiliateaura.vercel.app/" },      ];

    // --- NEW: State to manage the selected image for the modal ---
    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <> {/* Use a Fragment to wrap the section and the modal */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ... (your existing h2 and p tags for the title) ... */}
                    <motion.div
                        className="text-center mb-12"
                        // ... (animation props)
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Work</h2>
                        <p className="text-lg text-gray-600 mt-2">Pixels perfected, stories told.</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
                        // ... (animation props)
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className={`rounded-2xl overflow-hidden group relative
                                  ${index === 1 || index === 3 ? 'md:row-span-2' : ''}
                                  ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
                                variants={itemVariants}
                                layoutId={`project-image-${project.img}`}
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out md:group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100" />

                                <div className="absolute inset-0 flex items-end p-4 md:p-6">
                                    <div className="text-white w-full">
                                        <h3 className="font-bold text-lg md:text-xl transform transition-all duration-300 ease-in-out opacity-100 translate-y-0 md:opacity-0 md:translate-y-6 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm transform transition-opacity duration-300 ease-in-out opacity-95 md:opacity-60 md:group-hover:opacity-100">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* --- NEW: ACTION BUTTONS CONTAINER --- */}
                                <div className="absolute top-4 right-4 flex items-center space-x-3 text-white 
                                                transform transition-all duration-300 ease-in-out 
                                                opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                                    
                                    {/* --- NEW: Conditionally render View Button --- */}
                                    {project.viewable && (
                                        <button
                                            onClick={() => setSelectedImage(project.img)}
                                            className="p-2 rounded-full bg-black/40 hover:bg-black/70 transition-colors"
                                            aria-label="Enlarge image"
                                        >
                                            <ViewIcon />
                                        </button>
                                    )}

                                    {/* --- NEW: Conditionally render Visit Link --- */}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-black/40 hover:bg-black/70 transition-colors"
                                            aria-label="Visit project site"
                                            // Prevents the modal from opening if card is also clickable
                                            onClick={(e) => e.stopPropagation()} 
                                        >
                                            <VisitIcon />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* --- NEW: RENDER THE MODAL OUTSIDE THE SECTION --- */}
            <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
        </>
    );
};

export default FeaturedWorkSection;
