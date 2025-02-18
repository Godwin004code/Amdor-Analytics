import React from 'react'
import { MdOutlineElectricBolt } from "react-icons/md";
import heroImg from "../../assets/homepage.jpg_1729377860009.jpg"
import AbstractLine from "../../assets/Abstract Line.png"
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='flex z-40 w-[90%] mx-auto mt-14 sm:mt-5'>
            <div className='my-auto w-[60%] sm:w-full'>
                <div className='flex'>

                    <div className='sm:hidde'>
                        <img src={AbstractLine} className='object-co sm:w-[20px]' alt="" />
                    </div>

                    <div className='flex mt-[30px] ml-[-10px] bg-[#FCFCFD] w-fit sm:w-full p-3 rounded-xl'>
                        <div className='bg-[#FFC480] sm:hidden w-[62px] sm:w-[40px] sm:h-[40px] h-[62px] flex justify-center items-center rounded-md'>
                            <MdOutlineElectricBolt className='' />
                        </div>   
                        <div>
                        <h2 className='font-semibold text-5xl sm:text-[22px] ml-3 my-auto'><span className='text-[#3AA619]'>Unlock</span> Your Tech Potential, <br /> </h2>
                        <h2 className='font-semibold text-5xl sm:text-[22px] ml-3 my-auto'>
                            Become a global talent.
                        </h2>
                        </div>
                    </div>
                </div>
                <h2 className='text-[#262626] font-medium text-base  mt-4'>Our programs equip you with the skills and knowledge to excel in the global tech industry:</h2>
                <h2 className='text-[#262626] font-normal text-base sm:text-sm  mt-3'>Cutting-Edge Curriculum, Expert Instructors & Tailored Guidance, Hands-On Learning & Project Portfolios, Global Community & Networking and post training support.</h2>
                <div className='flex gap-4 w-full justify-center mt-7'>
                    
                    <Link to="/courses">
                    <button className='h-[60px] bg-[#3AA619] px-5 rounded-lg text-white'>Explore Courses</button>
                    </Link>

                    <Link to="/signup">
                    <button className='h-[60px] bg-[#fff] px-5 rounded-lg text-[#262626]'>Get Started</button></Link>
                </div>
            </div>
            <div className='sm:hidden w-[45%]'>
                <img src={heroImg} className='w-full' alt='Hero Image' />
            </div>
        </section>
    )
}

export default Hero