import { MotionConfig } from 'framer-motion';
import React from 'react';
import { motion } from "framer-motion";
import "./CoreMember.css";

const CoreMember = (props) => {

  return (
    <section className='CoreMember'>
      <motion.div>
        <motion.div className='CoreImg'>
          <div className='vignette'>
            <img
              className='rounded-[2rem]'
              src={props.img}
              alt={props.name}
              draggable="false"></img>
          </div>
        </motion.div>
        <p className='font-bold text-[30px] text-center'>{props.name}</p>
        <p className='text-center'>{props.role}</p>
      </motion.div>
    </section>
  )
}

export default CoreMember;