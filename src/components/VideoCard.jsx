import { Link } from "react-router-dom";
import { userIcon } from "../utils/constants";
import {
  numberCountFormat,
  youtubeDurationToUseful,
} from "../utils/utilityFunctions";
import { useDispatch, useSelector } from "react-redux";
import {
  resetVideoData,
  setCurrentVid,
  setPreviousVid,
} from "../utils/videoSlice";

const VideoCard = (props) => {
  let dateStr = new Date(props?.snippet?.publishedAt);
  const dispatch = useDispatch();
  const selectedVideoState = useSelector(
    (store) => store.videoSlice.selectedVideoState
  );
  const handleClick = () => {
    if (
      selectedVideoState.previous != selectedVideoState.current ||
      (selectedVideoState.previous == "" && selectedVideoState.current == "")
    ) {
      if (
        selectedVideoState.previous == "" &&
        selectedVideoState.current == ""
      ) {
        dispatch(setPreviousVid(selectedVideoState.current));
        dispatch(setCurrentVid(props?.id));
      } else {
        dispatch(resetVideoData());
        dispatch(setPreviousVid(selectedVideoState.current));
        dispatch(setCurrentVid(props?.id));
      }
    }
  };
  return (
    <Link
      className="video-card-wrapper"
      to={`/video/${props?.id}`}
      onClick={handleClick}
    >
      <div className="video-card border m-1">
        <div className="channel-duration-container">
          <div
            className="channel-container"
            title={props?.snippet?.channelTitle}
          >
            <img src={userIcon} alt="channel" height={"15px"} width={"15px"} />
            <span>{props?.snippet?.channelTitle}</span>
          </div>
          <div className="duration-container">
            <span>
              {youtubeDurationToUseful(props?.contentDetails?.duration)}
            </span>
          </div>
        </div>
        <div className="thumbnail">
          <img src={props?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
        </div>
        <div className="video-info-glass-ui">
          <p title={props?.snippet?.title}>{props?.snippet?.title}</p>
          <span>{numberCountFormat(props?.statistics?.viewCount)} views</span>
          <span>{dateStr.toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
