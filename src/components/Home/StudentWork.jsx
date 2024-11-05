import React from 'react'
import Logo1 from "../../assets/amazon.webp"
import Logo2 from "../../assets/airtel.webp"
import Logo3 from "../../assets/dangote.webp"
import Logo4 from "../../assets/glo.webp"
import Logo5 from "../../assets/gsk.webp"
import Logo6 from "../../assets/mtn.webp"
import Logo7 from "../../assets/pg.webp"
import Logo8 from "../../assets/pwc.webp"
import Logo9 from "../../assets/tiktok.webp"
import Logo10 from "../../assets/uba.webp"
import Logo11 from "../../assets/WhatsApp Image 2024-10-31 at 10.49.02.jpeg"
import Logo12 from "../../assets/WhatsApp Image 2024-10-31 at 10.48.32.jpeg"


const StudentWork = () => {
  return (
    <div className='w-full mt-28'>
        <h2 className='font-semibold text-3xl text-center'>Where our students <span className='text-[#01D300]'>work</span></h2>
        <marquee behavior="" direction="">
        <section className='flex gap-5 sm:gap-10 justify-between w-[90%] mx-auto mt-10'>
          <img src={Logo1} className='h-[48px] w-[98px]' alt="company one" />
          <img src={Logo2} className='h-[48px] w-[44px]' alt="company one" />
          <img src={Logo3} className='h-[48px] w-[71px]' alt="company one" />
          <img src={Logo4} className='h-[48px] w-[48px]' alt="company one" />
          <img src={Logo5} className='h-[48px] w-113px]' alt="company one" />
          <img src={Logo6} className='h-[48px] w-[63px]' alt="company one" />
          <img src={Logo7} className='h-[48px] w-[108px]' alt="company one" />
          <img src={Logo8} className='h-[48px] w-[62px]' alt="company one" />
          <img src={Logo9} className='h-[48px] w-[48px]' alt="company one" />
          <img src={Logo10} className='h-[48px] w-[48px]' alt="company one" />
          <img src={Logo11} className=' hidden' alt="company one" />
          <img src={Logo12} className='hidden h-[48px] w-[98px]' alt="company one" />
        </section>
        </marquee>
    </div>
  )
}

export default StudentWork