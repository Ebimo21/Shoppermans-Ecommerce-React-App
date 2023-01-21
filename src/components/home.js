import React from 'react';
import ProductCard from './ProductCard';
import { GiWatch, GiPocketWatch } from "react-icons/gi"
import { BsWatch } from "react-icons/bs"
import { HiOutlineColorSwatch, HiShoppingCart } from "react-icons/hi"
import { FaHome } from 'react-icons/fa'
import Discount from './discount';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import '../styles/cards.css'
import '../styles/cart.css'



function Home() {
    const product = [


        {
            id: 5,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/K/204627_1665006860.jpg",
            name: "Hublot",
            price: "4500",
            discount: "20% off",
            specs: "Available in Brown, Yellow and red Colors"
        },
        {
            id: 6,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/O/2117_1665065970.jpg",
            name: "Kimono Swatch",
            price: "6500",
            discount: "20% off",
            specs: "Available in Brown, Yellow and red Colors"
        },
        {
            id: 3,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/D/67343_1634561716.jpg",
            name: "Diamond Cut",
            price: "2100",
            discount: "20% off",
            specs: "Available in Brown, Yellow and red Colors"
        },
        {
            id: 4,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/u/Multifunction-Chronograph-Analog-Digital-Sports-Watch--Black-8008886.jpg",
            name: "Casio",
            price: "1200",
            discount: "20% off",
            specs: "Available in Brown, Yellow and red Colors"
        },
        {
            id: 5,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/R/189377_1656609424.jpg",
            name: "Block",
            price: "1200",
            discount: "20% off",
            specs: "Available in Brown, Yellow and red Colors"
        },
        {
            id: 11,
            image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/u/Multifunction-Chronograph-Analog-Digital-Sports-Watch--Black-8008886.jpg",
            name: "Casio",
            price: "1200",
            discount: "20% off",
            specs: "Available in Brown, Yellow and red Colors"
        },
    ]
    
    const {
        totalItems }
        = useCart()

    return (
        <div className='div-first-flex'>
            <div style={{ position: "fixed", width: "100%", top: "0" }}>
                <header>
                    <Link to='/' style={{
                        color: "white",
                        textDecoration: "none"
                    }}>
                        <h4>Shoppermans.com <FaHome /></h4>
                    </Link>
                    <Link to="/cart">
                        <div className='div-span' style={{
                            fontSize: "1em", color: "white",
                            textDecoration: "none",
                            justifyContent: "baseline"
                        }} > <HiShoppingCart style={{ fontSize: "2em" }} />
                            <div className='div-span-cart'
                                style={{
                                    borderRadius: "50%",
                                    height: "1.34rem", width: "1.34rem",
                                    fontSize: "0.56em",
                                    backgroundColor:
                                        "#0a71cf", color: "white"
                                }}>{totalItems}</div>
                        </div>
                    </Link>
                </header>
            </div>
            <div className='div-first-column-first'>
                <div className='div-first'>
                    <div className='div-first-column'>
                        <BsWatch style={{ marginTop: "0.1em", fontSize: "1.2rem" }} />
                        <p className='div-para-column'>Simple Watches</p>
                    </div>
                    <div className='div-first-column'>
                        < HiOutlineColorSwatch style={{ marginTop: "0.1em", fontSize: "1.2rem" }} />
                        <p className='div-para-column'>Gold Watches</p>
                    </div>
                    <div className='div-first-column'>
                        <GiWatch style={{ marginTop: "0.1em", fontSize: "1.2rem" }} />
                        <p className='div-para-column'>Diamond Watches</p>
                    </div>
                    <div className='div-first-column'>
                        <GiPocketWatch style={{ marginTop: "0.1em", fontSize: "1.2rem" }} />
                        <p className='div-para-column'>Royal Watches</p>
                    </div>
                    <div className='div-first-column'>
                        < HiOutlineColorSwatch style={{ marginTop: "0.1em", fontSize: "1.2rem" }} />
                        <p className='div-para-column'>Luxury Watches</p>
                    </div>
                    <div className='div-first-column'>
                        <GiWatch style={{ marginTop: "0.1em", fontSize: "1.2rem" }} />
                        <p className='div-para-column'>Military Watches</p>
                    </div>
                    <div className='div-first-column'>
                        <GiPocketWatch style={{ marginTop: "0.1em", fontSize: "1.2rem" }} />
                        <p className='div-para-column'>Designer Watches</p>
                    </div>
                </div>
                <div >
                    <div className='div-hero-first'>

                    </div>
                    <div className='div-first-column-no'>
                        <div className='div-hero'>

                        </div>
                        <div className='div-hero-last'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='div-hero-first-first'>

            </div>
            <div style={{ marginTop: "1.2em" }}>
            
                <Discount />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h2 className='box-product-this' style={{ marginTop: "2em", marginBottom: "0.4em", display: "flex", float: "left", }}>
                    RECOMMENDED FOR YOU
                </h2>
            </div>

            <div className='box-product'>
                    
                   {product.map((product, id) => {
                        return (
                            <div key={id} >
                                <ProductCard
                                    data={product}
                                    id={product.id}
                                    img={product.image}
                                />
                            </div>
                        )
                    })} 
            
            </div>
            <br/>
            <div className='box-product'>
            {product.map((product, id) => {
                        return (
                            <div key={id} >
                                <ProductCard
                                    data={product}
                                    id={product.id}
                                    img={product.image}
                                />
                            </div>
                        )
                    })} 
            
            </div>

            <div><br />
                <Discount />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h2  className='box-product-this' style={{ marginTop: "4em", marginBottom: "0.4em", display: "flex", float: "left", }}>
                    NEW DEALS
                </h2>
            </div>

            <div className='box-product'>
            {product.map((product, id) => {
                        return (
                            <div key={id} >
                                <ProductCard
                                    data={product}
                                    id={product.id}
                                    img={product.image}
                                />
                            </div>
                        )
                    })} 
            
            </div>
            <br/>
            <div className='box-product'>
            {product.map((product, id) => {
                        return (
                            <div key={id} >
                                <ProductCard
                                    data={product}
                                    id={product.id}
                                    img={product.image}
                                />
                            </div>
                        )
                    })} 
            
            </div>
            <div>
                <div className='last-footer-last'>

                </div>
                <div className='first-footer'>
                    {/* <h1 className='h-one'>Shopping made easier with Shoppermans</h1> */}
                    <div>
                        <h3 className='h-one'>Subcribe to
                            our Newsletter to get update on our best
                            products</h3>
                        <div className='input-form'>
                            <input className='input-mails' type="text" placeholder="Enter Email Address" />
                            <button className='btn-mails'> Subcribe</button>
                        </div>
                    </div>
                </div>
                <div className='last-footer'>

                    <div style={{textDecoration: "none"}}>
                        <h3 className='h-footer'>Built By Ibeneme Ikenna Frontend Developer</h3>
                        <a style={{textDecoration: "none", color:"white"}} href ="www.twitter.com/ibeneme_ikenna" ><h3 className='h-para'>His Twitter</h3> </a>
                        <a style={{textDecoration: "none", color:"white"}} href ="mailto:ibenemeikenna96@gmail.com"><p className='h-para'> Send Him a Mail</p></a>
                    
                    </div>
                    <div>
                        <h3 className='h-footer'>Make Money With Shoppermans</h3>
                        <p className='h-para'>Sell on Shoppermans</p>
                        <p className='h-para'>Become a Sales Consultant</p>
                    </div>
                    <div>
                        <h3 className='h-footer'>Shoppermans International</h3>
                        <p className='h-para'>China</p>
                        <p className='h-para'>India</p>
                        <p className='h-para'>Korea</p>
                        <p className='h-para'>Nigeria</p>
                    </div>

                </div>

                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Home;