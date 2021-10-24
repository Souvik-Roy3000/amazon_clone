import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./home.css"
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";


const PreviousBtn = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color: "black", fontSize: "30px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color: "black", fontSize: "30px" }} />
        </div>
    );
};
const Carousel = () => {

    const settings = {

        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: true,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
    };
    return (
        <>
            <div style={{ margin: "30px" }} className="carousel" >
                <Slider {...settings} >
                    <div>

                        <img
                            className="home_Image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                    </div>
                    <div>

                        <img
                            className="home_Image"
                            src="https://m.media-amazon.com/images/I/81EaJeUwBhL._SX3000_.jpg" alt="" />
                    </div>
                    <div>
                        <img
                            className="home_Image"
                            src="https://m.media-amazon.com/images/I/71WQ7WSHHTL._SX3000_.jpg" alt="" />
                    </div>
                    <div>
                        <img
                            className="home_Image"
                            src="https://m.media-amazon.com/images/I/71NfDkOqtXL._SX3000_.jpg" alt="" />
                    </div>
                    <div>
                        <img
                            className="home_Image"
                            src="https://m.media-amazon.com/images/I/71Q1Epb3lWL._SX3000_.jpg" alt="" />
                    </div>
                    <div>
                        <img
                            className="home_Image"
                            src="https://m.media-amazon.com/images/I/71Ybc4QYPiL._SX3000_.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Carousel
