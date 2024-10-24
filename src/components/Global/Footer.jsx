import React from 'react'
import logo from "../../assets/WHITEEE.jpg"
import { Link } from 'react-router-dom'

import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#3AA619] mt-16'>
      <section className='w-[90%] py-7 flex sm:flex-col justify-between mx-auto'>
        <div className='w-[30%] sm:w-full'>
          <Link to="/"> <img className='w-[150px] h-[130px] object-cover' src={logo} alt="Amdor Analytics" /></Link>
          <p className='text-white'>At Amdor Analytics, we are dedicated to empowering individuals to become global talents through comprehensive and accessible training. Our mission is to bridge the skills gap and enable learners to acquire in-demand skills, empowering them to make informed decisions, drive innovation, and create positive change in a tech-driven world.</p>
        </div>
        <div className='mt-6 hidden'>
          <nav>
            <ul className='flex flex-col'>
              <li className='mb-2 sm:mb-0 flex font-semibold text-[#fff] items-center  rounded-lg'>
                Home
              </li>
              <li className='mb-2 flex mt-6 sm:mt-3  items-center  rounded-lg'>
                <Link to="/learn" className='text-white'>Benefits</Link>
              </li>
              <li className='mb-2 flex  items-center   rounded-lg'>
                <Link to="/courses">Our Courses</Link>
              </li>
              <li className='mb-2 flex  items-center   rounded-lg'>
                <Link to="/about-us">Our Testimonials</Link>
              </li>
              <li className='mb-2 flex  items-center   rounded-lg'>
                <Link to="/pricing">FAQ</Link>
              </li>


            </ul>
          </nav>
        </div>
        <div className='mt-6' >
          <nav>
            <ul className='flex flex-col'>
              <li className='mb-2 sm:mb-0 flex font-semibold text-[#fff]  items-center  rounded-lg'>
                Quick Links
              </li>
              <li className='mb-2 mt-6 sm:mt-3 flex  items-center  rounded-lg'>
                <Link to="/learn" className='text-white'>About</Link>
              </li>
              <li className='mb-2 flex  items-center   rounded-lg'>
                <Link to="/courses" className='text-white'>Our Courses</Link>
              </li>
              <li className='mb-2 flex  items-center   rounded-lg'>
                <Link to="/blog" className='text-white'>Blog</Link>
              </li>
              <li className='mb-2 flex  items-center   rounded-lg'>
                <Link to="/pricing" className='text-white'>Contact</Link>
              </li>


            </ul>
          </nav>
        </div>
        <div className='mt-6'>
          <li className='mb-2 flex font-semibold text-[#fff]  px-0 rounded-lg'>
            Social Profiles
          </li>
          <nav className='mt-6 sm:mt-3'>
            <ul className='flex sm:justify-between gap-4'>

             <Link to={"https://www.facebook.com/amdoranalytics"}>
             <div className='bg-[#F7F7F8] w-[52px] sm:h-[40px] sm:w-[40px] rounded-lg flex justify-center items-center h-[52px]' style={{ border: '1px solid #F1F1F3' }}>
                <FaFacebook size={24} />
              </div>
             </Link>
             <Link to="https://www.instagram.com/amdor_analytics">
             <div className='bg-[#F7F7F8] w-[52px] sm:h-[40px] sm:w-[40px] rounded-lg flex justify-center items-center h-[52px]' style={{ border: '1px solid #F1F1F3' }}>
                <FaInstagram size={24} />
              </div>
             </Link>
              <Link to="https://x.com/AmdorAnalytics">
              <div className='bg-[#F7F7F8] w-[52px] sm:h-[40px] sm:w-[40px] rounded-lg flex justify-center items-center h-[52px]' style={{ border: '1px solid #F1F1F3' }}>
                <FaXTwitter size={24} />
              </div>
              </Link>
              <Link to="https://tiktok.com/@amdoranalytics">
              <div className='bg-[#F7F7F8] w-[52px] sm:h-[40px] sm:w-[40px] rounded-lg flex justify-center items-center h-[52px]' style={{ border: '1px solid #F1F1F3' }}>
                <FaTiktok size={24} />
              </div>
              </Link>
              <Link to="https://www.youtube.com/@amdoranalytics?sub_confirmation=1">
              <div className='bg-[#F7F7F8] w-[52px] sm:h-[40px] sm:w-[40px] rounded-lg flex justify-center items-center h-[52px]' style={{ border: '1px solid #F1F1F3' }}>
                <FaYoutube size={24} />
              </div>
              </Link>
       
             <Link to="https://www.linkedin.com/company/amdor-analytics/">
             <div className='bg-[#F7F7F8] w-[52px] sm:h-[40px] sm:w-[40px] rounded-lg flex justify-center items-center h-[52px]' style={{ border: '1px solid #F1F1F3' }}>
                <FaLinkedin size={24} />
              </div>
             </Link>

            </ul>
          </nav>
          <div>
            <h2 className='mt-4 text-white'>Phone Numbers: +2348114087403</h2>
           
            <h2 className='mt-4 text-white'>Email: amdoranalytics@gmail.com</h2>
          </div>
        </div>
      </section>
      <section className='w-[90%] py-7 mx-auto' style={{ borderTop: '1px solid #F1F1F3' }}>
        <h2 className='text-sm font-normal text-[#fff] text-center'>© 2024 Amdor Analytics. All rights reserved.</h2>
      </section>
    </footer>
  )
}

export default Footer