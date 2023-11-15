import React, { Fragment } from "react";
import './Footer.css';


const Footer = () => {
    return (
        <Fragment>
            <div className="footer-container">
                <div className="left-container">
                    <h1 className="title-footer">CV TIMOER SENTOSA</h1>
                    <div className="media-social">
                        <ul>
                            <li>LinkTree</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Shopee</li>
                        </ul>
                    </div>
                </div>
                <div className="right-container">
                    <h1>Hubungi Kami</h1>
                    <div className="contact">
                        <div className="nama">
                            <div className="nama-depan-class">
                                <p>Nama Depan</p>
                                <input type="" name="" id="" className="nama-depan"  placeholder="Masukan Nama Depan"/>
                            </div>
                            <div className="nama-belakang-class">
                                <p>Nama Belakang</p>
                                <input type="" name="" id="" className="nama-belakang" placeholder="Masukan Nama Belakang" />
                            </div>
                        </div>
                        <div className="email-class">
                            <p>Alamat Email</p>
                            <input type="text" name="" id="" className="email" placeholder="Masukkan Alamat Email"/>
                        </div>
                        <div className="subject-class">
                            <p>Subject</p>
                            <input type="text" name="" id="" className="subject" placeholder="Masukkan subject"/>
                        </div>
                        <div className="pesan-class">
                            <p>Pesan</p>
                            <input type="text" name="" id="" className="pesan" placeholder="Masukkan pesan"/>
                        </div>
                    </div>
                    <button >Send Messages </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;
