import { useState } from "react"


const SearchBar = ({onSearch}) => {

    
      
    const [searchVal, setSearchVal] = useState("");

    function handleChange(e) {
        setSearchVal(e.target.value);
    }

    function handleSearch() {
        onSearch(searchVal);
    }

    return (
        <input type="text" className="shadow appearance-none border rounded border-8 border-solid border-orange-500 my-4 py-2 px-3 text-orange-500 leading-tight focus:outline-none focus:shadow-outline" value={searchVal} onChange={handleChange} onBlur={handleSearch} placeholder="Search Restaurants" />
    )
}

export default SearchBar;