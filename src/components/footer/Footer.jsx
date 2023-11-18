// Footer.jsx

import React, { Fragment, useState } from 'react';
import axios from 'axios';
import './Footer.css';

const api = `${import.meta.env.VITE_BASE_URL.replace("https", "http")}/chooseUs`;

const Footer = () => {
  const [formData, setFormData] = useState({
    namaDepan: '',
    namaBelakang: '',
    email: '',
    subject: '',
    pesan: '',
  });

  const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(`https://gleeful-gingersnap-ed03ca.netlify.app/.netlify/functions/sendEmail`, formData);
        console.log(response.data);
        // Optionally, you can display a success message or redirect the user
    } catch (error) {
        console.error('Error sending email:', error);
        // Handle error, display error message to the user, etc.
    }
  };

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
                    <input
                    type="text"
                    name="namaDepan"
                    id="namaDepan"
                    className="nama-depan"
                    placeholder="Masukan Nama Depan"
                    onChange={handleChange}
                    />
                </div>
                <div className="nama-belakang-class">
                    <p>Nama Belakang</p>
                    <input
                    type="text"
                    name="namaBelakang"
                    id="namaBelakang"
                    className="nama-belakang"
                    placeholder="Masukan Nama Belakang"
                    onChange={handleChange}
                    />
                </div>
                </div>
                <div className="email-class">
                <p>Alamat Email</p>
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="email"
                    placeholder="Masukkan Alamat Email"
                    onChange={handleChange}
                />
                </div>
                <div className="subject-class">
                <p>Subject</p>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="subject"
                    placeholder="Masukkan subject"
                    onChange={handleChange}
                />
                </div>
                <div className="pesan-class">
                <p>Pesan</p>
                <input
                    type="text"
                    name="pesan"
                    id="pesan"
                    className="pesan"
                    placeholder="Masukkan pesan"
                    onChange={handleChange}
                />
                </div>
            </div>
            <button onClick={handleSubmit}>Send Messages</button>
            </div>
        </div>
    </Fragment>
  );
};

export default Footer;
