import React from 'react'

const CourseInstructor = ({course}) => {
    const instructor = course.courseInstructor
    
    
  return (
    <div className='w-[90%] mx-auto'>
        
        <h2 className='text-[#3AA619] font-bold text-4xl my-10 '>Instructor</h2>
    <section className='flex w-full justify-between flex-wrap gap-10'>
        {instructor.map((item,idx) => {
            return (
                <div key={idx} className='bg-white rounded-xl course-one-wrapper w-[48%] sm:w-full sm:p-5 p-10 '>
                    <img className='w-[100px] h-[100px] rounded-full object-cover mb-2' src={item.img} alt="" />
                    <h2 className='text-[#333333] font-semibold text-2xl mb-4'>{item.name}</h2>
                    <p className='text-[#4C4C4D] font-light'>{item.description}</p>
                </div>
            )
        })}
    </section>
    </div>
  )
}

export default CourseInstructor