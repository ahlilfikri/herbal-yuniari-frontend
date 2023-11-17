// WhatsAppButton.js
import React from 'react';

const WhatsAppButton = ({data,type}) => {
  const openWhatsAppChat = () => {
    const phoneNumber = '6288210335073'; 
    const dynamicData = data;
    console.log(type);
    if (type == "bundling"){
      const message = encodeURIComponent(`Halo permisi saya ingin menanyakan perihal bundling produk : ${dynamicData}`);
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappLink, '_blank');
    }
  };

  return (
    <button onClick={openWhatsAppChat}>
      Hubungi Admin
    </button>
  );
};

export default WhatsAppButton;
