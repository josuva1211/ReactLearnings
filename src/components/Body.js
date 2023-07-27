import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";

const Body = () => {

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '20px',   
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        padding: '4px',
        maxWidth: '300px',
        margin: '10px',
      };

      const buttonStyle = {
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'rgb(123, 121, 121)',
        backgroundColor: '#fff',
        borderRadius: '4px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow style
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease', // Add a smooth transition for box shadow
        border: 'none',
        margin: '10px'
      };

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9189502&lng=77.63259350000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

    function handleSearch(searchVal) {
        setFilteredRestaurants(
            restaurants.filter(res => res.info.name.toLowerCase().includes(searchVal.toLowerCase()))
        );
    }

    return restaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <button style={buttonStyle} onClick={() => filteredRestaurants(
                    restaurants.filter(res => res.info.avgRating >= 4)
                )}>Show Top Restaurants</button>
            </div>
            <div className="search-bar" style={containerStyle}>
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="res-container">
                { filteredRestaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
                ))}
                
            </div>
        </div>
    );
    
}

export default Body;