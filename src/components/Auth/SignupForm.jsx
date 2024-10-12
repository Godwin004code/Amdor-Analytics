import React from 'react'
import { Link } from 'react-router-dom'

const SignupForm = () => {
  return (
    <form className='bg-white rounded-xl w-fit sm:w-[100%] sm:mx-auto sm:mr-0 my-auto h-ft mr-28 sm:p-5 p-10'>
<h2 className='text-center text-[rgba(38, 38, 38, 1)] text-5xl font-semibold'>Sign Up</h2>
<p className='text-center font-normal mb-8 text-lg text-[rgba(76, 76, 77, 1)] mt-2'>Create an account to unlock exclusive features.</p>
<div className='mb-4'>
    <label className='text-[rgba(38, 38, 38, 1)] font-medium text-lg' htmlFor="fname">Full Name</label>
    <input placeholder='Enter your name' className='h-[55px] pl-3 rounded-xl placeholder:text-[rgba(101, 101, 103, 1)] block mt-2 w-full bg-[#fcfcfd]' style={{border: '1px solid rgba(241, 241, 243, 1)'}} type="text" name='fname' />
</div>
<div className='mb-4'>
    <label className='text-[rgba(38, 38, 38, 1)] font-medium text-lg' htmlFor="email">Email</label>
    <input placeholder='Enter your email' className='h-[55px] pl-3 rounded-xl placeholder:text-[rgba(101, 101, 103, 1)] block mt-2 w-full bg-[#fcfcfd]' style={{border: '1px solid rgba(241, 241, 243, 1)'}} type="email" name='email' />
</div>
<div className='mb-4'>
    <label className='text-[rgba(38, 38, 38, 1)] font-medium text-lg' htmlFor="pwd">Password</label>
    <input placeholder='Enter your password' className='h-[55px] pl-3 rounded-xl placeholder:text-[rgba(101, 101, 103, 1)] block mt-2 w-full bg-[#fcfcfd]' style={{border: '1px solid rgba(241, 241, 243, 1)'}} type="password" name='pwd' />
</div>
<div className='mb-4'>
    <input type="checkbox" name="terms" id="terms" />
    <label htmlFor='terms' className='text-[#59595A] text-lg ml-2'>I agree with <Link className='underline'>Terms of use</Link> and <Link className='underline'>Privacy Policy</Link></label>
</div>
<button className='h-[63px] bg-[#FF9500] w-full rounded-xl text-white'>Sign up</button>
<div className='flex gap-5 my-5'>
    <div className='bg-[#E4E4E7] my-auto h-[1px] w-full' />
    <span className='my-auto'>OR</span>
    <div className='bg-[#E4E4E7] my-auto h-[1px] w-full' />
</div>
<button className='h-[63px] bg-[#F1F1F3] w-full flex justify-center items-center gap-5 rounded-xl text-[#262626]'>
   <span className='my-auto'>
   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_229_484)">
<path d="M29.7076 15.3456C29.7076 14.3259 29.6249 13.3007 29.4485 12.2976H15.3V18.0738H23.4022C23.066 19.9368 21.9857 21.5848 20.4039 22.632V26.3799H25.2376C28.0761 23.7674 29.7076 19.9092 29.7076 15.3456Z" fill="#4285F4"/>
<path d="M15.3 30.001C19.3456 30.001 22.7573 28.6727 25.2431 26.3799L20.4093 22.6319C19.0645 23.5469 17.3283 24.065 15.3055 24.065C11.3922 24.065 8.07421 21.4249 6.88369 17.8754H1.89563V21.739C4.44202 26.8043 9.6285 30.001 15.3 30.001Z" fill="#34A853"/>
<path d="M6.87822 17.8753C6.24989 16.0124 6.24989 13.9951 6.87822 12.1322V8.26849H1.89568C-0.231827 12.507 -0.231827 17.5005 1.89568 21.739L6.87822 17.8753Z" fill="#FBBC04"/>
<path d="M15.3 5.93708C17.4385 5.90401 19.5054 6.70871 21.0542 8.18583L25.3367 3.90327C22.625 1.35688 19.0259 -0.0430825 15.3 0.00101083C9.6285 0.00101083 4.44202 3.19778 1.89563 8.26851L6.87818 12.1322C8.06318 8.57716 11.3867 5.93708 15.3 5.93708Z" fill="#EA4335"/>
</g>
<defs>
<clipPath id="clip0_229_484">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
   </span>
Sign Up with Google</button>
<div className='w-full flex justify-center items-center mt-10'>
    <span className='text-[#262626] text-lg text-center'>Already have an account? <span className='underline font-medium'>
        <Link to="/signin">Login</Link>
        </span></span>
</div>
    </form>
  )
}

export default SignupForm