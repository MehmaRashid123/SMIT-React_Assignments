import React from 'react'
import { motion } from 'framer-motion'

const Plant4 = () => {
  return (
    
    <div className='absolute top-[520px] right-37 z-0'> 
        <motion.img 
            initial={{ x: 100, y: -10, opacity: 0,rotate:100 }} 
            animate={{ x: 0, y: 0, opacity: 1 ,rotate:0}}      
            transition={{ 
                duration: 1.5, 
                ease: "easeOut",
                delay: 0.6 
            }}
            
            src="/plant4.png" 
            alt="Plant4" 
            className=" h-auto" 
        />
    </div>
  )
}

export default Plant4