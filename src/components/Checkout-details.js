

import '../styles/checkout.css'
import React from 'react';
import '../styles/App.css'
import { useCart } from 'react-use-cart'
import '../styles/cart.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from "formik"
import "../styles/checkout.css"




function CheckoutDetails(){

  const {
    cartTotal,
  } = useCart()
 

 

 
  const [ deliveryAddress, setdeliveryAddress ] = useState("")
  const [ cardNumber, setCardNumber ] = useState("")
  const [ cvvName, setCvvName ] = useState("")
  const [ expiryDate, setExpiryDate ] = useState("")
  const [ inputPassword, setPassword ] = useState("")

  
  const { values, handleChange} = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      deliveryAddress:"",
    }, 
    
  })


  function submitNext(e) {

      setCardNumber(cardNumber)
      setCvvName(cvvName)
      setExpiryDate(expiryDate)
      setPassword(inputPassword)
      setdeliveryAddress(deliveryAddress)
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
            <h2 className='price'>CART SUMMARY </h2>
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
           <div className="checkout-container-inside">
                <h4 className="checkout-container-font">Delivery</h4><span className="checkout-container-font"> - </span>
                <h4 className="checkout-container-font-this"> Payment</h4>
            </div> 
            <form onSubmit= { submitNext }  style={{marginTop:"1em"}}>
            <label>  <br />
                    <h2 className="checkout-font">Card Number <span className="checkout-span">*</span></h2>

                    <input style={{marginBottom:"2em"}} className="input-box-this-this"
                        placeholder =  "Enter your Card Number"
                        type="text"
                        onChange={(e)=>{setdeliveryAddress(e.target.value)}}
                        value={deliveryAddress} required>
                </input>
                
                </label> 
                {/* <label>
                    <h2 className="checkout-font">Card Number<span className="checkout-span">*</span></h2>
                    <input 
                    style={{marginBottom:"2em"}} 
                    className="input-box"
                        placeholder="12 Digits Card Number"
                        type="text"
                        id ="cardNumber"
                        onChange={handleChange}
                        value={values.cardNumber}  required />
                </label> */}
            
                <label>  <br />
                    <h2 className="checkout-font">Cvv<span className="checkout-span">*</span></h2>

                    <input style={{marginBottom:"2em"}} className="input-box" 
                        placeholder="cvv"
                        type="text"
                        id ="cvv"
                      onChange={handleChange}
                      value={values.cvvName}  required />
 
                
                
                </label> 

                <label>  <br />
                    <h2 className="checkout-font">Card Expiry Date<span className="checkout-span">*</span></h2>

                    <input style={{marginBottom:"2em"}} className="input-box"
                        placeholder =  "Card Expiry Date"
                        type="date"
                        id ="expiry"
                        onChange={handleChange}
                        value={values.expiryDate}  required/>
                
                
                </label> 
            
            <br />
                <label>
                    <h2 className="checkout-font">Password <span className="checkout-span">*</span></h2>

                    <input style={{marginBottom:"2em"}} className="input-box"
                        type="password"
                        placeholder="Enter your Password"
                        id ="pass"
                        onChange={handleChange}
                        value={values.inputPassword}  required/>
                </label>  <br />

                
                    <button  className="button-span">Next
                    </button>
                

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
export default CheckoutDetails