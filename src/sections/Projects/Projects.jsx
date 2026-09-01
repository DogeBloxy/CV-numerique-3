import "./Projects.css";

import { ActiveSectionContext } from "../../context/ActiveSectionContext";
import { useRef, useContext } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Projects() {

    const { setActive } = useContext(ActiveSectionContext);

    const projectsRef = useRef();

    useGSAP(() => {
    gsap.from(projectsRef.current, {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top center",
        // markers: true,
        onEnter: () => setActive("projects"),
        onEnterBack: () => setActive("projects"),
      },
      opacity: 0,
      duration: 1
    });
  }, { scope: projectsRef });

    return (
        <section className="projects-container" id="projects" ref={projectsRef}>
            <div className='projects-content'>
                <h2>projets</h2>
                <div className='projects-text presentation'>
                    <span><i>des projets réalisé à l'école ou pendant mon temps libre.</i></span>
                </div>

                <ProjectCard />
            </div>
        </section>
    )
}

export default Projects