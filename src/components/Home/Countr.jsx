"use client"

import { useState, useEffect, useRef } from 'react'

import { motion, useAnimation, useMotionValue } from 'framer-motion'
import Logo1 from "../../assets/amazon.webp"
import Logo2 from "../../assets/airtel.webp"
import Logo3 from "../../assets/dangote.webp"
import Logo4 from "../../assets/glo.webp"
import Logo5 from "../../assets/gsk.webp"
import Logo6 from "../../assets/mtn.webp"
import Logo7 from "../../assets/pg.webp"
import Logo8 from "../../assets/pwc.webp"
import Logo9 from "../../assets/tiktok.webp"
import Logo10 from "../../assets/uba.webp"
import Logo11 from "../../assets/WhatsApp Image 2024-10-31 at 10.49.02.jpeg"
import Logo12 from "../../assets/WhatsApp Image 2024-10-31 at 10.48.32.jpeg"
import Logo13 from "../../assets/vitaform.webp"
import Logo14 from "../../assets/western-union.webp"
import Logo15 from "../../assets/thrive.webp"
import Logo16 from "../../assets/prosa.webp"
import Logo17 from "../../assets/b.webp"

export default function Countr({ 
  images = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5, Logo6, Logo7, Logo8, Logo9, Logo10,  Logo12, Logo13, Logo14, Logo15, Logo16, Logo17
  ], 
  speed = 50 
}) {
  const [width, setWidth] = useState(0)
  const sliderRef = useRef(null)
  const xPos = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (sliderRef.current) {
      setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth)
    }
  }, [images])

  useEffect(() => {
    // Animation should only run after the component has mounted
    let isMounted = true;

    const animateSlider = async () => {
      if (!isMounted) return; // Skip animation if component is unmounted

      await controls.start({
        x: -width,
        transition: {
          duration: width / speed,
          ease: "linear",
        },
      });

      if (isMounted) {
        xPos.set(0); // Reset position
        animateSlider(); // Restart animation
      }
    };

    if (width > 0) {
      animateSlider();
    }

    return () => {
      isMounted = false; // Cleanup to prevent memory leaks or async calls
    };
  }, [width, speed, controls, xPos]);
  return (
    <div className="overflow-hidden w-full mt-28">
        <h2 className='font-semibold text-3xl mb-5 text-center'>Where our students <span className='text-[#01D300]'>work</span></h2>
      <motion.div
        ref={sliderRef}
        className="flex gap-10"
        style={{ x: xPos, width: 10, background: 'red' }}
        animate={controls}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="shrink-0">
            <img
              src={src}
              alt={`Sliding image ${index + 1}`}
             
              
              className="object-cover h-[48px]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}