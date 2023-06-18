import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSidebarState } from "../../utils/globalStateSlice";
import { useParams } from "react-router-dom";
import {
  getChannelInfoURL,
  getRelatedVideoURL,
  getVideoInfoURL,
} from "../../utils/utilityFunctions";
import SuggestedVideoCard from "../SuggestedVideoCard";
import VideoInfo from "./video/VideoInfo";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";
import ChannelInfo from "./video/ChannelInfo";
import {
  addSuggestedVideosToList,
  setNextSuggestedPageToken,
} from "../../utils/videoSlice";

const VideoPreview = () => {
  const [vidInfo, setVidInfo] = useState(null);
  const [channelInfo, setChannelInfo] = useState(null);
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
        fetchChannelInfo(json?.items[0]?.snippet?.channelId);
      });
  };
  const fetchChannelInfo = (id) => {
    fetch(getChannelInfoURL(id))
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const old = structuredClone(channelInfo);
        setChannelInfo({ ...old, ...json });
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
  }, [vidParams?.id]);

  const { width, height } = useWindowSize();
  return (
    <>
      {showConfetti ? <Confetti width={width} height={height} /> : ""}
      <div className="preview-suggested-videos-container">
        <div className="video-and-channel-info">
          <div>
            <iframe
              className="preview-video"
              src={`https://www.youtube.com/embed/${vidParams?.id}`}
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
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
            <div className="about-channel">
              {channelInfo
                ? channelInfo?.items.map((item, idx) => {
                    return <ChannelInfo key={idx} {...item} />;
                  })
                : ""}
            </div>
          </div>
        </div>
        <div className="suggested-videos-container">
          {suggestedVideoState?.suggestedVideoList?.map((item, idx) => {
            return <SuggestedVideoCard key={idx} {...item} />;
          })}
        </div>
      </div>
    </>
    // <div className="video-preview-container">
    // </div>
  );
};

export default VideoPreview;
