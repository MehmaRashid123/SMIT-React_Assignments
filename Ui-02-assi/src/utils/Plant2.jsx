import React from 'react'
import { motion } from 'framer-motion'

const Plant2 = () => {
  return (
    
    <div className='absolute top-[400px] right-10 z-0'> 
        <motion.img 
            initial={{ x: 100, y: -10, opacity: 0 ,rotate:30}} 
            animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}      
            transition={{ 
                duration: 1.5, 
                ease: "easeOut",
                delay: 0.6 
            }}
            
            src="/plant2.png" 
            alt="Plant1" 
            className=" h-auto" 
        />
    </div>
  )
}

export default Plant2