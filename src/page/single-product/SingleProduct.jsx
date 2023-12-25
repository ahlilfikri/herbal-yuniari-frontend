// SingleProduct.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import './SingleProduct.css'

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAPI = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/produkTerlaris/${id}`);
      setData(response.data.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAPI();
  }, []);

  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div style={{ height: '7vw' }}>
        <NavBar color="green" />
      </div>
      <div className="container mb-4 container-single-product" style={{ position: 'relative', padding: '5vw 0 0 0', minHeight: '23.7vw' }}>
        <div className="row">
          <div className="col-12 col-md-5 text-center">
            ini foto dan slider
          </div>
          <div className="col-12 col-md-7">
            <h1>{data.title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eveniet consequuntur iure voluptatum tempora
              earum deserunt saepe non libero sed recusandae reiciendis ut, est dolor ipsam fugiat consequatur totam
              numquam.
            </p>
            <h1>IDR 20.000</h1>
            <div className="d-flex align-items-center">
              <p>qty</p>
              <p className="card p-2 text-light px-5 ms-5" style={{background: 'rgba(0, 143, 66, 1)'}}>Add To Cart</p>
            </div>
            <div className="komentar">
              <p>komentar</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
