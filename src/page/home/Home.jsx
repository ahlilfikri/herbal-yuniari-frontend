import { Fragment } from 'react';
import Beranda from './session/beranda/Beranda';
import TentangKami from './session/TentangKami/TentangKami'
import Produk from './session/produk/Produk';
import Footer from '../../components/footer/Footer'
import './Home.css'

const Home = () => {
    return (
        <Fragment >
            <div className="home-wrapper">
                <section id='beranda'>
                    <Beranda/>
                </section>
                <section id='tentangKami'>
                    <TentangKami /> 
                </section>
                <section id='produk'>
                    <Produk />
                </section>
                <section id="hubungiKami">
                    <Footer />
                </section>
            </div>
        </Fragment>
    )
}

export default Home