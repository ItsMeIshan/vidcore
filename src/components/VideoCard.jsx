import { userIcon } from "../utils/constants";
import { youtubeDurationToUseful } from "../utils/utilityFunctions";

const VideoCard = (props) => {
  let dateStr = new Date(props?.snippet?.publishedAt);
  return (
    <div className="video-card border m-1">
      <div className="channel-container">
        <img src={userIcon} alt="channel" height={"15px"} width={"15px"} />
        <span>{props?.snippet?.channelTitle}</span>
      </div>
      <div className="duration-container">
        {youtubeDurationToUseful(props?.contentDetails?.duration)}
      </div>
      <div className="thumbnail">
        <img src={props?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
      </div>
      <div className="video-info-glass-ui">
        <p>{props?.snippet?.title}</p>
        <span>{props?.statistics?.viewCount}</span>
        <span>{dateStr.toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default VideoCard;
