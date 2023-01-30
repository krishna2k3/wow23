import React from 'react'
import { animate, motion } from "framer-motion";
import "./Footer.css";
import { logos } from '../constants';

const Footer = () => {
    return (
        <div className='Footer h-[100vh] w-[100vw]'>
            <div className='sm:flex p-[1rem] sm:justify-center sm:items-center h-[100vh]'>
                <div className=''>
                    <div className='contact-us rounded-[3rem] m-[1rem]  max-w-[350px]'>
                        <h1 className='xs:text-[50px] text-[30px] font-bold  rounded-[2rem] rounded-b-none  px-[2rem] md:py-[0] py-[1rem] text-white'>Contact Us 🤙</h1>
                        <div className='px-[2rem] py-[1rem] bg-white rounded-[3rem]'>
                            <div>
                                <h2 className='font-bold xs:text-[20px] p-[0.5rem]'>Charanya: 75500 35669</h2>
                                <p className='px-[0.5rem]'>President, REC Atrium</p>
                                <h2 className='font-bold xs:text-[20px] p-[0.5rem]'>Rhea William: 90032 40041</h2>
                                <p className='px-[0.5rem]'>President, REC Debating Union</p>
                            </div>
                            <div>
                                <h2 className='font-bold xs:text-[20px] p-[0.5rem]'>John Bosco: 63743 84348</h2>
                                <p className='px-[0.5rem]'>Vice - President, REC Atrium</p>
                                <h2 className='font-bold xs:text-[20px] p-[0.5rem]'>Vishal: 70223 52020</h2>
                                <p className='px-[0.5rem]'>Vice - President, REC Debating Union</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='follow-us rounded-[3rem] max-w-[350px]  flex flex-col max-h-[250px] m-[1rem]'>
                        <h1 className='font-bold xs:text-[50px] text-[30px] px-[2rem] md:py-[0] py-[1rem] rounded-[2rem] rounded-b-none text-white'>
                            Follow Us 👇
                        </h1>
                        <div className='bg-white rounded-[3rem] px-[2rem] py-[1rem]'>
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                whileTap={{
                                    scale: 0.9
                                }}
                                className='xs:py-[2rem] px-[1rem] py-[1rem]'>
                                <a target="_blank" rel='noreferrer noopener' href='https://www.instagram.com/recatrium/'>
                                    <img className='w-[30px] inline-block' src={logos[4]} alt='instagram' />
                                    <span className='p-[1rem]'>Atrium REC</span>
                                </a>
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                whileTap={{
                                    scale: 0.9
                                }}
                                className='pb-[2rem] px-[1rem]'>
                                <a target="_blank" rel='noreferrer noopener'
                                    href='https://www.instagram.com/recdebate/'>
                                    <img className='w-[30px] inline-block' src={logos[4]} alt='instagram' />
                                    <span className='p-[1rem]'>Debatin Union REC</span>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;