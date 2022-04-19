import React from 'react';
import './NavBar.css';

function NavBar(props) {

    return (
        <>
        <div>
            <ul className='nav'>
                <h1>Alquimia Nativa</h1>
                <li> <a href=''>HOME</a></li>
                <li> <a href=''>TIENDA</a></li>
                <li> <a href=''>CONTACTO</a></li>
            </ul>
        </div>
        </>
    );
}

export default NavBar;