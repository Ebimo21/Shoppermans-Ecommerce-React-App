

import '../styles/checkout.css'
import React from 'react';
import '../styles/App.css'
import { useCart } from 'react-use-cart'
import '../styles/cart.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Checkout(props){

  const {
    cartTotal,


  } = useCart()


  const { firstName, setFirstName } = useState([])
  const { lastName, setLastName } = useState([])
  const { addRess, setAddress } = useState([])

  function firstNameClick(e) {
      setFirstName(e.target.value)
  }

  function lastNameClick(e) {
      setLastName(e.target.value)
  }

  function addressClick(e) {
      setAddress(e.target.value)
  }

  function submitNext(e) {

      setFirstName(firstName)
      setLastName(lastName)
      setAddress(addRess)
      e.preventDefault()
  }


  return (

    <section style={{display:"flex", flexDirection: "column"}}>
      <div >
        <div className='section-main'>
         
        <div style={{ display: "flex", alignItems:"center"}}>
          <Link to ="/" style={{textDecoration:"none",}}>
            <h4 style={{ color:"#000", textDecoration:"none",}}>Home </h4>
            </Link>

            <Link to ="/cart" style={{textDecoration:"none",}}>
              <h4 style={{color:"#000", textDecoration:"none", marginLeft:"0.2em"}}> - Cart</h4>
            </Link>

        
              <h4 style={{fontWeight:"900", color:"#0A71CF", marginLeft:"0.2em"}}> - Checkout</h4>
       
        
        </div>
        <div className='sect-main-main'>
         <div className='div-cartt-two-two'>
          <div>
            <h2 className='price'>CART SUMMARY</h2>
          </div>
          <div className='spread-cart-one'>
            <p>Checkout Total</p>
            <h2 className='total-price'>${cartTotal}</h2>
          </div>
          <div>
        

          </div>
        </div>
        <div className='div-cartt'>
        <div className="checkout-container">
            <div>
                <h2 className='price'>CHECKOUT FLOW</h2>
            </div>
            <div className="checkout-container-inside">
                <h4 className="checkout-container-font-this">Delivery</h4><span className="checkout-container-font"> - </span>
                <h4 className="checkout-container-font">Summary </h4><span className="checkout-container-font"> - </span>
                <h4 className="checkout-container-font">Payment</h4>
            </div>
            <form style={{marginTop:"1em"}}>
                <label>
                    <h2 className="checkout-font">Card Number<span className="checkout-span">*</span></h2>
                    <input className="input-box"
                        placeholder="12 Digits Card Number"
                        type="text"
                        onChange={firstNameClick}
                        value={firstName} />
                </label>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                <label>  <br />
                    <h2 className="checkout-font">Cvv<span className="checkout-span">*</span></h2>

                    <input className="input-box-box"
                        placeholder="cvv"
                        type="text"
                        onChange={lastNameClick}
                        value={lastName} />
                
                
                </label> 

                <label>  <br />
                    <h2 className="checkout-font">Card Expiry Date<span className="checkout-span">*</span></h2>

                    <input className="input-box-box"
                        placeholder="Card Expiry Date"
                        type="text"
                        onChange={lastNameClick}
                        value={lastName} />
                
                
                </label> 
                </div>
            <br />
                <label>
                    <h2 className="checkout-font">Password <span className="checkout-span">*</span></h2>

                    <input className="input-box"
                        type="password"
                        placeholder="Enter your Password"
                        onChange={addressClick}
                        value={addRess} />
                </label>  <br />

                
                    <button onClick={submitNext} className="button-span">Next
                    </button>
                

            </form>
            <h2>{firstName}{lastName}{addRess}</h2>
        </div>

        </div>
        </div>
        
        

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

  )



    
}
export default Checkout