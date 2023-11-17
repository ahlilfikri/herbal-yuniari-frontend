import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import '../../page/home/session/produk/Produk';
import Whatsapp from '../whatsapp/Whatsapp';

const produkBundling = () => {
    const [data, setData] = useState([]);
    const api = `${import.meta.env.VITE_BASE_URL.replace("https", "http")}/produkBundling`; // Use http://localhost
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
        getAPI()
    }, []);

    return (
        <Fragment>
            <h1>PRODUK BUNDLING MINGGU INI</h1>
            <div className="card-wrapper">
                {data.map((item, index) => {
                    const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
                    return (
                        <div className="card" key={index}>
                            <img src={imageSrc} alt=""/>
                            <div className="card-body">
                                <h1 className="card-title">{item.title}</h1>
                                <ul className="card-text">
                                {Array.isArray(item.content) && item.content.map((itm) => (
                                    <li key={item.id}>{itm}</li>
                                ))}
                                </ul>
                                <Whatsapp />
                                {/* <button>Hubungi Admin</button> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default produkBundling;
