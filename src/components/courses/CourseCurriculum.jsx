import React from 'react'

const CourseCurriculum = ({course}) => {
    const outline = course.outline
   
    
    
  return (
    <div className='w-[90%] mx-auto mt-52 sm:mt-20'>
        <h2 className='text-[#3AA619] font-bold text-4xl my-10'>Curriculum</h2>
<section className='flex w-full justify-between flex-wrap gap-10'>
    {outline.map((courses, idx) => {
        const {title, intro, des_one, des_two, des_three, des_four, des_five, des_seven, des_eight,des_nine, des_ten, des_eleven, des_six} = courses
        return (
            <div className='bg-[#e9f5e8] rounded-xl course-one-wrapper w-[48%] sm:w-full sm:p-5 p-10' key={title}>
<h2 className='text-[#262626] font-bold text-6xl float-right'>0{idx + 1}</h2>
<h2 className='text-[#333333] font-semibold text-2xl my-10 sm:mt-16'>{intro}</h2>
<div>
    <div className='course-one p-5 rounded-lg mb-3'>
        <h2 className='text-[#333333] text-lg font-medium'>{des_one}</h2>
       
    </div>
   {des_two != "" &&  <div className='course-one p-5 rounded-lg mb-3'>
        <h2 className='text-[#333333] text-lg font-medium'>{des_two}</h2>
    
    </div>}
    {des_three != "" &&  <div className='course-one p-5 rounded-lg mb-3'>
        <h2 className='text-[#333333] text-lg font-medium'>{des_three}</h2>
    
    </div>}
    {des_four != "" &&  <div className='course-one p-5 rounded-lg mb-3'>
        <h2 className='text-[#333333] text-lg font-medium'>{des_four}</h2>
        
    </div>}
    {des_five != "" &&  <div className='course-one p-5 rounded-lg mb-3'>
        <h2 className='text-[#333333] text-lg font-medium'>{des_five}</h2>
       
    </div>}
    {des_six != "" &&  <div className='course-one p-5 rounded-lg mb-3'>
        <h2 className='text-[#333333] text-lg font-medium'>{des_six}</h2>
   
    </div>}
    {des_seven != "" &&  <div className='course-one p-5 rounded-lg mb-3'>
        <h2 className='text-[#333333] text-lg font-medium'>{des_seven}</h2>
    
    </div>}
    {des_eight != "" &&  <div className='course-one p-5 rounded-lg mb-3'>
        <h2 className='text-[#333333] text-lg font-medium'>{des_eight}</h2>
      
    </div>}
    {des_nine != "" &&  <div className='course-one p-5 rounded-lg mb-3'>
        <h2 className='text-[#333333] text-lg font-medium'>{des_nine}</h2>

    </div>}
    {des_ten != "" &&  <div className='course-one p-5 rounded-lg mb-3'>
        <h2 className='text-[#333333] text-lg font-medium'>{des_ten}</h2>
   
    </div>}
    {des_eleven != "" &&  <div className='course-one p-5 rounded-lg mb-3'>
        <h2 className='text-[#333333] text-lg font-medium'>{des_eleven}</h2>
   
    </div>}

</div>
            </div>
        )
    })}
</section>
    </div>
  )
}

export default CourseCurriculum