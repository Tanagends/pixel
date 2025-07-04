import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

//================================================================//
// Animated Grid Background Component
//================================================================//
const AnimatedGridBackground = () => {
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

        class Pulse {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = 0;
                this.maxRadius = Math.random() * 100 + 50;
                this.life = 0;
                this.maxLife = Math.random() * 200 + 100;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life++;
                if (this.life >= this.maxLife) {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.life = 0;
                    this.maxLife = Math.random() * 200 + 100;
                }
                const pulse = Math.sin(this.life / this.maxLife * Math.PI);
                this.radius = pulse * this.maxRadius;
            }
            draw() {
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                gradient.addColorStop(0, 'rgba(255, 87, 34, 0.1)');
                gradient.addColorStop(0.8, 'rgba(255, 87, 34, 0.05)');
                gradient.addColorStop(1, 'rgba(255, 87, 34, 0)');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        let pulses = [];
        const init = () => {
            pulses = [];
            for (let i = 0; i < 10; i++) {
                pulses.push(new Pulse());
            }
        };

        const drawGrid = () => {
            const gridSize = 50;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawGrid();
            pulses.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        setCanvasSize();
        init();
        animate();
        window.addEventListener('resize', setCanvasSize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};


//================================================================//
// Step Component
//================================================================//
const Step = ({ number, title, description }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.04,
            },
        },
    };
    const letter = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div ref={ref} className="relative flex items-start space-x-6 md:space-x-8 p-6">
            <div className="flex-shrink-0 text-4xl md:text-5xl font-bold text-orange-500/30 pt-1">
                {number}
            </div>
            <div className="relative flex-grow pl-6 md:pl-8">
                {/* Vertical line */}
                <div className="absolute top-0 left-0 h-full w-px bg-white/10">
                    {/* Animated tracer line */}
                    <motion.div
                        className="absolute top-0 left-0 h-full w-0.5 bg-orange-500"
                        style={{ scaleY: 0, originY: 0 }}
                        animate={{ scaleY: isInView ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                </div>
                <motion.h3 
                    className="text-2xl font-bold text-white mb-2"
                    variants={sentence}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {title.split("").map((char, index) => (
                        <motion.span key={char + "-" + index} variants={letter}>
                            {char}
                        </motion.span>
                    ))}
                </motion.h3>
                <motion.p 
                    className="text-gray-400"
                    variants={sentence}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                     {description.split("").map((char, index) => (
                        <motion.span key={char + "-" + index} variants={letter}>
                            {char}
                        </motion.span>
                    ))}
                </motion.p>
            </div>
        </div>
    );
};


//================================================================//
// ProcessSection Component
//================================================================//
export default function ProcessSection() {
    const steps = [
        { number: "01", title: "Discovery & Strategy", description: "We dive deep to understand your goals, audience, and challenges to create a tailored roadmap for success." },
        { number: "02", title: "Design & Prototype", description: "Our team crafts wireframes and high-fidelity mockups, focusing on user experience and visual appeal. We iterate based on your feedback." },
        { number: "03", title: "Development & Build", description: "Our developers bring the designs to life with clean, efficient code, ensuring your project is fast, responsive, and secure." },
        { number: "04", title: "Launch & Optimize", description: "We deploy your project to the world and monitor its performance, providing support and optimization for continued growth." },
    ];

    return (
        <section className="relative py-20 md:py-32 bg-black text-white overflow-hidden">
            <AnimatedGridBackground />
            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-center">Our Proven Process</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-center">From concept to launch, we've perfected our workflow.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    {steps.map((step) => (
                        <Step key={step.number} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

