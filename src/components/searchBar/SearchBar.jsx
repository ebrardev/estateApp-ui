import "./searchbar.scss";

function SearchBar() {
    return(
        <div className="searchbar">
            <input type="text" placeholder="Search for a property" />
            <button>Search</button>
        </div>
    )
}

export default SearchBar;