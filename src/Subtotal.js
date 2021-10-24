import React from 'react'
import "./subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { BasketTotalAmount } from './Reducer';
import { useHistory } from 'react-router';
const Subtotal = () => {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <>
            <div className="subtotal">
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p>
                                Subtotal ({basket.length} items): <strong>{value}</strong>
                            </p>
                            <small className="subtotal_gift">
                                <input type="checkbox" name="checkbox" id="checkbox" />
                                This order containes a gift</small>
                        </>
                    )}
                    decimalScale={2}
                    value={BasketTotalAmount(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
                <button onClick={e => history.push("/payment")} >Proceed to Checkout</button>
            </div>
        </>
    )
}

export default Subtotal
