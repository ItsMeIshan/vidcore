import { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideosList, setNextPageToken } from "../../utils/videoSlice";
import VideoCard from "../cards/VideoCard";
import { getNextPgURL } from "../../utils/utilityFunctions";
import InfiniteScroll from "react-infinite-scroll-component";
import PopularVideoCardShimmer, {
  popularVideoShimmerCards,
} from "../shimmer/ShimmerVideoCards";
const MainBody = () => {
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const popularVideoState = useSelector(
    (store) => store?.videoSlice?.popularVideoState
  );
  const dispatch = useDispatch();
  const fetchNextVideos = (token) => {
    fetch(
      getNextPgURL(token != undefined ? token : popularVideoState?.nextPgToken)
    )
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
        dispatch(addVideosList(json?.items));
        dispatch(setNextPageToken(json?.nextPageToken));
      })
      .catch(() => {
        setError(true);
      });
  };
  useEffect(() => {
    popularVideoState?.nextPgToken == ""
      ? fetch(POPULAR_VIDEOS_API_URL)
          .then((response) => {
            if (response.status == 200) {
              setError(false);
              return response.json();
            } else {
              setError(true);
            }
          })
          .then((json) => {
            dispatch(addVideosList(json?.items));
            dispatch(setNextPageToken(json?.nextPageToken));
            fetchNextVideos(json?.nextPageToken);
          })
          .catch(() => {
            setError(true);
          })
      : "";
    return () => {
      setError(false);
    };
  }, []);
  if (error) {
    return (
      <div className="flex flex-col w-full">
        <div className="main-body-container">
          <div className="flex flex-col min-h-screen items-center justify-center">
            <img src="/youtube-offline.png" alt="decoration image" />
            <h1 className="text-4xl md:text-xl my-4">
              Something went wrong....
            </h1>
            <h3>We are working on fixing the problem.</h3>
            <h3>Please Try again later.</h3>
          </div>
        </div>
      </div>
    );
  }
  if (popularVideoState?.popularVideoList.length == 0) {
    return (
      <div className="flex flex-col w-full">
        <div className="main-body-container">
          <div className="popular-videos-container">
            {popularVideoShimmerCards.map((item) => {
              return item;
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="main-body-container">
          <InfiniteScroll
            dataLength={popularVideoState?.popularVideoList.length}
            next={fetchNextVideos}
            hasMore={hasMore}
            loader={<PopularVideoCardShimmer />}
          >
            <div className="popular-videos-container">
              {popularVideoState?.popularVideoList?.map((item) => {
                return <VideoCard key={item?.id} {...item} />;
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default MainBody;
