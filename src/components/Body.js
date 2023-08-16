import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const RestaurantWithPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9189502&lng=77.63259350000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            //console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch {
            console.error('Error fetching data:', error);
            throw error; 
        }
        
    }

    function handleSearch(searchVal) {
        setFilteredRestaurants(
            restaurants.filter(res => res.info.name.toLowerCase().includes(searchVal.toLowerCase()))
        );
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus == false) {
        return (
            <h1>Looks like you are offline! Please check your internet connection.</h1>
        )
    }

    return restaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body m-1">
            <div className="filter">
                <button className="bg-orange-500 mt-2 p-2 shadow-xl rounded-md text-white text-base" onClick={() => setFilteredRestaurants(
                    restaurants.filter(res => res.info.avgRating >= 4.2)
                )}>Show Top Restaurants</button>
            </div>
            <div className="search-bar">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="res-container flex flex-wrap">
                { filteredRestaurants.map((restaurant, idx) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        { idx % 2 === 0 ?  <RestaurantWithPromoted resObj={restaurant} /> : <RestaurantCard resObj={restaurant} /> }
                        
                    </Link>  
                ))}
                
            </div>
        </div>
    );
    
}

export default Body;