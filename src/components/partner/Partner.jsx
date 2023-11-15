import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import './Partner.css'

const Partner = () => {
    const [data, setData] = useState([]);
    const api = 'http://localhost:3000/partner'; // Use http://localhost
    const getAPI = () => {
        axios.get(api)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        getAPI()
    }, []);

    return (
        <Fragment>
            <div className="partner-container">
                <h1 className="title-partner">PARTNER KAMI</h1>
                <div className="card-wrapper">
                    {data.map((item, index) => (
                        <div className="card" key={index}>
                            <img src={item.image} alt=""/>
                            <div className="card-title">
                                <h1>{item.title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Partner;
