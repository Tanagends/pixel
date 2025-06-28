import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

//================================================================//
// Metaball Background Component
// A self-contained SVG animation for the hero background.
//================================================================//
const MetaballBackground = () => {
    const controls = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

    useEffect(() => {
        const animateBlobs = () => {
            controls.forEach((control, i) => {
                control.start({
                    cx: `${Math.random() * 50 + 25}%`,
                    cy: `${Math.random() * 50 + 25}%`,
                    transition: {
                        duration: Math.random() * 10 + 10, // Slower, more organic movement
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    }
                });
            });
        };
        animateBlobs();
    }, [controls]);

    return (
        <svg className="absolute top-0 left-0 w-full h-full" >
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
            <g filter="url(#goo)">
                <motion.circle cx="30%" cy="30%" r="120" fill="#fb923c" animate={controls[0]} />
                <motion.circle cx="70%" cy="40%" r="150" fill="#fdba74" animate={controls[1]} />
                <motion.circle cx="40%" cy="70%" r="100" fill="#fed7aa" animate={controls[2]} />
                <motion.circle cx="60%" cy="80%" r="130" fill="#fb923c" animate={controls[3]} />
            </g>
        </svg>
    );
};


//================================================================//
// GraphicDesignHero Component
//================================================================//
export default function GraphicDesignHero() {

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, skewY: 3 },
        visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const headline = "Crafting Visual Identities That Resonate";

    return (
        <section className="relative bg-orange-500 text-white py-24 md:py-32 overflow-hidden">
            <MetaballBackground />
            <div className="absolute inset-0 bg-orange-500/30 backdrop-blur-sm"></div>
            
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <motion.h1
                    className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {headline.split(" ").map((word, index) => (
                        <motion.span 
                            key={index} 
                            className="inline-block mr-3 drop-shadow-md"
                            variants={wordVariants}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    className="max-w-3xl mx-auto text-lg md:text-xl text-orange-100 drop-shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
                >
                    We translate your brand’s essence into compelling visuals that build connection, inspire trust, and drive engagement.
                </motion.p>
            </div>
        </section>
    );
}

