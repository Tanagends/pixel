"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from "../components/HomeHero";
import Process from "../components/Process";
import Promotion from "../components/Promotion";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";

//================================================================//
// 0. INLINE SVG ICONS
// I've replaced the 'react-icons' library with inline SVGs to resolve the compilation error.
// This removes external dependencies and makes the component more self-contained.
//================================================================//
const IconPhone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22.621l-3.521-6.795c-.008.004-1.932-1.102-1.932-1.102-1.26-1.026-1.43-2.872-.397-4.134.183-.218.39-.423.618-.6l3.32-3.319.011-.012c.309-.308.71-.478 1.127-.478.418 0 .819.17 1.127.478l2.946 2.947c.636.636.636 1.666 0 2.302l-3.32 3.319c-.177.177-.37.334-.572.48l-1.103 1.933 6.795 3.52zM4.58 13.599c-1.33.204-2.583-.166-3.596-1.178C.007 11.444-.163 10.19.04 8.86l1.173-7.291 6.845 3.545-1.201 1.201c-1.262 1.033-2.876 1.438-4.135.422l-1.142-1.142z"/></svg>
);
const IconEnvelope = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
);
const IconLinkedin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const IconTwitter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.904-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg>
);
const IconDribbble = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.031 19.584c-3.623-.298-6.602-2.345-8.203-5.115l.021.011c2.144 2.859 5.385 4.545 8.943 4.545.243 0 .484-.008.723-.023-1.07-.373-1.524-1.593-1.484-2.835.034-1.083.743-2.012 1.71-2.456-1.02-.13-2.113.14-3.055.932-1.933 1.623-2.61 3.26-2.812 4.19.088.026.179.051.267.076zm.575-10.378c-2.394.397-4.116 2.593-4.116 4.91s1.722 4.513 4.116 4.91c.148-1.571.826-3.013 1.954-4.067.876-.822 1.903-1.413 2.945-1.75-1.296-1.571-3.21-2.697-5.06-2.922zm-7.022-2.175c.983-2.115 2.923-3.792 5.253-4.595-1.343 2.153-1.74 4.885-1.12 7.33-.272-.023-.54-.042-.81-.042-1.925 0-3.692.693-5.051 2.046l-.014-.02c.328-1.393.226-2.738-.258-4.719zM12 2.4c2.973 0 5.618 1.144 7.611 3.019-1.688-1.258-3.774-1.98-6.042-1.98-1.796 0-3.465.385-4.945 1.087.653-.82 1.65-1.376 2.766-1.747.535-.179 1.096-.279 1.61-.279zm5.405 16.292c-1.385 1.483-3.342 2.459-5.498 2.459-.142 0-.284-.005-.425-.015-1.736-2.07-2.158-4.833-1.01-7.252.339-.711.832-1.365 1.428-1.939 1.633 1.493 3.63 2.527 5.869 2.822.062.83.023 1.68-.364 2.592l.001-.002c.002 0 .002 0 0 0zm2.668-5.32c-2.09-.32-3.833-1.35-5.26-2.793.93-.832 1.455-2.022 1.455-3.237 0-.44-.06-.87-.175-1.285 2.938.815 5.106 3.421 5.106 6.545 0 .285-.018.566-.052.842-.4-.143-.825-.26-1.272-.361.023-.153.052-.303.052-.457.001-1.053-.393-2.023-1.077-2.772l-.002.001z"/></svg>
);
const IconChevronDown = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
);
const IconMobileMenu = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
);
const IconArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const IconCode = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
);
const IconPenTool = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><path d="m11 13 2.5 2.5"/></svg>
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
            className="py-20 md:py-32 bg-black text-white font-sans antialiased"
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


//================================================================//
// 1. STYLES - Simulating /styles/globals.css
//================================================================//
const GlobalStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
    body {
      font-family: 'Inter', sans-serif;
      background-color: #f9fafb; /* bg-gray-50 */
    }
    .hero-bg {
        background-color: #1a202c;
        background-image: radial-gradient(#ff5722 0.5px, transparent 0.5px), radial-gradient(#ff5722 0.5px, #1a202c 0.5px);
        background-size: 20px 20px;
        background-position: 0 0, 10px 10px;
        animation: pulse-bg 15s infinite linear;
    }
    @keyframes pulse-bg {
        0% { background-color: #1a202c; }
        50% { background-color: #2d3748; }
        100% { background-color: #1a202c; }
    }
  `}</style>
);


//================================================================//
// 4. MAIN APP & PAGE
//================================================================//

//----------------------------------------------------------------//
// HomePage Component - This is the new, fully-featured homepage
//----------------------------------------------------------------//
const HomePage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const projects = [
        { title: "E-commerce Platform", category: "Web Development", img: "https://placehold.co/600x400/1a202c/ff5722?text=Project+1" },
        { title: "Corporate Branding", category: "Graphic Design", img: "https://placehold.co/600x800/ff5722/1a202c?text=Project+2" },
        { title: "SaaS Dashboard", category: "UI/UX Design", img: "https://placehold.co/600x400/1a202c/ffffff?text=Project+3" },
        { title: "Mobile App Design", category: "UI/UX Design", img: "https://placehold.co/600x800/ff5722/ffffff?text=Project+4" },
    ];

    const testimonials = [
        { quote: "PixelCrafte transformed our online presence. Their attention to detail and creative solutions are second to none.", name: "Jane Doe", company: "CEO, Innovate Inc." },
        { quote: "The team is not only talented but also incredibly professional and easy to work with. Highly recommended!", name: "John Smith", company: "Marketing Director, Tech Solutions" },
        { quote: "Our new branding is fantastic. It perfectly captures our company's essence. Thank you, PixelCrafte!", name: "Emily White", company: "Founder, Creative Co." },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <div className="pt-28">
            <Hero />
            {/* Hero Section 
            <motion.section 
                className="hero-bg text-white pt-40 pb-20 -mt-28"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1 
                        className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        We Don't Just Build Websites.
                        <br/>
                        <span className="text-orange-500">We Tell Your Story To The World.</span>
                    </motion.h1>
                    <motion.p 
                        className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        PixelCrafte is a premier web development and design agency that blends creativity with technology to deliver stunning, high-performance digital solutions.
                    </motion.p>
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                    >
                        <motion.button 
                            className="bg-orange-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Our Work
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section> */}

            {/* Services Section 
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
                        <p className="text-lg text-gray-600 mt-2">Crafting solutions for your digital needs.</p>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300" variants={itemVariants}>
                            <div className="text-orange-500 mb-4"><IconCode /></div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Web Development</h3>
                            <p className="text-gray-600 mb-4">From lightning-fast landing pages to complex web applications, we build robust, scalable, and secure websites that drive results.</p>
                            <a href="#" className="font-bold text-orange-500 hover:underline flex items-center space-x-2">Learn More <IconArrowRight/></a>
                        </motion.div>
                         <motion.div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300" variants={itemVariants}>
                            <div className="text-orange-500 mb-4"><IconPenTool /></div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Graphic Design</h3>
                            <p className="text-gray-600 mb-4">We create compelling visual identities, from logos and branding to marketing materials, that tell your story and captivate your audience.</p>
                            <a href="#" className="font-bold text-orange-500 hover:underline flex items-center space-x-2">See Our Style <IconArrowRight/></a>
                        </motion.div>
                    </motion.div>
                </div>
            </section> */}
            <Services /> 

            <Promotion />

            {/* Featured Work - Bento Grid *
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Work</h2>
                        <p className="text-lg text-gray-600 mt-2">Pixels perfected, stories told.</p>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {projects.map((project, index) => (
                            <motion.div 
                                key={index} 
                                className={`rounded-xl overflow-hidden group relative
                                    ${index === 1 || index === 3 ? 'md:row-span-2' : ''}
                                    ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
                                variants={itemVariants}
                            >
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
                                    <div className="text-white">
                                        <h3 className="font-bold text-lg">{project.title}</h3>
                                        <p className="text-sm opacity-80">{project.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>*/}
                {/* Featured Work - Bento Grid */}

            {/* Featured Work - Bento Grid */}
          

            {/* Featured Work - Bento Grid - Mobile & Desktop Friendly */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Work</h2>
                  <p className="text-lg text-gray-600 mt-2">Pixels perfected, stories told.</p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className={`rounded-2xl overflow-hidden group relative
                        ${index === 1 || index === 3 ? 'md:row-span-2' : ''}
                        ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
                      variants={itemVariants}
                    >
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out md:group-hover:scale-110"
                      />
                      
                      {/* GRADIENT OVERLAY: Visible on mobile, fades in on desktop hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />

                      {/* TEXT CONTAINER */}
                      <div className="absolute inset-0 flex items-end p-4 md:p-6">
                        <div className="text-white w-full">
                          {/* --- Title --- */}
                          <h3 
                            className="font-bold text-lg md:text-xl transform transition-all duration-300 ease-in-out 
                                       opacity-100 translate-y-0 
                                       md:opacity-0 md:translate-y-6 
                                       md:group-hover:opacity-100 md:group-hover:translate-y-0"
                          >
                            {project.title}
                          </h3>
                          
                          {/* --- Category --- */}
                          <p 
                            className="text-sm opacity-80 transform group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-100 
                                       md:opacity-0 md:translate-y-6
                                       md:group-hover:opacity-100 md:group-hover:translate-y-0"
                          >
                            {project.category}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

             {/* Testimonials Section
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Clients Say</h2>
                        <p className="text-lg text-gray-600 mt-2">Real feedback from real partners.</p>
                    </motion.div>
                    <div className="relative max-w-3xl mx-auto h-48">
                        <AnimatePresence>
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col items-center justify-center"
                            >
                                <p className="text-xl md:text-2xl italic text-gray-700">"{testimonials[currentTestimonial].quote}"</p>
                                <p className="mt-4 font-bold text-gray-800">{testimonials[currentTestimonial].name}</p>
                                <p className="text-sm text-orange-500">{testimonials[currentTestimonial].company}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section> */}

            <Testimonials />

            <Process />

             {/* CTA Section */}
            <CTA />
           {/* CTA Section - More vibrant 
            <section className="section-bg-dark-gradient text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <motion.h2 
                        className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
                         initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        Have a project in mind?
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
                         initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Let's turn your ideas into a digital reality. We're ready to listen, collaborate, and build something extraordinary together.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.button 
                            className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/40"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                            Get in Touch
                        </motion.button>
                    </motion.div>
                </div>
            </section>*/}
        </div>
    );
};


// This is the final App component that brings everything together
export default function App() {
  return (
    <>
      <GlobalStyles />
      <HomePage />
    </>
  );
}

