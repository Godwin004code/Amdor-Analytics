import React, {useState} from 'react'
import courseBanner from "../../assets/2a1b8774ac452db1e2b7551ba9f4f9f2.png"
import { MdStarRate } from "react-icons/md";

const ExploreCourses = () => {
  const courses = [
    {
      title: "Data Analytics",
      description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      price: "N300,000",
      level: "N500,000",
      duration: "5 months",
      banner: courseBanner,
      rating:5
    },
    {
      title: "Business Analysis",
      description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      price: "N300,000",
      level: "N500,000",
      duration: "5 months",
      banner: courseBanner,
      rating:3
    },

    {
      title: "Data Science",
      description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      price: "N350,000",
      level: "N500,000",
      duration: "5 months",
      banner: courseBanner,
      rating:2
    },
    {
      title: "HR Analytics",
      description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      price: "N300,000",
      level: "N500,000",
      duration: "5 months",
      banner: courseBanner,
      rating:4
    },
    {
      title: "Data Engineering",
      description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      price: "N400,000",
      level: "N700,000",
      duration: "5 months",
      banner: courseBanner,
      rating:4
    },
    {
      title: "Financial Analytics",
      description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      price: "N300,000",
      level: "N500,000",
      duration: "5 months",
      banner: courseBanner,
      rating:4
    },
    {
      title: "Cyber Security",
      description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      price: "N500,000",
      level: "N1,000,000",
      duration: "6 months",
      banner: courseBanner,
      rating:4
    },

  ]
  const [showDes, setShowDes] = useState(null)

  const handleMouseEnter = () => {
    setShowDes(true)
  }

  const handleMouseLeave = () => {
    setShowDes(false)
  }
  console.log(window.location.pathname);
  
  return (
    <div className='w-[90%] mx-auto mt-28' style={{marginTop: window.location.pathname === '/learn' ? '20px' : '100px'}}>
      <h2 className='text-[#01D300] font-semibold text-3xl' style={{display: window.location.pathname === '/learn' ? 'none' : 'block'}}>EXPLORE OUR COURSES</h2>
      <div className='flex sm:flex-col sm:gap-3 justify-between mt-6' style={{display: window.location.pathname === '/learn' ? 'none' : 'block'}}>
        <p className='w-[70%] sm:w-full  font-normal text-[#59595A]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        <button className='h-[60px] bg-[#fff] px-5 rounded-lg text-[#262626]'>View All</button>
      </div>
      <div className='flex bg-white  justify-between flex-wrap mt-10' >
        {courses.slice(0,3).map((item, idx) => {
          const {title, description,price, level,duration,banner, rating} = item
          return (
            <div className='mb-8 transition-all  duration-200 ease-in-out  w-[32%] sm:w-full relative rounded-xl p-8 sm:p-4' key={idx}>
              {showDes === idx && (
                <div className={ `bg-white absolute h-full z-10  pointer-events-none transform transition-all  duration-[3000] ease-in-out p-5 rounded-lg flex flex-col justify-between
                ${showDes === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <h2>{description}</h2>
                <div className='w-full ml-auto mt-5 h-[50px] rounded-lg bg-[#01D300] flex justify-center items-center text-[#fff] font-medium'>
                          Get it Now
                              </div>
                              </div>
              )}
              <div className='w-full ' onMouseEnter={() => setShowDes(idx)} onMouseLeave={() => setShowDes(null)}>
              <img src={banner} className='w-full h-[300px] object-cover rounded-lg' alt={title} />
              <div className='flex mt-7 justify-between'>
              <div className='flex gap-5 '>
                <div className='w-fit p-2 rounded-lg text-sm' style={{border: '1px solid #F1F1F3'}}>
                  {duration}
                </div>
               
              </div>
              <div className='my-auto flex gap-3'>
                <h2 className='text-[#01d300]'>{price}</h2>
                <h2 className='text-[#262626] line-through'>{level}</h2>
              </div>
              </div>
              <div className='flex ml-auto w-fit'>
                {
                  Array(rating).fill(0).map((item, idx) => {
                    return (
                      <MdStarRate />
                    )
                  })
                }
              </div>
              <h2 className='text-[#333333] font-semibold text-2xl mt-2'>{title}</h2>
              {/* <p className='text-[#4C4C4D] font-normal mt-3 text-lg'>{description}</p> */}
              <div className='w-full ml-auto mt-5 h-[50px] rounded-lg bg-[#F7F7F8] flex justify-center items-center text-[#262626] font-medium'>
          Get it Now
              </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreCourses