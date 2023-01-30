import { MotionConfig } from 'framer-motion';
import React from 'react'
import {motion} from "framer-motion";
import { useState } from 'react';
import "./Event.css"; 

const Testapp = () => {    const [isOpen, setIsOpen] = useState(false);

    return (
      <section className='TestApp'>
          <motion.div 
            transition={{layout: {duration: 1, type: "spring"}}}
            layout 
            onClick={() => setIsOpen(!isOpen)}
            className='card'
            style={{boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)'}}>
              <motion.h2 layout="position">
                  Framer Motion 
              </motion.h2>
              {isOpen && (
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
              >
                  <p>Lorem ipsum dolor sit amet. Et veritatis dolor ut int
                      ernos autem aut incidunt explicabo aut rerum sapiente aut </p>
                  <h2>Rules:</h2>
                  <p>Sit repellendus ipsum a minus voluptatibus rem accusantium deleniti sit praesentium
                      omnis cum velit fugiat a tenetur explicabo. Qui beatae labore ut mollitia aspernatur
                      hic aliquam dolores id Quis earum aut voluptatem porro. Est rerum maiores ut neque
                      magnam aut nihil aliquid sed inter
                      nos inventore ut asperiores accusamus. Cum fuga eaque et nulla molestia
                      e sit voluptas galisum At reiciendis odio ab inventore 
                      nobis ut praesentium cumque qui harum expedita.
                  </p>
              </motion.div>
              )}
          </motion.div>
      </section>
    )
}

export default Testapp;