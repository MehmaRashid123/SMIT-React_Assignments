import React from 'react'
import { motion } from 'framer-motion'

const Plant1 = () => {
  return (
    
    <div className='absolute top-[380px] right-52 z-0'> 
        <motion.img 
            initial={{  y: 100, opacity: 0 }} 
            animate={{  y: 0, opacity: 1 }}      
            transition={{ 
                duration: 1.5, 
                ease: "easeOut",
                delay: 0.6 
            }}
            
            src="/plant1.png" 
            alt="Plant1" 
            className=" h-auto" 
        />
    </div>
  )
}

export default Plant1