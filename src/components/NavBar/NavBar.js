import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

function NavBar(props) {

    return (
        <>
        <div>
            <ul className='nav'>
                <h1>Alquimia Nativa</h1>
                <Link to='/' className='nav-links'> HOME </Link>

                <Link to='/categorias' className='nav-links'> CATEGORIAS </Link>
                

                <Link to='/contacto' className='nav-links'> CONTACTO </Link>

                <CartWidget/>
            </ul>

            
        </div>
        </>
    );
}

export default NavBar;