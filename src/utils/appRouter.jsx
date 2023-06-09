import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import VideoPreview from "../components/VideoPreview";
import MainBody from "../components/MainBody";

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
    ],
  },
]);
export default appRouter;
