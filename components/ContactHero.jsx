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
                const color = this.isOrange ? `rgba(255, 87, 34, ${this.life})` : `rgba(255, 255, 255, ${this.life * 0.5})`;
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
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
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

        setCanvasSize();
        init();
        animate();
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // The z-index is necessary to place the canvas behind the text content.
    // -z-10 places it behind its parent, which has a stacking context.
    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};


//================================================================//
// ContactPageHero Component
//================================================================//
export default function ContactPageHero() {

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, skewY: 3 },
        visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const headline1 = "Let's";
    const headline2 = "Connect";

    return (
        <section className="relative bg-gray-900 text-white py-24 md:py-32 overflow-hidden">
            <CircuitBackground />
        {/*<div className="absolute inset-0 bg-black/60"></div>*/}
            
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <motion.h1
                    className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span className="inline-block mr-3" variants={wordVariants}>
                        {headline1}
                    </motion.span>
                    <span className="text-orange-500">
                         <motion.span className="inline-block" variants={wordVariants}>
                            {headline2}
                        </motion.span>
                    </span>
                </motion.h1>

                <motion.p
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                >
                    Have a question or a project in mind? We'd love to hear from you. Fill out the form below or reach out to us directly.
                </motion.p>
            </div>
        </section>
    );
}

