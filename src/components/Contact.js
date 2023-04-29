import './Contact.css'



export default function Contact() {

    return (

        <div>

            <div className='container  contact-section mx-auto'>
                <h2 className='contact-title' >Contact</h2>
                {/* ON LEFT */}
                <div className='contact-infos'>
                    <form className="mx-auto block px-3 md:px-10  client-contact-form" action="https://formsubmit.co/Flextra@rogers.com" method="POST">


                        <input type="hidden" name="_next" value="https://flextraelec.com/" />
                        <input type="hidden" name="_captcha" value="false" />

                        <input className='form-item form-client-name ' type="text" name="name" placeholder='Name' required />

                        <input className='form-item my-5 form-client-subject' type="text" name="subject" placeholder='Subject' required />

                        <div className='my-5 form-client-information'>
                            <input className='form-item' type="email" name="email" placeholder="Email" required />
                            <input className='form-item' type="number" name="number" placeholder="Phone Number" required />

                        </div>

                        <textarea className='form-item my-5 form-client-content' type="content" name="content" placeholder="Message" required />
                        <button className='form-item mx-auto form-client-submit ' type="submit">Send</button>
                    </form>
                   
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89743.67023945459!2d-75.91841596911031!3d45.33892629690891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1fffbd8e22e59%3A0xbca5566193064937!2s1520%20Teron%20Rd%2C%20Kanata%2C%20ON%20K2K%200A1!5e0!3m2!1sen!2sca!4v1682716896769!5m2!1sen!2sca" width="400" height="300" styles="border:0;display:block;flex:1" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89743.67023945459!2d-75.91841596911031!3d45.33892629690891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1fffbd8e22e59%3A0xbca5566193064937!2s1520%20Teron%20Rd%2C%20Kanata%2C%20ON%20K2K%200A1!5e0!3m2!1sen!2sca!4v1682716896769!5m2!1sen!2sca" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        


                </div>
            </div>
        </div>

    )
}