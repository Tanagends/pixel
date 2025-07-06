"use client";
import React from 'react';
import { motion } from 'framer-motion';


//================================================================//
// INLINE SVG ICONS
//================================================================//
const IconRocket = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>);
const IconTrendingUp = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>);
const IconPenTool = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><path d="m11 13 2.5 2.5"/></svg>);
const IconCheckCircle = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>);
const IconMail = () => (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);

//================================================================//
// Animated Hero Background
//================================================================//
const HeroBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden bg-gray-50 -z-10">
            <motion.div 
                className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'mirror'
                }}
            />
            <motion.div 
                className="absolute -bottom-40 -right-40 w-96 h-96 bg-gray-800/10 rounded-full filter blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -50, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    delay: 5
                }}
            />
        </div>
    );
};

//================================================================//
// SchoolOfferPage Component
//================================================================//
export default function SchoolOfferPage() {

    const wordReveal = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.05 } },
    };
    const letterReveal = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const features = [
        "Effortless Blog Publishing for Journalism Clubs",
        "No-Code Event & Announcement Management",
        "Scheduled Future Publishing",
        "Seamless Social Media Integration",
        "Limitless Page Customization without Code",
        "Full Accessibility (WCAG) Compliance",
    ];

    return (
        <div className="bg-gray-50 pt-28">
            {/* Hero Section */}
            <section className="relative py-20 md:py-24 text-center overflow-hidden">
                <HeroBackground />
                <div className="container mx-auto px-6 relative">
                    <motion.h1 
                        className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-800"
                        variants={wordReveal}
                        initial="hidden"
                        animate="visible"
                    >
                        {"Elevate Your School's".split(" ").map((word, i) => (
                            <motion.span key={i} className="inline-block mr-3" variants={letterReveal}>{word}</motion.span>
                        ))}
                        <br />
                        <span className="text-orange-500">
                            {"Digital Presence.".split(" ").map((word, i) => (
                                <motion.span key={i} className="inline-block mr-3" variants={letterReveal}>{word}</motion.span>
                            ))}
                        </span>
                    </motion.h1>
                    <motion.p 
                        className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        Attract new students, engage your community, and build alumni pride with a website that truly represents your institution's excellence.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <motion.button 
                            className="mt-8 bg-orange-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg shadow-orange-500/20"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Claim Your Discount
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Why PixelCrafte Section */}
            <section className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Beyond a Website: A Digital Campus</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-gray-600">We deliver more than just pages; we build a foundation for your school's future.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.div className="text-center p-8" initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.6, delay: 0}}>
                            <div className="inline-block bg-orange-100 text-orange-500 p-4 rounded-full mb-4"><IconPenTool /></div>
                            <h3 className="text-xl font-bold mb-2">Cutting-Edge Design</h3>
                            <p className="text-gray-600">Aesthetic, modern designs that are far above the standard in Zimbabwe, creating a prestigious first impression.</p>
                        </motion.div>
                        <motion.div className="text-center p-8" initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.6, delay: 0.2}}>
                            <div className="inline-block bg-orange-100 text-orange-500 p-4 rounded-full mb-4"><IconTrendingUp /></div>
                            <h3 className="text-xl font-bold mb-2">Dominant Online Presence</h3>
                            <p className="text-gray-600">Expert SEO strategies to ensure your school ranks high, reaching a wider audience and attracting new students.</p>
                        </motion.div>
                        <motion.div className="text-center p-8" initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.6, delay: 0.4}}>
                            <div className="inline-block bg-orange-100 text-orange-500 p-4 rounded-full mb-4"><IconRocket /></div>
                            <h3 className="text-xl font-bold mb-2">Peak Performance & Speed</h3>
                            <p className="text-gray-600">Fast load times and a smooth user experience on any device, ensuring visitors stay engaged and informed.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* Features Section */}
            <section className="py-20 md:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="pr-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Empowerment Through Technology</h2>
                            <p className="text-lg text-gray-600 mb-8">We provide the tools for your entire school community to contribute, create, and connect—no coding required.</p>
                            <ul className="space-y-4">
                                {features.map((feature, i) => (
                                    <motion.li key={feature} className="flex items-center space-x-3" initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} viewport={{once: true, amount: 0.8}} transition={{delay: i * 0.1}}>
                                        <div className="bg-green-500 text-white rounded-full p-1"><IconCheckCircle /></div>
                                        <span className="text-gray-700">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <motion.div className="h-96 bg-white rounded-xl shadow-2xl p-6" initial={{scale: 0.9, opacity: 0}} whileInView={{scale: 1, opacity: 1}} viewport={{once: true}} transition={{duration: 0.8}}>
                            <div className="h-full w-full border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
                                <p className="text-gray-400 text-center">Visual Mockup of<br/>No-Code Page Builder</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Corporate Emails Section */}
            <section className="py-20 md:py-24 bg-gray-800 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div className="text-center lg:text-left" initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.8}}>
                            <div className="inline-block bg-orange-500/20 text-orange-400 p-4 rounded-full mb-4"><IconMail /></div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reinforce Your Digital Professionalism</h2>
                            <p className="text-gray-300">Official communications carry more weight with a professional domain. We provide corporate email setup (e.g., <span className="font-mono text-orange-400">j.doe@yourhighschool.ac.zw</span>) to enhance the credibility of your staff and student recommendations.</p>
                        </motion.div>
                        <motion.div className="bg-gray-900/50 rounded-xl shadow-lg p-8" initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.8}}>
                            <p className="font-mono text-sm text-gray-400">// Example Staff Email Signature</p>
                            <div className="mt-4 border-t-2 border-orange-500 pt-4">
                                <p className="font-bold text-lg text-white">John Doe</p>
                                <p className="text-gray-300">Head of Science Department</p>
                                <p className="text-orange-400 mt-2">j.doe@yourhighschool.ac.zw</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bespoke Solutions & CTA */}
            <section className="py-20 md:py-24 bg-white text-center">
                 <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Need a Custom Solution?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-600 mb-8">Beyond websites, we can develop bespoke software for your school, including School Management Systems, e-learning platforms, and results publishing portals.</p>
                    <motion.button 
                        className="bg-gray-800 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-black transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Request a Bespoke Consultation
                    </motion.button>
                 </div>
            </section>

        </div>
    );
}

