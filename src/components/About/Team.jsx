import React from 'react'
import img from "../../assets/WhatsApp_Image_2024-10-29_at_2.08.41_PM-removebg-preview.png"
import img1 from "../../assets/WhatsApp_Image_2024-10-23_at_1.23.45_PM-removebg-preview.png"
import img2 from "../../assets/WhatsApp Image 2024-11-01 at 13.08.57.jpeg"

const Team = () => {
  return (
    <div className='w-[90%] mx-auto  mt-36 sm:mt-[290px]'>
        <h2 className='text-[#3AA619] font-bold text-4xl '>Our Team</h2>
        <p className='text-[#6B7280] font-normal text-lg mt-3'> Meet the brain behind the amazing work </p>
        <section className='flex sm:flex-col mt-10 justify-between'>
        <div className='bg-white w-[22%] sm:w-full sm:mb-5 box-shadow p-3'>
                <img className='h-[380px] w-full rounded-md object-cover' src={img1} alt="Godwin Imoleayo" />
                <h2 className='text-[#3AA619] font-bold mt-3 text-2xl '>Chukwuka Chinyere</h2>
                <p className='text-[#6B7280] font-normal text-base'>Founder, Amdor Analytics</p>
               
            </div>
            <div className='bg-white w-[22%] sm:w-full sm:mb-5 box-shadow p-3'>
                <img className='h-[300px] w-full rounded-md object-cover ' src={img} alt="Godwin Imoleayo" />
                <h2 className='text-[#3AA619] font-bold mt-3 text-2xl '>Sandra Asagade</h2>
                <p className='text-[#6B7280] font-normal text-base'>Senior Data Associate 
                </p>
               
            </div>
            
            <div className='bg-white w-[22%] sm:w-full sm:mb-5 box-shadow p-3'>
                <img className='h-[300px] w-full rounded-md object-cover' src={img2} alt="Godwin Imoleayo" />
                <h2 className='text-[#3AA619] font-bold mt-3 text-2xl '>Alfred David</h2>
                <p className='text-[#6B7280] font-normal text-base'>Graphic designer</p>
               
            </div>
          
        </section>
    </div>
  )
}

export default Team