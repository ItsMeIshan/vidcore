import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import { getSearchURL } from "../../utils/utilityFunctions";
import { useDispatch } from "react-redux";
import SearchResultVideoCard from "../SearchResultVideoCard";
import ShimmerUI from "../ShimmerUI";
import { changeSidebarState } from "../../utils/globalStateSlice";

function SearchPreview() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const [searchVideos, setSearchVideos] = useState([]);
  const [nextPgToken, setNextPgToken] = useState("");
  const dispatch = useDispatch();
  const clearVideosAndToken = () => {
    setSearchVideos([]);
    setNextPgToken("");
  };
  const fetchNextVideos = (query, resultVideos, token = "") => {
    fetch(getSearchURL(query, token))
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        const videos = json?.items;
        setSearchVideos([...resultVideos, ...videos]);
        setNextPgToken(json?.nextPageToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    dispatch(changeSidebarState(false));
    clearVideosAndToken();
    setNextPgToken("");
    fetchNextVideos(searchQuery, []);
    return () => {
      clearVideosAndToken();
    };
  }, [searchQuery]);
  return (
    <>
      <div className="mx-auto my-0">
        <InfiniteScroll
          dataLength={searchVideos.length}
          next={() => fetchNextVideos(searchQuery, searchVideos, nextPgToken)}
          hasMore={true}
          loader={<ShimmerUI />}
        >
          <div className="search-videos-container">
            {searchVideos.map((item, idx) => {
              if (item?.id?.kind === "youtube#video") {
                return <SearchResultVideoCard key={idx} {...item} />;
              }
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default SearchPreview;
