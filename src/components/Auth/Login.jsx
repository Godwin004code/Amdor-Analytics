import React from 'react'
import LoginForm from "./LoginForm"
import img from "../../assets/Photoam (1).png"

const Login = () => {
  return (
    <div className='w-full h-full' style={{backgroundColor: 'rgba(247, 247, 248, 1)'}}>
    <section className='h-[100vh] top-0 rounded-[999px] rounded-tl-none rounded-bl-none left-[-00px] sm:h-[100vh] sm:left-[00px] z-50 w-[50%] sm:w-full  flex-col bg-[#AAF0AA33]'>
<section className='w-full h-full   absolute'>

<div className='flex sm:p-2 sm:flex-col justify-center items-center my-auto  w-full h-full'>
<LoginForm />
<img src={img} className='h-[700px] sm:hidden' alt="Sign Up image" />
</div>
</section>
</section>
</div>
  )
}

export default Login