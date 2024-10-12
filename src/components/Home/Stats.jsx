import React from 'react'
import Counter from "../Global/Counter"

const Stats = () => {
  return (
    <div className='w-full mt-28'>
         <h2 className='text-center hidden font-semibold text-4xl'>Our Statistics</h2>

        <section className='flex sm:flex-col w-[100%] mx-auto justify-between mt-10'>
            <div className='w-full text-center py-6 jg-border-right' >
                <h2 className='font-bold text-4xl text-[#262626] flex justify-center items-center'>  <Counter end={10} icon="K" /></h2>
                <p className='text-[#000000] font-medium text-lg mt-4'>Students Trained</p>
            </div>
            <div className='w-full text-center py-6 imole jg-border-right' >
                <h2 className='font-bold text-4xl text-[#262626]'><Counter end={98} icon={"%"} /></h2>
                <p className='text-[#000000] font-mzedium text-lg mt-4'>Student Satisfaction</p>
            </div>
            <div className='w-full text-center py-6 imole-x2 jg-border-right' >
                <h1 className='font-bold text-4xl text-[#262626]'><Counter end={80} icon={"%"} /></h1>
                <p className='text-[#000000] font-medium text-lg mt-4'>Hiring Rate</p>
            </div>
            <div className='w-full text-center py-6'>
                <h2 className='font-bold text-4xl text-[#262626]'><Counter end={300} icon={"+"} /></h2>
                <p className='text-[#000000] font-medium text-lg mt-4'>Projects Completed</p>
            </div>
        </section>
    </div>
  )
}

export default Stats