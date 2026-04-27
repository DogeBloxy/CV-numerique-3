import './Navbar.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Flip } from 'gsap/all'
import { useRef, useState } from 'react'

const tabs = [{ text: "à propos", link: "about" }, { text: "compétences", link: "skills" }, { text: "projets", link: "projects" }, { text: "contact", link: "contact" }];

gsap.registerPlugin(useGSAP, Flip);

function Navbar() {
    const [active, setActive] = useState("");
    const pillRef = useRef();
    const navRef = useRef();
    const tabRefs = useRef({});

    useGSAP(() => {
        gsap.from(navRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out",
        })
    }, { scope: navRef })

    const handleClick = (tab) => {
        const el = tabRefs.current[tab.link];
        if (!el) return;

        const navRect = navRef.current.getBoundingClientRect();
        const tabRect = el.getBoundingClientRect();

        gsap.to(pillRef.current, {
            x: tabRect.left - navRect.left,
            width: tabRect.width,
            height: tabRect.height,
            duration: 0.4,
            display: 'block',
        });

        setActive(tab.link);
        
    }


    return (
        <nav className='navbar-container' ref={navRef}>
            <span className="pill" ref={pillRef} />
            <ul className='navbar-list'>
                {tabs.map((tab) => (
                    <a
                        key={tab.link}
                        ref={el => tabRefs.current[tab.link] = el}
                        className={`navbar-element ${active === tab.link ? "active" : ""}`}
                        onClick={() => handleClick(tab)}
                        href={`#${tab.link}`}
                    >
                        <li>
                            {tab.text}
                        </li>
                    </a>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar