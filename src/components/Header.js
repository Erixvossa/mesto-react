import React from 'react';
import headerLogo from '../images/Header__logo.svg';

function Header() {
    return (
        <header className="header">
            <a className="header__logo" href="#">
                <img className="header__logo-image" src={headerLogo} alt="logo"/>
            </a>
        </header>
    );
}


export default Header;