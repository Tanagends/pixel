import React from 'react';
import { motion } from 'framer-motion';

// --- SVG Icon Components for Social Links ---
// Using inline SVG for icons gives us full control over styling and avoids external requests.
const IconLinkedin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const IconGithub = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);


// --- Team Data ---
// Expanded to three members to showcase the grid layout.
// Added a 'skills' array to highlight expertise.
const teamMembers = [
    {
        name:"Tanatswa H Gendere",
        role: 'Backend Engineer & DevOps Specialist',
        img: 'https://placehold.co/200x200/1a202c/ffffff?text=THG',
        bio: 'Tanatswa excels in building robust backend systems and optimizing deployment pipelines for maximum efficiency.',
        skills: ['Node.js', 'Express', 'Docker', 'Kubernetes', 'AWS', 'Python'],
        social: {
            linkedin: 'https://www.linkedin.com/in/tanagends/',
            github: 'https://github.com/Tanagends/',
        },
    },
    {
        name: "Worship L Mugomeza",
        role: 'Frontend Engineer & Mobile App Developer',
        img: 'https://placehold.co/200x200/1a202c/ffffff?text=WLM',
        bio: 'Worship is a skilled developer with a passion for creating seamless user experiences across web and mobile platforms.',
        skills: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'TypeScript', 'Flutter'],
        social: {
            linkedin: 'https://www.linkedin.com/in/worship-livingstone-mugomeza-aa771a318/',
            github: 'https://github.com/worshix/',
        },
    }
];

// --- Framer Motion Animation Variants ---
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2, // Animates children one by one with a delay
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};


// --- The Main Team Section Component ---
const TeamSection = () => {
    return (
        <section className="py-24 bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        The Minds Behind the Magic
                    </h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                        We are a curated team of strategists, engineers, and designers driven by a shared passion for excellence.
                    </p>
                </div>

                {/* Team Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.name}
                            className="group relative flex flex-col items-center text-center bg-gray-800/50 rounded-xl p-8 transition-all duration-300"
                            variants={itemVariants}
                        >
                            {/* Glowing background effect on hover - UPDATED to brand colors */}
                            <div className="absolute -inset-px bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                            <div className="absolute -inset-px bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                            
                            <div className="relative z-10 flex flex-col items-center w-full">
                                {/* Profile Image */}
                                <div className="relative mb-6">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-700 group-hover:ring-orange-500 transition-all duration-300"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/1a202c/ff0000?text=Error'; }}
                                    />
                                </div>

                                {/* Name & Role - UPDATED to brand colors */}
                                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                                <p className="text-orange-400 font-medium mb-4">{member.role}</p>
                                <p className="text-gray-400 text-sm mb-6 h-16">{member.bio}</p>

                                {/* Skills Section */}
                                <div className="mb-6 w-full">
                                    <h4 className="font-semibold text-gray-300 mb-3">Core Skills</h4>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {member.skills.map(skill => (
                                            <span key={skill} className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Links - UPDATED to brand colors */}
                                <div className="flex justify-center space-x-5 text-gray-500">
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                                        <IconLinkedin />
                                    </a>
                                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                                        <IconGithub />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// To use this component, you would import it into your page like this:
// import TeamSection from './TeamSection';
//
// function App() {
//   return (
//     <div className="bg-gray-900">
//       <TeamSection />
//     </div>
//   );
// }
//
// export default App;

export default TeamSection;

