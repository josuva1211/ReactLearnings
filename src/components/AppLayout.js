import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Akshay Saini"
        }
        setUserName(data.name);
    }, []);
    return (
        <div className="App">
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <Header />
            <Outlet />
        </UserContext.Provider>
            
        </div>
    );
}

export default AppLayout;