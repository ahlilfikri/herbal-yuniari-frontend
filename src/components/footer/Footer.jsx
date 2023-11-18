// Footer.jsx

import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { ContactUs } from '../contactUs/contactUs';
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
                <ContactUs />
            </div>
        </div>
    </Fragment>
  );
};

export default Footer;
