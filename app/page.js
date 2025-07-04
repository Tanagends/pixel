"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SVG Icon Components ---
// Using inline SVGs is efficient and allows for easy styling.

const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

const DribbbleIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.6,8.28c-.28-.12-3.13-1.4-3.23-1.46-.3-.17-.5.12-.41.34.11.28.89,2.21,1.08,2.68.19.46-.16.85-.59.78-.44-.07-2.32-1.2-2.7-1.38-.38-.18-.83.13-.75.58.08.45,1.2,3.2,1.38,3.67.18.47-.19.92-.66.85-.47-.07-2.68-1.9-3.04-2.15-.36-.25-.86.06-.75.56.11.5,1.1,3.48,1.26,3.9.16.42-.21.82-.64.75-.43-.07-3.26-2.58-3.48-2.8-.22-.22-.64.04-.54.46.1.42,1.2,4.02,1.36,4.4.16.38-.21.75-.6.68-.4-.07-4.4-4.07-4.4-4.07-.35-.35-.07-.8.3-.8s8.94,8.12,9,8.1.53.15.7-.3-.5-1.28-.5-1.28s3.1-2.8,3.35-3.12c.25-.32.1-.7-.2-.7z" clipRule="evenodd"/>
    </svg>
);

const CodeBracketIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);

const PaintBrushIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.43 2.43a4.5 4.5 0 00-.976 8.228 27.534 27.534 0 0011.036-5.213c.224-.197.46-.418.683-.655l-2.91-2.91a3.002 3.002 0 00-4.243-4.243zM12 2.25a2.25 2.25 0 00-2.25 2.25v11.16a3 3 0 00.999 2.121l2.36 2.361a3 3 0 004.242 0l2.36-2.361a3 3 0 00.999-2.121V4.5a2.25 2.25 0 00-2.25-2.25H12z" />
    </svg>
);


// --- Framer Motion Variants ---
// Defines reusable animation states for consistency.
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};


// --- Header Component ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#" 
            className="text-2xl font-bold text-white transition-colors hover:text-orange-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            PixelCrafte<span className="text-orange-500">.</span>
          </motion.a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 transition-colors hover:text-orange-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <motion.a 
            href="#contact" 
            className="hidden md:inline-block bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg shadow-lg transition-transform hover:scale-105 hover:bg-orange-600"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Get a Quote
          </motion.a>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-50 relative">
              {isOpen ? <XIcon className="h-6 w-6"/> : <MenuIcon className="h-6 w-6"/>}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-xl"
          >
            <div className="container mx-auto h-full flex flex-col items-center justify-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-3xl text-gray-200 hover:text-orange-500 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease: 'easeInOut' }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" onClick={() => setIsOpen(false)} 
                className="w-4/5 max-w-xs text-center bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform hover:scale-105 hover:bg-orange-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6, ease: 'easeInOut' }}
              >
                Get a Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-white/10 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-1">
             <a href="#" className="text-2xl font-bold text-white transition-colors hover:text-orange-500">
                PixelCrafte<span className="text-orange-500">.</span>
             </a>
             <p className="mt-4 text-gray-400">
                Crafting exceptional digital experiences, one pixel at a time.
             </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Graphic Design</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#work" className="hover:text-orange-500 transition-colors">Our Work</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
             <p className="mt-4 text-gray-400">
                Ready to start a project?
             </p>
             <a href="mailto:hello@pixelcrafte.com" className="inline-block mt-2 text-orange-400 hover:text-orange-500 transition-colors font-semibold">
                hello@pixelcrafte.com
             </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PixelCrafte. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><TwitterIcon className="h-6 w-6"/></a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><GithubIcon className="h-6 w-6"/></a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><DribbbleIcon className="h-6 w-6"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Sections ---

const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 z-0">
            <motion.div 
                className="absolute top-0 left-0 w-96 h-96 bg-orange-900 rounded-full filter blur-3xl opacity-20"
                animate={{ 
                    x: [0, 100, 0], 
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
            <motion.div 
                className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl opacity-10"
                animate={{ 
                    x: [0, -100, 0], 
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
        </div>

        <div className="container mx-auto px-6 z-10">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight"
            >
                We Build
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Digital Masterpieces.
                </span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
            >
                PixelCrafte is a digital agency specializing in high-end web development and stunning graphic design. Let's build something unforgettable together.
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
                <a href="#work" className="w-full sm:w-auto bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105 hover:bg-orange-600">
                    View Our Work
                </a>
                <a href="#services" className="w-full sm:w-auto bg-gray-700/50 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all hover:scale-105 hover:bg-gray-600/50 border border-transparent hover:border-orange-500">
                    Explore Services
                </a>
            </motion.div>
        </div>
    </section>
);

const ServicesSection = () => {
    const services = [
        {
            icon: <CodeBracketIcon className="h-10 w-10 text-orange-500 mb-4" />,
            title: "Web Development",
            description: "From blazing-fast landing pages to complex web applications, we build responsive, secure, and scalable websites using modern technologies like Next.js and React."
        },
        {
            icon: <PaintBrushIcon className="h-10 w-10 text-orange-500 mb-4" />,
            title: "Graphic & UI/UX Design",
            description: "We create intuitive user interfaces and beautiful graphic designs that elevate your brand. Our designs are not just pretty—they're user-centric and results-driven."
        }
    ];

    return (
        <motion.section 
            id="services" 
            className="py-20 md:py-32"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto px-6 text-center">
                <motion.h2 variants={itemVariant} className="text-4xl md:text-5xl font-bold">What We Offer</motion.h2>
                <motion.p variants={itemVariant} className="mt-4 max-w-2xl mx-auto text-gray-400">Our expertise, tailored to your success.</motion.p>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-gray-900/50 p-8 rounded-xl border border-white/10 transition-all duration-300 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-900/20"
                            variants={itemVariant}
                        >
                            {service.icon}
                            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

const WorkSection = () => {
    const projects = [
        { title: "E-commerce Platform", category: "Web Development", img: "https://placehold.co/600x400/171717/orange?text=Project+1" },
        { title: "SaaS Dashboard", category: "UI/UX Design", img: "https://placehold.co/600x400/171717/white?text=Project+2" },
        { title: "Marketing Website", category: "Web Development", img: "https://placehold.co/600x400/171717/orange?text=Project+3" },
        { title: "Brand Identity", category: "Graphic Design", img: "https://placehold.co/600x400/171717/white?text=Project+4" },
    ];
    return (
        <motion.section 
            id="work" 
            className="py-20 md:py-32 bg-gray-900/50"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-6">
                <motion.h2 variants={itemVariant} className="text-4xl md:text-5xl font-bold text-center">Our Recent Work</motion.h2>
                <motion.p variants={itemVariant} className="mt-4 max-w-2xl mx-auto text-gray-400 text-center">A glimpse into the problems we've solved.</motion.p>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div key={index} className="group" variants={itemVariant}>
                            <div className="overflow-hidden rounded-lg shadow-xl">
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <p className="text-orange-400">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

const ProcessSection = () => {
    const steps = [
        { number: "01", title: "Discovery & Strategy", description: "We dive deep to understand your goals, audience, and challenges to create a tailored roadmap for success." },
        { number: "02", title: "Design & Prototype", description: "Our team crafts wireframes and high-fidelity mockups, focusing on user experience and visual appeal. We iterate based on your feedback." },
        { number: "03", title: "Development & Build", description: "Our developers bring the designs to life with clean, efficient code, ensuring your project is fast, responsive, and secure." },
        { number: "04", title: "Launch & Optimize", description: "We deploy your project to the world and monitor its performance, providing support and optimization for continued growth." },
    ];
    return (
        <motion.section 
            id="process"
            className="py-20 md:py-32"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-6">
                <motion.h2 variants={itemVariant} className="text-4xl md:text-5xl font-bold text-center">Our Proven Process</motion.h2>
                <motion.p variants={itemVariant} className="mt-4 max-w-2xl mx-auto text-gray-400 text-center">From concept to launch, we've perfected our workflow.</motion.p>
                <div className="mt-16 max-w-4xl mx-auto">
                    {steps.map((step) => (
                        <motion.div key={step.number} className="flex items-start space-x-6 p-6" variants={itemVariant}>
                           <div className="text-4xl font-bold text-orange-500/50">{step.number}</div>
                           <div className="border-l border-white/10 pl-6">
                             <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                             <p className="text-gray-400">{step.description}</p>
                           </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

const ContactSection = () => {
    return (
        <motion.section 
            id="contact" 
            className="py-20 md:py-32 bg-gray-900/50"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto px-6">
                <motion.h2 variants={itemVariant} className="text-4xl md:text-5xl font-bold text-center">Let's Build Together</motion.h2>
                <motion.p variants={itemVariant} className="mt-4 max-w-2xl mx-auto text-gray-400 text-center">Have a project in mind? We'd love to hear about it.</motion.p>
                <motion.form 
                    variants={itemVariant}
                    className="mt-16 max-w-xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Your Name" className="bg-gray-800/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        <input type="email" placeholder="Your Email" className="bg-gray-800/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                    <textarea placeholder="Tell us about your project..." rows="6" className="w-full mt-6 bg-gray-800/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                    <div className="text-center mt-6">
                        <button type="submit" className="bg-orange-500 text-white font-semibold px-12 py-3 rounded-lg shadow-lg transition-transform hover:scale-105 hover:bg-orange-600">
                           Send Message
                        </button>
                    </div>
                </motion.form>
            </div>
        </motion.section>
    );
};

// --- Main App Component ---
// This is the root component that composes the entire page.
export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased">
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <ContactSection />
      </main>
    </div>
  );
}

