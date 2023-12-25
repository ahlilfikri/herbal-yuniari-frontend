import React, { Fragment,useState,useEffect } from "react";
import axios from 'axios';
import ChooseUs from "./component/chooseUs/ChooseUs";
import Partner from "./component/partner/Partner";
import './TentangKami.css';



const TentangKami = () => {
    const [data, setData] = useState({});
    const getAPI = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_BASE_URL+"/tentangKami")
            setData(response.data.data[0]);
        }catch(error ) {
            console.error('Error fetching data:', error);
        };
    }
    useEffect(() => {
        getAPI();
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
