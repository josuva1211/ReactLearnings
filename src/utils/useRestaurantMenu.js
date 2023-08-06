import { useEffect, useState } from "react"
import { RES_MENU_URL } from "./common";
import { json } from "react-router-dom";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch(RES_MENU_URL + resId);
        const json = await response.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;