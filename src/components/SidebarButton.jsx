import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SidebarButton(props) {
  const globalState = useSelector((store) => store?.globalSlice?.globalState);
  return (
    <>
      {props.route ? (
        <NavLink
          to={props?.route}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div
            className={`sidebar-button-container ${
              props?.toBeHidden === undefined && globalState?.isSidebarOpen
                ? ""
                : "lg:hidden"
            }`}
          >
            <div className="for-active"></div>
            <div
              className={`${
                props?.icon === undefined ? "icon-none" : "sidebar-icon"
              }`}
            >
              {props?.icon}
            </div>
            <span>{props?.text}</span>
          </div>
        </NavLink>
      ) : (
        <div
          className={`sidebar-button-container ${
            props?.toBeHidden === undefined && globalState?.isSidebarOpen
              ? ""
              : "lg:hidden"
          }`}
        >
          <div className="for-active"></div>
          <div
            className={`${
              props?.icon === undefined ? "icon-none" : "sidebar-icon"
            }`}
          >
            {props?.icon}
          </div>
          <span>{props?.text}</span>
        </div>
      )}
    </>
  );
}

export default SidebarButton;
