import { numberCountFormat } from "../../../utils/utilityFunctions";
import {
  FolderPlusIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

function VideoInfo(props) {
  const handleClick = () => {
    props?.setShowConfetti(true);
    setTimeout(() => {
      props?.setShowConfetti(false);
    }, 4000);
  };
  return (
    <>
      <div className="video-info-container">
        <div className="title-views">
          <h3>{props?.snippet?.title}</h3>
          <span>
            {props?.statistics?.viewCount
              ? `${numberCountFormat(props?.statistics?.viewCount)} views`
              : ""}
          </span>
        </div>
        <div className="control-section">
          <div className=" like-dislike-btn">
            <a href="#" onClick={handleClick}>
              <HandThumbUpIcon className="h-6 w-6" />
            </a>
          </div>
          <div className=" like-dislike-btn">
            <HandThumbDownIcon className="h-6 w-6" />
          </div>
          <div className="control-btn">
            <div className="sidebar-icon">
              <ShareIcon />
            </div>
            <span>Share</span>
          </div>
          <div className="save-btn control-btn">
            <div className="sidebar-icon">
              <FolderPlusIcon />
            </div>
            <span>Save</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoInfo;
