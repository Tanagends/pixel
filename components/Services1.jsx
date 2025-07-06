import { motion } from 'framer-motion';
import { Code, PenTool, ArrowRight } from 'lucide-react'; // Using lucide-react for sleek icons

const VibrantServicesSection = () => {
  // Variants for the container to orchestrate staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
      },
    },
  };

  // Variants for the individual service cards
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Aurora Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500">
            Our Services
          </h2>
          <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
            We don't just build projects; we forge vibrant digital experiences that resonate.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Service Card 1: Web Development */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white p-3 rounded-xl inline-block mb-6 shadow-lg">
              <Code size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Web Development</h3>
            <p className="text-slate-300 mb-6">
              From lightning-fast landing pages to complex web applications, we build robust, scalable, and secure websites that drive results.
            </p>
            <a href="#" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 hover:brightness-110 transition flex items-center group">
              Learn More <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Service Card 2: Graphic Design */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="bg-gradient-to-br from-pink-500 to-purple-500 text-white p-3 rounded-xl inline-block mb-6 shadow-lg">
              <PenTool size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Graphic Design</h3>
            <p className="text-slate-300 mb-6">
              We create compelling visual identities, from logos and branding to marketing materials, that tell your story and captivate your audience.
            </p>
            <a href="#" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 hover:brightness-110 transition flex items-center group">
              See Our Style <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VibrantServicesSection;

// You might need to add animation keyframes to your tailwind.config.js or a global CSS file
// for the aurora blob animation.

/* In your global CSS file (e.g., styles/globals.css): */

