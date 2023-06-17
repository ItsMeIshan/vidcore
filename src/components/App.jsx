import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./navbar/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { changeSidebarState } from "../utils/globalStateSlice";
import { useWindowSize } from "@uidotdev/usehooks";
/* Planning
 - Header
    - hamburger menu Icon
    - Logo
    - SearchBar
    - Voice Search Icon button
    - User Info
  
  - Sidebar consists of MenuButtons
    - Home
    - Explore 
    - Subscriptions
    - Library
  
  - Main Body
    - Topics Chips
    - Video Cards
*/
function App() {
  const { width } = useWindowSize();
  const globalState = useSelector((store) => store?.globalSlice?.globalState);
  const dispatch = useDispatch();
  const customStyles = {
    content: {
      top: "8%",
      position: "absolute",
      zIndex: "10",
      // left: '50%',
      // right: 'auto',
      // bottom: 'auto',
      // marginRight: '-50%',
      // transform: 'translate(-50%, -50%)',
    },
  };

  const closeModal = () => {
    dispatch(changeSidebarState(false));
  };
  return (
    <>
      <Header />
      {width < 639 ? (
        <Modal
          className="mobile-sidebar"
          isOpen={globalState?.isSidebarOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Sidebar"
        >
          <Sidebar />
        </Modal>
      ) : (
        ""
      )}

      <div
        style={{ display: "flex" }}
        className={`sidebar-outlet-container ${
          globalState?.isSidebarOpen ? "relative" : ""
        }`}
      >
        <Sidebar desktopSidebar={true} />
        <div
          className={`outlet-container ${
            globalState?.isSidebarOpen ? "-z-10" : ""
          }`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
