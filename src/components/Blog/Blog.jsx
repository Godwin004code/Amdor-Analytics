import React from 'react'
import Footer from '../Global/Footer'
import Nav from '../Global/Nav'
import RecentPost from './RecentPost'
import AllPosts from './AllPosts'
import posts from './posts'

const Blog = () => {
  return (
    <>
    <Nav />
    <RecentPost posts={posts} />
    <AllPosts posts={posts} />
    <Footer />
    </>
  )
}

export default Blog