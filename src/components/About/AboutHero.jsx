import React from 'react'
import { MdOutlineElectricBolt } from "react-icons/md";
import heroImg from "../../assets/e3aacb2b444aaaf72e3d8b0be6e054c8.png"
import AbstractLine from "../../assets/Abstract Line.png"

const AboutHero = () => {
  return (
    <section className='flex z-40 w-[90%] justify-between mx-auto mt-14 sm:mt-5'>
    
    <div className='sm:hidden  w-[40%]'>
        <img src={heroImg}  className='w-full h-[600px] object-cover rounded-[40px]' alt='Hero Image' />
    </div>
    <div className='my-auto w-[50%]  sm:w-full'>
        <div className='flex'>
            <span className='bg-[#3AA619] w-[41px] h-[41px] rounded-lg'></span>
            <h2 className='text-[#1F1F1F] font-light text-xl my-auto ml-2'>About Us</h2>
        </div>
        <h2 className='text-[#1F1F1F] font-semibold text-4xl sm:text-2xl sm:my-3 my-5'>Our Company Overview</h2>
        <p className='text-[##666C89] font-light text-base'>At Amdor Analytics, we are committed to empowering individuals with the skills and knowledge needed to excel in today’s tech-driven world. Our mission is to provide accessible, high-quality technology education that helps learners from all backgrounds thrive and make informed decisions.
With the growing demand for tech experts, Amdor Analytics offers courses designed by industry professionals that cover both fundamental and advanced topics. Our hands-on approach ensures learners gain practical experience through real-world projects, sharpening their problem-solving and critical thinking skills.
We also foster a supportive learning community, enabling learners to connect with peers, mentors, and industry experts. By joining Amdor Analytics, you become part of a network dedicated to lifelong learning and professional growth.
Beyond earning a certificate, our learners gain the confidence and expertise to succeed in the competitive tech job market. Let Amdor Analytics be your partner in unlocking your potential and achieving success in the world of technology.</p>
        <div className='flex gap-10 sm:my-7 my-10'>
            <button className='h-[60px] w-full text-base rounded-md text-white bg-[#3AA619]'>Mission</button>
            <button className='h-[60px] w-full text-base rounded-md text-black bg-[#E8E8E880]'> Vision</button>
        </div>
        <div className='bg-[#EDEDED] w-full h-[1px]' />
        <p className='text-[##666C89] font-light text-base sm:mt-6 mt-8'>Our mission is to bridge the skills gap by equipping learners with in-demand skills, enabling them to make informed decisions, drive innovation, and create positive change in a tech-driven world, particularly across the African continent.</p>
        <p className='text-[##666C89] font-light text-base sm:mt-6 mt-8'>Our vision is to be the catalyst for a tech-driven revolution, where individuals are empowered to effectively harness technology and data. We aspire to shape a future where tech skills and insights are accessible to all, fueling innovation and unlocking endless possibilities across industries. We strive to be a trusted platform that not only imparts knowledge but also fosters a supportive community of learners, mentors, and industry professionals, propelling individuals toward successful careers and lifelong learning in all areas of technology.</p>
    </div>
</section>
  )
}

export default AboutHero