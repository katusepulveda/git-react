import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

function NavBar(props) {

    return (
        <>
        <div>
            <ul className='nav'>
                <h1>
            <img src="https://www.freepnglogos.com/uploads/two-phone-mobile-logo-download-9.png" className="img-navbar" alt="img"></img>
              </h1> 
               
                <Link to='/' className='nav-links'> HOME </Link>

                <Link to='/category/tablet' className='nav-links'> TABLET </Link>
                <Link to='/category/celular' className='nav-links'> CELULARES </Link>

                <Link to='/contacto' className='nav-links'> CONTACTO </Link>

                <CartWidget/>
            </ul>

            
        </div>
        </>
    );
}

export default NavBar;