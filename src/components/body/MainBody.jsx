import { useEffect } from "react";
import { POPULAR_VIDEOS_API_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideosList, setNextPageToken } from "../../utils/videoSlice";
import ShimmerUI from "../ShimmerUI";
import VideoCard from "../VideoCard";
import { getNextPgURL } from "../../utils/utilityFunctions";
import InfiniteScroll from "react-infinite-scroll-component";
import TopicsComponent from "./TopicsSelector/TopicsComponent";
import { changeSidebarState } from "../../utils/globalStateSlice";
const MainBody = () => {
  const popularVideoState = useSelector(
    (store) => store?.videoSlice?.popularVideoState
  );
  const dispatch = useDispatch();
  const fetchNextVideos = (token) => {
    fetch(
      getNextPgURL(token != undefined ? token : popularVideoState?.nextPgToken)
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("next videos: ");
        console.log(json);
        dispatch(addVideosList(json?.items));
        dispatch(setNextPageToken(json?.nextPageToken));
      });
  };
  useEffect(() => {
    dispatch(changeSidebarState(true));
    popularVideoState?.nextPgToken == ""
      ? fetch(POPULAR_VIDEOS_API_URL)
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            dispatch(addVideosList(json?.items));
            dispatch(setNextPageToken(json?.nextPageToken));
            fetchNextVideos(json?.nextPageToken);
          })
      : "";
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <TopicsComponent />
        <div className="main-body-container">
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
      </div>
    </>
  );
};

export default MainBody;
