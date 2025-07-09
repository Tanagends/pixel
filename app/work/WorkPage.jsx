"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/WorkerHero';
import { AnimatedListSection } from './AnimatedList';
import { allProjects } from '@/assets';
import { GetFreeQuote } from '@/components/HeaderFooter';

//================================================================//
// 0. INLINE SVG ICONS
// These are included directly to avoid external dependencies.
//================================================================//
const IconExternalLink = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);


//================================================================//
// WorkPage Component - This is the new page content.
//================================================================//
export default function WorkPage() {
    
    // Placeholder data for portfolio projects
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return allProjects;
        return allProjects.filter(p => p.category === activeFilter);
    }, [activeFilter, allProjects]);

    const categories = ['All', 'Web Development', 'Graphic Design', 'UI/UX Design'];
    
    return (
        <div className="bg-gray-50 pt-28">
            <Hero />

            {/* Main Content Section */}
            
            <section className="py-20">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
                        {categories.map(cat => (
                            <button 
                                key={cat} 
                                onClick={() => setActiveFilter(cat)}
                                className={`font-medium py-2 px-5 rounded-full text-sm transition-colors duration-300 relative
                                    ${activeFilter === cat 
                                        ? 'bg-orange-500 text-white' 
                                        : 'bg-white text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                                {activeFilter === cat && (
                                    <motion.div 
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"
                                        layoutId="underline"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    <motion.div 
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                    >
                        <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div 
                                layout
                                key={project.title} 
                                className="bg-white rounded-lg overflow-hidden shadow-lg group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                            >
                                <div className="overflow-hidden relative">
                                    <img src={project.img} alt={project.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold py-1 px-3 rounded-full">{project.category}</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 h-16">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium py-1 px-2.5 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                    <a href="#" className="inline-flex items-center space-x-2 font-bold text-orange-500 hover:underline">
                                        <span>View Case Study</span>
                                        <IconExternalLink />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                        </AnimatePresence>
                    </motion.div>
                 </div>
            </section>

                        {/* Animated List */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">We only have happy clients</h2>
                        <p className="text-lg text-gray-600 mt-2">A showcase of the results our clients are getting</p>
                    </div>
                <AnimatedListSection />
                </div>
            </section>

             {/* CTA Section */}
            <section className="bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                     <div className="bg-gray-800 text-white rounded-lg p-10 md:p-16 text-center shadow-2xl">
                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                        >
                            Ready to Start Your Own Masterpiece?
                        </motion.h2>
                        <motion.p 
                            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Let's collaborate to build a digital solution that not only looks stunning but also drives results.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {/* <motion.button 
                                className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get a Free Quote
                            </motion.button> */}
                            <GetFreeQuote />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

