import './Footer.css'
import github from '../../assets/svg/github.svg'
import linkedin from '../../assets/svg/linkedin.svg'
import mail from '../../assets/svg/mail.svg'
import phone from '../../assets/svg/phone.svg'

const tabs = [{ text: "à propos", link: "about" }, { text: "compétences", link: "skills" }, { text: "projets", link: "projects" }, { text: "contact", link: "contact" }];


function Footer() {
  return (
    <footer>
        <div className='footer-first-row'>
            <ul className='footer-navlist'>
                {tabs.map((tab) => (
                    <a
                        key={tab.link}
                        href={`#${tab.link}`}
                    >
                        <li>
                            {tab.text}
                        </li>
                    </a>
                ))}
            </ul>
        </div>
        <div className='footer-second-row'>
            <p className='footer-copyright'>© 2026 Tiago Labro</p>
            <p className='footer-love'>fait avec amour et surtout avec la passion</p>
            <div className='footer-icons'>
                <a href="https://github.com/DogeBloxy" target='_blank'><img src={github} alt="Logo de Github" /></a>
                <a href="https://www.linkedin.com/in/tiago-labro-31479029b/" target='_blank'><img src={linkedin} alt="Logo de LinkedIn" /></a>
                <a href="mailto:labrotiago@gmail.com" target='_blank'><img src={mail} alt="Logo de Email" /></a>
                <a href="tel:0770000599" target='_blank'><img src={phone} alt="Logo de Téléphone" /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer