import { Link } from "react-router-dom";
import TITLE404 from "../assets/404-title.png";
import ERROR_IMAGE from "../assets/404.png";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="px-5 md:px-0 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div>
          <img src={ERROR_IMAGE} alt="" />
        </div>
        <div className="text-center md:text-start">
          <img src={TITLE404} alt="" />
          <h3 className="font-bold text-3xl md:text-4xl my-4">
            Page Not Found!
          </h3>
          <p className="mb-6 text-gray-600">
            The page you 're looking for isn't available. Try to search again or
            use the go to.
          </p>
          <Link
            to={"/"}
            className="bg-blue-600 hover:bg-blue-800 shadow-sm duration-300 px-5 py-4 rounded-md text-white"
          >
            Go Back To Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
