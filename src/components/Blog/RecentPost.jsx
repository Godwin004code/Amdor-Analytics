import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const RecentPost = ({posts}) => {
    const post = posts[0]
  return (
    <div className='w-[90%] mx-auto mb-10 mt-10'>
       <h2 className='text-[#3AA619] my-auto  font-semibold text-3xl mb-3'>Recent blog post</h2>
   <Link to={`/blog/${post.title}`} className='w-full'>
   <div className='flex w-full sm:flex-col'>
        <div className='w-[45%] sm:w-full'>
          <img className='h-[346px] w-full object-cover' src={post.img} alt="post.title" />
        </div>
        <div className='ml-5 sm:ml-0 sm:w-full'>
        <div className='flex mt-5'>
                            <span className='text-[#3AA619] text-sm font-semibold'>{post.author}</span>
                            <div className='w-[5px] my-auto mx-2 h-[5px] rounded-full bg-[#3AA619]'/>
                            <span className='text-[#3AA619] text-sm font-semibold'>{post.createdDate}</span>
                        </div>
                        <div className='flex justify-between'>
                            <h2 className='text-[#1A1A1A] text-2xl font-semibold my-3'>{post.title}</h2>
                            <MdArrowOutward className='my-auto' color='#1A1A1A' size={24} />
                        </div>
                        <p className='text-[#667085] font-normal text-base'>{post.snapshot}</p>
        </div>
    </div>
   </Link>
    </div>
  )
}

export default RecentPost