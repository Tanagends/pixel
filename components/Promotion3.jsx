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
// Background SVG Decoration
//================================================================//
const BackgroundBands = () => (
    <svg
        // **FIX:** Changed text color to a slightly darker gray to be more visible
        // against the light background with the soft-light blend mode.
        className="absolute top-0 left-0 w-full h-full text-gray-300/50 mix-blend-soft-light"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M-200 800C-100 800 50 400 200 400S500 800 600 800s250-400 400-400 300 400 400 400 250-400 400-400V0H-200v800z" fill="currentColor" />
        <path d="M-200 800C-100 800 50 500 200 500S500 800 600 800s250-300 400-300 300 300 400 300 250-300 400-300V0H-200v800z" fill="currentColor" opacity="0.5" />
    </svg>
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
        <section className="py-20 md:py-32 bg-gray-100 relative overflow-hidden">
            <BackgroundBands />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Limited-Time Offers</h2>
                    <motion.div 
                        className="mt-2 h-1 bg-orange-500 mx-auto"
                        style={{ width: '100px' }}
                        initial={{ scaleX: 0, originX: 0.5 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    />
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
                        className="bg-white rounded-xl shadow-2xl overflow-hidden group relative"
                        variants={cardVariant}
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            // **FIX:** Using a more visually distinct placeholder image to ensure it's visible.
                            style={{ backgroundImage: `url(https://placehold.co/600x400/334155/f1f5f9?text=Education)` }}
                        ></div>
                        {/* **FIX:** Reduced overlay opacity to make the background image more prominent. */}
                        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

                        <div className="p-8 md:p-10 relative">
                             <div className="absolute top-6 right-6 bg-orange-100 text-orange-500 rounded-full p-3 shadow-sm">
                                <IconMortarBoard />
                            </div>
                            <span className="text-orange-500 font-bold">FOR SCHOOLS & COLLEGES</span>
                            <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-4">Empower Your Institution</h3>
                            <p className="text-gray-700 mb-6">
                                Get a modern, professional, and easy-to-manage website for your high school or college. We're offering special discounts to help educational institutions shine online.
                            </p>
                            <motion.button 
                                className="inline-flex items-center space-x-2 font-bold text-gray-800 bg-gray-200 py-3 px-6 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm"
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
                        className="bg-gray-800 text-white rounded-xl shadow-2xl overflow-hidden group relative"
                        variants={cardVariant}
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            // **FIX:** Using a more visually distinct placeholder image.
                            style={{ backgroundImage: `url(https://placehold.co/600x400/e2e8f0/1e293b?text=Business)` }}
                        ></div>
                         {/* **FIX:** Reduced overlay opacity to make the background image more prominent. */}
                        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>

                        <div className="p-8 md:p-10 relative">
                             <div className="absolute top-6 right-6 bg-white/10 text-white rounded-full p-3 shadow-sm">
                                <IconBriefcase />
                            </div>
                            <span className="text-orange-400 font-bold">FOR BUSINESSES</span>
                            <h3 className="text-3xl font-bold mt-2 mb-4">Streamline Your Operations</h3>
                            <p className="text-gray-300 mb-6">
                                Upgrade your business infrastructure with our IT consultancy packages. Get discounted rates on corporate email setup, cloud solutions, and bespoke software development.
                            </p>
                            <motion.button 
                                className="inline-flex items-center space-x-2 font-bold text-white bg-orange-500 py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md shadow-orange-500/20"
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

