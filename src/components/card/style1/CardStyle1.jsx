// CardStyle1.js
import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CardStyle1 = ({ item, link }) => {
  const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;

  return (
    <Fragment>
      {link ? (
        <Link to={`/product/${item._id}`}>
          <div className="card">
            <img src={imageSrc} alt="" />
            <div className="card-title">
              <h1>{item.title}</h1>
            </div>
          </div>
        </Link>
      ) : (
        <div className="card">
          <img src={imageSrc} alt="" />
          <div className="card-title">
            <h1>{item.title}</h1>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CardStyle1;
