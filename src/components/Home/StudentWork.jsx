import React from 'react'
import Logo1 from "../../assets/Logo.png"
import Logo2 from "../../assets/Logo-2.png"
import Logo3 from "../../assets/Logo-3.png"
import Logo4 from "../../assets/Logo-4.png"
import Logo5 from "../../assets/Logo-5.png"


const StudentWork = () => {
  return (
    <div className='w-full mt-28'>
        <h2 className='font-semibold text-3xl text-center'>Where our students <span className='text-[#01D300]'>work</span></h2>
        <section className='flex sm:flex-wrap sm:gap-10 justify-between w-[90%] mx-auto mt-10'>
          <img src={Logo1} alt="company one" />
          <img src={Logo2} alt="company one" />
          <img src={Logo3} alt="company one" />
          <img src={Logo4} alt="company one" />
          <img src={Logo5} alt="company one" />
          <img src={Logo5} alt="company one" />
        </section>
    </div>
  )
}

export default StudentWork