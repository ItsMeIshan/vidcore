import { Link } from "react-router-dom";
import { userIcon } from "../utils/constants";

function SearchResultVideoCard(props) {
  const date = new Date(props?.snippet?.publishTime);
  return (
    <>
      <div className="w-full">
        <Link to={`/video/${props?.id?.videoId}`}>
          <div className="search-card-container">
            <div className="mr-2 w-80 flex-grow">
              <img
                className="search-card-thumbnail"
                src={props?.snippet?.thumbnails?.medium?.url}
                alt="Thumbnail"
              />
            </div>
            <div className="search-card-info">
              <h3>{props?.snippet?.title}</h3>
              <span className="text-sm my-1">{date.toLocaleDateString()}</span>
              <div className="search-card-channel">
                <div>
                  <img
                    src={userIcon}
                    width={"15px"}
                    height={"15px"}
                    alt="channel picture"
                  />
                </div>
                <span>{props?.snippet?.channelTitle}</span>
              </div>
              <span className="text-sm">{props?.snippet?.description}</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SearchResultVideoCard;
