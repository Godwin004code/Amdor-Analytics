import React from 'react'
import { MdStarRate } from "react-icons/md";

const CourseReview = ({course}) => {
    const reivews = course.courseReviews;
  return (
    <div className='w-[90%] mx-auto'>
        <h2 className='text-[#3AA619] font-bold text-4xl my-10 '>Student Reviews</h2>
<section className='flex w-full justify-between flex-wrap gap-10'>
    {reivews.map((item, idx) => {
        const {studentName, studentReview, studentRating} = item;
        return (
            
                 <div key={idx} className='bg-white rounded-xl course-one-wrapper w-[48%] sm:w-full sm:p-5 p-10 '>
                    <div className='flex  w-fit'>
                {
                  Array(studentRating).fill(0).map((item, idx) => {
                    return (
                      <MdStarRate color='#ffd700' size={30} />
                    )
                  })
                }
              </div>
                    <h2 className='text-[#333333] font-semibold text-2xl mt-2 mb-3'>{studentName}</h2>
                    <p className='text-[#4C4C4D] font-light'>{studentReview}</p>
                </div>
        
        )
    })}
</section>

        
</div>
  )
}

export default CourseReview