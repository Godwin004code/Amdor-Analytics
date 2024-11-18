import React, {useState, useRef} from 'react'
import { FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const ContactArea = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");
    const [option, setOption] = useState("")
    const [mes, setMes] = useState("");

    const form = useRef()

    const emailHandler = (e) => {
        setEmail(e.target.value);
      };
      const mesHandler = (e) => {
        setMes(e.target.value);
      };
      const fnameHandler = (e) => {
        setFname(e.target.value);
      };
      const lnameHandler = (e) => {
        setLname(e.target.value);
      };
      const optionHandler = (e) => {
        setOption(e.target.value);
      };
      
      const numHandler = (e) => {
        setNum(e.target.value);
      };

      const submitHandler = (e) => {
        e.preventDefault();
    
        if (email === "" || mes === "") {
          Swal.fire({
            title: "Fields must not be empty",
            icon: "warning",
          });
    
          return;
        } else {
          emailjs
            .sendForm(
              "service_e50bxtu",
              "template_p53gyjd",
              form.current,
              "xPfbN1VYqWgboVs7v"
            )
            .then(
              (result) => {
                console.log(result);
                Swal.fire({
                  title: "We have received your message, Thank You! We will get back to you as soon as possible.",
                  icon: "success",
                });
              },
              (error) => {
                console.log(error.text);
              }
            );
          setEmail("");
          setMes("");
          setFname("");
          setLname("")
          setOption("")
          setNum("")
        }
      };
    return (

        <div className='flex sm:flex-col w-[90%] mt-[-350px] sm:mt-20 mx-auto '>
            <section className='bg-[#3AA6191A] sm:w-full w-[60%] rounded-tl-xl sm:rounded-none  sm:rounded-bl-0 rounded-bl-xl  sm:p-2 sm:py-5  p-20'>
                <form ref={form} className='flex gap-10 sm:gap-2 w-full mb-7'>
                    <div className='flex w-full flex-col gap-2'>
                        <label htmlFor="fname" className='text-[#262626] font-medium text-lg'>First Name</label>
                        <input type="text"  value={fname}
                onChange={fnameHandler} className='block pl-4 bg-[#FCFCFD] h-[50px] w-full focus:outline-none rounded-md' placeholder='Enter First Name' id='fname' name='fname' />
                    </div>
                    <div className='flex w-full flex-col gap-2'>
                        <label htmlFor="lname" className='text-[#262626] font-medium text-lg'>Last Name</label>
                        <input type="text" value={lname}
                onChange={lnameHandler} className='block pl-4 bg-[#FCFCFD] h-[50px] w-full focus:outline-none rounded-md' placeholder='Enter Last Name' id='lname' name='lname' />
                    </div>
                </form>
                <div className='flex gap-10 sm:gap-2 w-full mb-7'>
                    <div className='flex w-full flex-col gap-2'>
                        <label htmlFor="email" className='text-[#262626] font-medium text-lg'>Email</label>
                        <input type="email" value={email}
                onChange={emailHandler} className='block pl-4 bg-[#FCFCFD] h-[50px] focus:outline-none w-full rounded-md' placeholder='Enter your Email' id='email' name='email' />
                    </div>
                    <div className='flex w-full flex-col gap-2'>
                        <label htmlFor="phone" className='text-[#262626] font-medium text-lg'>Phone</label>
                        <input type="number" value={num}
                onChange={numHandler} className='block px-4 bg-[#FCFCFD] h-[50px] w-full focus:outline-none rounded-md' placeholder='Enter your Phone Number' id='Phone' name='phone' />
                    </div>
                </div>
                <div className='flex gap-10 sm:gap-2 w-full mb-7'>
                    <div className='flex w-full flex-col gap-2'>
                        <label htmlFor="sub" className='text-[#262626] font-medium text-lg'>Subject</label>
                        <input type="text" value={option}
                onChange={optionHandler} className='block pl-4 bg-[#FCFCFD] h-[50px] focus:outline-none w-full rounded-md' placeholder='Enter your subject' id='option' name='option' />
                    </div>
                    
                </div>
                <div className='flex gap-10 sm:gap-2 w-full mb-7'>
                    <div className='flex w-full flex-col gap-2'>
                        <label htmlFor="mes" className='text-[#262626] font-medium text-lg'>Message</label>
                        
                        <textarea value={mes}
                onChange={mesHandler} name='mes' placeholder='Enter your message'  className='block pt-4 pl-4 bg-[#FCFCFD] focus:outline-none w-full rounded-md'  rows={10}></textarea>
                    </div>
                    
                </div>
                <div className='flex justify-center w-full'>
                    <button onClick={submitHandler} className='bg-[#3AA619] text-white font-normal rounded-xl text-base h-[60px] px-4'>Send Your Message</button>
                </div>
            </section>
            <section className='bg-white  sm:rounded-tr-0 rounded-br-xl sm:rounded-none sm:p-2 p-20 sm:w-full w-[40%]'>
                <div className='bg-[#3AA6191A] h-[220px] flex flex-col justify-center items-center rounded-lg'>
                    <div className='bg-[#F7F7F8] w-[50px] h-[50px] flex justify-center items-center rounded-full'>
                        <FaEnvelope />
                    </div>
                    <h2 className='text-[#4C4C4D] font-normal text-lg mt-4'>amdoranalytics@gmail.com</h2>
                </div>
                <div className='bg-[#3AA6191A] my-14 sm:my-5 h-[220px] flex flex-col justify-center items-center rounded-lg'>
                    <div className='bg-[#F7F7F8] w-[50px] h-[50px] flex justify-center items-center rounded-full'>
                        <FaPhone />
                    </div>
                    <h2 className='text-[#4C4C4D] font-normal text-lg mt-4'>+2348114087403</h2>
                    <h2 className='text-[#4C4C4D] font-normal text-lg mt-2'>+2347031359782</h2>
                </div>
                <div className='bg-[#3AA6191A] h-[220px] flex flex-col justify-center items-center rounded-lg'>
                    <div className='bg-[#F7F7F8] w-[50px] h-[50px] flex justify-center items-center rounded-full'>
                    <Link to="https://x.com/AmdorAnalytics">
              <div className='bg-[#F7F7F8] w-[52px] sm:h-[40px] sm:w-[40px] rounded-lg flex justify-center items-center h-[52px]' style={{ border: '1px solid #F1F1F3' }}>
                <FaXTwitter size={24} />
              </div>
              </Link>
              <Link to="https://www.linkedin.com/company/amdor-analytics/">
             <div className='bg-[#F7F7F8] w-[52px] sm:h-[40px] sm:w-[40px] rounded-lg flex justify-center items-center h-[52px]' style={{ border: '1px solid #F1F1F3' }}>
                <FaLinkedin size={24} />
              </div>
             </Link>
                    </div>
                    <h2 className='text-[#4C4C4D] hidden font-normal text-lg mt-4'>amdor@gmail.com</h2>
                </div>
            </section>
        </div>
    )
}

export default ContactArea
