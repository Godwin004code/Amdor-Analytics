import React from 'react'
import Accordion from './Accordion'

const FAQ = () => {
  return (
    <section className='w-[90%] mx-auto flex sm:flex-col mt-28 p-16 sm:p-8 rounded-xl bg-white'>
        <div>
            <h2 className='text-[#262626] text-4xl font-semibold'>Frequently</h2>
            <h2 className='text-[#262626] text-4xl font-semibold'>Asked Questions</h2>
            <p className='text-[#333333] font-normal text-base mt-5'>Still you have any questions? Contact our Team via <span className='text-[#1E772C] font-medium text-lg'>support@amdoranalytics.com</span></p>

        </div>
        <Accordion />
    </section>
  )
}

export default FAQ