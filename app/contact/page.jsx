"use client";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Hero from '@/components/ContactHero';

// Main Hero Component
const HeroTwo = () => {
  const words = ["Build", "Innovate", "Launch"];
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start("visible");
        await new Promise(resolve => setTimeout(resolve, 1500));
        await controls.start("hidden");
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    };
    sequence();
  }, [controls]);

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: 'spring',
        stiffness: 100,
        damping: 12
      },
    }),
  };

  return (
    <div className="relative bg-black text-white w-full min-h-screen flex flex-col items-center justify-center overflow-hidden p-4 font-sans">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-light text-gray-400 mb-2">We <span className="text-orange-500">PixelCrafte</span></h1>
        <div className="flex text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter h-24 md:h-32 lg:h-40">
          {words.map((word, i) => (
            <motion.span
              key={word}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate={controls}
              className="absolute"
            >
              {word}
            </motion.span>
          ))}
        </div>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mt-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Transforming bold ideas into powerful web realities. Your vision, engineered with precision and passion.
        </motion.p>
      </div>
    </div>
  );
};

// Particle Background Component
const ParticleBackground = () => {
    const particles = Array.from({ length: 50 });
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            {particles.map((_, i) => {
                const size = Math.random() * 3 + 1;
                const duration = Math.random() * 20 + 15;
                const delay = Math.random() * -duration;
                const initialX = Math.random() * 100;
                const initialY = Math.random() * 100;

                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-orange-500/30"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: `${initialX}%`,
                            top: `${initialY}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 200 - 100, 0],
                            y: [0, Math.random() * 200 - 100, 0],
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'linear',
                            delay: delay
                        }}
                    />
                );
            })}
        </div>
    );
};

//================================================================//
// 0. INLINE SVG ICONS
// These are included directly to avoid external dependencies.
//================================================================//
const IconMapPin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconPhoneCall = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.98z"/></svg>
);
const IconMail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const IconPlus = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
);


//================================================================//
// Accordion Item Component (for FAQ)
//================================================================//
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-6 pt-28">
            <motion.div
                className="flex justify-between items-center cursor-pointer"
                onClick={onClick}
            >
                <h3 className="text-lg font-medium text-gray-800">{question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <IconPlus className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                </motion.div>
            </motion.div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto", marginTop: '16px' },
                            collapsed: { opacity: 0, height: 0, marginTop: '0px' }
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <p className="text-gray-600">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


//================================================================//
// ContactPage Component - This is the new page content.
//================================================================//
export default function ContactPage() {
    
    const [openFaq, setOpenFaq] = useState(null);

    const faqData = [
        { q: "What's the best way to get a project quote?", a: "The best way is to fill out the contact form on this page with as much detail as possible about your project. We'll review it and get back to you within 24-48 hours to schedule a consultation." },
        { q: "What are your business hours?", a: "Our team is available from 9:00 AM to 6:00 PM, Monday through Friday. We do our best to respond to all inquiries as quickly as possible, even outside of these hours." },
        { q: "Do you work with international clients?", a: "Absolutely! We've collaborated with clients from all over the globe. We leverage modern communication tools to ensure a smooth and transparent process, regardless of time zones." },
    ];

    return (
        <div className="bg-white pt-28">
            {/* Contact Hero Section
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-gray-800"
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6}}
                    >
                        Let's <span className="text-orange-500">Connect</span>
                    </motion.h1>
                    <motion.p 
                        className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        Have a question or a project in mind? We'd love to hear from you. Fill out the form below or reach out to us directly.
                    </motion.p>
                </div>
            </section> */}
            
            <Hero />
            {/* Contact Form & Details Section */}
            <section className="py-20">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Column 1: Contact Details */}
                        <motion.div
                             className="lg:col-span-1"
                             initial={{x: -50, opacity: 0}}
                             whileInView={{x: 0, opacity: 1}}
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{duration: 0.8, ease: 'easeOut'}}
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-orange-100 text-orange-500 rounded-full p-3 mt-1"><IconMapPin /></div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Our Office</h3>
                                        <p className="text-gray-600">123 Creative Lane<br/>Innovate City, CA 90210</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                     <div className="bg-orange-100 text-orange-500 rounded-full p-3 mt-1"><IconPhoneCall /></div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Phone</h3>
                                        <p className="text-gray-600">+1 (234) 567-890</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                     <div className="bg-orange-100 text-orange-500 rounded-full p-3 mt-1"><IconMail /></div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Email</h3>
                                        <p className="text-gray-600">hello@pixelcrafte.com</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Column 2: Contact Form */}
                        <motion.div
                            className="lg:col-span-2 bg-gray-50 p-8 rounded-lg shadow-lg"
                            initial={{x: 50, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{duration: 0.8, ease: 'easeOut'}}
                        >
                             <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input type="text" name="name" id="name" className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-orange-500 focus:border-orange-500 shadow-sm" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input type="email" name="email" id="email" className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-orange-500 focus:border-orange-500 shadow-sm" />
                                    </div>
                                </div>
                                 <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input type="text" name="subject" id="subject" className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-orange-500 focus:border-orange-500 shadow-sm" />
                                </div>
                                <div>
                                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                     <textarea id="message" name="message" rows="5" className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-orange-500 focus:border-orange-500 shadow-sm"></textarea>
                                </div>
                                <div>
                                    <motion.button 
                                        type="submit"
                                        className="w-full bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Send Message
                                    </motion.button>
                                </div>
                             </form>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* Map Section */}
            <section className="bg-gray-50">
                <motion.div 
                    className="container mx-auto px-4 sm:px-6 lg:px-8 py-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        {/* Placeholder for an interactive map */}
                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                            <img src="https://placehold.co/1200x400/1a202c/ffffff?text=Our+Location+on+a+Map" alt="Map showing office location" className="w-full h-full object-cover" />
                        </a>
                    </div>
                </motion.div>
            </section>
            
             {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Quick Answers</h2>
                    </div>
                    <div>
                        {faqData.map((faq, index) => (
                            <AccordionItem 
                                key={index}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openFaq === index}
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}


