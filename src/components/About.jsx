import React from 'react'
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className='text-white'>
            <div className='about h-[100vh] p-[1rem] md:flex md:justify-around items-center relative'>
                <motion.div
                    whileHover={{
                        scale: 1.1
                    }}
                    className="what xs:w-[400px] w-[300px] xs:h-[400px] h-[300px] xs:p-[4rem] p-[2rem] pt-[1rem] rounded-[50%]">
                    <h1 className='text-center xs:text-[50px] text-[35px]'>
                        What?
                    </h1>
                    <p className='xs:text-[17px] text-[15px]'>
                        War of Words (WoW) is the annual intercollegiate literary fest of Atrium and Debating Union of Rajalakshmi Engineering College. WoW consists of various exciting events. So, come on, express yourself and win exciting prizes!
                    </p>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.1
                    }}
                    className='where xs:w-[300px] xs:h-[300px] w-[250px] h-[250px] xs:m-[1rem] mt-[-4rem] p-[2rem] rounded-[50%]'>
                    <h1 className='xs:text-[50px] text-[35px] text-center'>
                        Where?
                    </h1>
                    <a target="_blank" rel='noreferrer noopener' href='https://goo.gl/maps/EtbvG1ph66t7BiCVA'>
                        <p>Rajalakshmi Engineering College, Rajalakshmi Nagar, Thandalam, Chennai - 602 105.</p>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.1
                    }}
                    className='when w-[200px] xs:m-[1rem] mt-[-4rem] h-[200px] p-[3rem] rounded-[50%]'>
                    <h1 className='text-[40px]'>
                        When?
                    </h1>
                    <p className=''>
                        Monday, 6th February, 2023
                    </p>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.1
                    }}
                    className='bus absolute w-[150px] xs:p-[1.5rem] mt-[-4rem] h-[150px] p-[2rem] rounded-[50%] right-2 bottom-2'>
                    <a target="_blank" rel='noreferrer noopener'
                        href="https://rectransport.com/">
                            <h1
                            className='xs:text-[17px] text-[15px]'>
                            Find <b>transportation details</b> here!
                        </h1></a>   
                </motion.div>

            </div>
        </div>
    )
}

export default About;