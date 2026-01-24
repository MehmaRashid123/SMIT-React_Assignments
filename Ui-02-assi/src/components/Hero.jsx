import React from 'react'
import Ball from '../utils/Ball'
import Button1 from '../utils/Button1'
import Bird from '../utils/Bird'
import Cycle from '../utils/Cycle'
import Plant1 from '../utils/Plant1'
import Plant2 from '../utils/Plant2'
import Plant3 from '../utils/Plant3'
import Plant4 from '../utils/Plant4'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Logo from '../utils/Logo'

const Hero = () => {
  
  useGSAP(() => {
    // 1. Text Animation (Jo aapne pehle banayi thi)
    gsap.from('.animat', {
      y: -500,          
      opacity: 0,        
      duration: 2,       
      delay: 0.5,        
      ease: "expo.inOut"
    })

    gsap.from(".p", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      delay: 1.2,
      ease: 'power4.out',
    })

    // 2. LEAF ENTRANCE (Ye leaf ko pop karke layega)
    // Note: ".leaf-img" wo class hai jo aapne Logo component ke andar image ko deni hai
    gsap.from(".leaf-img", {
      scale: 0,
      opacity: 0,
      rotate: -45,
      duration: 1.5,
      delay: 1.5,
      ease: "back.out(1.7)"
    })

    // 3. LEAF IDLE ANIMATION (Hawa mein hilna - Swaying)
    // Ye animation hamesha chalti rahegi
    gsap.to(".leaf-img", {
      rotate: 15,          // Thoda sa rotate hoga
      yoyo: true,          // Wapis aayega
      repeat: -1,          // Infinite loop
      duration: 2,         // Speed
      ease: "sine.inOut",
      delay: 2.5           // Entrance ke baad shuru hoga
    })
  })

  return (
    <div className='relative flex justify-center flex-col items-center h-screen overflow-hidden'>
        <Bird /> 
        
        {/* Container for Text and Leaf to keep them together */}
        <div className='relative flex items-center justify-center'>
            <h1 className='animat font-["Bodoni_Moda"] italic text-9xl font-bold tracking-tighter '>
                Marée
            </h1>
            {/* Agar Logo component sirf leaf hai to usse yahan class dein */}
            <div className="leaf-img ml-[-20px] mt-10">
                <Logo /> 
            </div>
        </div>

        <p className='p font-["Bodoni_Moda"] italic text-2xl font-light max-w-[500px] text-center leading-relaxed tracking-tight mx-auto mt-4'>
          Welcome to Marée, a brand new illustration & design portfolio just waiting for your work to start populating its templates!
        </p>

        <Cycle/>
        <div className='mt-8'>
            <Button1 value={'Purchase'}/>
        </div>

        {/* Floating Balls */}
        <Ball bgColor="#7bdcb5" className="top-10 left-10" />
        <Ball bgColor="#fb6962" className="top-1/2 right-20" />
        <Ball bgColor="#fb6962" className="bottom-20 left-1/4" />
        <Ball bgColor="#7bdcb5" className="bottom-20 left-1/2" />
        <Ball bgColor="#7bdcb5" className="bottom-10 left-10" />
        <Ball bgColor="#fb6962" className="top-1/2 left-1/4" />

        <Plant1/>
        <Plant2/>
        <Plant3/>
        <Plant4/>
    </div>
  )
}

export default Hero;