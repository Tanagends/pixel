import React from 'react';
import { motion } from 'framer-motion';

//================================================================//
// INLINE SVG ICONS
// Self-contained icons for the promotion cards.
//================================================================//
const IconMortarBoard = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5"/></svg>
);

const IconBriefcase = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);

const IconArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);


//================================================================//
// PromotionSection Component
//================================================================//
export default function PromotionSection() {

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Limited-Time Offers</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                        We're empowering the next generation and streamlining businesses with these exclusive packages.
                    </p>
                </div>

                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto"
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Card 1: Educational Websites */}
                    <motion.div 
                        className="bg-white rounded-xl shadow-lg overflow-hidden group"
                        variants={cardVariant}
                    >
                        <div className="p-8 md:p-10 relative">
                             <div className="absolute top-6 right-6 bg-orange-100 text-orange-500 rounded-full p-3">
                                <IconMortarBoard />
                            </div>
                            <span className="text-orange-500 font-bold">FOR SCHOOLS & COLLEGES</span>
                            <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-4">Empower Your Institution</h3>
                            <p className="text-gray-600 mb-6">
                                Get a modern, professional, and easy-to-manage website for your high school or college. We're offering special discounts to help educational institutions shine online.
                            </p>
                            <motion.button 
                                className="inline-flex items-center space-x-2 font-bold text-gray-800 bg-gray-100 py-3 px-6 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Claim School Discount</span>
                                <IconArrowRight />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Card 2: IT & Software Solutions */}
                    <motion.div 
                        className="bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden group"
                        variants={cardVariant}
                    >
                        <div className="p-8 md:p-10 relative">
                             <div className="absolute top-6 right-6 bg-white/10 text-white rounded-full p-3">
                                <IconBriefcase />
                            </div>
                            <span className="text-orange-400 font-bold">FOR BUSINESSES</span>
                            <h3 className="text-3xl font-bold mt-2 mb-4">Streamline Your Operations</h3>
                            <p className="text-gray-300 mb-6">
                                Upgrade your business infrastructure with our IT consultancy packages. Get discounted rates on corporate email setup, cloud solutions, and bespoke software development.
                            </p>
                            <motion.button 
                                className="inline-flex items-center space-x-2 font-bold text-white bg-orange-500 py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Explore IT Packages</span>
                                <IconArrowRight />
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

