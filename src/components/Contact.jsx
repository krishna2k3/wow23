import React from 'react'
import { motion } from "framer-motion";
import "./Contact.css";
import { Atrium } from '../assets';


const Contact = () => {
    // const email = "atrium@rajalakshmi.edu.in";
    return (
        <div className='Contact w-[100vw] h-[100vh]'>
            <div className='md:flex'>
                <div className='md:w-[50vw] md:h-[100vh] w-[100vw] flex justify-center items-center '>
                    <h1 className='md:text-[70px] text-[40px] font-bold text-white md:p-[2rem] pt-[10rem]'>
                        Mail queries 📧
                    </h1>
                </div>
                <div className='md:p-[8rem] sm:p-[5rem] p-[2rem] justify-center items-center flex'>
                    <form className='query-form p-[1rem] bg-white rounded-[2rem] w-[350px] sm:w-[500px] justify-center items-center flex flex-col'>
                        <input 
                        className='form-input block sm:w-[450px] w-[300px] m-[1rem] text-[19px]' type="text" 
                        id='name' 
                        placeholder=' Your Name'></input>
                        <input className='form-input block w-[300px] sm:w-[450px] text-[19px] m-[1rem]' 
                        type="tel" 
                        id="phone" 
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                        placeholder=' Your phone'></input>
                        <textarea rows="8" 
                        className='form-input block w-[300px] sm:w-[450px] text-[19px] m-[1rem]' type="text" 
                        id="query" 
                        placeholder=' Please write your queries'></textarea>
                        <motion.button 
                            className='text-[21px] bg-green-500 rounded-[2rem] px-[1rem] py-[0.5rem] text-white'
                            whileHover={{
                                scale: 1.1
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                            >
                            <motion.a href="mailto:atrium@rajalakshmi.edu.in?subject={query}&body={body}">Send Query</motion.a>
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;