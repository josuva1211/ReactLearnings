import { useState } from "react"


const SearchBar = ({onSearch}) => {

    const inputStyle = {
        flex: '1',
        border: 'none',
        outline: 'none',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '20px 0 0 20px',
        backgroundColor: '#fff',
      };
      
    const [searchVal, setSearchVal] = useState("");

    function handleChange(e) {
        setSearchVal(e.target.value);
    }

    function handleSearch() {
        onSearch(searchVal);
    }

    return (
        <input type="text" style={inputStyle} value={searchVal} onChange={handleChange} onBlur={handleSearch} placeholder="SEARCH RESTAURANTS" />
    )
}

export default SearchBar;