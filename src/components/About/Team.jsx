import React from 'react'
import img from "../../assets/Screenshot 2024-10-29 at 14.10.26.png"
import img1 from "../../assets/IMG-20241017-WA0008(1).jpeg"
import img2 from "../../assets/IMG_5769~3.jpeg"

const Team = () => {
  return (
    <div className='w-[90%] mx-auto  mt-36 sm:mt-[290px]'>
        <h2 className='text-[#3AA619] font-bold text-4xl '>Our Team</h2>
        <p className='text-[#6B7280] font-normal text-lg mt-3'> Meet the brain behind the amazing work </p>
        <section className='flex sm:flex-col mt-10 justify-between'>
        <div className='bg-white w-[22%] sm:w-full sm:mb-5 box-shadow p-3'>
                <img className='h-[300px] w-full rounded-md object-cover' src={img1} alt="Godwin Imoleayo" />
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
            <div className='bg-white w-[22%] sm:w-full hidden sm:mb-5 box-shadow p-3'>
                <img className='h-[200px] w-full rounded-md object-cover' src={img} alt="Godwin Imoleayo" />
                <h2 className='text-[#3AA619] font-bold mt-3 text-2xl '>Godwin Imoleayo</h2>
                <p className='text-[#6B7280] font-normal text-base'>Senior Frontend-developer</p>
               
            </div>
        </section>
    </div>
  )
}

export default Team