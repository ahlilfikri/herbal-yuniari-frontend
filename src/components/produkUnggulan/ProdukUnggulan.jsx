import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import './ProdukUnggulan.css'

const produkUnggulan = () => {
    const [data, setData] = useState([]);
    const api = 'http://localhost:3000/produkUnggulan'; // Use http://localhost
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
            <div className="left-contain">
                <h1>PRODUK UNGGULAN KAMI</h1>
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

export default produkUnggulan;
