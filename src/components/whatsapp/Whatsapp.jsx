// WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  const openWhatsAppChat = () => {
    const phoneNumber = '6288210335073'; // Replace with the desired phone number
    const dynamicData = 'Hello, this is dynamic data!'; // Replace with your dynamic content
    const message = encodeURIComponent(`Check out this information: ${dynamicData}`);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <button onClick={openWhatsAppChat}>
      Hubungi Admin
    </button>
  );
};

export default WhatsAppButton;
