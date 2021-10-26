import React from 'react'
import "./product.css"
import { motion } from "framer-motion"
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
            <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 1000, opacity: 0.5 }}
                transition={{ duration: 0.5 }}
                className="product">
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
                <motion.button
                    whileTap={{ scale: 0.7, duration: 0.5 }}
                    onClick={add_to_basket}>add to busket</motion.button>
            </motion.div>
        </>
    )
}
// 
export default Product;
