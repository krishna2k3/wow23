import React from 'react'
import { motion, useScroll } from "framer-motion";
import styles from '../style';
import "./Hero.css";
import { logos } from '../constants';


const Hero = () => {
  // const scrollProgress = useScroll();
  return (
    <div className={`h-[100vh] home my-block relative`}>
      <div className='my-centered'>
        <div className='logos p-[0px]'>
          <img className='atrium-logo md:w-[100px] xs:w-[60px] w-[40px] md:h-[100px] xs:h-[60px] h-[40px] inline-block' src={logos[0]} alt='Atrium logo' />
          <img className='rec-logo md:h-[100px] xs:h-[60px] h-[40px] inline-block mx-[20%]' src={logos[2]} alt='REC logo' />
          <img className='du-logo md:w-[100px] xs:w-[60px] md:h-[100px] xs:h-[60px] w-[40px] h-[40px] inline-block' src={logos[1]} alt='Debating Union logo' />
        </div>
        <div className='title-intro my-child md:text-[30px] sm:text-[20px] text-[15px] md:my-[30px] my-[100px]'>
          <p className='text-center'>REC'S Atrium and Debating Union Present</p>
        </div>
        <div className={`font-poppins monospace  xs:text-[40px] ss:text-[50px] sm:text-[50px] md:text-[100px] text-[25px] font-bold  md:p-[30px] xs:p-[20px] p-[10px] md:rounded-[50px] rounded-[30px]  title-text-parent my-child `}>
          <motion.div className={`${styles.flexCenter} title-text`}
            animate={{
              color: ['rgba(22,68,150,1)', 'transparent']
            }}
            transition={{
              duration: 2,
              times: [0, 1],
              delay: 2.25
            }}
          >
            <motion.img
              className='md:w-[200px] xs:w-[80px] w-[40px] xs:mr-[2rem] mr-[0.5rem]'
              src={logos[3]}
              animate={{
                x: [110, 0]
              }}
              transition={{
                duration: 2,
                times: [0, 0.5, 1]
              }}>

            </motion.img>
            <motion.div
              animate={{
                x: [110, 0]
              }}
              transition={{
                duration: 2,
                times: [0, 0.5, 1]
              }}
            >W</motion.div>
            <motion.p
              className='toggling-text'
              animate={{
                x: [-1500, -1500, 0, 0],
                // opacity: [0, 0, 0.1, 1]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 0.75, 1]
              }}>ar&nbsp;</motion.p>

            <motion.div
              animate={{
                x: [60, 0]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            >o</motion.div>
            <motion.div
              className='toggling-text'
              animate={{
                x: [-1500, -1500, 0],
                // opacity: [0, 0, 0.1, 1]
              }}
              transition={{
                duration: 2.25,
                ease: "easeInOut",
                times: [0, 0.5, 0.75, 1]
              }}>f&nbsp;</motion.div>
            <motion.div
              animate={{
                x: [40, 0]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            >W</motion.div>
            <motion.div
              className='toggling-text'
              animate={{
                x: [-1500, -1500, 0, 0],
                // opacity: [0, 0, 0.1, 1]
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                times: [0, 0.5, 0.75, 1]
              }}>ords&nbsp;</motion.div>
            <motion.div
              animate={{
                x: [-70, 0]
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}>'23</motion.div>
          </motion.div>
        </div>
        <div className='title-intro my-child md:text-[30px] sm:text-[20px] text-[15px] md:my-[30px] my-[100px]'>
          <p className='text-center'>February 06, 2023</p>
        </div>
      </div>
      <motion.div 
      whileHover={{
        scale: 1.1
      }}
      whileTap={{
        scale: 0.9
      }}
      className='absolute register-now md:bottom-2 p-[0.5rem] bg-black bg-opacity-50 bottom-10 mr-auto ml-auto right-0 left-0 w-[250px] rounded-[2rem]'>
        <a 
        className='md:text-[30px] text-[25px] font-bold text-white'
          target="_blank" rel='noreferrer noopener'
          href="https://linktr.ee/ATRIUM_REC"
        ><h1 className=''>Register Now!</h1></a>
      </motion.div>
    </div>
  )
}

export default Hero;