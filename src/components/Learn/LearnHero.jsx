import React from 'react'
import { Link } from 'react-router-dom'
import LearnHeroImg from "../../assets/e3aacb2b444aaaf72e3d8b0be6e054c8.png"

const LearnHero = () => {
  return (
    <div className='flex sm:flex-col z-40 w-[90%] mx-auto mt-14 sm:mt-5'>
      <div className="my-auto">
        <h2 className='text-[#384250] font-bold sm:text-5xl text-7xl'>Explore <span className='text-[#3AA619]'>Instructor</span></h2>
        <h2 className='text-[#384250] font-bold sm:text-5xl text-7xl'>Led Courses</h2>
        <p className='text-[#384250] mt-[30px] font-normal sm:text-base text-lg sm:w-full w-[70%]'>Join our training and be part of the thousands who have benefitted from our training. Start your Journey today and see the difference.</p>
        <Link to="/register">
          <button className="bg-[#3AA619] text-white w-fit mt-[30px] rounded-md py-4 px-10">
            Get Started
          </button>
        </Link>
      </div>
      <div className='w-[40%] sm:w-full sm:hidden'>
        <img src={LearnHeroImg} className='object-cover h-[490px] w-full rounded-2xl' alt="Learn Hero Image" />
      </div>
    </div>
  )
}

export default LearnHero
