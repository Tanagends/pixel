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

        let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        window.addEventListener('mousemove', e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        class Shape {
            constructor(x, y, radius, color) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.baseRadius = radius;
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

                if (this.x + this.radius > canvas.width / (window.devicePixelRatio || 1) || this.x - this.radius < 0) this.vx *= -1;
                if (this.y + this.radius > canvas.height / (window.devicePixelRatio || 1) || this.y - this.radius < 0) this.vy *= -1;
                
                 // Mouse interaction
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx*dx + dy*dy);
                if(distance < 100) {
                    this.radius = Math.min(this.baseRadius * 2, 80);
                } else {
                    this.radius -= (this.radius - this.baseRadius) * 0.1;
                }

                this.draw();
            }
        }

        let shapes = [];
        function init() {
            shapes = [];
            const colors = ['rgba(255, 87, 34, 0.1)', 'rgba(255, 87, 34, 0.2)', 'rgba(100, 116, 139, 0.1)', 'rgba(100, 116, 139, 0.2)'];
            for (let i = 0; i < 20; i++) {
                let radius = Math.random() * 30 + 10;
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

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', () => {});
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
             <div className="absolute inset-0 bg-gray-50/50 backdrop-blur-sm"></div>

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

