import React, { Fragment } from "react";
import './Beranda.css';
import { Link } from 'react-scroll';
import NavBar from "../../../../components/navBar/NavBar"

const Beranda = () => {
    return (
        <Fragment>
            <div className="beranda-container">
                <NavBar />
                <div className="header">
                    <div className="header-text">
                        <p>selamat datang di</p>
                        <h1>CV TIMOER SENTOSA</h1>
                    </div>
                    <div className="header-button">
                        <button className="tentangKami">
                            <Link to="tentangKami" smooth={true} duration={500}>Tentang Kami</Link>
                        </button>
                        <button className="produkUnggulan">
                            <Link to="produk" smooth={true} duration={500}>Produk Unggulan</Link>
                        </button>
                    </div>
                </div>
                <div className="image-background">
                    <img src="Top.png" alt="" />
                </div>
            </div>
            
        </Fragment>
    )
}

export default Beranda;
