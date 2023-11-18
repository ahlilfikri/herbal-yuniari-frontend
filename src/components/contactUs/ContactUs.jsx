import React, { Fragment, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from '../modalAlert/ModalAlert';
import './ContactUs.css';

export const ContactUs = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0a8ll7c', 'template_0cpztqq', form.current, 'uvN1IPNhYNhnOq86t')
      .then((result) => {
        console.log(result.text);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <h1>Hubungi Kami</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact">
          <div className="nama">
            <div className="nama-depan-class">
              <label>Nama Depan</label>
              <input type="text" name="user_name_depan" className="nama-depan" placeholder="Masukkan Nama Depan" />
            </div>
            <div className="nama-belakang-class">
              <label>Nama Belakang</label>
              <input type="text" name="user_name_belakang" className="nama-belakang" placeholder="Masukkan Nama Belakang" />
            </div>
          </div>
          <div className="email-class">
            <label>Alamat Email</label>
            <br />
            <input type="email" name="user_email" className="email" placeholder="Masukkan Alamat Email" />
          </div>
          <div className="subject-class">
            <label>Subject</label>
            <br />
            <input type="text" name="user_subject" className="subject" placeholder="Masukkan Subject" />
          </div>
          <div className="pesan-class">
            <label>Message</label>
            <br />
            <input type="text" name="message" className="pesan" placeholder="Masukkan Pesan" />
          </div>
        </div>
        <input type="submit" value="Send Messages" className="submit" />
      </form>

      <Modal isOpen={isModalOpen} onClose={closeModal} message={"Message sent successfully"}/>
    </Fragment>
  );
};
