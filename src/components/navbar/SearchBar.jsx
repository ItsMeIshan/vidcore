import { useDispatch, useSelector } from "react-redux";
import { SEARCH_SUGGESTIONS_URL, searchIcon } from "../../utils/constants";
import {
  addSearchResults,
  clearSuggestions,
  setSearchString,
} from "../../utils/videoSlice";
import SearchResults from "./SearchResults";
import { useCustomDebounce } from "../../utils/debounce";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchVideoState = useSelector(
    (store) => store.videoSlice.searchVideoState
  );
  const getData = (e) => {
    fetch(`${SEARCH_SUGGESTIONS_URL}${e}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        dispatch(addSearchResults(json[1]));
      })
      .catch((err) => console.log(err));
  };
  useCustomDebounce(getData, 300);
  const setSearchQuery = (e) => {
    if (e.target.value === "") {
      dispatch(clearSuggestions());
    }
    dispatch(setSearchString(e.target.value));
  };

  return (
    <>
      <div className="flex flex-col relative">
        <div className="searchbar-container">
          <input
            className="search-input"
            placeholder="Search"
            type="text"
            name=""
            id=""
            value={searchVideoState.searchString}
            onChange={setSearchQuery}
          />
          <div className="search-btn">
            <img src={searchIcon} width={"18px"} height={"18px"} alt="" />
          </div>
        </div>
        <SearchResults />
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
