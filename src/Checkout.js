import React from 'react'
import "./checkout.css"
import Checkoutproduct from './Checkoutproduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <>
            <div className="checkout">
                <div className="checkout_left">
                    <img className="checkout-add" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                    <div>
                        <h3>Hello {user?.email}</h3>
                        <h2 className="checkout_title">your Shooping Busket</h2>
                        {basket.map(item => (
                            <Checkoutproduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
                <div className="checkout_right">

                    <Subtotal />
                </div>
            </div>
        </>
    )
}

export default Checkout
