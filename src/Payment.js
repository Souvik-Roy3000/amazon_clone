import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Checkoutproduct from './Checkoutproduct';
import CurrencyFormat from "react-currency-format"
import "./payment.css"
import { useHistory } from 'react-router';
import axios from './Axios';
import { useStateValue } from './StateProvider'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { BasketTotalAmount } from './Reducer';
import { db } from './firebase';
const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();
    const [error, seterror] = useState(null);
    const [disabled, setdisabled] = useState(true);
    const [successed, setsuccessed] = useState(false);
    const [processing, setprocessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${BasketTotalAmount(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log("the secret key is >>>", clientSecret);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setprocessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            db.collection("users").doc(user?.uid).collection("orders").doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setsuccessed(true);
            seterror(null);
            setprocessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace("/orders")
        })

    }
    const handleChange = (e) => {
        //handlechange
        setdisabled(e.empty);
        seterror(e.error ? e.error.message : "")
    }
    return (
        <>
            <div className="payment">
                <div className="payment_container">
                    <h1>Checkout (<Link to="/checkout"> {basket?.length} items </Link>)</h1>
                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment_address">
                            <p>{user?.email}</p>
                            <p>123, bekar street</p>
                            <p>london, UK</p>
                        </div>
                    </div>

                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Review Items and Delivery</h3>
                        </div>
                        <div className="payment_items">
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
                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment_details">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                                <div className="payment_price_container">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <>
                                                <h3>Order total: {value}</h3>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value={BasketTotalAmount(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                    />
                                    <button disabled={processing || disabled || successed}>
                                        <span>{processing ? <p>Processing </p> : "Buy Now"}</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment
