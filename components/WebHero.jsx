import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

//================================================================//
// Plexus Background Component
// A self-contained canvas animation for the hero background.
//================================================================//
const PlexusBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };

        let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const updatePointer = (e) => {
            if (e.touches && e.touches.length > 0) {
                pointer.x = e.touches[0].clientX;
                pointer.y = e.touches[0].clientY;
            } else {
                pointer.x = e.clientX;
                pointer.y = e.clientY;
            }
        };
        const resetPointer = () => { pointer.x = null; pointer.y = null; };

        window.addEventListener('mousemove', updatePointer);
        window.addEventListener('touchmove', updatePointer, { passive: true });
        window.addEventListener('mouseout', resetPointer);
        window.addEventListener('touchend', resetPointer);

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = 1.5;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                let dx = pointer.x - this.x;
                let dy = pointer.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = 100;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density * 0.6;
                let directionY = forceDirectionY * force * this.density * 0.6;

                if (distance < 100) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 10;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 10;
                    }
                }
            }
        }

        let particles = [];
        function init() {
            particles = [];
            const isMobile = window.innerWidth < 768;
            const gap = isMobile ? 40 : 50;
            for (let y = 0; y < canvas.height; y += gap) {
                for (let x = 0; x < canvas.width; x += gap) {
                    particles.push(new Particle(x, y));
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = Math.sqrt(
                        (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)
                        + (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y)
                    );
                    if (distance < 70) {
                        opacityValue = 1 - (distance / 70);
                        const isOrange = Math.random() < 0.05; // 5% chance for a line to be orange
                        ctx.strokeStyle = isOrange ? `rgba(255, 87, 34, ${opacityValue * 0.8})` : `rgba(255, 255, 255, ${opacityValue * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
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
            window.removeEventListener('mousemove', updatePointer);
            window.removeEventListener('touchmove', updatePointer);
            window.removeEventListener('mouseout', resetPointer);
            window.removeEventListener('touchend', resetPointer);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};


//================================================================//
// WebDevelopmentHero Component
//================================================================//
export default function WebDevelopmentHero() {

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, skewY: 3 },
        visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const headline = "Engineering High-Performance Web Solutions";

    return (
        <section className="relative bg-gray-900 text-white py-24 md:py-32 overflow-hidden">
            <PlexusBackground />
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <motion.h1
                    className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {headline.split(" ").map((word, index) => (
                        <motion.span 
                            key={index} 
                            className={`inline-block mr-3 ${word === 'High-Performance' ? 'text-orange-500' : ''}`} 
                            variants={wordVariants}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
                >
                    We architect and build robust, scalable, and secure web applications that power business growth and deliver exceptional user experiences.
                </motion.p>
            </div>
        </section>
    );
}

