import React from 'react'
import "./checkoutproduct.css"
import { useStateValue } from './StateProvider'
const Checkoutproduct = ({ id, image, title, rating, price }) => {

    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

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
                    <button onClick={removeFromBasket} >Remove from busket</button>
                </div>

            </div>
        </>
    )
}

export default Checkoutproduct
