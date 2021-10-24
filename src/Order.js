import React from 'react'
import moment from "moment"
import "./order.css"
import Checkoutproduct from './Checkoutproduct'
import CurrencyFormat from 'react-currency-format'
const Order = ({ order }) => {
    return (
        <>

            <div className="order">
                <h2>Thank You for Purchasing on Amazon-Clone</h2>
                <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")} </p>
                <p className="order_id">
                    ORDER_ID : <small>{order.id}</small>
                </p>
                {order.data.basket?.map(item => (
                    <Checkoutproduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        hidebutton
                    />
                ))}
                <CurrencyFormat
                    renderText={(value) => (
                        <h3 className="order_total">Order Total: {value}</h3>
                    )}
                    decimalScale={2}
                    value={order.data.amount / 100}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
            </div>
        </>
    )
}

export default Order
