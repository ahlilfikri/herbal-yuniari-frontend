import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import './ProdukTerlaris.css';
import Card from '../card/style1/CardStyle1';

const ProdukTerlaris = () => {
    const [data, setData] = useState([]);
    const getAPI = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_BASE_URL+"/produkTerlaris")
            setData(response.data.data);
        }catch(error ) {
            console.error('Error fetching data:', error);
        };
    }
    const coba = 5;
    useEffect(() => {
        getAPI()
    }, []);

    return (
        <Fragment>
           <div className="right-contain">
                <h1>PRODUK TERLARIS BULAN INI</h1>
                <div className="card-wrapper">
                    {data.map((item, index) => (
                        <Card key={index} item={item} link={'produk/:id'} />
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default ProdukTerlaris;
