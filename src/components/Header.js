import './Header.css'
import Dropdown from './sub_components/DropDown'


export default function Header() {

    return (
        <header>
            <div className='header py-2 mx-auto sm:container'>
                <a className='logo-container' href='/'><img className='mx-auto logo' src={require('../media/FlexTra.png')} alt='logo' /></a>

                <nav className='nav-bar-container'>
                    <ul className='nav-bar' >
                        <li className='nav-item'><a href='/service'>Service</a></li>
                        <li className='nav-item'><a href='/experience'>Industry</a></li>
                        <li className='nav-item'><a href='/project'>Quality</a></li>
                    </ul>
                </nav>


                <div className='contact-container'>
                    <a href='/contact' className='contact' >Contact</a>
                </div>


                <Dropdown/>

            </div>


        </header>



    )
}


