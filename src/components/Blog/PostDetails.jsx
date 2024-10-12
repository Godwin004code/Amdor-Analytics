import React from 'react'
import posts from './posts'
import { useParams } from 'react-router-dom';
import Nav from '../Global/Nav';
import Footer from '../Global/Footer';

const PostDetails = () => {
  const { title } = useParams();
  const post = posts.find(post => post.title === (title));
  return (
    <div>
      <Nav />
      <div className='w-[90%] mx-auto'>
        <img src={post.img} className='w-full h-[450px] sm:h-[300px] object-cover' alt={post.title} />
        <div className='flex mt-5'>
          <span className='text-[#3AA619] text-sm font-semibold'>{post.author}</span>
          <div className='w-[5px] my-auto mx-2 h-[5px] rounded-full bg-[#3AA619]' />
          <span className='text-[#3AA619] text-sm font-semibold'>{post.createdDate}</span>
        </div>
        <div className='flex justify-between'>
          <h2 className='text-[#1A1A1A] text-2xl font-semibold my-3'>{post.title}</h2>
         
        </div>
        <p className='text-[#667085] font-normal text-base'>{post.content}</p>
      </div>
      <Footer />
    </div>
  )
}

export default PostDetails