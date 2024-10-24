import React, {useState} from 'react'
import { MdStarRate } from "react-icons/md";
import img from "../../assets/WhatsApp Image 2024-10-13 at 00.30.58.jpeg"
import img1 from "../../assets/WhatsApp Image 2024-10-13 at 00.37.18.jpeg"
import img2 from "../../assets/WhatsApp Image 2024-10-13 at 00.39.07.jpeg"
import img3 from "../../assets/WhatsApp Image 2024-10-13 at 00.42.49.jpeg"
import YTComponent from './YTComponent';
import photo1 from "../../assets/PHOTO-2024-10-08-19-06-42 2.jpg"
import photo2 from "../../assets/PHOTO-2024-10-08-19-06-42 3.jpg"
import photo3 from "../../assets/PHOTO-2024-10-08-19-06-42 4.jpg"
import photo4 from "../../assets/PHOTO-2024-10-08-19-06-42.jpg"
import { FaPlay } from 'react-icons/fa';
import { CiCircleRemove } from "react-icons/ci";

 
const Testimonial = () => {
  const testimony = [
    {
      name: "Sodiq",
      description: "When I decided to advance my skills in data analytics, I turned to AMDOR ANALYTICS, and it was one of the best decisions I've made for my career. The comprehensive curriculum, hands-on training, and expert guidance have significantly enhanced my skills in data analytics. The learning environment is supportive and the instructors are deeply knowledgeable. Their program doesn't just teach you the basics; it immerses you in the tools and techniques that matter most in the industry. From mastering Excel and Power BI to becoming proficient in SQL, the hands-on approach made learning intuitive and practical. I am well-prepared to apply the concepts and tools I've learned, such as Excel, Power BI, and SQL, in real-world scenarios. What sets AMDOR ANALYTICS apart is the personal touch—they genuinely care about your growth and ensure you leave with confidence in your abilities. I now feel empowered to tackle complex data challenges and drive meaningful insights, all thanks to AMDOR ANALYTICS. Amdor Analytics has exceeded my expectations, and I would highly recommend their programs to anyone looking to advance their career in data analytics.",
      rating:5,
      avatar: img
    },
    {
      name: "Oluwatobi",
      description: "I had the pleasure of taking up some data trainings with Amdor Analytics, and I can confidently say they exceeded all expectations. As someone who was transitioning into the data world, they gave me a soft landing. The team demonstrated a deep understanding of the tools and provided tailored training to fit specific needs, regardless of the level of the trainee. The level of professionalism and expertise at Amdor Analytics is truly outstanding. They are always responsive, and consistently delivered high-quality and affordable trainings. What impressed me the most was their round the clock commitment to our success, they went above and beyond to ensure that we were not just impacted with knowledge but are able to apply that knowledge in our professional journey. If you're looking for a training institute that combines technical expertise with a genuine commitment to client satisfaction, Amdor Analytics is the way to go. I highly recommend them for anyone looking to leverage data for strategic advantage.",
      rating:5,
      avatar: img1
    },
    {
      name: "Bolaji",
      description: "I recently completed the data analysis program with Amdor Analytics, and the experience has been transformative. The program provided me with practical, hands-on training in key tools such as Excel, Power BI, and SQL, all of which have greatly enhanced my data analysis capabilities. Excel helped me develop a deeper understanding of data manipulation and advanced functions, enabling me to organize and analyze large datasets more efficiently. Power BI introduced me to dynamic data visualization, allowing me to create insightful, interactive dashboards that have become invaluable for reporting and presenting data-driven insights. SQL, on the other hand, has empowered me to retrieve, query, and manage data from complex databases, streamlining the data extraction process and improving my analytical workflow. The instructors were incredibly supportive, offering clear guidance and ensuring that I could apply what I learned to real-world scenarios. The combination of these powerful tools, along with the hands-on projects, has equipped me with the skills and confidence to tackle any data analysis challenge. I highly recommend Amdor Analytics to anyone looking to sharpen their skills in data analysis. This program has been instrumental in advancing my professional development.",
      rating:5,
      avatar: img2
    },
    {
      name: "Femi Yusuf",
      description: "Choosing AMDOR ANALYTICS to advance my data analytics skills was one of the best decisions for my career. Their comprehensive curriculum, hands-on training, and expert guidance have significantly enhanced my abilities. The program goes beyond the basics, immersing you in the industry-relevant tools like Excel, Power BI, and SQL. The instructors are not only knowledgeable but genuinely invested in your growth, ensuring you're confident in applying what you’ve learned to real-world scenarios. AMDOR ANALYTICS exceeded my expectations, and I highly recommend their programs to anyone looking to elevate their data analytics career.",
      rating:4,
      avatar: img3
    },

  ]
  const [showPopup, setShowPopup] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };
  const [expanded, setExpanded] = useState({}); // Store expanded state for each testimonial

  // Function to toggle see more
  const toggleSeeMore = (idx) => {
    setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const ytLink1 = "https://youtu.be/3VowbyaJ4EI?si=sKm-nHehEyRgLwld"
  const ytLink2 = "https://youtu.be/f7B_srP1hIg?si=5w6vpKLB_cFkAJhb"
  const ytLink3 = "https://youtu.be/sD2VFVqv8H0?si=IabErIzq_pggHR1e"
  const ytLink4 = "https://youtu.be/zjSdEiURniw?si=QI80IuNbzleEv94O"

  const [active, setActive] = useState("")

  const open1 = () => {
    setActive(ytLink1)
    console.log(active);
    
    openPopup()
  }

  return (
    <>
     {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            {/* Close button */}
            <button onClick={closePopup} className="close-popup-btn mb-10">
              <CiCircleRemove size={20} />
            </button>

            {/* YouTube Video */}
            {/* <video width="600" controls>
        <source src={"https://youtu.be/3VowbyaJ4EI?si=sKm-nHehEyRgLwld"} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
            <iframe
              width="560"
              height="315"
              src={active}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
   
    <div className='w-[90%] mx-auto mt-28'>
       <h2 className='text-[#3AA619] font-semibold uppercase text-3xl'>OUR TESTIMONIALS</h2>
      <div className='flex justify-between mt-6'>
        <p className='w-[70%] sm:w-full font-normal hidden text-[#59595A]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        <button className='h-[60px] hidden bg-[#fff] px-5 rounded-lg text-[#262626]'>View All</button>
      </div>
      <section className='flex gap-10 justify-between sm:gap-10 sm:flex-col mt-10'>
       <div className='w-[25%] sm:w-full relative'>
        <img src={img} className='h-[300px] object-cover w-full' alt="" />
        <div className='absolute top-0 h-full flex justify-center items-center left-0 right-0 w-full bg-[#000000c3]'>
<div onClick={open1} className='w-[60px] h-[60px] cursor-pointer flex justify-center items-center rounded-full bg-white'>
  <FaPlay  color='#3AA619' />
</div>
        </div>
       </div>

       <div className='w-[25%] sm:w-full relative'>
        <img src={img1} className='h-[300px] object-cover w-full' alt="" />
        <div className='absolute top-0 h-full flex justify-center items-center left-0 right-0 w-full bg-[#000000c3]'>
<div onClick={open1} className='w-[60px] h-[60px] cursor-pointer flex justify-center items-center rounded-full bg-white'>
  <FaPlay color='#3AA619' />
</div>
        </div>
       </div>
       <div className='w-[25%] sm:w-full relative'>
        <img src={img2} className='h-[300px] object-cover w-full' alt="" />
        <div className='absolute top-0 h-full flex justify-center items-center left-0 right-0 w-full bg-[#000000c3]'>
<div onClick={open1} className='w-[60px] h-[60px] cursor-pointer flex justify-center items-center rounded-full bg-white'>
  <FaPlay color='#3AA619' />
</div>
        </div>
       </div>
       <div className='w-[25%] sm:w-full relative'>
        <img src={img3} className='h-[300px] object-cover w-full' alt="" />
        <div className='absolute top-0 h-full flex justify-center items-center left-0 right-0 w-full bg-[#000000c3]'>
<div onClick={open1} className='w-[60px] h-[60px] cursor-pointer flex justify-center items-center rounded-full bg-white'>
  <FaPlay color='#3AA619' />
</div>
        </div>
       </div>
      </section>
      <div className='flex justify-between w-full  mt-10 slider-track2 gap-10'>
        {testimony.map((item, idx) => {
          const {name, description,rating, avatar} = item
          const isExpanded = expanded[idx]; // Check if current testimonial is expanded
          const shortDescription = description.slice(0, 200); // Limit description length
          return (
            <div className='bg-white mb-8 w-[500px] sm:w-full rounded-xl p-8' key={idx} style={{border: '1px solid #F1F1F3'}}>
              <div className='flex  w-fit'>
                {
                  Array(rating).fill(0).map((item, idx) => {
                    return (
                      <MdStarRate />
                    )
                  })
                }
              </div>
          
            
            <p className='text-[#4C4C4D] font-normal mt-3 text-lg'>
              {isExpanded ? description : `${shortDescription}...`} {description.length > 200 && (
              <button
                onClick={() => toggleSeeMore(idx)}
                className='text-[#3AA619] mt-2'
              >
                {isExpanded ? 'See Less' : 'See More'}
              </button>
            )}
            </p>

            
          
              <div className='w-full mt-5 pt-10 pb-3 h-[50px] rounded-lg bg-[#FCFCFD] flex justify-between items-center'>
            <div className='flex gap-4'>
              <img src={avatar} className='w-[80px] h-[80px] object-cover rounded-lg' alt={description} /> <h2 className='my-auto'>{name}</h2>
            </div>
            <button className='h-[50px] bg-[#F7F7F8] px-5 rounded-lg text-[#262626]' style={{border: '1px solid #F1F1F3'}}>Read Full Story</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default Testimonial


