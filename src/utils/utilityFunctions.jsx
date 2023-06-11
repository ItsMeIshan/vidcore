import { POPULAR_VIDEOS_API_URL } from "./constants";

export function youtubeDurationToUseful(duration) {
  var hours = 0;
  var minutes = 0;
  var seconds = 0;

  // Remove PT from string ref: https://developers.google.com/youtube/v3/docs/videos#contentDetails.duration
  duration = duration.replace("PT", "");

  // If the string contains hours parse it and remove it from our duration string
  if (duration.indexOf("H") > -1) {
    var hours_split = duration.split("H");
    hours = parseInt(hours_split[0]);
    duration = hours_split[1];
  }

  // If the string contains minutes parse it and remove it from our duration string
  if (duration.indexOf("M") > -1) {
    var minutes_split = duration.split("M");
    minutes = parseInt(minutes_split[0]);
    duration = minutes_split[1];
  }

  // If the string contains seconds parse it and remove it from our duration string
  if (duration.indexOf("S") > -1) {
    var seconds_split = duration.split("S");
    seconds = parseInt(seconds_split[0]);
  }

  var str = "";

  if (hours != 0) {
    str += hours + ":";
  }

  if (minutes == 0) {
    str += "00" + ":";
  } else if (minutes < 10) {
    str += "0" + minutes + ":";
  } else if (minutes > 10) {
    str += minutes + ":";
  }

  if (seconds > 0 && seconds < 10) {
    str += "0" + seconds;
  } else if (seconds < 10) {
    str += "0" + seconds;
  } else if (seconds > 10) {
    str += seconds;
  }

  return str;
}

export function getNextPgURL(token, urlType = "POPULAR_VIDEOS") {
  if (urlType == "POPULAR_VIDEOS") {
    const POPULAR_VIDEOS_NEXT_PG = `${POPULAR_VIDEOS_API_URL}&pageToken=${token}`;
    return POPULAR_VIDEOS_NEXT_PG;
  }
}

export function numberCountFormat(count) {
  if (count < Math.pow(10, 2)) {
    return count;
  }
  //for 'k'
  if (count < Math.pow(10, 5)) {
    return (count / 1000).toFixed(1) + "k";
  }
  //for 'M'
  if (count >= Math.pow(10, 5) && count < Math.pow(10, 8)) {
    return (count / 1000000).toFixed(1) + "M";
  }
  //for 'B'
  if (count >= Math.pow(10, 8)) {
    return (count / 1000000000).toFixed(1) + "B";
  }
}
