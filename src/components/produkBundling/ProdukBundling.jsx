import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import '../../page/home/session/produk/Produk'

const produkBundling = () => {
    const [data, setData] = useState([]);
    const api = 'http://localhost:3000/produkBundling'; // Use http://localhost
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
            <h1>PRODUK BUNDLING MINGGU INI</h1>
            <div className="card-wrapper">
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.image} alt=""/>
                        <div className="card-body">
                            <h1 className="card-title">{item.title}</h1>
                            <ul className="card-text">
                            {Array.isArray(item.content) && item.content.map((itm, idx) => (
                                <li id={idx}>{itm}</li>
                            ))}
                            </ul>
                            <button>Hubungi Admin</button>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default produkBundling;
