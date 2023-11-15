import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import './ChooseUs.css'

const ChooseUs = () => {
    const [data, setData] = useState([]);
    const api = 'http://localhost:3000/chooseUs'; // Use http://localhost
    const getAPI = () => {
        axios.get(api)
            .then(response => {
                setData(response.data);
                console.log(response);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        console.log(data);
        getAPI()
    }, []);

    return (
        <Fragment>
            <div className="bottom-container">
                <h1 className="title-bottom">KENAPA MEMILIH KAMI?</h1>
                <div className="card-wrapper">
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((item, index) => (
                            <div className="card" key={index}>
                                <img src={item.image} alt="" />
                                <div className="card-title">
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            </div>
        </Fragment>
    )    
}

export default ChooseUs;
