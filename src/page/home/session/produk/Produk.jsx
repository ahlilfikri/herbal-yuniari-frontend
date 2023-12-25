import React, { Fragment } from "react";
import ProdukTerlaris from "./components/produkTerlaris/ProdukTerlaris";
import ProdukUnggulan from "./components/produkUnggulan/ProdukUnggulan";
import ProdukBundling from "./components/produkBundling/ProdukBundling";
import './Produk.css';


const Produk = () => {
    return (
        <Fragment>
            <div className="produk-container">
                <div className="top-container">
                    <ProdukUnggulan />
                    <ProdukTerlaris />
                </div>
                <div className="bottom-container">
                    <ProdukBundling />
                </div>
            </div>

        </Fragment>
    )
}

export default Produk;
