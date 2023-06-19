import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import { getSearchURL } from "../../utils/utilityFunctions";
import { useDispatch } from "react-redux";
import SearchResultVideoCard from "../cards/SearchResultVideoCard";
import { changeSidebarState } from "../../utils/globalStateSlice";
import SearchResultCardShimmer, {
  searchResultShimmerCards,
} from "../shimmer/ShimmerSearchResultCards";

function SearchPreview() {
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
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
      .then((response) => {
        if (response.status == 200) {
          setError(false);
          return response.json();
        } else {
          setError(true);
        }
      })
      .then((json) => {
        if (!json?.nextPageToken || json?.nextPageToken == "") {
          setHasMore(false);
        }
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

  if (error) {
    return (
      <div className="mx-auto my-0">
        <div className="flex flex-col min-h-screen items-center justify-center">
          <img src="/youtube-offline.png" alt="decoration image" />
          <h1 className="text-4xl md:text-xl my-4">Something went wrong....</h1>
          <h3>We are working on fixing the problem.</h3>
          <h3>Please Try again later.</h3>
        </div>
      </div>
    );
  }

  if (searchVideos.length == 0) {
    return (
      <div className="mx-auto my-0">
        <div className="search-videos-container">
          {searchResultShimmerCards.map((item) => {
            return item;
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto my-0">
        <InfiniteScroll
          dataLength={searchVideos.length}
          next={() => fetchNextVideos(searchQuery, searchVideos, nextPgToken)}
          hasMore={hasMore}
          loader={<SearchResultCardShimmer />}
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
