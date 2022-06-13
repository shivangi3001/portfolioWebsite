import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import {BsMouse} from 'react-icons/bs' ;


function Home() {
    return (
        <div id='home' className="container home-container">
            <div className="logo">
                <div className="main-img">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>

                <img src='{img}' alt=''  />
            </div>

            <a href="#footer" className="scroll-down">
                <hr />
                <h5> scroll down </h5>
                <BsMouse className='scroll' />
                <hr />

            </a>
            <h2><span>About Me</span> <br />
            <p> 
            lorem
            lorem ipsum dolor sit amet consectetur adipiscing elit. 
            </p>
        </h2>

        <Buttons />

        </div>
    );
}

const toggle = document.querySelector('.main-img');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
});

export default Home;