import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import './ChooseUs.css'

const ChooseUs = () => {
    const [data, setData] = useState([]);
    const api = `${import.meta.env.VITE_BASE_URL.replace("https", "http")}/chooseUs`;
    const getAPI = () => {
        axios.get(api)
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        getAPI();
    }, []);

    return (
        <Fragment>
            <div className="bottom-container">
                <h1 className="title-bottom">KENAPA MEMILIH KAMI?</h1>
                <div className="card-wrapper">
                    {data.map((item, index) => {
                        const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
                        return (
                            <div className="card" key={index} >
                                <img src={imageSrc} alt="" />
                                <div className="card-title">
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Fragment>
    )    
}

export default ChooseUs;
