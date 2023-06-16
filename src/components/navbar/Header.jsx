import { useDispatch, useSelector } from "react-redux";
import { logo, menuIcon } from "../../utils/constants";
import MicComponent from "./MicComponent";
import MoreApps from "./MoreApps";
import NewVideo from "./NewVideo";
import SearchBar from "./SearchBar";
import UserComponent from "./UserComponent";
import { changeSidebarState } from "../../utils/globalStateSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const sidebarState = useSelector((store) => store?.globalSlice?.globalState);
  const dispatch = useDispatch();
  const setSidebarState = (e) => {
    e.preventDefault();
    dispatch(changeSidebarState(!sidebarState?.isSidebarOpen));
  };
  return (
    <nav className="header sticky top-0 z-20 bg-white">
      {!sidebarState?.mobileSearchBar ? (
        <a href="" onClick={(e) => setSidebarState(e)}>
          <img src={menuIcon} alt="menu-icon" height={"22px"} width={"22px"} />
        </a>
      ) : (
        ""
      )}

      {!sidebarState?.mobileSearchBar ? (
        <div className="logo-searchbar">
          <Link className="logo" to="/">
            <img src={logo} width={"120px"} height={"40px"} alt="logo" />
          </Link>
          <div className="search-voice-container">
            <SearchBar />
            <MicComponent />
          </div>
        </div>
      ) : (
        ""
      )}

      {sidebarState?.mobileSearchBar ? <SearchBar /> : ""}
      {!sidebarState?.mobileSearchBar ? (
        <div className="right-header-container">
          <MoreApps />
          <NewVideo />
          <UserComponent />
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Header;
