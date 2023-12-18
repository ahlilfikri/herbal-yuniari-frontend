import React, { Fragment, useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

const NavBar = ({color}) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    console.log(color);
    return (
        <Fragment>
            <div className={`navBar-container ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="logo">
                    <img src="/logo.png" alt="" />
                </div>
                <div className={`nav-links ${isMenuOpen ? 'show-menu' : ''}`}>
                    <ul style={{color : `${color}`}}>
                        <li ><Link to="beranda" smooth={true} duration={500}>BERANDA</Link></li>
                        <li><Link to="tentangKami" smooth={true} duration={500}>TENTANG KAMI</Link></li>
                        <li><Link to="produk" smooth={true} duration={500}>PRODUK</Link></li>
                        <li><Link to="p4s" smooth={true} duration={500}>P4S</Link></li>
                        <li><Link to="hubungiKami" smooth={true} duration={500}>HUBUNGI KAMI</Link></li>
                    </ul>
                </div>
                <button className={`menu-button ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </button>
            </div>
        </Fragment>
    );
};

export default NavBar;
