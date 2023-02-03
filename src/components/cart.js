import {  HiShoppingCart } from "react-icons/hi"
import { FaHome } from 'react-icons/fa'
import React from 'react';
import '../styles/App.css'
import { useCart } from 'react-use-cart'
import '../styles/cart.css'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Link } from 'react-router-dom';



function Cart(){


  const {
    isEmpthy,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,


  } = useCart()


  if (Cart === isEmpthy){
    return (<h3>Your Cart is Empty</h3>)}
  return (

    <section style={{display:"flex", flexDirection: "column"}}>
          <div style={{ position: "fixed", width: "100%", top: "0",  }}>
                <header >
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
      <div >
        <div className='section-main' style={{ marginTop: "4em" }}>
         
        <div style={{display: "flex", alignItems:"center"}}>
          <Link to ="/" style={{textDecoration:"none",}}>
            <h4 style={{ color:"#000", textDecoration:"none",}}>Home </h4>
            </Link>
          <h4 style={{fontWeight:"900", color:"#0A71CF", marginLeft:"0.2em"}}> - Cart</h4>
        </div>
        <div className='sect-main-main'>
          <div className='div-cartt'>
          <div>
            <h2 className='table-headerr'> Cart ( {totalItems} )</h2>
          </div>
          <div className=''>

            {/* mapping of the carted items */}

            {items.map((items, id) => {
              return (
                <div key={id} >
                  <div style={{ marginTop: "1.3em", borderTop: "1px #d9d9d9 solid", paddingTop: "0.2em" }}>
                    <div className='mapping-cart'>
                      <div>
                        <img className='image-image' src={items.image} alt={items.name} />
                      </div>
                      <div className='section-main-cart'>
                        <h3 className='price'><b>{items.name}</b></h3>
                        <p className='paragr'>{items.specs}</p>
                      </div>
                      <div className='section-main-cart-one'>
                        <h2 className='price'>${items.price}</h2>
                        {/* <p className='disc'>-{items.discount}</p> */}
                      </div>
                    </div>
                    <div style={{ marginTop: "1em", marginBottom: "0.4em", display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                      <button className='button-remove'
                        onClick={() => removeItem(items.id)}>         <RiDeleteBin5Line className="icon-remove"/> Remove</button>
                      <div style={{ display: "flex", gap: "1.2em", alignItems: "center", }}>
                        <button className='button-add'
                          onClick={() => updateItemQuantity(items.id, items.quantity - 1)}>-</button>
                        <p>{items.quantity}</p>
                        <button className='button-add'
                          onClick={() => updateItemQuantity(items.id, items.quantity + 1)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='div-cartt-two'>
          <div>
            <h2 className='price'>CART SUMMARY</h2>
          </div>
          <div className='spread-cart-one'>
            <p>Total</p>
            <h2 className='total-price'>${cartTotal}</h2>
          </div>
          <div>
            <Link to="/checkout">
              <button className='button-pay'>CHECKOUT (${cartTotal})</button>
            </Link>

          </div>
        </div></div>
        
        

      </div>
      </div>
      

    
      <div>
                <div className='last-footer'>

                    <div>
                        <h3 className='h-footer'>About Us</h3>
                        <p className='h-para'> Terms and Conditions</p>
                        <p className='h-para'>Privacy Notice</p>
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
    </section>

  )} 


export default Cart;