import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./Partner.css";
import Slider from "react-slick";
import { sliderSettings } from "../../../../../../setting/partnerCarousel/PartnerCarousel";
import Card from "../../../../../../components/card/style1/CardStyle1";

const Partner = () => {
  const [data, setData] = useState([]);

  const getAPI = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_BASE_URL+"/partner")
        setData(response.data.data);
    }catch(error ) {
        console.error('Error fetching data:', error);
    };
}

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <Fragment>
      <div className="container-fluid partner-container">
        <h1 className="title-partner">PARTNER KAMI</h1>
        <div className="card-wrapper">
          <Slider {...sliderSettings}>
            {data.map((item, index) => {
              const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
              return(
              <div className="card mx-5" >
                <div className="row">
                  <div className="col-4">
                    <img src={imageSrc} alt="" />
                  </div>
                  <div className="col-8 d-flex align-items-center justify-content-center h-max mt-2">
                    <h1 className="d-flex">{item.title}</h1>
                  </div>
                </div>
              </div>
            )})}
            {/* <Card item={item} key={index}/> */}
          </Slider>
        </div>
      </div>
    </Fragment>
  );
};

export default Partner;