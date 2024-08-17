import React, { useState } from 'react'
import { LuCheck } from "react-icons/lu";
import { HiOutlineXMark } from "react-icons/hi2";

const Pricing = () => {
  const [selected, setSelected] = useState("monthly")
  return (
    <div className='w-[90%] hidden mx-auto my-28'>
        <h2 className='text-[#262626] font-semibold text-3xl'>OUR PRICING</h2>
      <div className='flex sm:gap-3 sm:flex-col justify-between mt-6'>
        <p className='w-[70%] sm:w-full font-normal text-[#59595A]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        <div className='bg-white p-3 rounded-md sm:flex sm:w-full'>
        <button className={selected === 'monthly' ? 'h-[50px] sm:w-full text-white  bg-[#01D300] px-5 rounded-lg ' : 'h-[50px] sm:w-full  bg-[#fff] px-5 rounded-lg text-[#262626]'} onClick={() => setSelected("monthly")}>Monthly</button>
        <button className={selected === 'yearly' ? 'h-[50px] sm:w-full text-white  bg-[#01D300] px-5 rounded-lg ' : 'h-[50px] sm:w-full bg-[#fff] px-5 rounded-lg text-[#262626]'} onClick={() => setSelected("yearly")}>Yearly</button>
        </div>
      </div>
     {selected === 'monthly' ? ( <section className='bg-white sm:bg-none flex sm:flex-col sm:p-0 p-10 gap-10 mt-14'>
<div className='w-full bg-[#FCFCFD] pt-10' style={{border: '1px solid #F1F1F3'}}>
  <div className='bg-[#FFC480] -full text-center font-medium text-2xl rounded-md mb-3 mx-10 py-3'>Free Plan</div>
  <div>
    <h2 className='text-center mt-10'>
      <span className='text-[#262626] font-semibold text-6xl'>$0</span>
      <span> /month</span>
    </h2>
    <div className='mt-10 rounded-md sm:mx-4 sm:px-4 mx-10 bg-white px-10 pt-10' style={{border: '1px solid #F1F1F3'}}>
      <h2 className='mb-5 text-center'>Available Features</h2>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Access to selected free courses.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Limited course materials and resources.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Basic community support.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>No certification upon completion.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Ad-supported platform.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#F1F1F3] rounded-md'>
        <HiOutlineXMark />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Access to exclusive Pro Plan community forums.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#F1F1F3] rounded-md'>
        <HiOutlineXMark />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Early access to new courses and updates.</span>
      </div>
    </div>
    <div className='bg-[#01D300] sm:mx-4 text-center text-white font-medium text-2xl mx-10 rounded-md mb-3 py-3'>Get Started</div>
  </div>
</div>
<div className='w-full bg-[#FCFCFD] pt-10' style={{border: '1px solid #F1F1F3'}}>
  <div className='bg-[#FFC480] -full text-center font-medium text-2xl rounded-md mb-3 mx-10 py-3'>Pro Plan</div>
  <div>
    <h2 className='text-center mt-10'>
      <span className='text-[#262626] font-semibold text-6xl'>$79</span>
      <span> /month</span>
    </h2>
    <div className='mt-10 rounded-md sm:mx-4 sm:px-4 mx-10 bg-white px-10 pt-10' style={{border: '1px solid #F1F1F3'}}>
      <h2 className='mb-5 text-center'>Available Features</h2>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Access to selected free courses.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Limited course materials and resources.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Basic community support.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>No certification upon completion.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Ad-supported platform.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#F1F1F3] rounded-md'>
        <HiOutlineXMark />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Access to exclusive Pro Plan community forums.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#F1F1F3] rounded-md'>
        <HiOutlineXMark />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Early access to new courses and updates.</span>
      </div>
    </div>
    <div className='bg-[#01D300] sm:mx-4 text-center text-white font-medium text-2xl mx-10 rounded-md mb-3 py-3'>Get Started</div>
  </div>
</div>
      </section>) : ( <section className='bg-white sm:bg-none flex sm:flex-col sm:p-0 p-10 gap-10 mt-14'>
<div className='w-full bg-[#FCFCFD] pt-10' style={{border: '1px solid #F1F1F3'}}>
  <div className='bg-[#FFC480] -full text-center font-medium text-2xl rounded-md mb-3 sm:mx-4 mx-10 py-3'>Free Plan</div>
  <div>
    <h2 className='text-center mt-10'>
      <span className='text-[#262626] font-semibold text-6xl'>$0</span>
      <span> /year</span>
    </h2>
    <div className='mt-10 rounded-md sm:mx-4 sm:px-4 mx-10 bg-white px-10 pt-10' style={{border: '1px solid #F1F1F3'}}>
      <h2 className='mb-5 text-center'>Available Features</h2>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Access to selected free courses.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Limited course materials and resources.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Basic community support.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>No certification upon completion.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Ad-supported platform.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#F1F1F3] rounded-md'>
        <HiOutlineXMark />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Access to exclusive Pro Plan community forums.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#F1F1F3] rounded-md'>
        <HiOutlineXMark />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Early access to new courses and updates.</span>
      </div>
    </div>
    <div className='bg-[#01D300] text-center sm:mx-4 text-white font-medium text-2xl mx-10 rounded-md mb-3 py-3'>Get Started</div>
  </div>
</div>
<div className='w-full bg-[#FCFCFD] pt-10' style={{border: '1px solid #F1F1F3'}}>
  <div className='bg-[#FFC480] -full text-center font-medium text-2xl rounded-md mb-3 mx-10 py-3'>Pro Plan</div>
  <div>
    <h2 className='text-center mt-10'>
      <span className='text-[#262626] font-semibold text-6xl'>$799</span>
      <span> /year</span>
    </h2>
    <div className='mt-10 rounded-md sm:mx-4 sm:px-4 mx-10 bg-white px-10 pt-10' style={{border: '1px solid #F1F1F3'}}>
      <h2 className='mb-5 text-center'>Available Features</h2>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Access to selected free courses.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Limited course materials and resources.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Basic community support.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>No certification upon completion.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
        <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Ad-supported platform.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
       <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Access to exclusive Pro Plan community forums.</span>
      </div>
      <div className='flex gap-3 py-4 pl-4 rounded-md mb-5' style={{border: '1px solid #F1F1F3'}}>
        <span className='w-[32px] h-[32px] flex justify-center items-center bg-[#FFF4E5] rounded-md'>
       <LuCheck />
          </span> <span className='my-auto font-normal text-[#4C4C4D]'>Early access to new courses and updates.</span>
      </div>
    </div>
    <div className='bg-[#01D300] sm:mx-4 text-center text-white font-medium text-2xl mx-10 rounded-md mb-3 py-3'>Get Started</div>
  </div>
</div>
      </section>)}
    </div>
  )
}

export default Pricing