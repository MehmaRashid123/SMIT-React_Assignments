import React from 'react'
import Button from '../utils/Button'

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center pt-36'>
            <img src="react.svg" alt="" className='animate-spin [animation-duration:7s] w-28' />
            <h1 className='text-5xl font-semibold font-custom'>React</h1>
            <p>The library for web and native user interfaces</p>
            <div>
                <div className='p-9'>
                <Button value={'Get Started'}/>
                <Button value="View Syllabus" bgColor="bg-transparent" textColor="white" border="border border-white"  />
                </div>
                
            </div>

                
        </div>
    )
}

export default Hero