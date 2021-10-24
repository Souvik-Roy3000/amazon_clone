import React from 'react'
import "./product.css"
import { useStateValue } from './StateProvider'
const Product = ({ title, price, rating, image, id }) => {
    const [{ basket }, dispatch] = useStateValue();
    // console.log("this is the basket>>", basket);
    const add_to_basket = () => {

        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <>
            <div className="product">
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product_rating">
                        {Array(rating).fill().map((_, i) => ((<p>⭐</p>))


                        )}


                    </div>
                </div>
                <img src={image} alt="image" />
                <button onClick={add_to_basket}>add to busket</button>
            </div>
        </>
    )
}
// 
export default Product;
