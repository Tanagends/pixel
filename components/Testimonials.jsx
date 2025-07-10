import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//================================================================//
// INLINE SVG ICON
//================================================================//
const IconQuote = () => (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.983 3v7.391c0 2.908-2.355 5.264-5.263 5.264s-5.264-2.356-5.264-5.264V3h10.527zm14.017 0v7.391c0 2.908-2.355 5.264-5.264 5.264s-5.263-2.356-5.263-5.264V3h10.527z"/>
    </svg>
);

//================================================================//
// Testimonials Section Component
//================================================================//
export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "PixelCrafte transformed our online presence. Their attention to detail and creative solutions are second to none.",
            name: "Eng T. Mutwira",
            company: "Zimtech Engineering."
        },
        {
            quote: "The new branding is fantastic. It perfectly captures our company's essence and has received amazing feedback from our customers.",
            name: "CEO",
            company: "Rehoboth Engineering"
        },
        {
            quote: "Working with the PixelCrafte team was a dream. They are not only talented but also incredibly professional and delivered ahead of schedule.",
            name: "Ryan Useya",
            company: "Urpmik Packaging"
        },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000); // Change testimonial every 5 seconds
        return () => clearInterval(timer);
    }, [testimonials.length]);

    //================================================================//
    // Vibrant Background Option 1: Animated Gradient & Shapes
    //================================================================//
    return (
        <section className="py-20 md:py-24 bg-black text-white relative overflow-hidden">
        
            //================================================================//
            // Vibrant Background Option 2: Image Background
            //================================================================//
            // Uncomment the following block and comment out Option 1 to use an image background.
            // Replace 'your-image-url.jpg' with the actual path to your image.
            //================================================================//
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('images/testimonials.jpeg')" }}
            >
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
                    <p className="text-lg text-gray-400 mt-2">Real feedback from real partners.</p>
                </motion.div>

                <div className="relative max-w-3xl mx-auto h-56 md:h-48">
                    {/* Decorative quote icon in the background */}
                    <div className="absolute -top-8 left-0 text-orange-500/10 opacity-50 z-0">
                        <IconQuote />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center z-10"
                        >
                            <p className="text-xl md:text-2xl italic text-gray-200">"{testimonials[currentTestimonial].quote}"</p>
                            <p className="mt-6 font-bold text-white text-lg">{testimonials[currentTestimonial].name}</p>
                            <p className="text-sm text-orange-400">{testimonials[currentTestimonial].company}</p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Decorative quote icon in the background */}
                    <div className="absolute -bottom-8 right-0 text-orange-500/10 opacity-50 z-0 transform rotate-180">
                        <IconQuote />
                    </div>
                </div>
            </div>
        </section>
    );
};
