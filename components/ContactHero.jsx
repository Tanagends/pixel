import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

//================================================================//
// Circuit Background Component
// A self-contained canvas animation for the hero background.
//================================================================//
const CircuitBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        const setCanvasSize = () => {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.speed = Math.random() * 0.5 + 0.2;
                this.angle = Math.random() * Math.PI * 2;
                this.size = Math.random() * 1.5 + 1;
                this.life = 1;
                this.decay = Math.random() * 0.01 + 0.005;
                this.isOrange = Math.random() < 0.1; // 10% chance to be orange
                this.isMainColor = Math.random() < 0.2; // 20% chance to be the main color (white/black)
            }

            update() {
                this.life -= this.decay;
                if (this.life <= 0) {
                    this.reset();
                }
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;

                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            
            reset() {
                // **FIX:** Re-randomize the particle's position across the entire canvas
                // instead of just at the bottom. This ensures a continuous, vibrant effect.
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.life = 1 + Math.random(); // Give some variance to life
                this.decay = Math.random() * 0.01 + 0.005;
                this.angle = Math.random() * Math.PI * 2;
                this.speed = Math.random() * 0.5 + 0.2;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                
                let color;
                if (this.isOrange) {
                    color = `rgba(255, 107, 53, ${this.life})`; // Brighter orange
                } else if (this.isMainColor) {
                    color = isDarkMode ? `rgba(255, 255, 255, ${this.life * 0.7})` : `rgba(0, 0, 0, ${this.life * 0.5})`;
                } else {
                    color = isDarkMode ? `rgba(255, 255, 255, ${this.life * 0.2})` : `rgba(0, 0, 0, ${this.life * 0.1})`;
                }
                
                ctx.fillStyle = color;
                ctx.fill();
            }
        }

        let particles = [];
        function init() {
            particles = [];
            // Increased particle count for a more vibrant effect
            const particleCount = (canvas.width * canvas.height) / 8000;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p, i) => {
                p.update();
                p.draw();
                
                // Draw connecting lines
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = p.x - particles[j].x;
                    const dy = p.y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Increased connection distance for more lines
                    if (distance < 120) {
                        const opacity = 1 - (distance / 120);
                        const lineColor = isDarkMode ? `rgba(255, 255, 255, ${opacity * 0.15})` : `rgba(0, 0, 0, ${opacity * 0.1})`;
                        ctx.beginPath();
                        ctx.strokeStyle = lineColor;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            });
            animationFrameId = requestAnimationFrame(animate);
        }
        
        const handleResize = () => {
            setCanvasSize();
            init();
        };
        
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleThemeChange = (e) => {
            isDarkMode = e.matches;
            init(); // Re-initialize particles with new colors
        };

        setCanvasSize();
        init();
        animate();

        window.addEventListener('resize', handleResize);
        mediaQuery.addEventListener('change', handleThemeChange);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            mediaQuery.removeEventListener('change', handleThemeChange);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};


//================================================================//
// Main Hero Component
//================================================================//
const Hero = () => {
    return (
        <header className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900">
            <CircuitBackground />
            <div className="relative z-10 text-center p-4">
                <motion.h1 
                    className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Get in <span className="text-orange-500">Touch</span>
                </motion.h1>
                <motion.p 
                    className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                    Have a project in mind or just want to say hello? We'd love to hear from you.
                </motion.p>
            </div>
        </header>
    );
};

export default Hero;

