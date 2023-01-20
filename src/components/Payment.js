import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import '../styles/checkout.css'



function Payment(){

    const {firstName, setFirstName} = useState([])
    const {lastName, setLastName} = useState([])
    const {addRess, setAddress} = useState([])

    function firstNameClick(e){
        setFirstName(e.target.value)
    }

    function lastNameClick(e){
        setLastName(e.target.value)
    }

    function addressClick(e){
        setAddress(e.target.value)  
    }

    function submitNext(e){
            
            setFirstName(firstName) 
            setLastName(lastName)
            setAddress(addRess)
            e.preventDefault()
    }
    
    return( 
        <div className="checkout-container">
            <div>
                <h2>Payment</h2>
            </div>
            <div className="checkout-container-inside"> 
                <h4 className="checkout-container-font-black">Delivery</h4><span className="span-this-black"></span>
                <h4 className="checkout-container-font-black">Summary</h4><span className="span-this-black"></span>
                <h4 className="checkout-container-font-this">Payment</h4>
            </div>
            <form>
                <label>
                    <h2 className="checkout-font">Card Number<span className="checkout-span">*</span></h2>
                    <input className="input-box"
                        placeholder ="First Name" 
                        type ="text" 
                        onChange={firstNameClick}
                        value = {firstName}/>
                </label>
                <label>  <br />
                    <h2 className="checkout-font">MM/YY<span className="checkout-span">*</span></h2>
               
                    <input className="input-box"
                        placeholder ="Last Name" 
                        type ="text" 
                        onChange={lastNameClick}
                        value = {lastName}/>
                </label>  <br />
                <label>
                    <h2 className="checkout-font">Cvv<span className="checkout-span">*</span></h2>
                 
                    <input className="input-box"
                        type ="text" 
                        placeholder = "Delivery Address" 
                        onChange={addressClick}
                        value = {addRess}/>
                </label>  <br />

                <Link to = "/home">
                    <button onClick={submitNext} className="button-span">Next
                    </button>
                </Link>
                
            </form>
            <h2>{firstName}{lastName}{addRess}</h2>
        </div>
    )
}
export default Payment