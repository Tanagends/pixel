"use client";
import { motion } from 'framer-motion';
import React from 'react';
import Hero from '@/components/AboutHero';
import CustomValueDisplay from './Values';

// Main Hero Component

const HeroOne = () => {
  return (
    <div className="relative bg-black text-white w-full min-h-screen flex items-center justify-center overflow-hidden p-4 font-sans">
      <BackgroundGrid />
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PixelCrafte
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Weaving Pixels into Seamless Digital Experiences.
        </motion.p>
        <motion.button 
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-8 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ boxShadow: "0px 0px 20px rgba(249, 115, 22, 0.5)" }}
        >
          <span>Explore Our Work</span>
          {/* Replaced react-icon with an inline SVG for compatibility */}
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            >
            </path>
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

// Background Grid Component
const BackgroundGrid = () => {
  // Use a smaller number of grid items for better performance on larger screens
  const numSquares = 20 * 10; // 20 columns, 10 rows
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="grid grid-cols-20 h-full">
        {Array.from({ length: numSquares }).map((_, i) => (
          <motion.div
            key={i}
            // Corrected class for border color
            className="border-[1px] border-neutral-800"
            // Randomized opacity on hover for a more dynamic effect
            whileHover={{ backgroundColor: `rgba(249, 115, 22, ${Math.random() * 0.5 + 0.1})` }}
            transition={{ duration: 0 }}
          />
        ))}
      </div>
    </div>
  );
};

//================================================================//
// 0. INLINE SVG ICONS
// These are included directly to avoid external dependencies.
//================================================================//
const IconTarget = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconHeart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
);
const IconZap = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconLinkedinSocial = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const IconTwitterSocial = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.904-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg>
);


//================================================================//
// AboutPage Component - This is the new page content.
//================================================================//
export default function AboutPage() {

    const teamMembers = [
        {
            name: "Alex Johnson",
            role: "Founder & Lead Developer",
            bio: "With over a decade of experience in architecture and development, Alex founded PixelCrafte to merge technical prowess with creative vision.",
            img: "https://placehold.co/400x400/1a202c/ffffff?text=Alex",
            social: { linkedin: "#", twitter: "#" }
        },
        {
            name: "Maria Garcia",
            role: "Creative Director",
            bio: "Maria's passion for design and user experience drives our creative engine, ensuring every project is both beautiful and intuitive.",
            img: "https://placehold.co/400x400/ff5722/ffffff?text=Maria",
            social: { linkedin: "#", twitter: "#" }
        }
    ];

    const values = [
        {
            icon: <IconZap />,
            title: "Ingenuity",
            description: "We thrive on innovation, constantly exploring new technologies and creative approaches to solve complex challenges."
        },
        {
            icon: <IconTarget />,
            title: "Creativity",
            description: "At our core, we are artists and storytellers, dedicated to crafting digital experiences that leave a lasting impact."
        },
        {
            icon: <IconHeart />,
            title: "Reliability",
            description: "Our commitment is to be a dependable partner. We deliver on our promises with transparency and integrity."
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-white pt-28">
            <Hero />
            {/* Our Story Section */}
            <section className="py-20">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                             initial={{x: -50, opacity: 0}}
                             whileInView={{x: 0, opacity: 1}}
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{duration: 0.8, ease: 'easeOut'}}
                        >
                            <img src="https://placehold.co/600x450/1a202c/ffffff?text=Our+Journey" alt="PixelCrafte team working" className="rounded-lg shadow-xl" />
                        </motion.div>
                        <motion.div
                            initial={{x: 50, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{duration: 0.8, ease: 'easeOut'}}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Founded in 2018, PixelCrafte was born from a shared belief that technology and design should be inseparable. We saw a gap between rigid development firms and purely aesthetic design agencies. Our mission was simple: to create a single, unified team that could build digital products that were both technically brilliant and beautifully designed.
                            </p>
                            <p className="text-gray-600">
                                From our humble beginnings in a small office, we've grown into a dynamic agency serving clients worldwide. Our passion for problem-solving and our commitment to quality have been the cornerstones of our journey.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Core Values Section */}
            <section className="py-20 bg-gray-50 md:hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Values</h2>
                        <p className="text-lg text-gray-600 mt-2">The principles that guide everything we do.</p>
                    </div>
                     <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                     >
                        {values.map((value) => (
                             <motion.div key={value.title} className="text-center p-6" variants={itemVariants}>
                                <div className="inline-block bg-orange-100 text-orange-500 rounded-full p-4 mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-20 p-2 bg-white space-y-8 md:flex hidden flex-col justify-around items-center">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Values</h2>
                        <p className="text-lg text-gray-600 mt-2">The principles that guide everything we do.</p>
                    </div>
                {values.map((value, index) => (
                    <CustomValueDisplay
                        key={index}
                        title={value.title}
                        description={value.description}
                        icon={value.icon}
                    />
                ))}
            </section>

            {/* Meet the Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet the Team</h2>
                        <p className="text-lg text-gray-600 mt-2">The creative minds behind your success.</p>
                    </div>
                     <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                     >
                        {teamMembers.map((member) => (
                             <motion.div
                                key={member.name}
                                className="text-center bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-xl transition-shadow duration-300"
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                             >
                                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                <p className="text-orange-500 font-medium mb-2">{member.role}</p>
                                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                                <div className="flex justify-center space-x-4 text-gray-500">
                                    <a href={member.social.linkedin} className="hover:text-orange-500 transition-colors"><IconLinkedinSocial /></a>
                                    <a href={member.social.twitter} className="hover:text-orange-500 transition-colors"><IconTwitterSocial /></a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        Want to Join Our Team?
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        We're always looking for passionate and talented individuals to join our mission. Explore our open positions and let's create something amazing together.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.button
                            className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            See Open Positions
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

