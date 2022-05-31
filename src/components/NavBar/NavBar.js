import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div>
                <ul className='nav'>
                    <h1>
                        <img src="https://www.freepnglogos.com/uploads/two-phone-mobile-logo-download-9.png" className="imgNavbar" alt="logo"></img>
                    </h1>

                    <NavLink to='/' activeClassName='active'> HOME </NavLink>
                    <NavLink to='/category/tablet' activeClassName='active'> TABLET </NavLink>
                    <NavLink to='/category/celular' activeClassName='active'> CELULARES </NavLink>
                    <NavLink to='/contacto' activeClassName='active'> CONTACTO </NavLink>
                    <CartWidget />

                </ul>
            </div>
        </>
    );
}

export default NavBar;