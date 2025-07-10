"use client";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Hero from '@/components/ContactHero';
import Subscribe from './Subscribe';
import ContactForm from './ContactForm';
import { Globe } from '@/components/magicui/globe';
import { MapPin, Phone, Mail, Building } from 'lucide-react';

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
        <div className="border-b border-gray-200/20 py-6">
            <motion.div
                className="flex justify-between items-center cursor-pointer"
                onClick={onClick}
            >
                <h3 className="text-lg font-medium text-gray-200">{question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <IconPlus className={`transition-transform duration-300 text-orange-500`} />
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
                        <p className="text-gray-400">{answer}</p>
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
        <div className="bg-gray-900 text-gray-200 pt-28">            
            <Hero />

            {/* Contact Form & Details Section */}
            <section className="py-20 bg-gray-900">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-16">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Column 1: Contact Details */}
                        <motion.div
                             className="lg:col-span-1 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg"
                             initial={{x: -50, opacity: 0}}
                             whileInView={{x: 0, opacity: 1}}
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{duration: 0.8, ease: 'easeOut'}}
                        >
                            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-orange-500/10 text-orange-400 rounded-full p-3 mt-1 border border-orange-500/20"><Building size={20} /></div>
                                    <div>
                                        <h3 className="font-bold text-white">Our Office</h3>
                                        <p className="text-gray-400">123 Creative Lane<br/>Innovate City, CA 90210</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                     <div className="bg-orange-500/10 text-orange-400 rounded-full p-3 mt-1 border border-orange-500/20"><Phone size={20} /></div>
                                    <div>
                                        <h3 className="font-bold text-white">Phone</h3>
                                        <p className="text-gray-400">+1 (234) 567-890</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                     <div className="bg-orange-500/10 text-orange-400 rounded-full p-3 mt-1 border border-orange-500/20"><Mail size={20} /></div>
                                    <div>
                                        <h3 className="font-bold text-white">Email</h3>
                                        <p className="text-gray-400">hello@pixelcrafte.com</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Column 2: Contact Form */}
                        <div className="lg:col-span-2 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <Subscribe />
            {/* Map Section */}
            <section className="bg-gray-900 overflow-hidden">
                <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-transparent px-4 sm:px-8 md:px-20 lg:px-40 pb-40 pt-8 md:pb-60 w-full mx-auto">
                  <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-400/80 bg-clip-text text-center text-5xl sm:text-6xl md:text-7xl font-semibold leading-none text-transparent">
                        <MapPin className='text-orange-500 inline-block mb-2' size={48} /> We Are Everywhere
                  </span>
                  <Globe className="top-28 text-orange-500" 
                  />
                  <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(255,165,0,0.1),rgba(0,0,0,0))]" />
                </div>            
            </section>
            
             {/* FAQ Section */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Quick Answers</h2>
                    </div>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg">
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


