// CardStyle1.jsimport React from 'react';

const CardStyle1 = ({ item }) => {
  const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;

  return (
    <div className="card">
      <img src={imageSrc} alt="" />
      <div className="card-title">
        <h1>{item.title}</h1>
      </div>
    </div>
  );
};

export default CardStyle1;
