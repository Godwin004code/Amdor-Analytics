import React from 'react'
import Logo1 from "../../assets/Keystone-Bank-Limited-Logo-11.png"
import Logo2 from "../../assets/WhatsApp Image 2024-10-31 at 10.53.41.jpeg"
import Logo3 from "../../assets/WhatsApp Image 2024-10-31 at 10.53.16.jpeg"
import Logo4 from "../../assets/WhatsApp Image 2024-10-31 at 10.52.51.jpeg"
import Logo5 from "../../assets/WhatsApp Image 2024-10-31 at 10.52.23.jpeg"
import Logo6 from "../../assets/WhatsApp Image 2024-10-31 at 10.51.40.jpeg"
import Logo7 from "../../assets/WhatsApp Image 2024-10-31 at 10.51.14.jpeg"
import Logo8 from "../../assets/WhatsApp Image 2024-10-31 at 10.50.24.jpeg"
import Logo9 from "../../assets/WhatsApp Image 2024-10-31 at 10.49.51.jpeg"
import Logo10 from "../../assets/WhatsApp Image 2024-10-31 at 10.49.24.jpeg"
import Logo11 from "../../assets/WhatsApp Image 2024-10-31 at 10.49.02.jpeg"
import Logo12 from "../../assets/WhatsApp Image 2024-10-31 at 10.48.32.jpeg"


const StudentWork = () => {
  return (
    <div className='w-full mt-28'>
        <h2 className='font-semibold text-3xl text-center'>Where our students <span className='text-[#01D300]'>work</span></h2>
        <marquee behavior="" direction="">
        <section className='flex gap-5 sm:gap-10 justify-between w-[90%] mx-auto mt-10'>
          <img src={Logo1} className='' alt="company one" />
          <img src={Logo2} className='h-[200px] object-cover w-[200px]' alt="company one" />
          <img src={Logo3} className='h-[200px] object-cover w-[200px]' alt="company one" />
          <img src={Logo4} className='h-[200px] object-cover w-[200px]' alt="company one" />
          <img src={Logo5} className='h-[200px] object-cover w-[200px]' alt="company one" />
          <img src={Logo6} className='h-[200px] object-cover w-[200px]' alt="company one" />
          <img src={Logo7} className='h-[200px] object-cover w-[200px]' alt="company one" />
          <img src={Logo8} className='h-[200px] hidden object-cover w-[200px]' alt="company one" />
          <img src={Logo9} className='h-[200px] object-cover w-[200px]' alt="company one" />
          <img src={Logo10} className='h-[200px] object-cover w-[200px]' alt="company one" />
          <img src={Logo11} className='h-[200px] object-cover w-[200px]' alt="company one" />
          <img src={Logo12} className='h-[200px] object-cover w-[200px]' alt="company one" />
        </section>
        </marquee>
    </div>
  )
}

export default StudentWork