import CardSkill from "../../components/CardSkill/CardSkill";
import "./Skills.css";

import { skills } from "../../data/skills/skillsArray";
import { useContext, useRef } from "react";
import { ActiveSectionContext } from "../../context/ActiveSectionContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const { setActive } = useContext(ActiveSectionContext);

  const skillsRef = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: skillsRef.current,
      start: "top center",
      onEnter: () => setActive("skills"),
      onEnterBack: () => setActive("skills"),
    })
  }, { scope: skillsRef })

  return (
    <section className="skills-container" id="skills" ref={skillsRef}>
      <div className='skills-content'>
        <h2>compétences</h2>
        <div className='skills-text presentation'>
          <span><i>je sais parler ces langues étrangères et je sais aussi utiliser certains outils.</i></span>
          <span className="span-mobile"><i>oh... vous êtes sur mobile, alors je vous donne le nom des compétences en dessus des icônes alors.</i></span>
        </div>
        <div className='skills-cards'>
          {skills.map(({ Icon, name }, index) => (
            <CardSkill key={index} Icon={Icon} name={name} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills