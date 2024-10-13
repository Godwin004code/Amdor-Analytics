import React from 'react'
import img from "../../assets/IMG_0056.jpg"

const Team = () => {
  return (
    <div className='w-[90%] mx-auto  mt-36 sm:mt-[290px]'>
        <h2 className='text-[#3AA619] font-bold text-4xl '>Our team</h2>
        <p className='text-[#6B7280] font-normal text-lg mt-3'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        <section className='flex sm:flex-col mt-10 justify-between'>
            <div className='bg-white w-[22%] sm:w-full sm:mb-5 box-shadow p-3'>
                <img className='h-[200px] w-full rounded-md object-cover' src={img} alt="Godwin Imoleayo" />
                <h2 className='text-[#3AA619] font-bold mt-3 text-2xl '>Godwin Imoleayo</h2>
                <p className='text-[#6B7280] font-normal text-base'>Senior Frontend-developer</p>
                <p className='text-[#6B7280] font-normal text-base mt-3'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <div className='bg-white w-[22%] sm:w-full sm:mb-5 box-shadow p-3'>
                <img className='h-[200px] w-full rounded-md object-cover' src={img} alt="Godwin Imoleayo" />
                <h2 className='text-[#3AA619] font-bold mt-3 text-2xl '>Godwin Imoleayo</h2>
                <p className='text-[#6B7280] font-normal text-base'>Senior Frontend-developer</p>
                <p className='text-[#6B7280] font-normal text-base mt-3'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <div className='bg-white w-[22%] sm:w-full sm:mb-5 box-shadow p-3'>
                <img className='h-[200px] w-full rounded-md object-cover' src={img} alt="Godwin Imoleayo" />
                <h2 className='text-[#3AA619] font-bold mt-3 text-2xl '>Godwin Imoleayo</h2>
                <p className='text-[#6B7280] font-normal text-base'>Senior Frontend-developer</p>
                <p className='text-[#6B7280] font-normal text-base mt-3'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <div className='bg-white w-[22%] sm:w-full sm:mb-5 box-shadow p-3'>
                <img className='h-[200px] w-full rounded-md object-cover' src={img} alt="Godwin Imoleayo" />
                <h2 className='text-[#3AA619] font-bold mt-3 text-2xl '>Godwin Imoleayo</h2>
                <p className='text-[#6B7280] font-normal text-base'>Senior Frontend-developer</p>
                <p className='text-[#6B7280] font-normal text-base mt-3'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
        </section>
    </div>
  )
}

export default Team