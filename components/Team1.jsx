import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

// --- Sample Data Structure ---
// This data structure is the same, so you can easily swap between designs.
const teamMembers = [
    {
        name: 'Alex Volkov',
        role: 'LEAD DEVELOPER & ARCHITECT',
        bio: 'The mastermind behind our technical strategy, Alex transforms complex problems into elegant, scalable solutions.',
        img: 'https://placehold.co/400x400/1a202c/FFFFFF?text=AV',
        social: {
            linkedin: 'https://www.linkedin.com/',
            github: 'https://github.com/',
        },
    },
    {
        name: 'Jasmine Chen',
        role: 'CREATIVE DIRECTOR & UI/UX LEAD',
        bio: 'Jasmine is the visionary artist who breathes life into our projects, crafting intuitive and stunning visuals.',
        img: 'https://placehold.co/400x400/ff5722/FFFFFF?text=JC',
        social: {
            linkedin: 'https://www.linkedin.com/',
            github: 'https://github.com/',
        },
    },
    {
        name: 'Samuel Jones',
        role: 'PROJECT MANAGER & STRATEGIST',
        bio: 'Samuel ensures every project is a seamless journey from concept to launch, aligning strategy with execution.',
        img: 'https://placehold.co/400x400/1f2937/FFFFFF?text=SJ',
        social: {
            linkedin: 'https://www.linkedin.com/',
            github: 'https://github.com/',
        },
    },
];

// --- Animation Variants for Framer Motion ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 120 },
    },
};

const infoRevealVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: { duration: 0.4, ease: 'easeOut' }
    }
};

// --- The Alternative Elite Team Section Component (Light Theme) ---

const EliteTeamSection = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
                        The Minds Behind the Magic
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        We are a small, potent team of creators and strategists dedicated to digital excellence.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.name}
                            className="relative rounded-2xl overflow-hidden shadow-lg group"
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 200 } }}
                        >
                            {/* Background Image */}
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                            {/* Name and Role (Always Visible) */}
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-2xl font-bold text-white">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-semibold text-orange-400 tracking-wider uppercase">
                                    {member.role}
                                </p>
                            </div>

                            {/* Bio and Socials (Reveal on Hover) */}
                            <motion.div
                                className="absolute inset-0 p-6 bg-white/90 backdrop-blur-sm flex flex-col justify-center items-center text-center"
                                variants={infoRevealVariants}
                                initial="hidden"
                                whileHover="visible"
                            >
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-semibold text-orange-600 tracking-wider uppercase mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm mb-5 max-w-xs">
                                    {member.bio}
                                </p>
                                <div className="flex justify-center space-x-5 text-gray-500">
                                    <motion.a
                                        href={member.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-orange-600 transition-colors"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <Linkedin size={28} />
                                    </motion.a>
                                    <motion.a
                                        href={member.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-orange-600 transition-colors"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <Github size={28} />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default EliteTeamSection;

