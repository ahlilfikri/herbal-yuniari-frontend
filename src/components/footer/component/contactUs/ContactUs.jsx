import React, { Fragment, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from '../../../modalAlert/ModalAlert';
import './ContactUs.css';

export const ContactUs = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [load,setLoad] = useState("");

  const sendEmail = (e) => {
    try{
      setLoad("loading");
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
      
      setLoad("success");
    }catch(err){
      console.log(err);
      setLoad("failed")
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <h1 className='text-center text-md-start'>Hubungi Kami</h1>
      <form ref={form} onSubmit={sendEmail} className='ps-5 ps-md-0'>
        <div className="row contact ">
          <div className="col-6 ">
            <div className="row nama">
              <div className="col-md-6 nama-depan-class">
                <label>Nama Depan</label>
                <input type="text" name="user_name_depan" className="nama-depan" placeholder="Masukkan Nama Depan" />
              </div>
              <div className="col-md-6 nama-belakang-class">
                <label>Nama Belakang</label>
                <input type="text" name="user_name_belakang" className="nama-belakang" placeholder="Masukkan Nama Belakang" />
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="email-class">
              <label>Alamat Email</label>
              <br />
              <input type="email" name="user_email" className="email" placeholder="Masukkan Alamat Email" />
            </div>
          </div>
          <div className=" col-6">
            <div className="subject-class">
              <label>Subject</label>
              <br />
              <input type="text" name="user_subject" className="subject" placeholder="Masukkan Subject" />
            </div>
          </div>
          <div className=" col-6">
            <div className="pesan-class">
              <label>Message</label>
              <br />
              <input type="text" name="message" className="pesan" placeholder="Masukkan Pesan" />
            </div>
          </div>
        </div>
        <input type="submit" value="Send Messages" className="submit" />
      </form>
      {load == "loading" && <Modal isOpen={isModalOpen} onClose={closeModal} message={"Sedang Mengirim Pesan"}/>}
      {load == "success" && <Modal isOpen={isModalOpen} onClose={closeModal} message={"Message sent successfully"}/>}
      {load == "failed" && <Modal isOpen={isModalOpen} onClose={closeModal} message={"Gagal Mengirim Pesan"}/>}
      
    </Fragment>
  );
};
