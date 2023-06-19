import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSidebarState } from "../../utils/globalStateSlice";
import { useParams } from "react-router-dom";
import {
  getChannelInfoURL,
  getRelatedVideoURL,
  getVideoInfoURL,
} from "../../utils/utilityFunctions";
import SuggestedVideoCard from "../cards/SuggestedVideoCard";
import VideoInfo from "./video/VideoInfo";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";
import ChannelInfo from "./video/ChannelInfo";
import {
  addSuggestedVideosToList,
  resetVideoData,
} from "../../utils/videoSlice";
import { searchResultShimmerCards } from "../shimmer/ShimmerRelatedVideoCards";

const VideoPreview = () => {
  const [error, setError] = useState(false);
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
      .then((response) => {
        if (response.status == 200) {
          setError(false);
          return response.json();
        } else {
          setError(true);
        }
      })
      .then((json) => {
        const old = structuredClone(vidInfo);
        setVidInfo({ ...old, ...json });
        fetchChannelInfo(json?.items[0]?.snippet?.channelId);
      })
      .catch(() => {
        setError(true);
      });
  };
  const fetchChannelInfo = (id) => {
    fetch(getChannelInfoURL(id))
      .then((response) => {
        if (response.status == 200) {
          setError(false);
          return response.json();
        } else {
          setError(true);
        }
      })
      .then((json) => {
        const old = structuredClone(channelInfo);
        setChannelInfo({ ...old, ...json });
      })
      .catch(() => {
        setError(true);
      });
  };
  useEffect(() => {
    dispatch(changeSidebarState(false));
    vidParams.id != undefined && suggestedVideoState?.nextPgToken == ""
      ? fetch(getRelatedVideoURL("", vidParams.id))
          .then((response) => {
            if (response.status == 200) {
              setError(false);
              return response.json();
            } else {
              setError(true);
            }
          })
          .then((json) => {
            dispatch(addSuggestedVideosToList(json?.items));
            fetchVideoInfo(vidParams?.id);
          })
          .catch(() => {
            setError(true);
          })
      : "";
    return () => {
      dispatch(resetVideoData());
    };
  }, [vidParams?.id]);

  const { width, height } = useWindowSize();

  if (error) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <img src="/youtube-offline.png" alt="decoration image" />
        <h1 className="text-4xl md:text-xl my-4">Something went wrong....</h1>
        <h3>We are working on fixing the problem.</h3>
        <h3>Please Try again later.</h3>
      </div>
    );
  }
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
                : ""}
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
        {suggestedVideoState?.suggestedVideoList?.length == 0 ? (
          <div className="suggested-videos-container">
            {searchResultShimmerCards?.map((item) => {
              return item;
            })}
          </div>
        ) : (
          <div className="suggested-videos-container">
            {suggestedVideoState?.suggestedVideoList?.map((item, idx) => {
              return <SuggestedVideoCard key={idx} {...item} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default VideoPreview;
