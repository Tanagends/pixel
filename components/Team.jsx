import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

// --- Sample Data Structure ---
// I've created a sample data structure. You can replace this with your actual team data.
const teamMembers = [
    {
        name: 'Alex Volkov',
        role: 'LEAD DEVELOPER & ARCHITECT',
        bio: 'The mastermind behind our technical strategy, Alex transforms complex problems into elegant, scalable solutions with a passion for clean code and robust architecture.',
        img: 'https://placehold.co/400x400/1a202c/FFFFFF?text=AV',
        social: {
            linkedin: 'https://www.linkedin.com/',
            github: 'https://github.com/',
        },
    },
    {
        name: 'Jasmine Chen',
        role: 'CREATIVE DIRECTOR & UI/UX LEAD',
        bio: 'Jasmine is the visionary artist who breathes life into our projects, crafting intuitive user experiences and stunning visuals that captivate and engage.',
        img: 'https://placehold.co/400x400/ff5722/FFFFFF?text=JC',
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
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 },
    },
};


// --- The Elite Team Section Component ---

const EliteTeamSection = () => {
    return (
        <section className="relative py-24 bg-gray-900 overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,87,34,0.2),rgba(255,255,255,0))]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                        The Minds Behind the Magic
                    </h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                        We are a small, potent team of creators and strategists dedicated to digital excellence.
                    </p>
                </div>

                <motion.div
                    className="flex flex-col items-center justify-center gap-12 lg:gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.name}
                            className="w-full max-w-4xl group"
                            variants={itemVariants}
                        >
                            {/* Gradient Border Card Effect */}
                            <div className="p-[2px] bg-gradient-to-br from-orange-500/50 via-transparent to-transparent rounded-2xl transition-all duration-500 group-hover:from-orange-500 group-hover:via-orange-500/30">
                                <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                        {/* Profile Image */}
                                        <motion.div
                                            className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <img
                                                src={member.img}
                                                alt={member.name}
                                                className="w-full h-full rounded-full object-cover border-4 border-gray-700/50 transition-all duration-500 group-hover:border-orange-500/70"
                                            />
                                        </motion.div>

                                        {/* Member Info */}
                                        <div className="text-center md:text-left">
                                            <p className="text-xs font-bold text-orange-400 tracking-widest uppercase mb-1">
                                                {member.role}
                                            </p>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                                {member.name}
                                            </h3>
                                            <p className="text-gray-300 text-sm md:text-base mb-6">
                                                {member.bio}
                                            </p>
                                            <div className="flex justify-center md:justify-start space-x-4 text-gray-400">
                                                <motion.a
                                                    href={member.social.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-white transition-colors"
                                                    whileHover={{ y: -3, scale: 1.1 }}
                                                >
                                                    <Linkedin size={24} />
                                                </motion.a>
                                                <motion.a
                                                    href={member.social.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-white transition-colors"
                                                    whileHover={{ y: -3, scale: 1.1 }}
                                                >
                                                    <Github size={24} />
                                                </motion.a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default EliteTeamSection;

