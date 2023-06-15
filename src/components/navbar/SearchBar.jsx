import { useDispatch, useSelector } from "react-redux";
import { SEARCH_SUGGESTIONS_URL, searchIcon } from "../../utils/constants";
import {
  addSearchResults,
  clearSuggestions,
  setSearchString,
} from "../../utils/videoSlice";
import SearchResults from "./SearchResults";
import { useCustomDebounce } from "../../utils/debounce";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [focus, setFocus] = useState(false);
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
      <div className="flex flex-col relative max-w-lg flex-1">
        <div className="searchbar-container">
          <input
            className="search-input"
            placeholder="Search"
            type="text"
            name=""
            id=""
            value={searchVideoState.searchString}
            onChange={setSearchQuery}
            onFocus={(e) => {
              console.log(e);
              setFocus(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setFocus(false);
              }, 100);
            }}
          />
          {searchVideoState?.searchString == "" ? (
            <div className="search-btn search-btn-disabled">
              <img src={searchIcon} width={"18px"} height={"18px"} alt="" />
            </div>
          ) : (
            <Link
              to={`/search?q=${searchVideoState?.searchString.replaceAll(
                " ",
                "+"
              )}`}
            >
              <div className="search-btn">
                <img src={searchIcon} width={"18px"} height={"18px"} alt="" />
              </div>
            </Link>
          )}
        </div>
        <SearchResults focus={focus} />
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
