import React, { useRef } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import PrimaryButton from './Button'
// import emailjs from '@emailjs/browser';

const Contact = () => {
  // const form = useRef();
  // const serviceId = process.env.SERVICE_ID;
  // const templateId = process.env.TEMPLATE_ID;
  // const publicKey = process.env.PUBLIC_KEY;

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   console.log("You are trying to send an email.")

  //   emailjs
  //     .sendForm(
  //       'service_n4rpndm',
  //       'template_8le4vpn', 
  //       form.current, {
  //         publicKey: '538H45XRQ-uU1H3WlvLPW',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //         e.target.reset();
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  return (
    <div className="bg-gray-900 text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects as a freelancer, part of a team or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:olumideo2000@gmail.com" className='hover:underline'>
                    olumideo2000@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+2348060617790</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>Nigeria, Africa</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4' /* ref={form} onSubmit={sendEmail} */>
                <div>
                    <label htmlFor="name" className='block mb-2'>Enter Your Name</label>
                    <input type="text" name='fullname'
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Email</label>
                    <input type="text"  name='email'
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" name='message'
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Enter You Message'/>
                </div>
              <PrimaryButton type="submit">Send message</PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact