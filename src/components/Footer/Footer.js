import React from 'react'
import { FaFacebook, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-slate-900 w-full text-white py-16">
        <div className='flex flex-col items-center justify-center'>
            <ul className='flex items-center justify-center flex-col sm:flex-row gap-10'>
                <li><a href='#' className='text-[1rem] uppercase font-[500]'>About</a></li>
                <li><a href='#' className='text-[1rem] uppercase font-[500]'>Blog</a></li>
                <li><a href='#' className='text-[1rem] uppercase font-[500]'>Jobs</a></li>
                <li><a href='#' className='text-[1rem] uppercase font-[500]'>Press</a></li>
                <li><a href='#' className='text-[1rem] uppercase font-[500]'>Accessibility</a></li>
                <li><a href='#' className='text-[1rem] uppercase font-[500]'>Partners</a></li>
            </ul>

            <ul className='flex items-center justify-center flex-row gap-10 mt-10'>
                <li><a href='#' className='text-[1rem] uppercase font-[500]'><FaFacebook size={25}></FaFacebook></a></li>
                <li><a href='#' className='text-[1rem] uppercase font-[500]'><FaTwitterSquare size={25}></FaTwitterSquare></a></li>
                <li><a href='#' className='text-[1rem] uppercase font-[500]'><FaLinkedin size={25}></FaLinkedin></a></li>
                <li><a href='#' className='text-[1rem] uppercase font-[500]'><FaInstagram size={25}></FaInstagram></a></li>
                
            </ul>

            <h1 className='mt-5 text-[1rem]'>@ 2022 practice.com.All right reserve</h1>
        </div>
    </footer>
  )
}

export default Footer