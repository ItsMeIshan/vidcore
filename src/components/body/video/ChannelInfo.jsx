import { FlagIcon, ShareIcon } from "@heroicons/react/24/outline";
import { numberCountFormat } from "../../../utils/utilityFunctions";

function ChannelInfo(props) {
  const date = new Date(props?.snippet?.publishedAt);

  return (
    <>
      <div className="ml-3 flex flex-col">
        <div className="channel-hero">
          <img
            src={props?.snippet?.thumbnails?.default?.url}
            alt="channel thumbnail"
          />
          {/* #606060 */}
          <div className="p-2 flex flex-col">
            <span className="text-xl font-medium">{props?.snippet?.title}</span>
            <div className="channel-stats flex text-[#606060]">
              <span>
                {props?.snippet?.customUrl
                  ? `${props?.snippet?.customUrl}`
                  : ""}
              </span>
              <span>
                {!props?.statistics?.hiddenSubscriberCount
                  ? `${numberCountFormat(
                      props?.statistics?.subscriberCount
                    )} subscribers`
                  : ""}
              </span>
              <span>
                {props?.statistics?.videoCount
                  ? `${numberCountFormat(props?.statistics?.videoCount)} videos`
                  : ""}
              </span>
            </div>
          </div>
        </div>
        <div>
          {props?.snippet?.description ? (
            <div className="channel-description">
              <span className="text-[#606060]">
                {props?.snippet?.description}
              </span>
            </div>
          ) : (
            <div></div>
          )}
          <div className="stats-container">
            <span className="text-xl">Stats</span>
            <span>
              {props?.statistics?.viewCount
                ? `${numberCountFormat(props?.statistics?.viewCount)} views`
                : ""}
            </span>
            <span>
              {props?.snippet?.publishedAt
                ? `Joined ${date.toLocaleDateString()}`
                : ""}
            </span>
            <div className="flex py-2 my-3">
              <div title="Share" className="stats-icon  mr-5">
                <ShareIcon className="h-6 w-6" />
              </div>
              <div title="Report" className="stats-icon">
                <FlagIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChannelInfo;
