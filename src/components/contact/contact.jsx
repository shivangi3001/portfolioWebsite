import './contact.css';
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icon/ai'
import { AiOutlineInstagram } from 'react-icons/ai'

function Contact() {
    return (
        <div className="container contact-container">
            <h1> contact me </h1>
            <div className="contact-links">

                <a href="#" className="contact youtube">
                    <AiOutlineYoutube className='icon' />
                    <h2>youtube <span>Creative Ambition</span> </h2>
                </a>

                <a href="#" className="contact whatsapp">
                    <AiOutlineWhatsApp className='icon' />
                    <h2>whatsapp <span>+000 000 0000</span> </h2>
                </a>

                <a href="#" className="contact instagram">
                    <AiOutlineInstagram className='icon' />
                    <h2>instagram <span>shivangi30.</span> </h2>
                </a>

            </div>
        </div>
    );
}

export default Contact;