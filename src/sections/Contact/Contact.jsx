import "./Contact.css";
import { ActiveSectionContext } from "../../context/ActiveSectionContext";
import { useRef, useContext } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Slide } from 'react-toastify';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Contact() {

    const { setActive } = useContext(ActiveSectionContext);

    const contactRef = useRef();
    const formRef = useRef();

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

    const handleMessage = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                toast.success('message envoyé !', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                })
            })
            .catch((error) => {
                toast.error(`erreur : ${error}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                })
            })
    }

    return (
        <section className="contact-container" id="contact" ref={contactRef}>
            <div className="contact-content">
                <h2>contact</h2>
                <div className='contact-text presentation'>
                    <span><i>une petite question ? n'hésitez pas à me contacter.</i></span>
                </div>

                <div className="contact-form-infos">
                    <form className="contact-form" onSubmit={handleMessage} ref={formRef}>
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
                        <div className="availability-card">
                            <span className="availability-title">disponibilité</span>
                            <span className="availability-content">ouvert aux opportunités / recherche d'alternance</span>
                        </div>

                        <div className="contact-links">
                            <a href="mailto:labrotiago@gmail.com" className="contact-link">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="_x32_" viewBox="0 0 512 512" xml:space="preserve">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <polygon class="st0" points="512,295.199 445.92,226.559 512,169.6 " fill="#ffffff" />
                                            <polygon class="st0" points="66.16,226.559 0,295.279 0,169.6 " fill="#ffffff" />
                                            <path class="st0" d="M512,357.6v63.199c0,15.281-12.4,27.682-27.68,27.682H27.68c-15.281,0-27.68-12.4-27.68-27.682V357.6 l98.959-102.721L212,352.238c11.76,10.082,27.359,15.682,44,15.682c16.641,0,32.32-5.6,44.08-15.682l112.959-97.359L512,357.6z" fill="#ffffff" />
                                            <path class="st0" d="M512,91.119v27.68l-241.442,208c-7.76,6.72-21.359,6.72-29.119,0L0,118.799v-27.68 c0-15.279,12.398-27.6,27.68-27.6H484.32C499.6,63.519,512,75.84,512,91.119z" fill="#ffffff" />
                                        </g>
                                    </g>
                                </svg>
                                <span>labrotiago@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/tiago-labro-31479029b/" target="_blank" rel="noopener" className="contact-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 2.83783C1 2.35041 1.19363 1.88295 1.53829 1.53829C1.88295 1.19363 2.35041 1 2.83783 1H21.1611C21.4025 1 21.6415 1.04754 21.8644 1.1399C22.0874 1.23226 22.29 1.36763 22.4607 1.53829C22.6313 1.70895 22.7667 1.91155 22.8591 2.13452C22.9514 2.3575 22.999 2.59648 22.999 2.83783V21.1611C22.999 21.4025 22.9514 21.6415 22.8591 21.8644C22.7667 22.0874 22.6313 22.29 22.4607 22.4607C22.29 22.6313 22.0874 22.7667 21.8644 22.8591C21.6415 22.9514 21.4025 22.999 21.1611 22.999H2.83783C2.35041 22.999 1.88295 22.8053 1.53829 22.4607C1.19363 22.116 1 21.6486 1 21.1611V2.83783ZM9.70792 9.38711H12.687V10.884C13.1164 10.0232 14.2168 9.24961 15.8699 9.24961C19.0387 9.24961 19.7908 10.9628 19.7908 14.1063V19.9283H16.5826V14.8222C16.5826 13.0321 16.1532 12.0224 15.061 12.0224C13.5463 12.0224 12.9161 13.1109 12.9161 14.8222V19.9283H9.70792V9.38711ZM4.20818 19.7908H7.41637V9.24961H4.20818V19.7908ZM7.87468 5.81227C7.87468 6.08311 7.82133 6.3513 7.71769 6.60152C7.61404 6.85174 7.46212 7.0791 7.27061 7.27061C7.0791 7.46212 6.85174 7.61404 6.60152 7.71769C6.3513 7.82133 6.08311 7.87468 5.81227 7.87468C5.54144 7.87468 5.27325 7.82133 5.02303 7.71769C4.7728 7.61404 4.54545 7.46212 4.35393 7.27061C4.16242 7.0791 4.01051 6.85174 3.90686 6.60152C3.80322 6.3513 3.74987 6.08311 3.74987 5.81227C3.74987 5.26529 3.96716 4.74071 4.35393 4.35393C4.74071 3.96716 5.26529 3.74987 5.81227 3.74987C6.35926 3.74987 6.88384 3.96716 7.27061 4.35393C7.65739 4.74071 7.87468 5.26529 7.87468 5.81227Z" fill="#ffffff" />
                                    </g>
                                </svg>
                                <span>linkedin</span>
                            </a>
                            <a href="https://github.com/DogeBloxy" target="_blank" rel="noopener" className="contact-link">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" version="1.1" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <title>github [#142]
                                        </title>
                                        <desc>Created with Sketch.
                                        </desc>
                                        <defs>
                                        </defs>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff">
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span>github</span>
                            </a>
                            <a href="tel:+330770000599" className="contact-link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 32 32" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
                                    </g>
                                </svg>
                                <span>disponible</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section >
    )
}

export default Contact