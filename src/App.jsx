import Hero from "./components/Hero";
import {LoremIpsum} from "./components/LoremIpsum"
import Events from "./components/Events";
import Event from "./components/Event";
import Testapp from "./components/Testapp";
import CoreCarousel from "./components/CoreCarousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
export default function App() {
  // const { scrollYProgress } = useScroll();

  return (
    <>
      <Hero />
      <About/>
      <Events/>
      {/* <Event/> */}
      {/* <Testapp/> */}
      {/* <Events/> */}
      <CoreCarousel/>
      {/* <Events />
      <Schedule />
      <CoreMembers /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
