import { motion } from 'framer-motion';
import { Code, PenTool, ArrowRight } from 'lucide-react'; // npm install lucide-react

const BrandServicesSection = () => {
  // Framer Motion variants for container and items (no changes needed here)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Generate an array for the particle elements
  const particles = Array.from({ length: 75 });

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated "Rising Embers" Background */}
      <div className="absolute inset-0 z-0">
        {particles.map((_, i) => (
          <div
            key={i}
            className="absolute bg-orange-500 rounded-full animate-ascend"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Crafting brilliant solutions for your digital needs.
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
            className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl ring-1 ring-white/10 hover:ring-orange-500/50 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="bg-orange-500 text-white p-3 rounded-xl inline-block mb-6 shadow-lg shadow-orange-500/20">
              <Code size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Web Development</h3>
            <p className="text-gray-300 mb-6">
              From lightning-fast landing pages to complex web applications, we build robust, scalable, and secure websites that drive results.
            </p>
            <a href="#" className="font-bold text-orange-400 hover:text-orange-300 transition flex items-center group">
              Learn More <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Service Card 2: Graphic Design */}
          <motion.div
            className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl ring-1 ring-white/10 hover:ring-orange-500/50 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="bg-orange-500 text-white p-3 rounded-xl inline-block mb-6 shadow-lg shadow-orange-500/20">
              <PenTool size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Graphic Design</h3>
            <p className="text-gray-300 mb-6">
              We create compelling visual identities, from logos and branding to marketing materials, that tell your story and captivate your audience.
            </p>
            <a href="#" className="font-bold text-orange-400 hover:text-orange-300 transition flex items-center group">
              See Our Style <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandServicesSection;

// Add the new animation keyframes to your global CSS file (e.g., styles/globals.css)
// and remove the old "blob" animation.
