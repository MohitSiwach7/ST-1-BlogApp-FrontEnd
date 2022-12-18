import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import aboutus from "./aboutus.jpg"

import "./AboutUs.scss"

const AboutUs = () => {
    return (
        <section className="about">
        <h2 className="about__title">About us</h2>

        <div className="about__details">

        <div className="about__left">
        <h3 className="about__mainlefttitle">OUR MISSION</h3>
                <p className="about__paragraph">Gamer's Blog was primarily made to share and read news and articles regarding the esports industry</p>
                
            </div>
            
            
        </div>
            
        </section>
    )
}

export default AboutUs;