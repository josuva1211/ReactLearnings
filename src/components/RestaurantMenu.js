import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { RES_MENU_URL } from '../utils/common';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    const { resId } = useParams();
    //console.log(resId);

    const [itemIndex, setItemIndex] = useState(0);

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((cat) => {
        return cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });

    console.log(categories);

    return (
        <div className="text-center">
            <h1 className='font-bold text-2xl my-6'>{name}</h1>
            <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>
            { categories.map((category,index) => (
                // Controlled Component
                <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    category={category?.card?.card} 
                    showItems={index === itemIndex ? true : false}
                    setItemIndex={() => setItemIndex(index)}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu;