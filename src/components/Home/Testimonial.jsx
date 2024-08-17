import React from 'react'
import { MdStarRate } from "react-icons/md";
import img from "../../assets/2a1b8774ac452db1e2b7551ba9f4f9f2.png"

const Testimonial = () => {
  const testimony = [
    {
      name: "Sarah L",
      description: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      rating:5,
      avatar: img
    },
    {
      name: "Sarah L",
      description: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      rating:5,
      avatar: img
    },
    {
      name: "Sarah L",
      description: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
      rating:5,
      avatar: img
    },
    {
      name: "Sarah L",
      description: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
      rating:4,
      avatar: img
    },

  ]
  return (
    <div className='w-[90%] mx-auto mt-28'>
       <h2 className='text-[#01D300] font-semibold uppercase text-3xl'>OUR TESTIMONIALS</h2>
      <div className='flex justify-between mt-6'>
        <p className='w-[70%] sm:w-full font-normal text-[#59595A]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        <button className='h-[60px] hidden bg-[#fff] px-5 rounded-lg text-[#262626]'>View All</button>
      </div>
      <div className='flex justify-between flex-wrap mt-10'>
        {testimony.map((item, idx) => {
          const {name, description,rating, avatar} = item
          return (
            <div className='bg-white mb-8 w-[49%] sm:w-full rounded-xl p-8' key={idx} style={{border: '1px solid #F1F1F3'}}>
              <div className='flex  w-fit'>
                {
                  Array(rating).fill(0).map((item, idx) => {
                    return (
                      <MdStarRate />
                    )
                  })
                }
              </div>
          
              <p className='text-[#4C4C4D] font-normal mt-3 text-lg'>{description}</p>
            
          
              <div className='w-full mt-5 pt-10 pb-3 h-[50px] rounded-lg bg-[#FCFCFD] flex justify-between items-center'>
            <div className='flex gap-4'>
              <img src={avatar} className='w-[50px] h-[50px] rounded-lg' alt={description} /> <h2 className='my-auto'>{name}</h2>
            </div>
            <button className='h-[50px] bg-[#F7F7F8] px-5 rounded-lg text-[#262626]' style={{border: '1px solid #F1F1F3'}}>Read Full Story</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonial