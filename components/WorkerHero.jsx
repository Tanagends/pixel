import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

//================================================================//
// Grid Glow Background Component
// A self-contained canvas animation for the hero background.
//================================================================//
const GridGlowBackground = () => {
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

        let pointer = { x: null, y: null };
        const updatePointer = (e) => {
            const rect = canvas.getBoundingClientRect();
            if (e.touches && e.touches.length > 0) {
                pointer.x = e.touches[0].clientX - rect.left;
                pointer.y = e.touches[0].clientY - rect.top;
            } else {
                pointer.x = e.clientX - rect.left;
                pointer.y = e.clientY - rect.top;
            }
        };
        const resetPointer = () => { pointer.x = null; pointer.y = null; };

        window.addEventListener('mousemove', updatePointer);
        window.addEventListener('touchmove', updatePointer, { passive: true });
        window.addEventListener('mouseout', resetPointer);
        window.addEventListener('touchend', resetPointer);

        class Hotspot {
            constructor(x, y, maxRadius) {
                this.x = x;
                this.y = y;
                this.radius = 0;
                this.maxRadius = maxRadius;
                this.speed = Math.random() * 0.02 + 0.01;
                this.angle = Math.random() * Math.PI * 2;
            }

            update() {
                this.angle += this.speed;
                const pulse = (Math.sin(this.angle) + 1) / 2; // 0 to 1
                this.radius = pulse * this.maxRadius;

                let dx = pointer.x - this.x;
                let dy = pointer.y - this.y;
                let distance = pointer.x === null ? 1000 : Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    this.radius = Math.min(this.maxRadius * 1.5, 50);
                }
            }

            draw() {
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                gradient.addColorStop(0, 'rgba(255, 87, 34, 0.5)');
                gradient.addColorStop(0.5, 'rgba(255, 87, 34, 0.2)');
                gradient.addColorStop(1, 'rgba(255, 87, 34, 0)');

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }

        let hotspots = [];
        function init() {
            hotspots = [];
            const isMobile = window.innerWidth < 768;
            const numHotspots = isMobile ? 4 : 7;
            for (let i = 0; i < numHotspots; i++) {
                hotspots.push(new Hotspot(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height,
                    isMobile ? 20 : 35
                ));
            }
        }

        function drawGrid() {
            const gridSize = 40;
            ctx.beginPath();
            ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
            for (let x = 0; x <= canvas.width; x += gridSize) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
            }
            for (let y = 0; y <= canvas.height; y += gridSize) {
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
            }
            ctx.stroke();
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawGrid();
            hotspots.forEach(h => {
                h.update();
                h.draw();
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
            window.removeEventListener('mousemove', updatePointer);
            window.removeEventListener('touchmove', updatePointer);
            window.removeEventListener('mouseout', resetPointer);
            window.removeEventListener('touchend', resetPointer);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};


//================================================================//
// WorkPageHero Component
//================================================================//
export default function WorkPageHero() {

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, skewY: 3 },
        visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const headline1 = "Our";
    const headline2 = "Digital Showcase";

    return (
        <section className="relative bg-gray-900 text-white py-24 md:py-32 overflow-hidden">
            <GridGlowBackground />
        {/*<div className="absolute inset-0 bg-black/50"></div>*/}
            
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
                         {headline2.split(" ").map((word, index) => (
                            <motion.span key={index} className="inline-block mr-3" variants={wordVariants}>
                                {word}
                            </motion.span>
                        ))}
                    </span>
                </motion.h1>

                <motion.p
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
                >
                    A curated collection of projects where creativity, technology, and strategy intersect. Explore the results of our passion and partnership.
                </motion.p>
            </div>
        </section>
    );
}

