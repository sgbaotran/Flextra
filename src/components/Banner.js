import './Banner.css'
import { Link } from 'react-scroll'


export default function Banner() {

    return <div className='banner-section'>
        <div className='wrapper'>

                <img className="banner-img" src={require('../media/Banner.png')} alt='logo' />


                <div className='banner-text '>
                    <h2 className='banner-slogan my-5 text-5xl md:text-6xl'><b>Wired For Your Success</b></h2>
                    <h2 className='banner-slogan my-5 text-3xl'><b>Quality Connections, Reliable Results.</b></h2>
                    <h2 className='banner-slogan my-5 text-2xl'>Connecting Your Vision with Precision Wiring Solutions.</h2>

                    <Link className="banner-contact"to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>

                </div>


        </div>
    </div>


}
