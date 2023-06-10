import { useEffect } from "react";
import { POPULAR_VIDEOS_API_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideosList, setNextPageToken } from "../utils/videoSlice";
import ShimmerUI from "./ShimmerUI";
import VideoCard from "./VideoCard";
import { getNextPgURL } from "../utils/utilityFunctions";
import InfiniteScroll from "react-infinite-scroll-component";

const MainBody = () => {
  const popularVideoState = useSelector(
    (store) => store?.videoSlice?.popularVideoState
  );
  const dispatch = useDispatch();
  const fetchNextVideos = () => {
    fetch(getNextPgURL(popularVideoState?.nextPgToken))
      .then((response) => response.json())
      .then((json) => {
        console.log("next videos: ");
        console.log(json);
        dispatch(addVideosList(json?.items));
        dispatch(setNextPageToken(json?.nextPageToken));
      });
  };
  useEffect(() => {
    popularVideoState?.nextPgToken == ""
      ? fetch(POPULAR_VIDEOS_API_URL)
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            dispatch(addVideosList(json?.items));
            dispatch(setNextPageToken(json?.nextPageToken));
          })
      : "";
  }, []);
  return (
    <div>
      <h1>MainBody</h1>

      <InfiniteScroll
        dataLength={popularVideoState?.popularVideoList.length}
        next={fetchNextVideos}
        hasMore={true}
        loader={<ShimmerUI />}
      >
        <div className="popular-videos-container">
          {popularVideoState?.popularVideoList?.map((item) => {
            return <VideoCard key={item?.id} {...item} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default MainBody;
