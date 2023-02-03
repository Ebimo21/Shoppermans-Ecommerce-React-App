import React from 'react'
import { useCart } from 'react-use-cart'
import "../styles/checkout.css"
import { useNavigate } from 'react-router-dom';




export const Success = () => {
    const {
        cartTotal,
      } = useCart()
      
      let navigate = useNavigate()

      function submitButton(e){ 
            
          e.preventDefault()
          navigate('/')
    
      }
  return (
    <div style={{
        display:"flex", 
        flexDirection: "column", 
        marginTop:"9em", 
        justifyContent:"center", 
        alignItems: "center"}}>

        <div style={{
            display:"flex", 
            padding:"1.4em", 
            border: "0.06em solid black", 
            borderRadius:"0.9em", 
            marginLeft:"2em", 
            marginRight: "2em", 
            flexDirection: "column", 
            justifyContent:"center", 
            alignItems: "center"}}>

            <img
             src='https://cdn.dribbble.com/users/508588/screenshots/14600846/media/f6bc1e5666f4799fc7072c4e9dabe093.jpg?compress=1&resize=640x480&vertical=top' 
             alt="success" 
             style = {{ 
                width: "16em", 
                height: "12em"}}/>
            <h2>Payment Successful</h2>
            <p  style = {{ 
                textAlign: "center", 
                marginBottom: "1.5em", 
                marginTop: "1em"}} > Your payment of ${cartTotal} on Shoppermans is Successful, delivery in 2days time</p> 
            <button style = {{
                width: "24em", 
                height: "3.1em", 
                backgroundColor: "#0A71CF", 
                color:"white", 
                border:"none", 
                borderRadius: "0.5em"}}
                
                onClick ={submitButton}>Back to Home</button>
        </div>
        
    </div>
  )
}
