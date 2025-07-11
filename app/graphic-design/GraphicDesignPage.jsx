"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/DesignHero';
import GraphicDesignSection from './GraphicDesignsSection';
import { graphicDesigns } from '@/assets';
import { Marquee } from "@/components/magicui/marquee";
import { Pen, PenLineIcon } from 'lucide-react';
import { allProjects } from '@/assets';
import { all } from 'axios';
import { GetFreeQuote } from '@/components/HeaderFooter';


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
    
    const projects = allProjects.filter(project => project.category === "Graphic Design")    
    const processSteps = ["Empathize", "Define", "Ideate", "Prototype", "Test", "Implement"];

    return (
        <div className="relative min-h-screen bg-gray-950 text-white font-sans">
            <Hero />
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
                        className=""
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{staggerChildren: 0.1}}
                    >
                            <Marquee>
                            {creativeToolkit.map(tool => (
                                <motion.div 
                                    key={tool}
                                    className="border border-orange-600 text-orange-600 font-medium py-3 px-6 rounded-lg"
                                    variants={{hidden: {opacity: 0, scale: 0.8}, visible: {opacity: 1, scale: 1}}}
                                >
                                    <PenLineIcon className="inline-block mr-2" />
                                    {tool}
                                </motion.div>
                                ))}
                            </Marquee>
                      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
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
                                    <p className="text-orange-500 font-medium">{project.niche}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="bg-black">
                    <div className="text-center my-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Design Work</h2>
                        <p className="text-lg text-gray-400 mt-2">Ideas brought to life with purpose and flair.</p>
                    </div>
                        {
                graphicDesigns.map((design, index) => (
                    <GraphicDesignSection 
                        key={index}
                        type={design.type}
                        description={design.description}
                        price={design.price}
                        duration={design.duration}
                        features={design.features}
                        image={design.image}
                    />
                ))  
            }
            </div>
            
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

