import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import VideoPreview from "../components/body/VideoPreview";
import MainBody from "../components/body/MainBody";
import SearchPreview from "../components/body/SearchPreview";
import ErrorComponent from "../components/error";

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
    errorElement: <ErrorComponent />,
  },
]);
export default appRouter;
