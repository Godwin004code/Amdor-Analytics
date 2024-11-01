import React from 'react'


const CourseDetailsHero = ({course}) => {
  return (
    <div className=' w-[90%] mx-auto'>
    <div className='flex sm:flex-col justify-between w-full mt-10 sm:mt-0'>
    <div className='my-auto'>
        <h2 className='text-[#262626] font-semibold sm:text-3xl text-5xl'>{course.title}</h2>
        <div className='w-[70%] mt-5 sm:w-full'>
      <h2>Course Description</h2>
        <p className='font-light text-[#59595A] text-base sm:text-base sm:mt-3'>{course.description}</p>
    </div>
    </div>
    
    
</div>

    </div>
  )
}

export default CourseDetailsHero