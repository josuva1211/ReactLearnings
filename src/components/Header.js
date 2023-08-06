import { LOGO_URL } from "../utils/common";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
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
                    <li className="px-4 text-white text-xl">Cart</li>
                    <button className="text-white text-xl" id="auth-button" onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
    
}

export default Header;