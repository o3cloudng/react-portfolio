import React from 'react'
import PrimaryButton from './Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-black fixed w-full z-50 top-0 shadow-lg p-4 text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>
            <Link to="/"><span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>My Portfolio</span></Link>
              </div>
            <div className='space-x-6'>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/service">SERVICES</Link>
                <Link to="/project">PROJECTS</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
            
            <PrimaryButton to="/contact">CONNECT ME</PrimaryButton>
        </div>
    </nav>
  )
}

export default Navbar