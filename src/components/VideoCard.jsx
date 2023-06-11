import { Link } from "react-router-dom";
import { userIcon } from "../utils/constants";
import {
  numberCountFormat,
  youtubeDurationToUseful,
} from "../utils/utilityFunctions";

const VideoCard = (props) => {
  let dateStr = new Date(props?.snippet?.publishedAt);
  return (
    // <Link to={`/video/${props?.id}`}>
    <Link className="video-card-wrapper" to={`/video/${props?.id}`}>
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
    // </Link>
  );
};

export default VideoCard;
