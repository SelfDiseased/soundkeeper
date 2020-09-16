import React from 'react';
import './styles.scss'
import logo from './Layout/Logo.png';


const Footer = () => {
    return(
        <footer className="footer">
            <p className="footer__copyright">
                Copyright 2020. SOUND.net
            </p>
            <img src={logo} className="footer__logo" alt="logo"></img>
        </footer>
    )
}
export default Footer;