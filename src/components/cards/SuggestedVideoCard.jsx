import { Link } from "react-router-dom";
import {
  resetVideoData,
  setCurrentVid,
  setPreviousVid,
} from "../../utils/videoSlice";
import { useDispatch, useSelector } from "react-redux";

function SuggestedVideoCard(props) {
  const dateStr = new Date(props?.snippet?.publishedAt);
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
        dispatch(setCurrentVid(props?.id?.videoId));
      } else {
        dispatch(resetVideoData());
        dispatch(setPreviousVid(selectedVideoState.current));
        dispatch(setCurrentVid(props?.id?.videoId));
      }
    }
  };
  return (
    <>
      <Link to={`/video/${props?.id?.videoId}`} onClick={handleClick}>
        <div className="suggested-video-card-container">
          <div className="mr-3 w-1/3">
            <img
              width="100%"
              className="rounded-lg"
              src={props?.snippet?.thumbnails?.default?.url}
              alt="thumbnail"
            />
          </div>
          <div className="suggested-card-info">
            <h4>{props?.snippet?.title}</h4>
            <div className="flex flex-col text-[#606060] text-sm">
              <span>{props?.snippet?.channelTitle}</span>
              <span>{dateStr.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SuggestedVideoCard;
