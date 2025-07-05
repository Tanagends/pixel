"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/WebHero';
import { websiteTypes } from '@/assets';
import WebsiteTypeSection from './websiteTpyeSection'

//================================================================//
// 0. INLINE SVG ICONS
// These are included directly to avoid external dependencies.
//================================================================//
const IconDatabase = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>);
const IconShoppingCart = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>);
const IconLayers = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>);
const IconCode = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);

//================================================================//
// WebDevelopmentPage Component
//================================================================//
export default function WebDevelopmentPage() {
    
    const ourServices = [
        {
            icon: <IconCode />,
            title: "Custom Web Applications",
            description: "Bespoke applications built from the ground up to solve your unique business challenges and streamline operations."
        },
        {
            icon: <IconShoppingCart />,
            title: "E-Commerce Solutions",
            description: "High-conversion online stores with seamless user experiences, secure payment gateways, and robust inventory management."
        },
        {
            icon: <IconLayers />,
            title: "Headless CMS & APIs",
            description: "Lightning-fast websites with decoupled front-ends and powerful, flexible content management via custom API development."
        },
        {
            icon: <IconDatabase />,
            title: "Platform Migration & Upgrades",
            description: "Modernize your legacy systems with a smooth transition to a more powerful, scalable, and secure tech stack."
        }
    ];

    const techStack = [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "Python",
        "C#",
        "GraphQL",
        "PostgreSQL",
        "Docker",
        "AWS"
    ];
    
    const projects = [
        { title: "Fintech SaaS Platform", category: "Web Application", img: "https://placehold.co/600x400/1a202c/ff5722?text=Fintech+App" },
        { title: "Global E-commerce Store", category: "Shopify Headless", img: "https://placehold.co/600x400/ff5722/1a202c?text=E-commerce" },
        { title: "Real-Estate Analytics Dashboard", category: "Data Visualization", img: "https://placehold.co/600x400/1a202c/ffffff?text=Dashboard" },
    ];
    
    const processSteps = ["Discovery & Strategy", "Architecture & UX", "Development", "QA & Testing", "Deployment", "Support & Growth"];

    return (
        <main className="bg-white pt-28">
            <Hero />
            {/* Hero Section 
            <section className="py-20 bg-gray-800 text-white" style={{backgroundImage: `radial-gradient(#ff5722 0.5px, transparent 0.5px), radial-gradient(#ff5722 0.5px, #1a202c 0.5px)`, backgroundSize: `20px 20px`, backgroundPosition: `0 0, 10px 10px`}}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4"
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6}}
                    >
                        Engineering High-Performance Web Solutions
                    </motion.h1>
                    <motion.p 
                        className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300"
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        We architect and build robust, scalable, and secure web applications that power business growth and deliver exceptional user experiences.
                    </motion.p>
                </div>
            </section>*/}
            
            {/* Our Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What We Build</h2>
                        <p className="text-lg text-gray-600 mt-2">Specialized solutions for ambitious goals.</p>
                    </div>
                     <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{staggerChildren: 0.15}}
                     >
                        {ourServices.map((service) => (
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

             {/* Tech Stack Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Technology Stack</h2>
                        <p className="text-lg text-gray-600 mt-2">Leveraging the best tools for the job.</p>
                    </div>
                    <motion.div 
                        className="flex flex-wrap justify-center items-center gap-4 md:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{staggerChildren: 0.1}}
                    >
                        {techStack.map(tech => (
                            <motion.div 
                                key={tech}
                                className="bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-lg shadow-sm"
                                variants={{hidden: {opacity: 0, scale: 0.8}, visible: {opacity: 1, scale: 1}}}
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Work Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Web Projects</h2>
                        <p className="text-lg text-gray-600 mt-2">Code that performs, products that deliver.</p>
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
                                <div className="overflow-hidden">
                                    <img src={project.img} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                                    <p className="text-orange-500 font-medium">{project.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>                        {/* Featured Work Section */}

      {/* Add these Tailwind classes to your main container */}
        {websiteTypes.map((pkg, index) => (
          <WebsiteTypeSection
            key={index+pkg.type}
            type={pkg.type}
            description={pkg.description}
            price={pkg.price}
            duration={pkg.duration}
            features={pkg.features}
          />
        ))}
            {/* Development Process Section */}
             <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Development Process</h2>
                        <p className="text-lg text-gray-600 mt-2">A structured journey to a flawless launch.</p>
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
                                    <div className="relative z-10 mx-auto bg-gray-800 border-4 border-white rounded-full h-24 w-24 flex items-center justify-center flex-col shadow-lg">
                                        <span className="text-3xl font-bold text-orange-500">{index + 1}</span>
                                    </div>
                                    <h3 className="mt-4 font-bold text-gray-800">{step}</h3>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

        </main>
    );
}


