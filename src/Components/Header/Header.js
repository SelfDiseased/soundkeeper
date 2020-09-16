import React from 'react';
import './styles.scss'
import { NavLink } from 'react-router-dom'
import logo from './layout/logo.png';
import user_img from './layout/user.png'

const Header = () => {
    return (
        <header className="header">
            <nav className="header__navbar">
                <div className="header__navbar__navLinks">
                    <div className="header__navbar__navLinks__brand">
                        <NavLink to="/" className="header__navbar__navLinks__brand__logo">
                            <img className="logo" src={logo} alt="logo"></img>
                        </NavLink>
                    </div>
                    <ul className="header__navbar__navLinks__ul">
                        <li className="header__navbar__navLinks__ul__li">
                            <NavLink to="/playlist" className="header__navbar__navLinks__ul__li__item">Playlist</NavLink>
                            <NavLink to="/live" className="header__navbar__navLinks__ul__li__item">Live</NavLink>
                            <NavLink to="/charts" className="header__navbar__navLinks__ul__li__item">Charts</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="header__navbar__login">
                    <img className="header__navbar__login__user_img" src={user_img} alt="login img"></img>
                    <div className="header__navbar__login__login_button">
                        <p className="header__navbar__login__login_button__button_text">Sign in</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;