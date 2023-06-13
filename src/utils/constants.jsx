import {
  BookmarkIcon,
  ClockIcon,
  GlobeAsiaAustraliaIcon,
  HeartIcon,
  HomeIcon,
  RadioIcon,
  ScissorsIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { API_KEY } from "../../api_constant";

export const POPULAR_VIDEOS_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`;
export const SUGGESTED_VIDEOS_API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${API_KEY}`;
export const VIDEO_INFO_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}`;
export const CHANNEL_INFO_API_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}`;
export const micIcon = "/mic-icon-white.svg";
export const newVideo = "/reel-icon.svg";
export const moreApps = "/more-apps.svg";
export const logo = "/vidcore_logo_final.svg";
export const menuIcon = "/hamburger.svg";
export const searchIcon = "/searchIcon.svg";
export const userIcon = "/user-icon.svg";

export const sidebarConfig = [
  {
    icon: <HomeIcon />,
    text: "Home",
    route: "/",
  },
  {
    icon: <GlobeAsiaAustraliaIcon />,
    text: "Explore",
  },
  {
    icon: <HomeIcon />,
    text: "Subscriptions",
  },
  {
    icon: <BookmarkIcon />,
    text: "Library",
  },
  {
    icon: <ClockIcon />,
    text: "History",
    toBeHidden: true,
  },
  {
    icon: <VideoCameraIcon />,
    text: "Your videos",
    toBeHidden: true,
  },
  {
    icon: <HeartIcon />,
    text: "Watch later",
    toBeHidden: true,
  },
  {
    icon: <ScissorsIcon />,
    text: "Your clips",
    toBeHidden: true,
  },
  {
    text: "Gaming",
    toBeHidden: true,
  },
  {
    icon: <RadioIcon />,
    text: "Live",
    toBeHidden: true,
  },
  {
    text: "Fashion and beauty",
    toBeHidden: true,
  },
  {
    text: "Learning",
    toBeHidden: true,
  },
  {
    text: "Sports",
    toBeHidden: true,
  },
];
