"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

//================================================================//
// Particle Background Component
// A self-contained canvas animation for the interactive background.
//================================================================//
const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrameId;

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Mouse position
        let mouse = {
            x: null,
            y: null,
            radius: 150
        };

        window.addEventListener('mousemove', event => {
            mouse.x = event.x;
            mouse.y = event.y;
        });
        
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Particle class
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                // Mouse interaction
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 10;
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 10;
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 10;
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 10;
                    }
                }

                // Move particle
                this.x += this.directionX;
                this.y += this.directionY;

                // Return to original position
                 if (this.x !== this.baseX || this.y !== this.baseY) {
                    let dx = this.x - this.baseX;
                    let dy = this.y - this.baseY;
                    this.x -= dx / 20;
                    this.y -= dy / 20;
                }

                this.draw();
            }
        }
        
        // Create particle array
        function init() {
            particles = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 1.5) + 0.5;
                let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                let color = Math.random() > 0.1 ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 87, 34, 0.8)';
                
                particles.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        }

        // Resize event
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('resize', handleResize);
        
        init();
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', () => {});
            window.removeEventListener('mouseout', () => {});
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};


//================================================================//
// HomePageHero Component - This is the new, upgraded hero section.
//================================================================//
export default function HomePageHero() {

    // Staggered animation for the container of the text
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    // Animation for each word in the headline
    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            skewY: 5,
        },
        visible: {
            opacity: 1,
            y: 0,
            skewY: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const headline1 = "We Don't Just Build Websites.";
    const headline2 = "We Tell Your Story To The World.";

    return (
        <section className="relative flex items-center justify-center min-h-screen text-white bg-gray-900 pt-28 overflow-hidden">
            <ParticleBackground />
        {/*<div className="absolute inset-0 bg-black/30"></div>*/}
            
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {headline1.split(" ").map((word, index) => (
                        <motion.span key={index} className="inline-block mr-4" variants={wordVariants}>
                            {word}
                        </motion.span>
                    ))}
                    <br />
                    <span className="text-orange-500">
                         {headline2.split(" ").map((word, index) => (
                            <motion.span key={index} className="inline-block mr-4" variants={wordVariants}>
                                {word}
                            </motion.span>
                        ))}
                    </span>
                </motion.h1>

                <motion.p
                    className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
                >
                    PixelCrafte is a premier web development and design agency that blends creativity with technology to deliver stunning, high-performance digital solutions.
                </motion.p>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
                >
                    <motion.button
                        className="bg-orange-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg shadow-orange-500/20"
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 87, 34, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Our Work
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

