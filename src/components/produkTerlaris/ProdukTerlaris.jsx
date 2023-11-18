import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import './ProdukTerlaris.css';
import Card from '../card/style1/CardStyle1';

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
                    {data.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default ProdukTerlaris;
