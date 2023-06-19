import { useDispatch, useSelector } from "react-redux";
import { clearSuggestions, setSearchString } from "../../utils/videoSlice";
import { Link } from "react-router-dom";
import { changeMobileSearchBarState } from "../../utils/globalStateSlice";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { searchIcon } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchVideoState = useSelector(
    (store) => store.videoSlice.searchVideoState
  );
  const globalState = useSelector((store) => store.globalSlice.globalState);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(changeMobileSearchBarState(true));
  };

  const setSearchQuery = (e) => {
    if (e.target.value === "") {
      dispatch(clearSuggestions());
    }
    dispatch(setSearchString(e.target.value));
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter" && searchVideoState?.searchString != "") {
      navigate(
        `/search?q=${searchVideoState?.searchString.replaceAll(" ", "+")}`
      );
    }
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
            onKeyUp={handleSubmit}
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
        {globalState.mobileSearchBar ? (
          <div className="mobile-searchbar-container">
            <div
              onClick={() => dispatch(changeMobileSearchBarState(false))}
              className="hover:bg-[#f2f2f2] p-2 rounded-full"
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </div>
            <input
              className="search-input"
              placeholder="Search"
              type="text"
              name=""
              id=""
              value={searchVideoState.searchString}
              onChange={setSearchQuery}
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
        ) : (
          ""
        )}
      </div>
      {!globalState.mobileSearchBar ? (
        <div className="searchbar-mobile-btn">
          <a href="" onClick={(e) => handleClick(e)}>
            <div className="search-btn">
              <img src={searchIcon} width={"20px"} height={"20px"} alt="" />
            </div>
          </a>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchBar;
