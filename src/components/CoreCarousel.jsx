import React from 'react';
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { member } from '../constants';
import CoreMember from "./CoreMember";
import "./CoreCarousel.css";

const CoreCarousel = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    })
    return (
        <div className='CoreCarousel'>
            <div className='text-[50px] px-[4rem] pt-[2rem] text-white'>
                <h1 className={`font-bold`}>
                    The Core
                </h1>
                <div className="text-[30px]">
                    Swipe ➡️
                </div>

            </div>
            <motion.div ref={carousel} className='carousel'>
                <motion.div
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    className='inner-carousel'>
                    {member.map((member, index) => (
                        <motion.div
                            className='event'>
                            <CoreMember
                                img={member.img}
                                name={member.name}
                                role={member.role}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CoreCarousel;