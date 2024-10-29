import React from 'react'

const CourseBenefits = ({course}) => {
    
    
    const benefit = course.coursesBenefits;
    console.log(benefit);
  return (
    <div className='w-[90%] mx-auto'>
        <h2 className='text-[#3AA619] font-bold text-4xl my-10 '>Course Benefits</h2>
        <section className='bg-[#e9f5e8] rounded-xl course-one-wrapper w-[48%] sm:w-full sm:p-5 p-10 '>
            <h2 className='mb-3'>{benefit.ben1}</h2>
            <h2 className='mb-3'> {benefit.ben2}</h2>
            <h2 className='mb-3'> {benefit.ben3}</h2>
            <h2 className='mb-3'> {benefit.ben4}</h2>
            <h2 className='mb-3'> {benefit.ben5}</h2>
            <h2 className='mb-3'> {benefit.ben6}</h2>
            <h2 className='mb-3'> {benefit.ben7}</h2>
            <h2 className='mb-3'> {benefit.ben8}</h2>
            <h2 className='mb-3'>{benefit.ben9}</h2>
        </section>
    </div>
  )
}

export default CourseBenefits