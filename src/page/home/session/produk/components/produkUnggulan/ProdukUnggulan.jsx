import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import './ProdukUnggulan.css';
import Card from '../../../../../../components/card/style1/CardStyle1';

const produkUnggulan = () => {
    const [data, setData] = useState([]);
    const getAPI = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_BASE_URL+"/produkUnggulan")
            setData(response.data.data);
        }catch(error ) {
            console.error('Error fetching data:', error);
        };
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
                        <Card key={index} item={item} />
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default produkUnggulan;
