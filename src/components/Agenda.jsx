import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import "./Agenda.css";
import { color } from '@mui/system';

export default function OppositeContentTimeline() {
    return (
        <div className='agenda h-[100vh] flex flex-col items-center align-middle justify-center'>
            <div className='text-center'>
                <h1 className='font-bold text-center text-[35px] inline-block px-[2rem] py-[1rem] bg-opacity-20 bg-black rounded-[3rem] text-white '>Schedule of Events</h1>
                <div
                    className='pt-[2rem] bg-opacity-20 bg-black rounded-[3rem] text-white m-[1rem]'>
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent color="">
                                <div className=''>08:00 AM - <span className='inline-block'>08:30 AM</span></div>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot
                                    sx={{
                                        backgroundColor: '#59CE8F'
                                    }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><div className='font-bold text-[18px]'>Registration of Participants</div></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="">
                                <div className=''>08:30 AM</div>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot
                                    variant='outlined'
                                    sx={{
                                        // backgroundColor: '#B3FFAE'
                                    }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><div className='font-bold text-[18px]'>Inaugural Ceremony</div></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="">
                                <div className=''>09:00 AM - <span className='inline-block'>4:00 PM</span></div>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot
                                    
                                    variant='outlined'
                                    sx={{
                                        // backgroundColor: '#FFFDE3'
                                    }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><div className='font-bold text-[18px]'>Commencement of Events</div></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="">
                                <div className=''>04:10 PM - <span className='inline-block'>04:25 PM</span></div>
                            </TimelineOppositeContent>
                            <TimelineSeparator />
                            <TimelineDot
                                sx={{
                                    backgroundColor: '#FF6464'
                                }} />
                            {/* <TimelineConnector /> */}
                            {/* </TimelineSeparator> */}
                            <TimelineContent>
                                <div className='font-bold text-[18px]'>Valedictory Ceremony</div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>

    );
}
