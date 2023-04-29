import './Footer.css'



export default function Footer() {

    return (
        <footer>
            <footer class="footer-distributed">

                <div class="footer-left">
                    <a className='logo-container mx-auto inline-block' href='/'><img className=' logo' src={require('../media/FlexTra.png')} alt='logo' /></a>


                    <p class="footer-links mx-2">
                        <a href="#">Home</a>
                        |
                        <a href="#">About</a>
                        |
                        <a href="#">Contact</a>

                    </p>

                    <p class="footer-company-name">Copyright © 2023 <strong>GBT</strong> All rights reserved</p>
                </div>

                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p>1240 Teron Rd, Kanata, ON K2K 2B5</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+613-868-4876</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:flextra@rogers.com">Flextra@rogers.com</a></p>
                    </div>
                </div>
                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>About us</span>
                        We are a team of experienced professionals who specialize in providing top-notch cable assembling services. With years of experience in the industry, we have honed our skills and expertise to provide high-quality solutions that meet the unique needs of our clients.
                    </p>

                </div>
            </footer>

        </footer>



    )
}


