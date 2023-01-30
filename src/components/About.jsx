import React from 'react'
import "./About.css";

const About = () => {
    return (
        <div className='text-white'>
            <div className='about h-[100vh] p-[1rem] md:flex md:justify-around items-center'>
                <div className="what xs:w-[400px] w-[300px] xs:h-[400px] h-[300px] xs:p-[4rem] p-[2rem] pt-[1rem] rounded-[50%]">
                    <h1 className='text-center xs:text-[50px] text-[35px]'>
                        What?
                    </h1>
                    <p className='xs:text-[17px] text-[15px]'>
                        War of Words (WoW) is the annual intercollegiate literary fest of Atrium and Debating Union of Rajalakshmi Engineering College. WoW consists of various exciting events. So, come on, express yourself and win exciting prizes!
                    </p>
                </div>
                <div 
                className='where xs:w-[300px] xs:h-[300px] w-[250px] h-[250px] m-[1rem] p-[2rem] rounded-[50%]'>
                    <h1 className='xs:text-[50px] text-[35px] text-center'>
                        Where?
                    </h1>
                    <a target="_blank" rel='noreferrer noopener' href='https://goo.gl/maps/EtbvG1ph66t7BiCVA'>
                        <p>Rajalakshmi Engineering College, Rajalakshmi Nagar Thandalam, Chennai - 602 105.</p>
                    </a>
                </div>
                <div className='when w-[200px] m-[1rem] h-[200px] p-[3rem] rounded-[50%]'>
                    <h1 className='text-[40px]'>
                        When?
                    </h1>
                    <p className=''>
                        Monday, 6th February, 2023
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;