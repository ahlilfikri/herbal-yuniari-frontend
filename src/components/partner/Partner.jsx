import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./Partner.css";
import Slider from "react-slick";
import { sliderSettings } from "../../setting/partnerCarousel/PartnerCarousel";
import Card from "../card/style1/CardStyle1";

const Partner = () => {
  const [data, setData] = useState([]);
  const api = `${import.meta.env.VITE_BASE_URL.replace(
    "https",
    "http"
  )}/partner`;

  const getAPI = () => {
    axios.get(api)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <Fragment>
      <div className="partner-container">
        <h1 className="title-partner">PARTNER KAMI</h1>
        <div className="card-wrapper">
          <Slider {...sliderSettings}>
            {data.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </Fragment>
  );
};

export default Partner;