import React from 'react'
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Event from './Event';
import "./Events.css";
import { events } from "../constants";


const Events = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    })

    const ref = useRef(null);
    // const {scrollXProgress} = useScroll({container: ref});

    return (
        <div className='Events'>
            <div className='text-[50px] px-[4rem] pt-[2rem]'>
                <h1 className={`font-bold`}>
                    Events
                </h1>
                <p className='sm:text-[20px] text-[15px]'>Here are the events we have lined up for you! Join and win exciting prizes! <b>Click on the events to read more!</b></p>
                <div className="text-[30px]">
                    Swipe ➡️
                </div>
                
            </div>
            <motion.div ref={carousel} className='carousel'>
                <motion.div
                    ref={ref}
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    className='inner-carousel'>
                    {events.map((wowevent, index) => (
                        <motion.div
                            className='event'>
                            <Event
                                name={wowevent.name}
                                emoji={wowevent.emoji}
                                tagline={wowevent.tagline}
                                desc={wowevent.decription}
                                rules={wowevent.rules}
                                backgroundImage={wowevent.backgroundImage}
                                register={wowevent.register}
                            />
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </div>

    )
}

export default Events;