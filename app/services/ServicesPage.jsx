"use client";
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi'; // Re-add for this component
import { useState, useEffect } from 'react';


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
const IconPlus = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
);

// Inline SVG as a fallback
const ArrowRightSVG = () => (
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
    ></path>
  </svg>
);

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-6">
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

//----------------------------------------------------------------//
// ServicesPage Component - This is the new page content.
//----------------------------------------------------------------//
const ServicesPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqData = [
        { q: "What is your development process?", a: "Our process is collaborative and transparent. We start with a deep dive into your goals, followed by strategy, design, development, testing, and launch. We keep you in the loop every step of the way." },
        { q: "How long does a typical website project take?", a: "Project timelines vary depending on complexity. A standard marketing website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline after our initial consultation." },
        { q: "Do you provide website maintenance?", a: "Yes, we offer ongoing maintenance packages to ensure your website remains secure, up-to-date, and performing at its best." },
        { q: "What platforms do you build on?", a: "We are technology-agnostic but specialize in modern frameworks like Next.js (React), and we are experts with various CMS platforms like WordPress, Shopify, and headless solutions like Sanity or Contentful." },
    ];

    const processSteps = ["Discover", "Define", "Design", "Develop", "Deploy", "Drive"];

    return (
        <div className="pt-28 bg-gray-50">
            {/* Services Hero Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-gray-800"
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6}}
                    >
                        Services Tailored for <span className="text-orange-500">Growth</span>
                    </motion.h1>
                    <motion.p
                        className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        From pixel-perfect designs to high-performance code, our services are engineered to elevate your brand and engage your audience.
                    </motion.p>
                </div>
            </section>

            {/* Web Development Section */}
            <section className="py-20 bg-gray-50">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                             initial={{x: -50, opacity: 0}}
                             whileInView={{x: 0, opacity: 1}}
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{duration: 0.8, ease: 'easeOut'}}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Web Development</h2>
                            <p className="text-gray-600 mb-6">
                                We build future-proof web solutions that are not only visually stunning but also incredibly fast, secure, and scalable. Our expertise in modern frameworks ensures your digital platform is built on a foundation of excellence.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start"><span className="bg-orange-100 text-orange-500 rounded-full h-6 w-6 text-xs flex items-center justify-center font-bold mr-3 mt-1">✓</span><span><strong>Custom Web Applications:</strong> Tailored solutions to meet your unique business needs.</span></li>
                                <li className="flex items-start"><span className="bg-orange-100 text-orange-500 rounded-full h-6 w-6 text-xs flex items-center justify-center font-bold mr-3 mt-1">✓</span><span><strong>E-Commerce Platforms:</strong> Feature-rich online stores that convert visitors into customers.</span></li>
                                <li className="flex items-start"><span className="bg-orange-100 text-orange-500 rounded-full h-6 w-6 text-xs flex items-center justify-center font-bold mr-3 mt-1">✓</span><span><strong>Headless CMS Integration:</strong> Flexible, fast content management for a modern web experience.</span></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="bg-gray-800 rounded-lg p-8 h-full"
                            initial={{x: 50, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{duration: 0.8, ease: 'easeOut'}}
                        >
                           <img src="https://placehold.co/500x300/1a202c/ffffff?text=Dev+Showcase" alt="Web Development Showcase" className="rounded-md shadow-lg" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Graphic Design Section */}
            <section className="py-20 bg-white">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <motion.div
                            className="bg-orange-500 rounded-lg p-8 h-full order-last md:order-first"
                            initial={{x: -50, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{duration: 0.8, ease: 'easeOut'}}
                        >
                           <img src="https://placehold.co/500x300/ff5722/ffffff?text=Design+Showcase" alt="Graphic Design Showcase" className="rounded-md shadow-lg" />
                        </motion.div>
                        <motion.div
                             initial={{x: 50, opacity: 0}}
                             whileInView={{x: 0, opacity: 1}}
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{duration: 0.8, ease: 'easeOut'}}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Graphic Design</h2>
                            <p className="text-gray-600 mb-6">
                                We craft memorable brand identities and marketing collateral that resonate with your target audience. Our designs are strategic, creative, and aligned with your business objectives.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start"><span className="bg-orange-100 text-orange-500 rounded-full h-6 w-6 text-xs flex items-center justify-center font-bold mr-3 mt-1">✓</span><span><strong>Logo & Brand Identity:</strong> Creating a lasting and professional brand image.</span></li>
                                <li className="flex items-start"><span className="bg-orange-100 text-orange-500 rounded-full h-6 w-6 text-xs flex items-center justify-center font-bold mr-3 mt-1">✓</span><span><strong>UI/UX Design:</strong> Intuitive and beautiful interfaces for web and mobile apps.</span></li>
                                <li className="flex items-start"><span className="bg-orange-100 text-orange-500 rounded-full h-6 w-6 text-xs flex items-center justify-center font-bold mr-3 mt-1">✓</span><span><strong>Marketing Materials:</strong> From digital ads to print brochures, we design for impact.</span></li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Proven Process</h2>
                        <p className="text-lg text-gray-600 mt-2">A clear path from concept to creation.</p>
                    </div>
                    <div className="relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-6 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{staggerChildren: 0.2}}
                        >
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step}
                                    className="text-center relative"
                                    variants={{hidden: {opacity: 0, y: 30}, visible: {opacity: 1, y: 0}}}
                                >
                                    <div className="relative z-10 mx-auto bg-white border-4 border-orange-500 rounded-full h-20 w-20 flex items-center justify-center flex-col shadow-lg">
                                        <span className="font-bold text-orange-500">0{index + 1}</span>
                                    </div>
                                    <h3 className="mt-4 font-bold text-gray-800">{step}</h3>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600 mt-2">Answers to your common queries.</p>
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
};


// Main Hero Component
const HeroThree = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  // This hook ensures we don't try to access window on the server.
  useEffect(() => {
    setIsMounted(true);
  }, [])
  
  const mouseX = useMotionValue(isMounted ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(isMounted ? window.innerHeight / 2 : 0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <>
    <motion.div
      className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([newX, newY]) =>
              `radial-gradient(circle at ${newX}px ${newY}px, transparent 10%, black 30%)`
          ),
        }}
      />
      <div className="relative z-0 text-center p-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter">
          PIXELCRAFTE
        </h1>
        <p className="text-lg md:text-xl text-orange-500 font-semibold mt-2">
          Engineering the Future of the Web
        </p>
      </div>
       <div className="absolute z-20 text-center p-4 pointer-events-none">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 uppercase tracking-tighter">
          PIXELCRAFTE
        </h1>
        <p className="text-lg md:text-xl text-white font-semibold mt-2">
          Engineering the Future of the Web
        </p>
      </div>

    </motion.div>
    <ServicesPage />
    </>
  );
};


export default HeroThree;

