import React, { Fragment,useState,useEffect } from "react";
import axios from 'axios';
import ChooseUs from "../../../../components/chooseUs/ChooseUs";
import Partner from "../../../../components/partner/Partner";
import './TentangKami.css';



const TentangKami = () => {
    const [data, setData] = useState({});
    const apiTentangKami = 'http://localhost:3000/tentangKami'; // Use http://localhost
    const getTentangKami = () => {
        axios.get(apiTentangKami)
        .then(response => {
            setData(response.data[0]);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }
    useEffect(() => {
        getTentangKami()
    }, []);
    
    return (
        <Fragment>
            <div className="tentangKami-container">
                <h1 className="title">TENTANG KAMI</h1>
                <div className="top-container">
                    <img src="struktur.png" alt="" />
                    <p>{data.tentang}</p>
                </div>
                <div className="mid-container">
                    <div className="left-contain">
                        <h1>VISI</h1>
                        <p>{data.visi}</p>
                    </div>
                    <div className="right-contain">
                        <h1>MISI</h1>
                        <ol>
                        {Array.isArray(data.misi) && data.misi.map((item, index) => (
                                <li id={item.id}>{item}</li>
                            ))}
                        </ol>
                    </div>
                </div>
                <ChooseUs />
                <Partner />
            </div>
        </Fragment>
    )
}

export default TentangKami;
