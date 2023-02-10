import Hero from "./components/Hero";
// import {LoremIpsum} from "./components/LoremIpsum"
import Events from "./components/Events";
import Event from "./components/Event";
// import Testapp from "./components/Testapp";
import CoreCarousel from "./components/CoreCarousel";
import CoreCarousel2 from "./components/CoreCarousel2";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Agenda from "./components/Agenda";
import ReactGA from "react-ga";
import EventSchedule from "./components/EventSchedule";

import { useEffect } from "react";

const TRACKING_ID = "G-EKTV3PFNKR";
ReactGA.initialize(TRACKING_ID);

export default function App() {
  // const { scrollYProgress } = useScroll();
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  },[]);

  return (
    <>
      <Hero />  
      <About/>
      <Events/>
      {/* <Event/> */}
      {/* <Testapp/> */}
      {/* <Events/> */}
      <EventSchedule/>
      <Agenda/>
      <CoreCarousel/>
      <CoreCarousel2/> 
      {/* <Events />
      // <Schedule /> 
      // <CoreMembers /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
