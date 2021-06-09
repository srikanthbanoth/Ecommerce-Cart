import React, { useEffect } from 'react'
// import instagram from './instagram.png'
import './Cart.css'
// import Shop from './Shop'

function Cart(props) {
    function calculateSum() {
        let sum = 0;
        for (let k = 0; k < props.cart.length; k++) {
            sum += props.cart[k].price;
        }
        return sum;
    }
    return (

        <div className="cart">
            <div className="Total">
                <p> Total : <span>${calculateSum()}</span></p>
            </div>
            {
                props.cart.map((product, index) => {
                    return (
                        <div className="items" key={index} >
                            <img src={product.image} alt="image_cart" />
                            <p>{product.title}</p>
                            <p className="price">${product.price}</p>
                            <button className="buttons" onClick={() => props.removeProduct(index)}>X</button>
                        </div>
                    )
                })

            }

        </div>
    )
}

export default Cart
