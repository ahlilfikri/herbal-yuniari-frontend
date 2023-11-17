import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import './ProdukTerlaris.css'

const ProdukTerlaris = () => {
    const [data, setData] = useState([]);
    const api = 'http://localhost:2700/produkTerlaris'; // Use http://localhost
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
           <div className="right-contain">
                <h1>PRODUK TERLARIS BULAN INI</h1>
                <div className="card-wrapper">
                    {data.map((item, index) => {
                        const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
                        return (
                            <div className="card" key={index}>
                                <img src={imageSrc} alt=""/>
                                <div className="card-title">
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default ProdukTerlaris;
