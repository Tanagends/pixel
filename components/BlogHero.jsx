import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

//================================================================//
// Flow Field Background Component
// A self-contained canvas animation for the hero background.
//================================================================//
const FlowFieldBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // This function sets the canvas dimensions based on its parent container.
        const setCanvasSize = () => {
            if(canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
        };

        class Particle {
            constructor(effect) {
                this.effect = effect;
                this.x = Math.floor(Math.random() * this.effect.width);
                this.y = Math.floor(Math.random() * this.effect.height);
                this.speedModifier = Math.random() * 2 + 0.1;
                this.history = [{x: this.x, y: this.y}];
                this.maxLength = Math.floor(Math.random() * 60 + 10);
                this.angle = 0;
                this.timer = this.maxLength * 2;
                this.isOrange = Math.random() < 0.15;
                this.lineWidth = Math.random() * 1.5 + 0.2;
            }
            draw(context){
                context.beginPath();
                context.moveTo(this.history[0].x, this.history[0].y);
                for (let i = 0; i < this.history.length; i++){
                    context.lineTo(this.history[i].x, this.history[i].y);
                }
                context.strokeStyle = this.isOrange ? `rgba(255, 87, 34, 0.5)` : `rgba(26, 32, 44, 0.2)`;
                context.lineWidth = this.lineWidth;
                context.stroke();
            }
            update(){
                this.timer--;
                if (this.timer >= 1){
                    let x = Math.floor(this.x / this.effect.cellSize);
                    let y = Math.floor(this.y / this.effect.cellSize);
                    let index = y * this.effect.cols + x;
                    if (this.effect.flowField[index]) {
                        this.angle = this.effect.flowField[index];
                    }

                    this.speedX = Math.cos(this.angle);
                    this.speedY = Math.sin(this.angle);
                    this.x += this.speedX * this.speedModifier;
                    this.y += this.speedY * this.speedModifier;

                    this.history.push({x: this.x, y: this.y});
                    if (this.history.length > this.maxLength){
                        this.history.shift();
                    }
                } else if (this.history.length > 1){
                    this.history.shift();
                } else {
                    this.reset();
                }
            }
            reset(){
                this.x = Math.floor(Math.random() * this.effect.width);
                this.y = Math.floor(Math.random() * this.effect.height);
                this.history = [{x: this.x, y: this.y}];
                this.timer = this.maxLength * 2;
            }
        }

        class Effect {
            constructor(width, height){
                this.width = width;
                this.height = height;
                this.particles = [];
                this.numberOfParticles = 200;
                this.cellSize = 20;
                this.flowField = [];
                this.curve = 2.1;
                this.zoom = 0.07;
                this.init();
            }
            init(){
                this.rows = Math.floor(this.height / this.cellSize);
                this.cols = Math.floor(this.width / this.cellSize);
                this.flowField = [];
                for (let y = 0; y < this.rows; y++){
                    for (let x = 0; x < this.cols; x++){
                        let angle = (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve;
                        this.flowField.push(angle);
                    }
                }
                this.particles = [];
                for (let i = 0; i < this.numberOfParticles; i++){
                    this.particles.push(new Particle(this));
                }
            }
            render(context){
                this.particles.forEach(particle => {
                    particle.draw(context);
                    particle.update();
                });
            }
        }

        // **FIX 1:** Set the canvas size *before* initializing the effect.
        setCanvasSize();
        const effect = new Effect(canvas.width, canvas.height);
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            effect.render(ctx);
            animationFrameId = requestAnimationFrame(animate);
        }
        
        const handleResize = () => {
            setCanvasSize();
            effect.width = canvas.width;
            effect.height = canvas.height;
            effect.init();
        };

        animate();
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};


//================================================================//
// BlogPageHero Component
//================================================================//
export default function BlogPageHero() {

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, skewY: 3 },
        visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const headline1 = "PixelCrafte";
    const headline2 = "Insights";

    return (
        // The parent <section> needs `relative` positioning to act as a container for the absolute children.
        <section className="relative bg-white py-24 md:py-32 overflow-hidden">
            
            {/* The canvas sits at the bottom of the stack. */}
            <div className="absolute inset-0 z-0">
                <FlowFieldBackground />
            </div>
            
            {/* This gradient overlay sits on top of the canvas. */}
            {/*<div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/50 z-10"></div> */}
            {/*<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/50 z-10"></div>`*/}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/50 z-10"></div>*/}
        {/*<div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10"></div>*/}
            {/* The text container is last, ensuring it's on top of everything else. */}
             <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <motion.h1
                     className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-gray-800"
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
                     className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                 >
                     Our thoughts on design, development, and the digital future. A journal for the curious and the creative.
                 </motion.p>
            </div>
        </section>
    );
}
