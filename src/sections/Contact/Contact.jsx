import "./Contact.css";
import { ActiveSectionContext } from "../../context/ActiveSectionContext";
import { useRef, useContext } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import github from '../../assets/svg/github.svg'
import linkedin from '../../assets/svg/linkedin.svg'
import mail from '../../assets/svg/mail.svg'
import phone from '../../assets/svg/phone.svg'

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Contact() {

    const { setActive } = useContext(ActiveSectionContext);

    const contactRef = useRef();

    useGSAP(() => {
    gsap.from(contactRef.current, {
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top center",
        // markers: true,
        onEnter: () => setActive("contact"),
        onEnterBack: () => setActive("contact"),
      },
      opacity: 0,
      duration: 1
    });
  }, { scope: contactRef });

    return (
        <section className="contact-container" id="contact" ref={contactRef}>
            <div className="contact-content">
                <h2>contact</h2>
                <div className='contact-text presentation'>
                    <span><i>une petite question ? n'hésitez pas à me contacter.</i></span>
                </div>

                <div className="contact-form-infos">
                    <form className="contact-form" action="">
                        <div className="form-group">
                            <label for="name">nom</label>
                            <input type="text" id="name" name="name" placeholder="ton nom" required></input>
                        </div>
                        <div className="form-group">
                            <label for="email">email</label>
                            <input type="text" id="email" name="email" placeholder="ton@email.com" required></input>
                        </div>
                        <div className="form-group">
                            <label for="message">message</label>
                            <textarea id="message" name="message" rows="5" placeholder="ton message..." required></textarea>
                        </div>
                        <button type="submit" class="btn-send">envoyer le message</button>
                    </form>
                    <div className="contact-infos">

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact