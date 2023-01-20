import React from 'react';
import { useCart } from 'react-use-cart';
import '../styles/cards.css'


const ProductCard = (props)=>{
  let { specs, name, image, price, discount } = props.data

  const { addItem } = useCart([])

  const addToCart = ()=> {
   addItem(props.data)
  }
  return (
    <div className='box-product'> 
      <div className="product-container">
        <img className="image" src={image} alt ={name}/>
        <p className="product-discount">{discount}</p>
        <div className="contain">
          <h6 className="product-name"  >{name}</h6> 
          <h6  className="product-specs" > {specs}</h6>
          <div className="spread-product">
            <div className="shiftleft">
              <h6 className="product-price"> ${price}</h6>
            </div>
            <div className="shiftright">
              <button 
              style={{alignItems: 'baseline'}}
              className="cta-product" 
              onClick={()=>addToCart()}> Add to Cart</button>    
            </div>
          </div>
        </div>
    </div>
  </div>
    
  
      
 
    )

  ;
}

export default ProductCard;