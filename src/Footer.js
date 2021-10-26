import React, { useState } from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
const Footer = () => {

    return (
        <>
            <motion.footer
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 1100, opacity: 0.5 }}
                transition={{ duration: 1 }}
            >
                <div className="footer_div_first">
                    <div className="secondary_div">
                        <h1>Get to Know Us</h1>
                        <li><a>About Us</a></li>
                        <li> <a>Careers</a></li>
                        <li>  <a>aress Releases</a></li>
                        <li>  <a>Amazon Cares</a></li>
                        <li>  <a>Gift a Smile</a></li>
                    </div>
                    <div className="secondary_div">
                        <h1>Connect with Us</h1>
                        <li>  <a>Facebook</a></li>
                        <li> <a>Twitter</a></li>
                        <li> <a>Instagram</a></li>

                    </div>
                    <div className="secondary_div">
                        <h1>Make Money with Us</h1>
                        <li> <a>Sell on Amazon</a></li>
                        <li>  <a>Sell under Amazon Accelerator</a></li>
                        <li>  <a>Amazon Global Selling</a></li>
                        <li>  <a>Become an Affiliate</a></li>
                        <li>  <a>Fulfilment by Amazon</a></li>
                        <li>  <a>Advertise Your Products</a></li>
                        <li>  <a>Amazon Pay on Merchants</a></li>
                    </div>
                    <div className="secondary_div">
                        <h1>Let Us Help You</h1>
                        <li> <a>COVID-19 and Amazon</a></li>
                        <li>   <a>Returns Centre</a></li>
                        <li>  <a>100% Purchase Protection</a></li>
                        <li>  <a>Amazon App Download</a></li>
                        <li>  <a>Amazon Assistant Download</a></li>
                        <li>  <a>Help</a></li>
                    </div>
                </div>
                <div className="footer_div_second">
                    <div className="logo">
                        <Link to="/">
                            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="language_checkbox">
                        <div class="selectdiv">
                            <label>
                                <select>
                                    <option selected> English </option>
                                    <option>Hindi</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                    <option>italian</option>
                                    <option>Bengali</option>
                                    <option>Marathi</option>
                                    <option>Tamil</option>
                                    <option>Telegu</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="credit">
                    <h2>This Amazon-clone is created by Souvik Roy @2021</h2>
                </div>
            </motion.footer>
        </>
    )
}

export default Footer
