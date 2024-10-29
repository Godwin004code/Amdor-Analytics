import React from 'react'
import logo from "../../assets/WHITEEE.jpg"
import { Link } from 'react-router-dom'

import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#3AA619] py-7 mt-16'>
      <section className='w-[90%] mx-auto grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-8'>
        <div>
          <Link to="/">
            <img className='w-[150px] h-[130px] object-cover' src={logo} alt="Amdor Analytics" />
          </Link>
          <p className='text-white mt-4'>
            At Amdor Analytics, we are dedicated to empowering individuals to become global talents through comprehensive and accessible training. Our mission is to bridge the skills gap and enable learners to acquire in-demand skills, empowering them to make informed decisions, drive innovation, and create positive change in a tech-driven world.
          </p>
        </div>

        <div>
          <h3 className='text-white font-semibold mb-4'>Quick Links</h3>
          <nav>
            <ul className='flex flex-col gap-2'>
              <li><Link to="/learn" className='text-white'>About</Link></li>
              <li><Link to="/courses" className='text-white'>Our Courses</Link></li>
              <li><Link to="/blog" className='text-white'>Blog</Link></li>
              <li><Link to="/pricing" className='text-white'>Contact</Link></li>
            </ul>
          </nav>
        </div>

        <div>
          <h3 className='text-white font-semibold mb-4'>Social Profiles</h3>
          <nav>
            <ul className='flex gap-4 flex-wrap'>
              <Link to="https://www.facebook.com/amdoranalytics">
                <div className='bg-[#F7F7F8] w-12 h-12 sm:w-10 sm:h-10 rounded-lg flex justify-center items-center' style={{ border: '1px solid #F1F1F3' }}>
                  <FaFacebook size={24} />
                </div>
              </Link>
              <Link to="https://www.instagram.com/amdoranalytics/">
                <div className='bg-[#F7F7F8] w-12 h-12 sm:w-10 sm:h-10 rounded-lg flex justify-center items-center' style={{ border: '1px solid #F1F1F3' }}>
                  <FaInstagram size={24} />
                </div>
              </Link>
              <Link to="https://x.com/AmdorAnalytics">
                <div className='bg-[#F7F7F8] w-12 h-12 sm:w-10 sm:h-10 rounded-lg flex justify-center items-center' style={{ border: '1px solid #F1F1F3' }}>
                  <FaXTwitter size={24} />
                </div>
              </Link>
              <Link to="https://tiktok.com/@amdoranalytics">
                <div className='bg-[#F7F7F8] w-12 h-12 sm:w-10 sm:h-10 rounded-lg flex justify-center items-center' style={{ border: '1px solid #F1F1F3' }}>
                  <FaTiktok size={24} />
                </div>
              </Link>
              <Link to="https://www.youtube.com/@amdoranalytics?sub_confirmation=1">
                <div className='bg-[#F7F7F8] w-12 h-12 sm:w-10 sm:h-10 rounded-lg flex justify-center items-center' style={{ border: '1px solid #F1F1F3' }}>
                  <FaYoutube size={24} />
                </div>
              </Link>
              <Link to="https://www.linkedin.com/company/amdor-analytics/">
                <div className='bg-[#F7F7F8] w-12 h-12 sm:w-10 sm:h-10 rounded-lg flex justify-center items-center' style={{ border: '1px solid #F1F1F3' }}>
                  <FaLinkedin size={24} />
                </div>
              </Link>
            </ul>
          </nav>
          <div className='text-white mt-4'>
            <p>Phone Numbers: +2348114087403, +2347031359782</p>
            <p className='mt-2'>Email: amdoranalytics@gmail.com</p>
          </div>
        </div>
        
        <div className='text-center lg:text-left'>
          <h3 className='text-white text-sm font-normal mt-0 sm:mt-6'>
            © 2024 Amdor Analytics. All rights reserved.
          </h3>
        </div>
      </section>
    </footer>
  )
}

export default Footer
