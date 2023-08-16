import React from "react";
import { LOGO_URL } from "../utils/common";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-orange-500 shadow-xl m-1">
            <div>
                <img src={LOGO_URL} className="w-24 m-2" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 text-white text-xl">
                        Online Status: {onlineStatus ? "Online" : "Offline"}
                    </li>
                    <li className="px-4 text-white text-xl">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 text-white text-xl">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4 text-white text-xl">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4 text-white text-xl">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 text-white text-xl font-bold">
                        <Link to="/cart">Cart - {cartItems.length}</Link>
                    </li>
                    <button className="text-white text-xl" id="auth-button" onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}>{btnName}</button>
                    <li className="px-4 text-white text-xl">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    );
    
}

export default Header;