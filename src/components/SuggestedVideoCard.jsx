import { Link } from "react-router-dom";
import {
  resetVideoData,
  setCurrentVid,
  setPreviousVid,
} from "../utils/videoSlice";
import { useDispatch, useSelector } from "react-redux";

function SuggestedVideoCard(props) {
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
          {props?.id?.videoId}
          <img src={props?.snippet?.thumbnails?.default?.url} alt="thumbnail" />
        </div>
      </Link>
    </>
  );
}

export default SuggestedVideoCard;
