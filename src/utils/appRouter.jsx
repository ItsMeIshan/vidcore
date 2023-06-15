import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import VideoPreview from "../components/body/VideoPreview";
import MainBody from "../components/body/MainBody";
import SearchPreview from "../components/body/SearchPreview";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainBody />,
      },
      {
        path: "/video/:id",
        element: <VideoPreview />,
      },
      {
        path: "/search",
        element: <SearchPreview />,
      },
    ],
  },
]);
export default appRouter;
