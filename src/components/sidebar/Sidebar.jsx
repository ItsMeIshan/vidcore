import { useDispatch, useSelector } from "react-redux";
import { sidebarConfig } from "../../utils/constants";
import SidebarButton from "./SidebarButton";
import { useLayoutEffect } from "react";
import {
  changeSidebarState,
  changeWindowSize,
} from "../../utils/globalStateSlice";
// import { useWindowSize } from "@uidotdev/usehooks";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const globalState = useSelector((store) => store?.globalSlice?.globalState);
  // const { width, height } = useWindowSize();
  const updateWindowSize = () => {
    dispatch(changeWindowSize(window.innerWidth));
    if (globalState?.screenSize < 639) {
      dispatch(changeSidebarState(false));
    } else {
      dispatch(changeSidebarState(true));
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  });
  const sidebarState = useSelector((store) => store?.globalSlice?.globalState);
  return (
    <div
      className={`sidebar-container ${
        props.desktopSidebar ? "sm:hidden" : ""
      } ${sidebarState?.isSidebarOpen ? "" : "hidden"}`}
    >
      {sidebarConfig.map((data, idx) => {
        return <SidebarButton key={idx} {...data} />;
      })}
    </div>
  );
};

export default Sidebar;
