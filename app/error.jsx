"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

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
// Error Page Component
//================================================================//
export default function Error({ error, reset }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section ref={ref} className="relative flex items-center justify-center min-h-screen text-white overflow-hidden">
            <InteractiveBackground />
            
            <motion.div 
                className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                
                <motion.div 
                    className="flex items-center justify-center text-[10rem] lg:text-[14rem] font-extrabold tracking-tighter text-gray-200/50"
                    variants={itemVariants}
                >
                    <span>5</span>
                    <div className="relative w-28 h-28 lg:w-44 lg:h-44 mx-1 lg:mx-2">
                        <motion.img 
                            src="/logo.svg" 
                            alt="PixelCrafte Logo" 
                            className="w-full h-full animate-spin"
                            style={{animationDuration: '15s'}}
                        />
                    </div>
                    <span>0</span>
                </motion.div>

                <motion.h1 
                    className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 -mt-8 lg:-mt-14"
                    variants={itemVariants}
                >
                    Something Went Wrong
                </motion.h1>

                <motion.p
                    className="max-w-xl mx-auto text-lg md:text-xl text-gray-300 mt-6 mb-10"
                    variants={itemVariants}
                >
                    We've encountered a server-side issue. Our team has been notified. Please try again in a moment.
                </motion.p>
                
                <motion.div variants={itemVariants}>
                    <motion.button
                        onClick={() => reset()}
                        className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300"
                        whileHover={{ 
                            scale: 1.05, 
                            boxShadow: "0px 10px 25px rgba(239, 68, 68, 0.3)" 
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Try Again
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}
