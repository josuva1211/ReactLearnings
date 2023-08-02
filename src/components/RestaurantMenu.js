import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { RES_MENU_URL } from '../utils/common';

const RestaurantMenu = () => {

    const { resId } = useParams();
    console.log(resId);

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchInfo();
        // const timer = setInterval(() => {
        //     console.log("Interval running in use effect");
        // }, 1000)
    }, [])

    const fetchInfo = async () => {
        const response = await fetch(RES_MENU_URL + resId);
        const json = await response.json();
        console.log(json);
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map(item => (
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name} -{" Rs. "} {item?.card?.info?.price/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;