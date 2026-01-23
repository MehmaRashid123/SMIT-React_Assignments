import React from 'react'
import { motion } from 'framer-motion'

const Plant3 = () => {
  return (
    
    <div className='absolute top-[500px] right-80 z-0'> 
        <motion.img 
            initial={{ y: 100, opacity: 0, rotate: 60 }} 
  animate={{ y: 0, opacity: 1, rotate: 0 }}        
            transition={{ 
                duration: 1.5, 
                ease: "easeOut",
                delay: 0.6 
            }}
            
            src="/plant3.png" 
            alt="Plant3" 
            className=" h-auto" 
        />
    </div>
  )
}

export default Plant3