import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar"
import resList from "../utils/mockData";

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
    
    const [restaurants, setRestaurants] = useState(resList);

    function handleSearch(searchVal) {
        if (searchVal) {
            setRestaurants(
                restaurants.filter(res => res.info.name.toLowerCase() === searchVal.toLowerCase())
            );
        } else {
            setRestaurants(resList);
        } 
    }

    return (
        <div className="body">
            <div className="filter">
                <button style={buttonStyle} onClick={() => setRestaurants(
                    restaurants.filter(res => res.info.avgRating >= 4)
                )}>Show Top Restaurants</button>
            </div>
            <div className="search-bar" style={containerStyle}>
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="res-container">
                { restaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
                ))}
                
            </div>
        </div>
    );
    
}

export default Body;