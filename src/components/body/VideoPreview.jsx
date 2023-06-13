import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSidebarState } from "../../utils/globalStateSlice";
import { useParams } from "react-router-dom";
import {
  getRelatedVideoURL,
  getVideoInfoURL,
} from "../../utils/utilityFunctions";
import SuggestedVideoCard from "../SuggestedVideoCard";
import {
  addSuggestedVideosToList,
  setNextSuggestedPageToken,
} from "../../utils/videoSlice";
import VideoInfo from "./video/VideoInfo";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

const VideoPreview = () => {
  const [vidInfo, setVidInfo] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const suggestedVideoState = useSelector(
    (store) => store.videoSlice.suggestedVideoState
  );
  const vidParams = useParams();
  const dispatch = useDispatch();
  const fetchVideoInfo = (id) => {
    fetch(getVideoInfoURL(id))
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const old = structuredClone(vidInfo);
        setVidInfo({ ...old, ...json });
      });
  };
  useEffect(() => {
    dispatch(changeSidebarState(false));
    vidParams.id != undefined && suggestedVideoState?.nextPgToken == ""
      ? fetch(getRelatedVideoURL("", vidParams.id))
          .then((response) => response.json())
          .then((json) => {
            dispatch(addSuggestedVideosToList(json?.items));
            dispatch(setNextSuggestedPageToken(json.nextPageToken));
            fetchVideoInfo(vidParams?.id);
          })
      : console.log("NO API CALL");
  });

  const { width, height } = useWindowSize();
  return (
    <div className="video-preview-container">
      {showConfetti ? <Confetti width={width} height={height} /> : ""}
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
          <div>
            <div>
              {vidInfo
                ? vidInfo?.items.map((item, idx) => {
                    return (
                      <VideoInfo
                        key={idx}
                        {...item}
                        setShowConfetti={setShowConfetti}
                      />
                    );
                  })
                : console.log("NOTHING HAPPENED")}
            </div>
            <div className="about-channel">channel name...</div>
          </div>
        </div>
        <div className="suggested-videos-container">
          {suggestedVideoState?.suggestedVideoList?.map((item, idx) => {
            return <SuggestedVideoCard key={idx} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
