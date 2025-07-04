"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

//================================================================//
// Interactive Gradient Background Component
// Reimagined to be a vibrant, interactive nebula of light.
//================================================================//
const InteractiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const pointer = {
            x: null,
            y: null,
            // A larger radius for a more dramatic magnetic effect
            radius: 200 
        };

        const updatePointer = (e) => {
            pointer.x = e.clientX || (e.touches && e.touches[0].clientX);
            pointer.y = e.clientY || (e.touches && e.touches[0].clientY);
        };

        window.addEventListener('mousemove', updatePointer);
        window.addEventListener('touchstart', updatePointer, { passive: true });
        window.addEventListener('touchmove', updatePointer, { passive: true });
        
        const resetPointer = () => {
            pointer.x = null;
            pointer.y = null;
        };
        window.addEventListener('mouseout', resetPointer);
        window.addEventListener('touchend', resetPointer);

        class Particle {
            constructor(x, y, size, color) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.baseX = this.x;
                this.baseY = this.y;
                // Density determines how much the particle is affected by the pointer
                this.density = (Math.random() * 40) + 5;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Check for pointer interaction
                if (pointer.x && pointer.y) {
                    let dx = pointer.x - this.x;
                    let dy = pointer.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let maxDistance = pointer.radius;
                    
                    // The closer the particle, the stronger the pull
                    let force = (maxDistance - distance) / maxDistance;

                    if (distance < pointer.radius) {
                        this.x -= forceDirectionX * force * this.density * 0.6;
                        this.y -= forceDirectionY * force * this.density * 0.6;
                    } else {
                         // Return to base position if outside the radius
                        if (this.x !== this.baseX) {
                            let dx_base = this.x - this.baseX;
                            this.x -= dx_base / 10;
                        }
                        if (this.y !== this.baseY) {
                            let dy_base = this.y - this.baseY;
                            this.y -= dy_base / 10;
                        }
                    }
                }
                this.draw();
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 1.5) + 1;
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                // A more vibrant color palette
                let color = `hsl(${Math.random() * 50 + 10}, 100%, 70%)`; 
                particles.push(new Particle(x, y, size, color));
            }
        };

        const animate = () => {
            // Create a semi-transparent background for a trailing effect
            ctx.fillStyle = 'rgba(15, 15, 25, 0.25)'; 
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            for (const particle of particles) {
                particle.update();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('resize', handleResize);
        
        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', updatePointer);
            window.removeEventListener('mouseout', resetPointer);
            window.removeEventListener('touchstart', updatePointer);
            window.removeEventListener('touchmove', updatePointer);
            window.removeEventListener('touchend', resetPointer);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 -z-10 w-full h-full" />;
};


//================================================================//
// HomePageHero Component (Redesigned)
//================================================================//
export default function HomePageHero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const headline1 = "We Don't Just Build Websites.";
    const headline2 = "We Craft Your Digital Story."; // A more evocative headline

    // Animation variants for each letter for a more fluid effect
    const letterVariants = {
        hidden: { opacity: 0, y: 50, rotate: -10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: {
                delay: i * 0.03, // Stagger each letter's animation
                duration: 0.5,
                ease: 'easeOut'
            },
        }),
    };

    return (
        <section ref={ref} className="relative flex items-center justify-center min-h-screen text-white overflow-hidden">
            <InteractiveBackground />
            
            <div className="relative z-10 container mx-auto px-4 text-center">
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                    {headline1.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            custom={index}
                            variants={letterVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                    <br />
                    {/* A vibrant gradient text for the second headline */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                        {headline2.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                custom={index + headline1.length} // Continue stagger delay
                                variants={letterVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </span>
                </h1>

                <motion.p
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
                >
                    PixelCrafte is a premier digital agency where creativity and code converge. We deliver stunning, high-performance web solutions that tell your unique story.
                </motion.p>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.8, ease: 'easeOut' }}
                >
                    <motion.button
                        className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all duration-300"
                        whileHover={{ 
                            scale: 1.1, 
                            boxShadow: "0px 15px 30px rgba(239, 68, 68, 0.4)" 
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Discover Our Craft
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
