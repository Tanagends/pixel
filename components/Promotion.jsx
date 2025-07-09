import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//================================================================//
// INLINE SVG ICONS (Updated with className for styling)
//================================================================//
const IconMortarBoard = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5"/></svg>
);

const IconBriefcase = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);

const IconArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

//================================================================//
// Data for the two promotions - NOW BRAND ALIGNED
//================================================================//
const promoData = {
    education: {
        id: 'education',
        icon: <IconMortarBoard className="text-orange-300" />,
        category: 'FOR THE ACADEMY',
        title: 'Architecting Digital Legacies',
        description: "Elevate your institution beyond a mere online presence. We craft immersive digital experiences for schools and colleges, forging a modern, intuitive, and inspiring platform for the next generation of leaders.",
        buttonText: 'Shape Your Legacy',
    },
    business: {
        id: 'business',
        icon: <IconBriefcase className="text-orange-300" />,
        category: 'FOR THE ENTERPRISE',
        title: 'Engineering Market Leaders',
        description: "In the digital arena, infrastructure is destiny. We provide elite IT consultancy—deploying robust cloud solutions, bespoke software, and fortified corporate email systems to streamline and secure your operations.",
        buttonText: 'Engineer Your Advantage',
    }
};

//================================================================//
// Interactive Promotion Panel Component (CORRECTED)
//================================================================//
const PromoPanel = ({ data, isActive }) => {
    const panelVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.5, 
                ease: 'easeOut',
                staggerChildren: 0.1 
            } 
        },
        exit: { 
            opacity: 0, 
            y: -30, 
            transition: { 
                duration: 0.3, 
                ease: 'easeIn' 
            } 
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    // THIS IS THE CORRECTED LINE:
                    className="absolute inset-0 flex flex-col items-center justify-start text-center p-8 pt-28"
                >
                    <motion.div variants={itemVariants} className="mb-4">{data.icon}</motion.div>
                    <motion.span variants={itemVariants} className={`font-semibold text-sm tracking-widest uppercase text-orange-400`}>
                        {data.category}
                    </motion.span>
                    <motion.h3 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
                        {data.title}
                    </motion.h3>
                    <motion.p variants={itemVariants} className="max-w-xl text-gray-300 mb-8">
                        {data.description}
                    </motion.p>
                    <motion.button
                        variants={itemVariants}
                        className={`inline-flex items-center space-x-2.5 font-bold py-3 px-8 rounded-full text-white bg-orange-500 transition-all duration-300`}
                        style={{'--glow-color': '249, 115, 22', boxShadow: '0 0 20px rgba(var(--glow-color),0.7)'}}
                        whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 30px rgba(var(--glow-color),1)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>{data.buttonText}</span>
                        <IconArrowRight />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

//================================================================//
// Main PromotionSection Component (No changes needed here now)
//================================================================//
export default function PromotionSection() {
    const [activePromo, setActivePromo] = useState('education');

    const handleToggle = (promo) => {
        if (promo !== activePromo) {
            setActivePromo(promo);
        }
    };

    const ToggleButton = ({ promoId, children }) => {
        const isActive = activePromo === promoId;
        return (
            <button
                onClick={() => handleToggle(promoId)}
                className={`relative px-8 py-3 text-sm font-bold transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white/70'
                }`}
            >
                {isActive && (
                    <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-orange-900/40 rounded-full"
                        style={{ originX: 0.5 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                )}
                <span className="relative z-10">{children}</span>
            </button>
        );
    };

    return (
        <section className="py-24 md:py-32 bg-black overflow-hidden">
            <div className="container mx-auto px-6">
                
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        The Nexus of Innovation
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-300">
                        We operate at the intersection of academia and enterprise, building tomorrow's digital framework today.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto h-[480px] md:h-[420px] bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl shadow-black/30">
                    {/* Background Glow */}
                    <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 blur-3xl opacity-20"
                        style={{ backgroundColor: "rgba(249, 115, 22, 0.4)" }} // Orange Glow
                    />

                    {/* Toggle Switch */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex items-center bg-black/50 border border-white/10 rounded-full p-1">
                        <ToggleButton promoId="education">Education</ToggleButton>
                        <ToggleButton promoId="business">Business</ToggleButton>
                    </div>

                    {/* Content Panels */}
                    <div className="relative w-full h-full">
                        <PromoPanel data={promoData.education} isActive={activePromo === 'education'} />
                        <PromoPanel data={promoData.business} isActive={activePromo === 'business'} />
                    </div>
                </div>

            </div>
        </section>
    );
}
