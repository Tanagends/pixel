// components/BlurryCirclesBackground.tsx

'use client'
import { motion } from "framer-motion";

export default function BlurryCirclesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <motion.div className="absolute top-10 left-10 w-[400px] h-[400px] bg-orange-300 opacity-30 rounded-full blur-3xl animate-spinSlow" 
        animate={{ x: 200, y: 200 }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
      />
      <motion.div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-300 opacity-25 rounded-full blur-3xl animate-float"
        animate={{ x: -200, y: -200 }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
      />
    </div>
  );
}
