import React from 'react';
import './ModalAlert.css';

const Modal = ({ isOpen, onClose, message }) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}

      {isOpen && <div className="overlay" onClick={onClose}></div>}
    </>
  );
};

export default Modal;
