import './Intro.css'
import tiagoChibi from '../../assets/images/tiago-chibi.png'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(TextPlugin, useGSAP)

const MESSAGES = [
    { text: "salut.", pause: 1.2 },
    { text: "vous venez voir mon portfolio?", pause: 1.2 },
    { text: "bonne visite alors.", pause: 1.4 },
]

function Intro({ onComplete }) {

    const introRef = useRef();
    const avatarRef = useRef();
    const bubbleRef = useRef();
    const textRef = useRef();
    const skipRef = useRef();
    const tlRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline()
        tlRef.current = tl

        tl.from(avatarRef.current, {
            scale: 0.6,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
        })
        tl.from(bubbleRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 0.4,
            ease: "back.out(2)",
        })

        MESSAGES.forEach((msg, i) => {
            const textDuration = msg.text.length * 0.05

            if (i > 0) {
                tl.set(textRef.current, { text: "", opacity: 1, y: 0 })
            }

            tl.to(textRef.current, {
                duration: textDuration,
                text: { value: msg.text, delimiter: "" },
                ease: "none",
            })

            tl.to({}, { duration: msg.pause })

            if (i < MESSAGES.length - 1) {
                tl.to(textRef.current, {
                    opacity: 0,
                    y: -6,
                    duration: 0.2,
                })
            }
        })

        tl.to([avatarRef.current, bubbleRef.current, skipRef.current], {
            y: -60,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            stagger: 0.1
        })

        tl.to({}, { duration: 0.5 })

        tl.call(() => onComplete())

    }, { scope: introRef })

    const handleSkip = () => {
        if (tlRef.current) {
            tlRef.current.progress(1)
        }
    }
    return (
        <div ref={introRef} className='intro'>
            <div ref={avatarRef} className='intro-avatar'>
                <img src={tiagoChibi} alt="Avatar de Tiago" />
            </div>
            <div ref={bubbleRef} className='intro-bubble'>
                <p ref={textRef} className='intro-bubble-text'></p>
            </div>
            <button ref={skipRef} onClick={handleSkip} className='intro-skip'>Passer l'introduction</button>
        </div>
    )
}

export default Intro