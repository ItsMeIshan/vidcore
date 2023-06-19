import { Link } from "react-router-dom";
import Header from "./navbar/Header";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function ErrorComponent() {
  return (
    <>
      <Header insideError={true} />
      <div className={`outlet-container`}>
        <div className="flex flex-col min-h-screen items-center justify-center">
          <img src="/youtube-offline.png" alt="decoration image" />
          <h1 className="text-4xl md:text-xl my-4">Page Not Found</h1>
          <Link to="/">
            <div className="flex items-center">
              <ArrowLeftIcon className="h-7 w-7 mx-2"></ArrowLeftIcon>
              <span className="text-lg">Go back to Home Page</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ErrorComponent;
