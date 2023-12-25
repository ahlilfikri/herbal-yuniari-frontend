import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import '../../Produk.css';
import Whatsapp from '../../../../../../components/whatsapp/Whatsapp';

const ProdukBundling = () => {
    const [data, setData] = useState([]);

    const getAPI = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_BASE_URL + "/produkBundling")
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getAPI();
    }, []);

    return (
        <Fragment>
            <div className="row mb-5">
                <div className="col-1" style={{margin: '0px'}}></div>
                <div className="col-10 mb-5 mt-4" style={{borderRadius:'1.56vw',background:'linear-gradient(180deg, rgba(0, 163, 75, 0.88) 0%, rgba(0, 103, 47, 0.77) 100%)'}}>
                    <h1>PRODUK BUNDLING MINGGU INI</h1>
                    <div className="row card-wrapper pb-5 ">
                        {data.map((item, index) => {
                            const imageSrc = `${import.meta.env.VITE_BASE_URL}/assets/${encodeURIComponent(item.image)}`;
                            return (
                                <div className="col-12 col-md-6">
                                    <div className="row mt-4">
                                        <div className="col-1"></div>
                                        <div className="col-10" key={index}>
                                            <div className="card ">
                                                <div className="d-flex justify-content-between">
                                                    <img src={imageSrc} alt="" />
                                                    <div className="card-body">
                                                        <h1 className="card-title">{item.title}</h1>
                                                        <ul className="card-text">
                                                            {Array.isArray(item.content) && item.content.map((itm) => (
                                                                <li key={itm.id}>{itm}</li>
                                                            ))}
                                                        </ul>
                                                        <Whatsapp
                                                            data={item.title}
                                                            type="bundling"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </Fragment>
    )
}

export default ProdukBundling;
