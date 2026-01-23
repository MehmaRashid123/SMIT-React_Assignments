import Ball from '../utils/ball'
import Button1 from '../utils/Button1'
import Bird from '../utils/Bird'
import Cycle from '../utils/Cycle'
import Plant1 from '../utils/Plant1'
import Plant2 from '../utils/Plant2'
import Plant3 from '../utils/Plant3'
import Plant4 from '../utils/Plant4'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
  
  useGSAP(()=>{
    gsap.from('.animat',{
      y: -500,          
      opacity: 0,        
      duration: 2,       
      delay: 1,        
      ease: "expo.inOut"

    })
    gsap.from(".p",{
     y:1000,
     opacity:0,
     duration:2.5,
     delay:1.5,
      ease:'power4',
      stagger: 0.04 
    })
  })

  return (
    <div className='flex justify-center flex-col items-center h-screen'>
        <Bird /> 
        <h1  className='animat font-["Bodoni_Moda"] italic text-9xl font-bold tracking-tighter '>Marée</h1>
        <p  className='p font-["Bodoni_Moda"] italic text-2xl font-light max-w-[500px] text-center leading-relaxed tracking-tight mx-auto'>
          Welcome to Marée, a brand new illustration & design portfolio just waiting for your work to start populating its templates!
        </p>
        <Cycle/>
        <Button1 value={'Purchase'}/>

        <Ball bgColor="#7bdcb5" className="top-10 left-10" />
        <Ball bgColor="#fb6962" className="top-1/2 right-20" />
        <Ball bgColor="#fb6962" className="bottom-20 left-1/4" />
        <Ball bgColor="#7bdcb5" className="bottom-20 left-1/2" />
        <Ball bgColor="#7bdcb5" className="bottom-10 left-10" />
        <Ball bgColor="#fb6962" className="top-1/2 left-1/4" />
        <Ball bgColor="#fb6962" className="bottom-20 left-1/4" />
        <Ball bgColor="#7bdcb5" className="bottom-20 left-1/2" />

        <Plant1/>
        <Plant2/>
        <Plant3/>
        <Plant4/>
    </div>
  )
}

export default Hero;
