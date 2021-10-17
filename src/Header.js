import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
const Header = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <>
            <div className="header">
                <Link to="/">
                    <img
                        className="header_logo"
                        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
                </Link>
                <div className="header_search">
                    <input type="text" className="header_searchinput" />
                    <SearchIcon className="header_searchicon" />
                </div>


                <div className="header_nav">
                    <Link to="/login">
                        <div className="header_option">
                            <span className="header_option_lineone">Hello guest</span>
                            <span className="header_option_linetwo">Sign In</span>
                        </div>
                    </Link>
                    <div className="header_option">
                        <span className="header_option_lineone">Returns</span>
                        <span className="header_option_linetwo">& orders</span>
                    </div>
                    <div className="header_option">
                        <span className="header_option_lineone">your</span>
                        <span className="header_option_linetwo">Prime</span>
                    </div>
                    <Link to="/checkout">
                        <div className="header_optionbasket">
                            <ShoppingBasketIcon />
                            <span className="header_basket_count header_option_linetwo">{basket?.length}</span>
                        </div>
                    </Link>

                </div>
            </div>


        </>
    )
}

export default Header
