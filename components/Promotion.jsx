import React from 'react';
import { motion } from 'framer-motion';

//================================================================//
// INLINE SVG ICONS
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
// NEW: Reusable PromoCard Component
// Features a 3D tilt and interactive spotlight hover effect.
//================================================================//
const PromoCard = ({ icon, category, title, description, buttonText, isDarkMode = false }) => {
    
    // Animate the card itself
    const cardVariant = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    // Handle the spotlight effect on pointer move
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    // Dynamic classes for light and dark modes
    const baseClasses = "group relative rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-out";
    const modeClasses = isDarkMode 
        ? "bg-gray-800 text-white border-gray-700 hover:border-orange-500/50" 
        : "bg-white text-gray-800 border-gray-200 hover:border-orange-500/50";
    
    // Dynamic spotlight colors
    const spotlightClasses = isDarkMode
        ? "before:bg-[radial-gradient(400px_at_var(--x)_var(--y),rgba(255,255,255,0.08),transparent_40%)]"
        : "before:bg-[radial-gradient(400px_at_var(--x)_var(--y),rgba(0,0,0,0.05),transparent_40%)]";

    return (
        <motion.div
            variants={cardVariant}
            className={`${baseClasses} ${modeClasses} border`}
            onMouseMove={handleMouseMove}
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Spotlight Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${spotlightClasses} before:absolute before:inset-0`} />

            {/* Card Content with 3D Tilt */}
            <motion.div 
                className="relative p-8 md:p-10"
                style={{ transform: "translateZ(20px)" }}
                whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                }}
            >
                <div className={`absolute top-6 right-6 p-3 rounded-full transition-transform duration-300 ease-out group-hover:scale-110 ${isDarkMode ? 'bg-white/10 text-white' : 'bg-orange-100 text-orange-500'}`}>
                    {icon}
                </div>
                <span className={`font-bold ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`}>{category}</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">{title}</h3>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
                <motion.button 
                    className={`inline-flex items-center space-x-2 font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-100 text-gray-800 group-hover:bg-orange-500 group-hover:text-white'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span>{buttonText}</span>
                    <IconArrowRight />
                </motion.button>
            </motion.div>
        </motion.div>
    );
};


//================================================================//
// Main PromotionSection Component
//================================================================//
export default function PromotionSection() {
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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
                    <PromoCard
                        icon={<IconMortarBoard />}
                        category="FOR SCHOOLS & COLLEGES"
                        title="Empower Your Institution"
                        description="Get a modern, professional, and easy-to-manage website for your high school or college. We're offering special discounts to help educational institutions shine online."
                        buttonText="Claim School Discount"
                    />

                    {/* Card 2: IT & Software Solutions */}
                    <PromoCard
                        icon={<IconBriefcase />}
                        category="FOR BUSINESSES"
                        title="Streamline Your Operations"
                        description="Upgrade your business infrastructure with our IT consultancy packages. Get discounted rates on corporate email setup, cloud solutions, and bespoke software development."
                        buttonText="Explore IT Packages"
                        isDarkMode={true}
                    />
                </motion.div>
            </div>
        </section>
    );
};
