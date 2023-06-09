import { searchIcon } from "../utils/constants";

const SearchBar = () => {
  return (
    <>
      <div className="searchbar-container">
        <input
          className="search-input"
          placeholder="Search"
          type="text"
          name=""
          id=""
        />
        <div className="search-btn">
          <img src={searchIcon} width={"18px"} height={"18px"} alt="" />
        </div>
      </div>
      <div className="searchbar-mobile-btn">
        <div className="search-btn">
          <img src={searchIcon} width={"20px"} height={"20px"} alt="" />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
