import React, {useState} from 'react'

import { MdStarRate } from "react-icons/md";
import courses from '../courses/courses';
import { Link } from 'react-router-dom';

const ExploreCourses = () => {
 
  const [showDes, setShowDes] = useState(null)

  const handleMouseEnter = () => {
    setShowDes(true)
  }

  const handleMouseLeave = () => {
    setShowDes(false)
  }
  const path = (window.location.pathname);
  
  return (
    <div className='w-[90%] mx-auto mt-28' style={{marginTop: window.location.pathname === '/learn' ? '20px' : '100px'}}>
      
      <div className='flex  sm:gap-3 justify-between mt-6' style={{display: window.location.pathname === '/learn' ? 'none' : 'flex'}}>
      <h2 className='text-[#3AA619] my-auto font-semibold text-3xl' style={{display: window.location.pathname === '/learn' ? 'none' : 'block'}}>EXPLORE OUR COURSES</h2>
        {path != '/coures' && <Link to="/courses">
          <button className='h-[60px] bg-[#fff] px-5 rounded-lg text-[#262626]'>View All</button>
        </Link>}
        
      </div>
      {path === '/courses' ? <div className='flex bg-white  justify-between flex-wrap mt-10' >
        {courses.map((item, idx) => {
          const {title, description,price, level,duration,banner, rating} = item
          return (
            <div className='mb-8 mt-10 transition-all  duration-200 ease-in-out  w-[32%] sm:w-full relative rounded-xl p-8 sm:p-4' key={idx}>
              {showDes === idx && (
                <div className={ `bg-white mb-8 absolute h-full z-10  pointer-events-none transform transition-all  duration-[3000] ease-in-out p-5 rounded-lg flex flex-col justify-between
                ${showDes === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <h2>{description}</h2>
                <div className='w-full ml-auto mt-5 h-[50px] rounded-lg bg-[#3AA619] flex justify-center items-center text-[#fff] font-medium'>
                          Get it Now
                              </div>
                              </div>
              )}
              <div className='w-full ' onMouseEnter={() => setShowDes(idx)} onMouseLeave={() => setShowDes(null)}>
              <img src={banner} className='w-full h-[300px] object-cover rounded-lg' alt={title} />
              <div className='flex mt-7 justify-between'>
              <div className='flex gap-5 '>
                <div className='w-fit p-2 rounded-lg text-sm' style={{border: '1px solid #F1F1F3'}}>
                  {duration}
                </div>
               
              </div>
              <div className='my-auto flex gap-3'>
                <h2 className='text-[#3AA619]'>{price}</h2>
                <h2 className='text-[#262626] line-through'>{level}</h2>
              </div>
              </div>
              <div className='flex ml-auto w-fit'>
                {
                  Array(rating).fill(0).map((item, idx) => {
                    return (
                      <MdStarRate />
                    )
                  })
                }
              </div>
              <h2 className='text-[#333333] font-semibold text-2xl mt-2'>{title}</h2>
              {/* <p className='text-[#4C4C4D] font-normal mt-3 text-lg'>{description}</p> */}
              <Link to={`/courses/${title}`}>
              <div className='w-full ml-auto mt-5 h-[50px] rounded-lg bg-[#F7F7F8] flex justify-center items-center text-[#262626] font-medium'>
          Get it Now
              </div>
              </Link>
              </div>
            </div>
          )
        })}
      </div> : <div className='flex bg-white  justify-between flex-wrap mt-10' >
        {courses.slice(0,3).map((item, idx) => {
          const {title, description,price, level,duration,banner, rating} = item
          return (
            <div className='mb-8 transition-all  duration-200 ease-in-out  w-[32%] sm:w-full relative rounded-xl p-8 sm:p-4' key={idx}>
              {showDes === idx && (
                <div className={ `bg-white absolute h-full z-10  pointer-events-none transform transition-all  duration-[3000] ease-in-out p-5 rounded-lg flex flex-col justify-between
                ${showDes === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <h2>{description}</h2>
                <div className='w-full ml-auto mt-5 h-[50px] rounded-lg bg-[#3AA619] flex justify-center items-center text-[#fff] font-medium'>
                          Get it Now
                              </div>
                              </div>
              )}
              <div className='w-full ' onMouseEnter={() => setShowDes(idx)} onMouseLeave={() => setShowDes(null)}>
              <img src={banner} className='w-full h-[300px] object-cover rounded-lg' alt={title} />
              <div className='flex mt-7 justify-between'>
              <div className='flex gap-5 '>
                <div className='w-fit p-2 rounded-lg text-sm' style={{border: '1px solid #F1F1F3'}}>
                  {duration}
                </div>
               
              </div>
              <div className='my-auto flex gap-3'>
                <h2 className='text-[#3AA619]'>{price}</h2>
                <h2 className='text-[#262626] line-through'>{level}</h2>
              </div>
              </div>
              <div className='flex ml-auto w-fit'>
                {
                  Array(rating).fill(0).map((item, idx) => {
                    return (
                      <MdStarRate />
                    )
                  })
                }
              </div>
              <h2 className='text-[#333333] font-semibold text-2xl mt-2'>{title}</h2>
              {/* <p className='text-[#4C4C4D] font-normal mt-3 text-lg'>{description}</p> */}
              <Link to={`/courses/${title}`}>
              <div className='w-full ml-auto mt-5 h-[50px] rounded-lg bg-[#F7F7F8] flex justify-center items-center text-[#262626] font-medium'>
          Get it Now
              </div>
              </Link>
              </div>
            </div>
          )
        })}
      </div>}
      
    </div>
  )
}

export default ExploreCourses