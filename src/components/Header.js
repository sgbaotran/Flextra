import './Header.css'


function Dropdown() {
    return <div className="more-button-container">
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" data-toggle=''
            className="more-button focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center" type="button">
            <img className='more-icon' src={require('../icon/More-icon.png')} alt='' />

        </button>

        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Solution</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Industry</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Quality</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact</a>
                </li>
            </ul>
        </div>

    </div>
}


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


                <Dropdown />

            </div>


        </header>



    )
}


