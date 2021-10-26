import React from 'react'
import "./home.css"
import Product from './Product'
import Carousel from './Carousel'
import { motion } from 'framer-motion'
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container">
                    <motion.div
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: -100, opacity: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="hero">
                        <Carousel className="home_carousel" />

                    </motion.div>
                    {/* <img
                        className="home_Image"
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" /> */}
                    <div className="products_row">
                        <div className="home_row">
                            <Product title="MERCUSYS AC1900 Wireless Dual Band Gigabit Router MR50G | 1900Mbps Wi-Fi Speed | Far-Reaching WiFi Coverage" price={3990.00}
                                image="https://m.media-amazon.com/images/I/51SDZ2tLZ-S._AC_UY218_.jpg" rating={4} id={18557} />
                            <Product title="Bose Sport Truly Wireless Bluetooth in Ear Earphone with Mic (Glacier White)" price={16190.00}
                                image="https://m.media-amazon.com/images/I/51WPD-oetHL._SL1500_.jpg" rating={5} id={1457} />

                            <Product title="
Mi 11X 5G (Celestial Silver 6GB RAM 128GB ROM | SD 870 | DisplayMate A+ rated E4 AMOLED | Upto 18 Months No Cost EMI)"
                                price={27999} image="https://m.media-amazon.com/images/I/81PQCRubagS._SL1500_.jpg" rating={4} id={27557} />
                        </div>

                        <div className="home_row">
                            <Product title="Deep Work: Rules for Focused Success in a Distracted World" price={303.00} image="https://images-na.ssl-images-amazon.com/images/I/41UMGAFVUTL._SX319_BO1,204,203,200_.jpg"
                                rating={4} id={48755} />
                            <Product title="Lenovo Legion M200 RGB Gaming Wired USB Mouse GX30P93886, Ambidextrous, 5-buttons, upto 2400 DPI with 4 levels DPI switch"
                                price={899.00} image="https://m.media-amazon.com/images/I/61ROx1hBZyL._SL1000_.jpg" rating={3} id={6849} />

                            <Product title="
TIMESOON Portable Electric USB Juice Maker Juicer Bottle Blender Grinder Mixer, Rechargeable Bottle with 4 Blades (MULTIII)" price={1699.00} image="https://m.media-amazon.com/images/I/51F0OXVTmIS.jpg" rating={4} id={498745} />
                        </div>
                        <div className="home_row">
                            <Product title="ASUS TUF Gaming F15, 15.6-inch (39.62 cms) FHD 144Hz, Core i5-10300H 10th Gen, GTX 1650 Ti 4GB Graphics, Gaming Laptop" price={57990.00}
                                image="https://m.media-amazon.com/images/I/914o5xV1+8L._AC_UY218_.jpg" rating={4} id={18874857} />
                            <Product title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Green (4th Generation)" price={46900.00}
                                image="https://m.media-amazon.com/images/I/71SAHzzQqkL._AC_UY218_.jpg" rating={5} id={1984457} />


                        </div>
                        <div className="home_row">
                            <Product title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)" price={158900} image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg" rating={5} id={589755} />

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home

