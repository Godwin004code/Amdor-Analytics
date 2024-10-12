import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const AllPosts = ({posts}) => {
  return (
    <div className='w-[90%]  mx-auto'>
        <h2 className='text-[#01D300] my-auto font-semibold text-3xl'>All Posts</h2>
        <section className='flex sm:flex-col sm:w-full justify-between flex-wrap mt-0'>
            {posts.map((item, idx) => {
                const {img, title, snapshot, author, createdDate} = item
                return (
                    <Link to={`/blog/${title}`} className='w-[32%] sm:w-full' >
                    <div key={idx}  className='mb-8 mt-5 transition-all  duration-200 ease-in-out   relative w-full rounded-xl p-8 pl-0 sm:p-4 sm:pl-0 sm:pr-0'>
                        <img className='w-full h-[240px] sm:h-[200px] object-cover' src={img} alt={title} />
                        <div className='flex mt-5'>
                            <span className='text-[#3AA619] text-sm font-semibold'>{author}</span>
                            <div className='w-[5px] my-auto mx-2 h-[5px] rounded-full bg-[#3AA619]'/>
                            <span className='text-[#3AA619] text-sm font-semibold'>{createdDate}</span>
                        </div>
                        <div className='flex justify-between'>
                            <h2 className='text-[#1A1A1A] text-2xl font-semibold my-3'>{title}</h2>
                            <MdArrowOutward className='my-auto' color='#1A1A1A' size={24} />
                        </div>
                        <p className='text-[#667085] font-normal text-base'>{snapshot}</p>
                    </div>
                    </Link>
                )
            })}
        </section>
    </div>
  )
}

export default AllPosts