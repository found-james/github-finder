import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ title }) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                { title } 
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

NavBar.defaultProps = {
    title: 'github finder',
    icon: 'fab fa-github'
}

export default NavBar;