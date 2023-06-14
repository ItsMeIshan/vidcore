import { useEffect } from "react";
import { useSelector } from "react-redux";

export const debounce = (func, delay) => {
  let delayTimer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(delayTimer);
    delayTimer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};
export const useCustomDebounce = (func, delayTime) => {
  const searchVideoState = useSelector(
    (store) => store.videoSlice.searchVideoState
  );

  useEffect(() => {
    const timer = setTimeout(
      () => func(searchVideoState.searchString),
      delayTime
    );
    return () => {
      clearTimeout(timer);
    };
  }, [searchVideoState.searchString]);
};
