import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

//================================================================//
// Animated Background Component
// A self-contained canvas animation for the hero background.
//================================================================//
const AnimatedShapesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const setCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };

        let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        // Unified pointer event for both mouse and touch
        const updatePointerPosition = (e) => {
            if (e.touches && e.touches.length > 0) {
                pointer.x = e.touches[0].clientX;
                pointer.y = e.touches[0].clientY;
            } else {
                pointer.x = e.clientX;
                pointer.y = e.clientY;
            }
        };

        window.addEventListener('mousemove', updatePointerPosition);
        window.addEventListener('touchmove', updatePointerPosition, { passive: true });
        
        const resetPointer = () => {
            pointer.x = null;
            pointer.y = null;
        }
        window.addEventListener('mouseout', resetPointer);
        window.addEventListener('touchend', resetPointer);

        class Shape {
            constructor(x, y, radius, color) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.baseRadius = radius;
                // Add a random offset for the pulsing animation to desynchronize shapes
                this.pulseOffset = Math.random() * Math.PI * 2;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Wall collision
                if (this.x + this.radius > canvas.width / (window.devicePixelRatio || 1) || this.x - this.radius < 0) this.vx *= -1;
                if (this.y + this.radius > canvas.height / (window.devicePixelRatio || 1) || this.y - this.radius < 0) this.vy *= -1;
                
                // Pointer interaction
                let dx = pointer.x - this.x;
                let dy = pointer.y - this.y;
                let distance = pointer.x === null ? 1000 : Math.sqrt(dx*dx + dy*dy);
                
                // If pointer is close, grow the shape
                if(distance < 120) {
                    this.radius = Math.min(this.baseRadius * 2.5, 70);
                } else {
                    // **NEW:** Add passive "breathing" animation if pointer is not close
                    const pulse = Math.sin(Date.now() * 0.0005 + this.pulseOffset) * (this.baseRadius * 0.15);
                    const targetRadius = this.baseRadius + pulse;
                    // Ease back to the target radius
                    this.radius += (targetRadius - this.radius) * 0.05;
                }

                this.draw();
            }
        }

        let shapes = [];
        function init() {
            shapes = [];
            const colors = ['rgba(255, 87, 34, 0.1)', 'rgba(255, 87, 34, 0.2)', 'rgba(100, 116, 139, 0.1)', 'rgba(100, 116, 139, 0.2)'];
            let numShapes = (window.innerWidth < 768) ? 15 : 25; // Fewer shapes on mobile
            for (let i = 0; i < numShapes; i++) {
                let radius = Math.random() * 25 + 8;
                let x = Math.random() * (window.innerWidth - radius * 2) + radius;
                let y = Math.random() * (window.innerHeight - radius * 2) + radius;
                let color = colors[Math.floor(Math.random() * colors.length)];
                shapes.push(new Shape(x, y, radius, color));
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            shapes.forEach(shape => shape.update());
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            setCanvasSize();
            init();
        };

        setCanvasSize();
        init();
        animate();
        
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove all event listeners
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', updatePointerPosition);
            window.removeEventListener('touchmove', updatePointerPosition);
            window.removeEventListener('mouseout', resetPointer);
            window.removeEventListener('touchend', resetPointer);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};


//================================================================//
// AboutPageHero Component - This is the new, upgraded hero section.
//================================================================//
export default function AboutPageHero() {

    // Staggered animation for the container of the text
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    // Animation for each word in the headline
    const wordVariants = {
        hidden: { opacity: 0, y: 20, skewY: 5 },
        visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const headline1 = "The";
    const headline2 = "People";
    const headline3 = "Behind the Pixels";

    return (
        <section className="relative py-24 bg-gray-50 overflow-hidden">
             <AnimatedShapesBackground />
        {/*<div className="absolute inset-0 bg-gray-50/60 backdrop-blur-sm"></div>*/}

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-gray-800"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {headline1.split(" ").map((word, index) => (
                        <motion.span key={index} className="inline-block mr-3" variants={wordVariants}>
                            {word}
                        </motion.span>
                    ))}
                    <span className="text-orange-500">
                         {headline2.split(" ").map((word, index) => (
                            <motion.span key={index} className="inline-block mr-3" variants={wordVariants}>
                                {word}
                            </motion.span>
                        ))}
                    </span>
                     {headline3.split(" ").map((word, index) => (
                        <motion.span key={index} className="inline-block mr-3" variants={wordVariants}>
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
                >
                    We are a passionate team of developers, designers, and strategists dedicated to crafting exceptional digital products.
                </motion.p>
            </div>
        </section>
    );
}

