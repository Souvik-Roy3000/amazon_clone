import React, { useState, useEffect } from 'react'
import { db } from './firebase';
import "./orders.css"
import Order from './Order';
import { useStateValue } from './StateProvider'
import { motion } from 'framer-motion';
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();

    useEffect(() => {
        if (user) {
            db.collection("users").doc(user?.uid).collection("orders").orderBy("created", "desc").onSnapshot(snapshot => (setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
            ))
        } else {
            setOrders([]);
        }


    }, [user])
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className='orders'>
                <h1>Your Orders</h1>

                <div className='orders__order'>
                    {orders?.map(order => (
                        <Order order={order} />
                    ))}
                </div>
            </motion.div>
        </>
    )
}

export default Orders
