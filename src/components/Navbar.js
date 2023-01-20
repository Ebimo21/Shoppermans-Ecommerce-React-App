
import { HiShoppingCart} from 'react-icons/hi'
import "../styles/App.css"
import { useCart } from "react-use-cart"
import {Link} from "react-router-dom"
import {FaHome }from 'react-icons/fa'

function NavBar(){
    const {
        totalItems}
        = useCart()
    
    return ( 
        <div>
            <header>
                <Link to = '/home' style={{ color:"white",
                    textDecoration: "none" 
                    }}>
                    <h4>Shoppermans.com <FaHome /></h4>
                </Link>
                <Link to ="/cart">
                <div className='div-span' style={{ fontSize:"1em", color:"white",
                    textDecoration: "none", 
                    justifyContent:"baseline"}} > <HiShoppingCart style={{fontSize:"2em"}} />
                    <div className='div-span-cart' 
                    style={{borderRadius: "50%", 
                    height: "1.34rem", width: "1.34rem",
                    fontSize:"0.56em", 
                     backgroundColor: 
                    "#0a71cf", color: "white"}}>{totalItems}</div>
                    </div>
                </Link>
            </header>
        </div>
     )}
  
  export default NavBar;