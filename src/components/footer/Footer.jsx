// Footer.jsx

import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { ContactUs } from './component/contactUs/ContactUs.jsx';
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

  return (
    <Fragment>
      <div className="container-fluid p-0 footer-container">
        <div className="row">
          <div className="col-0 col-md-1"></div>
          <div className="col-12 col-md-3">
            <div className="left-container text-center text-md-start ">
              <h1 className="title-footer">CV TIMOER SENTOSA</h1>
              <div className="media-social">
                <a href="">LinkTree</a>
                <a href="">Instagram</a>
                <a href="">Facebook</a>
                <a href="">Shopee</a>
              </div>
            </div>
          </div>
          <div className="col-11 col-md-7 ">
            <div className="right-container">
              <ContactUs />
            </div>
          </div>
          <div className="col-0 col-md-1"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
