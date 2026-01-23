import React from 'react'
import { motion } from 'framer-motion' // 1. Framer motion import karein

const Cycle = () => {
  return (
    <div className='absolute top-[270px] left-3.5'> {/* Taaki slide hote waqt image screen se bahar na dikhe */}
        <motion.img 
            // 2. Corner se slide hone wali settings
            initial={{ x: -100, y: 10, opacity: 0 }} // Bottom-Left se shuru hoga
            animate={{ x: 0, y: 0, opacity: 1 }}      // Apni asli jagah par aayega
            transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                delay: 0.2 // Thoda sa ruk kar start hoga
            }}
            
            // 3. Image Path Fix (Vite mein / use hota hai, ./public nahi)
            src="/cycle.png" 
            alt="Cycle" 
            className="w-72 h-auto" // Apne hisab se size adjust karein
        />
    </div>
  )
}

export default Cycle