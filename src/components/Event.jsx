import { AnimatePresence, MotionConfig } from 'framer-motion';
import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react';

function Event(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className='Event'>
            <motion.div
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                onClick={() => setIsOpen(!isOpen)}
                className='card'
                style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)', backgroundImage: props.backgroundImage }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.0, opacity: 0.5 }}>
                <motion.div
                    className='event-title text-white text-[30px] font-semibold'
                    layout="position"
                >
                    <motion.h1>
                        {props.name}
                    </motion.h1>
                    <motion.h1
                        className='text-[20px] '
                    >
                        {props.tagline}
                    </motion.h1>
                    <br></br>
                    <motion.span
                        className='bg-white text-black rounded-[2rem] px-[1rem] py-[0.5rem] my-[2rem]'
                    >
                        {props.emoji}
                    </motion.span>
                </motion.div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div className='event-card-detail bg-white'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <motion.h1 className='pt-[1rem] font-bold text-[25px]'>
                                Details 🔍:
                            </motion.h1>
                            {props.desc.map((des, index) => (
                                <p>{des}</p>
                            ))}
                            <br></br>
                            <h2 className='font-bold text-[25px]'>Rules ⚠️:</h2>
                            {props.rules.map((rule, index) => (
                                <p>{rule}</p>
                            ))}
                            <motion.button
                                className='p-[1rem] bg-green-500 rounded-[2rem] text-white mt-[1rem] shadow-[20px] font-bold'
                                whileHover={{
                                    scale: 1.1
                                }}
                                whileTap={{
                                    scale: 1.1
                                }}
                            >
                                <a target="_blank" rel='noreferrer noopener' 
                                href={props.register} >Register ✍️</a>
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>

    )
}

export default Event;
