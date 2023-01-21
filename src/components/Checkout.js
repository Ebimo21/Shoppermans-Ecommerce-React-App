

import '../styles/checkout.css'
import React from 'react';
import '../styles/App.css'
import { useCart } from 'react-use-cart'
import '../styles/cart.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Checkout(){

  const {
    cartTotal,
  } = useCart()


  const [ deliveryAddress, setdeliveryAddress ] = useState("")
  const [ firstName, setFirstName ] = useState("")
  const [ lastName, setLastName ] = useState("")



  function submitButton(e){
    setdeliveryAddress(deliveryAddress)
    setFirstName(firstName)
    setLastName(lastName)
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
         <div className='div-cartta-two-two'>
          <div>
            <h2 className='price'>CART SUMMARY</h2>
          </div>
          <div className='spread-cart-one'>
            <p style={{fontSize:"0.8em"}}>Checkout Total</p>
            <h2 className='total-price'>${cartTotal}</h2>
          </div>
          <div>
        

          </div>
        </div>
        <div className='div-cartta'>
        <div className="checkout-container">
            <div>
                <h2 className='price'>PAYMENT</h2>
            </div>
           {/* <div className="checkout-container-inside">
                <h4 className="checkout-container-font-this">Delivery</h4><span className="checkout-container-font"> - </span>
                <h4 className="checkout-container-font">Summary </h4><span className="checkout-container-font"> - </span>
                <h4 className="checkout-container-font">Payment</h4>
            </div>  */}
            <form onSubmit= { submitButton }  style={{marginTop:"1em"}}>
                <label>
                    <h2 className="checkout-font">First Name<span className="checkout-span">*</span></h2>
                    <input 
                    style={{marginBottom:"2em"}} 
                    className="input-box"
                        placeholder="Enter your First Name"
                        type="text"
                        onChange={(e)=>{setFirstName(e.target.value)}}
                        value={firstName} required />
                </label>
            
                <label>  <br />
                    <h2 className="checkout-font">Last Name<span className="checkout-span">*</span></h2>

                    <input style={{marginBottom:"2em"}} className="input-box"
                        placeholder="Enter your Last Name"
                        type="text"
                        onChange={(e)=>{setLastName(e.target.value)}}
                        value={lastName} required/>
                
                
                </label> 

                <label>  <br />
                    <h2 className="checkout-font">Delivery Address <span className="checkout-span">*</span></h2>

                    <textarea style={{marginBottom:"2em"}} className="input-box-this"
                        placeholder =  "Enter your Delivery Address"
                        type="text"
                        onChange={(e)=>{setdeliveryAddress(e.target.value)}}
                        value={deliveryAddress} required>
                </textarea>
                
                </label> 
            
            <br />

                {/* <Link to = "/details" > */}
                    <button className="button-span">Next
                        </button>
                {/* </Link> */}
                    
                

            </form>
            
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