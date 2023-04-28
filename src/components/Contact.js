import './Contact.css'



export default function Contact() {

    return (

        <div>


            <div className='container  contact-section mx-auto'>
                <h2 className='contact-title' >Contact</h2>
                {/* ON LEFT */}
                <div className='contact-infos flex'>
                    <form className="mx-auto block px-3 md:px-10  client-contact-form" action="https://formsubmit.co/sttr2130@gmail.com" method="POST">
                        <input type="hidden" name="_next" value="https://gbaotran.com/" />
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
                   


                </div>
            </div>
        </div>

    )
}