import { useRef } from 'react'
import './Hero.css'
import tiagoChibi from '../../assets/images/tiago-chibi.png'
import { gsap } from 'gsap'
import { Draggable, InertiaPlugin, SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, Draggable, InertiaPlugin, SplitText)

function Hero() {
    const heroRef = useRef();
    const avatarRef = useRef();
    const nameRef = useRef();
    const heroTextRef = useRef();
    const avatarSectionRef = useRef();
    const tlRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline()
        tlRef.current = tl
        const setX = gsap.quickSetter(document.documentElement, "--x", "px")
        const setY = gsap.quickSetter(document.documentElement, "--y", "px")

        tl.from(avatarSectionRef.current, {
            scale: 0.6,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
        })

         tl.to({}, { duration: 0.6 })

        SplitText.create(nameRef.current, {
            type: "words, chars",
            onSplit(self) {
                tl.from(self.chars, {
                    duration: 0.5,
                    y: 30,
                    ease: "power2.out",
                    stagger: 0.05,
                    opacity: 0,
                })
            }
        })
        SplitText.create(heroTextRef.current, {
            type: "lines, chars",
            onSplit(self) {
                tl.from(self.lines, {
                    opacity: 0,
                    y: 100,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1
                })
            }
        })

        Draggable.create(avatarRef.current, {
            type: "rotation",
            inertia: true,
            cursor: "none",
            onMove: (e) => {
                setX(e.clientX)
                setY(e.clientY)
            }
        })
    }, { scope: heroRef })

    return (
        <section className='hero-container' ref={heroRef} id='about'>
            <div className='hero-intro'>
                <div className='hero-content'>
                    <h2>à propos</h2>
                    <div className='hero-text presentation'>
                        <span><i>oh pardon... j'ai oublié de me présenter.</i></span>
                        <h3 ref={nameRef}>bonjour, je m'appelle <span className='primary'>Tiago Labro</span>.</h3>
                    </div>
                    <div className='hero-text' ref={heroTextRef}>
                        <p>un développeur full-stack orienté sur le web et français.</p>
                        <p>je suis passionné d'informatique depuis le collège.</p>
                        <p>mon objectif est de faire en sorte de créer la forme, le fond ainsi qu'animer des projets comme des sites web ou des applications à partir de plusieurs langages.</p>
                        <p>ainsi, je me présente pour vous montrer mon parcours dans ce portfolio.</p>
                        <p>bonne visite!</p>
                        <div className='hero-links'>
                            <a className='hero-link' href="https://dogebloxy.github.io/interactive-resume-template/?lang=fr" target='_blank'>voir mon cv.</a>
                            <a className='hero-link' href="#projects">voir mes projets.</a>
                        </div>
                    </div>
                </div>
                <div className='hero-image' ref={avatarSectionRef}>
                    <img className='avatar-hero' ref={avatarRef} src={tiagoChibi} alt="Avatar chibi de Tiago" />
                    <span><i>tu sais que tu peux me faire tourner la tête? essaie, ça va être marrant.</i></span>
                </div>
            </div>

        </section>
    )
}

export default Hero