import React from "react";
import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Akshay Saini"
        }
        setUserName(data.name);
    }, []);
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="App">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
        
            
        
    );
}

export default AppLayout;