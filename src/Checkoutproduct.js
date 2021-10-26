import { useAnimation } from 'framer-motion';
import React from 'react'
import "./checkoutproduct.css"
import { useStateValue } from './StateProvider'
import { motion } from 'framer-motion';
const Checkoutproduct = ({ id, image, title, rating, price, hidebutton }) => {

    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    const control = useAnimation();
    return (
        <>
            <div className="checkout_product">
                <img className="checkout_image" src={image} alt="image" />
                <div className="checkout_info">
                    <p className="checkoutproduct_title">{title}</p>
                    <p className="checkout_price">
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkout_rating">
                        {Array(rating).fill().map((_, i) => ((<p>⭐</p>)))}
                    </div>
                    {!hidebutton && (<button onClick={removeFromBasket} >Remove from busket</button>)}

                </div>

            </div>
        </>
    )
}

export default Checkoutproduct
