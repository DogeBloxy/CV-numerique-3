import { useEffect, useRef, useState } from 'react'
import './App.css'
import { ReactLenis } from 'lenis/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Hero from './sections/Hero/Hero';
import Intro from './sections/Intro/Intro';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function App() {

  const [introDone, setIntroDone] = useState(false);
  const websiteRef = useRef();
  const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])


  useEffect(() => {
    gsap.set(document.documentElement, { "--mask-size": 0 })
    const setX = gsap.quickSetter(document.documentElement, "--x", "px")
    const setY = gsap.quickSetter(document.documentElement, "--y", "px")

    const handleMove = (e) => {
      setX(e.clientX)
      setY(e.clientY)

      const target = e.target.closest("a, button, .avatar-hero")

      gsap.to(document.documentElement, {
        "--mask-size": target ? 40 : 15,
        duration: 0.4,
        ease: "power2.out",
      })
    }

    window.addEventListener("mousemove", handleMove)
    return () => {
      window.removeEventListener("mousemove", handleMove)
    }
  }, [])


  return (
    <div className="app" ref={websiteRef}>
      {!introDone && <Intro onComplete={() => setIntroDone(true)} />}
      {introDone && (
        <ReactLenis root options={{ autoRaf: false,  naiveDimensions: true }} ref={lenisRef}>
          <Navbar />
          <div className='portfolio-content'>
            <Hero />
            
          </div>
        <Footer />
        </ReactLenis>
      )}
    </div>
  )
}

export default App
