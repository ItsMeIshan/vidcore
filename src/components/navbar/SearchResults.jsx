import { useSelector } from "react-redux";
import SearchResultTile from "./SearchResultTile";

function SearchResults(props) {
  const searchState = useSelector(
    (store) => store?.videoSlice?.searchVideoState
  );
  return (
    <>
      <div
        className={`w-full bg-white flex flex-col z-30 absolute top-[90%] ${
          !props?.focus ? "hidden" : ""
        }`}
      >
        {searchState?.searchString == "" && props?.focus ? (
          <span className="text-center p-4">Type Something...</span>
        ) : (
          ""
        )}
        {searchState?.searchList?.length > 0
          ? searchState?.searchList?.map((item, idx) => {
              // console.log(item);
              return <SearchResultTile key={idx} item={item} />;
            })
          : ""}
      </div>
    </>
  );
}

export default SearchResults;
