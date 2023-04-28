import './Banner.css'
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Banner() {

    return <div className='banner-section'>
        <div className='wrapper'>
            <div className='slider'>
                <img className="banner-img" src={require('../media/Banner.png')} alt='logo' />


                <div className='banner-text '>
                    <h2 className='banner-slogan my-5 text-5xl md:text-6xl'><b>Wired For Your Success</b></h2>
                    <h2 className='banner-slogan my-5 text-3xl'><b>Quality Connections, Reliable Results.</b></h2>
                    <h2 className='banner-slogan my-5 text-2xl'>Connecting Your Vision with Precision Wiring Solutions.</h2>
                    <a href='/contact' className='banner-contact' >Contact</a>

                </div>

            </div>
        </div>
    </div>


}
