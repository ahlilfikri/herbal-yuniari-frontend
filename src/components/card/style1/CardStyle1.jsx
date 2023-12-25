// CardStyle1.js
import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CardStyle1 = ({ item, link }) => {
  const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
  console.log(link);
  return (
    <Fragment>
      {link ? (
        <div className="card">
          <Link to={`/product/${item._id}`} style={{textDecoration: 'none'}}>
            <img src={imageSrc} alt="" />
            <div className="card-title">
              <h1>{item.title}</h1>
            </div>
          </Link>
        </div>
      ) : (
        <div className="card">
          <img src={imageSrc} alt="" />
          <div className="card-title">
            <h1>{item.title}</h1>
          </div>
        </div>
      ) 
      }
    </Fragment>
  );
};

export default CardStyle1;
