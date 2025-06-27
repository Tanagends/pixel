"use client";
import React from 'react';
import { motion } from 'framer-motion';

//================================================================//
// 0. INLINE SVG ICONS
// These are included directly to avoid external dependencies.
//================================================================//
const IconBrandIdentity = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a8 8 0 1 0 16 0H4z"/><path d="M4 11v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V11"/><path d="M10 11v-1a2 2 0 1 1 4 0v1"/><path d="M10 16h4"/></svg>);
const IconUILayout = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>);
const IconMegaphone = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>);
const IconPackage = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>);

//================================================================//
// GraphicDesignPage Component
//================================================================//
export default function GraphicDesignPage() {
    
    const designServices = [
        {
            icon: <IconBrandIdentity />,
            title: "Brand Identity & Logo Design",
            description: "We craft memorable logos and comprehensive brand guidelines that tell your unique story and build lasting recognition."
        },
        {
            icon: <IconUILayout />,
            title: "UI/UX Design",
            description: "Creating intuitive, engaging, and aesthetically pleasing interfaces for websites and mobile apps that users love."
        },
        {
            icon: <IconMegaphone />,
            title: "Marketing & Ad Creatives",
            description: "Designing high-impact visuals for digital campaigns, social media, and advertisements that capture attention and drive action."
        },
        {
            icon: <IconPackage />,
            title: "Print & Packaging",
            description: "Extending your brand to the physical world with stunning print materials and packaging design that stands out on the shelf."
        }
    ];

    const creativeToolkit = ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects", "Procreate", "Spline"];
    
    const projects = [
        { title: "Tech Startup Rebrand", category: "Brand Identity", img: "https://placehold.co/600x600/ff5722/1a202c?text=Rebrand" },
        { title: "Mobile Banking App", category: "UI/UX Design", img: "https://placehold.co/600x600/1a202c/ffffff?text=Mobile+App" },
        { title: "Social Media Campaign", category: "Ad Creatives", img: "https://placehold.co/600x600/ff5722/ffffff?text=Campaign" },
    ];
    
    const processSteps = ["Empathize", "Define", "Ideate", "Prototype", "Test", "Implement"];

    return (
        <div className="bg-white pt-28">
            {/* Hero Section */}
            <section className="py-20 bg-orange-500 text-white" style={{clipPath: `ellipse(100% 55% at 48% 44%)`}}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4"
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6}}
                    >
                        Crafting Visual Identities That Resonate
                    </motion.h1>
                    <motion.p 
                        className="max-w-3xl mx-auto text-lg md:text-xl text-orange-100"
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        We translate your brand’s essence into compelling visuals that build connection, inspire trust, and drive engagement.
                    </motion.p>
                </div>
            </section>
            
            {/* Our Services Section */}
            <section className="py-20 bg-gray-50 -mt-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Design Capabilities</h2>
                        <p className="text-lg text-gray-600 mt-2">A full spectrum of creative services.</p>
                    </div>
                     <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{staggerChildren: 0.15}}
                     >
                        {designServices.map((service) => (
                             <motion.div 
                                key={service.title} 
                                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
                                variants={{hidden: {opacity: 0, y: 30}, visible: {opacity: 1, y: 0}}}
                                whileHover={{ y: -5 }}
                             >
                                <div className="text-orange-500 mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

             {/* Creative Toolkit Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Creative Toolkit</h2>
                        <p className="text-lg text-gray-600 mt-2">Masters of the industry-standard design software.</p>
                    </div>
                    <motion.div 
                        className="flex flex-wrap justify-center items-center gap-4 md:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{staggerChildren: 0.1}}
                    >
                        {creativeToolkit.map(tool => (
                            <motion.div 
                                key={tool}
                                className="border border-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg"
                                variants={{hidden: {opacity: 0, scale: 0.8}, visible: {opacity: 1, scale: 1}}}
                            >
                                {tool}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Work Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Design Work</h2>
                        <p className="text-lg text-gray-600 mt-2">Ideas brought to life with purpose and flair.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         {projects.map((project, index) => (
                            <motion.div 
                                key={project.title} 
                                className="bg-white rounded-lg overflow-hidden shadow-lg group"
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, amount: 0.5}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                            >
                                <div className="overflow-hidden aspect-square">
                                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                                    <p className="text-orange-500 font-medium">{project.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Design Process Section */}
             <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Design Process</h2>
                        <p className="text-lg text-gray-600 mt-2">A human-centered approach to creative problem-solving.</p>
                    </div>
                    <div className="relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
                        <motion.div 
                            className="grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{staggerChildren: 0.1}}
                        >
                            {processSteps.map((step, index) => (
                                <motion.div 
                                    key={step} 
                                    className="text-center relative"
                                    variants={{hidden: {opacity: 0, y: 30}, visible: {opacity: 1, y: 0}}}
                                >
                                    <div className="relative z-10 mx-auto bg-orange-500 border-4 border-white rounded-full h-24 w-24 flex items-center justify-center flex-col shadow-lg">
                                        <span className="text-white font-bold text-center text-sm leading-tight px-2">{step}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

