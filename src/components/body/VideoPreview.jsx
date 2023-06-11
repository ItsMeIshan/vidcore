import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeSidebarState } from "../../utils/globalStateSlice";
import { useParams } from "react-router-dom";

const VideoPreview = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeSidebarState(false));
  });
  const vidParams = useParams();
  return (
    <div className="video-preview-container">
      <div className="preview-suggested-videos-container">
        <div className="video-and-channel-info">
          <iframe
            className="preview-video"
            src={`https://www.youtube.com/embed/${vidParams?.id}`}
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="about-channel">channel name...</div>
        </div>
        <div className="suggested-videos-container">Suggested Videos...</div>
      </div>
    </div>
  );
};

export default VideoPreview;
