import React from 'react'
import HeroImage from '../assets/hero-image.png'
import PrimaryButton from './Button'
import Typewriter from "typewriter-effect"

const Hero = () => {
  return (
    <div id="home" className='bg-gray-900 text-white text-center pt-40 pb-16 shadow'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover border border-gray-700 p-3 bg-gray-800 transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span >Olumide Oderinde</span> <br/>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'><Typewriter options={{
              strings: ['Full-Stack', 'Frontend', 'Backend', 'DevOps', 'Cloud'],
              autoStart: true,
              loop: true,
              }} /></span>
            Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive (Mobile friendly) web applications.
        </p>
        <div className='mt-8 space-x-4'>
          <PrimaryButton to="/contact" variant="primary">Get in touch with me</PrimaryButton>
          <PrimaryButton to="/" variant="secondary">Resume</PrimaryButton>
        </div>

    </div>
  )
}

export default Hero