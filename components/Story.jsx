{/* Our Story Section - Reimagined by Gemini */}
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const OurStorySection = () => {
    // A ref to the main container for scroll tracking
    const targetRef = useRef(null);

    // useScroll hook to track scroll progress within the targetRef container
    const { scrollYProgress } = useScroll({
        target: targetRef,
        // Animate from when the top of the container hits the bottom of the viewport
        // to when the bottom of the container leaves the top of the viewport.
        offset: ['start end', 'end start'],
    });

    // Parallax effect for the image: moves it up slower than the scroll
    const imageY = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);

    // Animate the opacity of the text paragraphs based on scroll position
    const textOpacityP1 = useTransform(scrollYProgress, [0.15, 0.3, 0.4], [0, 1, 0]);
    const textOpacityP2 = useTransform(scrollYProgress, [0.4, 0.55, 0.7], [0, 1, 0]);

    // Animate the scale of the heading for a subtle zoom-in effect
    const headingScale = useTransform(scrollYProgress, [0.1, 0.3], [0.9, 1.1]);
    const headingY = useTransform(scrollYProgress, [0.1, 0.3], ['10%', '-10%']);


    return (
        <section ref={targetRef} className="py-20 bg-gray-900 text-white relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[150vh] lg:min-h-screen">
                    
                    {/* Left Column: The Story Text & Timeline */}
                    <div className="lg:col-span-5 relative h-full flex items-center">
                        
                        {/* The Timeline Bar */}
                        <motion.div
                            className="absolute left-0 top-0 h-full w-1 bg-orange-500 origin-top"
                            style={{ scaleY: scrollYProgress }}
                        />

                        {/* Text Content */}
                        <div className="pl-12 space-y-24">
                            <motion.h2
                                className="text-5xl font-bold font-serif"
                                style={{ scale: headingScale, y: headingY }}
                            >
                                Our Story
                            </motion.h2>

                            <motion.div style={{ opacity: textOpacityP1 }}>
                                <h3 className="text-2xl font-semibold text-orange-400 mb-3">2023: The Beginning</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Founded in 2023, PixelCrafte was born from a shared belief that technology and design should be inseparable. We saw a gap between rigid development firms and purely aesthetic design agencies. Our mission was simple: to create a single, unified team that could build digital products that were both technically brilliant and beautifully designed.
                                </p>
                            </motion.div>
                            
                            <motion.div style={{ opacity: textOpacityP2 }}>
                                <h3 className="text-2xl font-semibold text-orange-400 mb-3">The Journey Forward</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    From our humble beginnings in a small office, we've grown into a dynamic agency serving clients worldwide. Our passion for problem-solving and our commitment to quality have been the cornerstones of our journey.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: The Image with Parallax */}
                    <div className="lg:col-span-7 h-[80vh] sticky top-24">
                        <motion.div
                            className="w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-orange-500/10"
                            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                        >
                            <motion.img
                                src="images/story.jpeg"
                                alt="The journey and growth of the PixelCrafte team"
                                className="w-full h-full object-cover"
                                style={{ y: imageY }} // Apply the parallax effect
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// You can then use <OurStorySection /> in your About page.
