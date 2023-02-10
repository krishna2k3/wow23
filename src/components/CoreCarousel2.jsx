import React from 'react';
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { dumember } from '../constants';
import CoreMember from "./CoreMember";
import "./CoreCarousel.css";

const CoreCarousel2 = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    })
    return (
        <div className='CoreCarousel carousel2'>
            <div className='xs:text-[50px] text-[35px] px-[4rem] pt-[2rem] text-black'>
                <h1 className={`font-bold`}>
                    Debating Union Core
                </h1>
                <div className="xs:text-[30px] text-[20px]">
                    Swipe ➡️
                </div>

            </div>
            <motion.div ref={carousel} className='carousel'>
                <motion.div
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    className='inner-carousel'>
                    {dumember.map((member, index) => (
                        <motion.div
                            className='event text-white'>
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

export default CoreCarousel2;