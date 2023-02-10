import React from 'react'
import { motion } from "framer-motion";
import "./EventSchedule.css";

const EventSchedule = () => {
    return (
        <div className='EventSchedule h-[100vh] flex flex-col items-center align-middle justify-center'>
            <div
                className='text-center text-[2rem] p-[2rem] font-bold font-poppins'>
                <h1 
                    className='inline-block'>Timelines of Events</h1>
            </div>
            <div
                className='flex justify-center bg-black bg-opacity-80 text-white rounded-[2rem] p-[1rem]'>
                <div className='EventName flex flex-col'>
                    <h1
                        className='text-center text-[1.5rem] font-semibold'>Event</h1>
                    <h1
                        className='h-[1.5rem] font-poppins'>JAM</h1>
                    <p
                        className='h-[1.5rem] text-[0.75rem]'>09:00 AM to 10:30 AM</p>
                    <h1   
                        className='h-[1.5rem] font-poppins'>Block & Tackle</h1>
                    <p
                        className='h-[1.5rem] text-[0.75rem]'>10:30 AM to 11:30 AM</p>
                    <h1
                        className='h-[1.5rem] font-poppins'>Anti-/Shipwreck</h1>
                    <p
                        className='h-[1.5rem] text-[0.75rem]'>11:30 AM to 12:30 PM</p>
                    <h1
                        className='h-[1.5rem] font-poppins'>Lunch</h1>
                    <p
                        className='h-[1.5rem] text-[0.75rem]'>12:30 PM to 01:20 PM</p>
                    <h1
                        className='h-[1.5rem] font-poppins'>Lawyer Up</h1>
                    <p
                        className='h-[1.5rem] text-[0.75rem]'>12:30 PM to 03:00 PM</p>
                    <h1
                        className='h-[1.5rem] font-poppins'>WoW Debate</h1>
                    <p
                        className='h-[1.5rem] text-[0.75rem]'>09:00 AM to 03:00 PM</p>
                    <h1
                        className='h-[1.5rem] font-poppins'>Treasure AU</h1>
                    <p
                        className='h-[1.5rem] text-[0.75rem]'>09:00 AM to 03:00 PM</p>
                    <h1
                        className='h-[1.5rem] font-poppins'>Battle Royale WoW</h1>
                    <p
                        className='h-[1.5rem] text-[0.75rem]'>03:00 PM to 04:00 PM</p>
                </div>
                <div className='EventLength'>
                    <h1
                        className='text-center text-[1.5rem] font-semibold'>Duration</h1>
                    <div
                        className=' text-transparent'>

                        <div className=''>
                            <h1 className='JAM rounded-[2rem] w-[3rem] ss:w-[6rem] h-[1rem] mt-[0.5rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className=' rounded-[2rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className='BANDT rounded-[2rem] ml-[3rem] ss:w-[4rem] w-[2rem] ss:ml-[6rem] h-[1rem] mt-[0.5rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className=' rounded-[2rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className='ANTI-SHIPWRECK rounded-[2rem] ml-[5rem] ss:ml-[10rem] ss:w-[4rem] w-[2rem] h-[1rem] mt-[0.5rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className=' rounded-[2rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className='LUNCH rounded-[2rem] ml-[7rem] w-[26.6px] ss:w-[57.3px] ss:ml-[14rem] h-[1rem] mt-[0.5rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className=' rounded-[2rem]'>''</h1>
                        </div>
                        <div className=''>
                            <h1 className='LAWYERUP rounded-[2rem] w-[5rem] ml-[7rem] ss:ml-[14rem] ss:w-[10rem] h-[1rem] mt-[0.5rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className=' rounded-[2rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className='WOWDEBATE rounded-[2rem] w-[12rem] ss:w-[24rem] h-[1rem] mt-[0.5rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className=' rounded-[2rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className='TAMONGUS rounded-[2rem] w-[12rem] ss:w-[24rem] h-[1rem] mt-[0.5rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className=' rounded-[2rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className='BRW rounded-[2rem] ml-[12rem] w-[2rem] ss:w-[4rem] ss:ml-[24rem] h-[1rem] mt-[0.5rem]'>''</h1>
                        </div>
                        <div>
                            <h1 className=' rounded-[2rem]'>''</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EventSchedule;
