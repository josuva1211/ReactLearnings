import React from "react";
import { useState, useContext } from "react"
import UserContext from "../utils/UserContext";


const SearchBar = ({onSearch}) => {
      
    const [searchVal, setSearchVal] = useState("");

    const { loggedInUser, setUserName } = useContext(UserContext);

    function handleChange(e) {
        setSearchVal(e.target.value);
    }

    function handleSearch() {
        onSearch(searchVal);
    }

    return (
        <div>
            <label className="text-2xl font-serif text-orange-500">Username: </label>
            <input data-testid="user-input" type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} className="shadow appearance-none border rounded border-8 border-solid border-orange-500 my-4 mr-4 py-2 px-3 text-orange-500 leading-tight focus:outline-none focus:shadow-outline" />
            <input data-testid="search-input" type="text" className="shadow appearance-none border rounded border-8 border-solid border-orange-500 my-4 py-2 px-3 text-orange-500 leading-tight focus:outline-none focus:shadow-outline" value={searchVal} onChange={handleChange} onBlur={handleSearch} placeholder="Search Restaurants" />
        </div>
        
    )
}

export default SearchBar;