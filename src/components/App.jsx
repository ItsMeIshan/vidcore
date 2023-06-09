import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
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
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
