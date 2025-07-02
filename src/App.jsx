import React, { useRef, useState, useEffect } from "react"
import Navbar from "./Components/Navbar"
import Introduction from "./Components/Introduction"
import Cards from "./Components/Cards"
import Proyect from "./Components/Proyect"
import Gallery from "./Components/Gallery"
import Icons from "./Components/Icons"
import Location from "./Components/Location"
import Footer from "./Components/Footer"
import WhatsAppButton from "./Components/WhatsAppButton"
import FincaLandiaHero from "./Components/FincaLandiaHero"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const aboutUs = useRef(null)
  const cards = useRef(null)
  const galeria = useRef(null)
  const ubicacion = useRef(null)
  const footer = useRef(null)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Navbar refs={{ aboutUs, cards, galeria, ubicacion }} isMobile={isMobile} />
      <div ref={cards}><Introduction /></div>
      <FincaLandiaHero isMobile={isMobile}/>
      <div><Cards isMobile={isMobile}/></div>
      <div ref={aboutUs}><Proyect isMobile={isMobile}/></div>
      <div ref={galeria}><Gallery isMobile={isMobile}/></div>
      <Icons isMobile={isMobile}/>
      <div ref={ubicacion}><Location isMobile={isMobile}/></div>
      <br />
      <div ref={footer}><Footer isMobile={isMobile}/></div>
      <WhatsAppButton />
    </>
  )
}

export default App
