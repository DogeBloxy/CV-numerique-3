import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';
import "./CardSkill.css";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

function CardSkill({Icon, name}) {
    const cardSkillRef = useRef();
    const cardSkillNameRef = useRef();
    const [isHovered, setIsHovered] = useState(false);

    useGSAP(() => {
        const setX = gsap.quickSetter(document.documentElement, "--x", "px")
        const setY = gsap.quickSetter(document.documentElement, "--y", "px")

        gsap.set(cardSkillNameRef.current, {opacity:0})

        const handleMove = (e) => {
            setX(e.clientX)
            setY(e.clientY)

            const targetSkill = e.target.closest(".card-skill")
            const isThisCard = targetSkill === cardSkillRef.current

            gsap.to(cardSkillNameRef.current, {
                opacity: isThisCard ? 1 : 0,
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out",
            })
        }

        window.addEventListener("mousemove", handleMove)
        return () => window.removeEventListener("mousemove", handleMove)
    }, [])

    return (
        <div className="card-skill" ref={cardSkillRef}>
            <Icon className="icon-skill" />
            <p className="name-skill" ref={cardSkillNameRef}>{name}</p>
            <p className="name-skill-mobile">{name}</p>
        </div>
    )
}

export default CardSkill