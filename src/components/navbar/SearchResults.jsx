import { useSelector } from "react-redux";
import SearchResultTile from "./SearchResultTile";

function SearchResults(props) {
  const searchState = useSelector(
    (store) => store?.videoSlice?.searchVideoState
  );
  if (props?.focus && props?.error) {
    return (
      <div
        className={`w-full bg-white flex flex-col z-30 absolute top-[90%] ${
          !props?.focus ? "hidden" : ""
        }`}
      >
        <span className="text-center p-4 text-red-600">
          Something went wrong....
        </span>
      </div>
    );
  }
  return (
    <>
      <div
        className={`w-full shadow bg-white flex flex-col z-30 absolute top-[90%] ${
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
              return <SearchResultTile key={idx} item={item} />;
            })
          : ""}
      </div>
    </>
  );
}

export default SearchResults;
