import { FaMobileRetro } from "react-icons/fa6";
import { MdAlternateEmail, MdLocationCity } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

export default function AboutCollege({ location, email, phone, website }) {
  return (
    <div>
      <div className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          {/* address  */}
          <div className="p-5 bg-blue-50 rounded">
            <span className="text-5xl text-blue-600 flex justify-center pb-2">
              <MdLocationCity />
            </span>
            <h4 className="text-2xl font-bold ">Location</h4>
            <p>
              {location.city}, {location.country}
            </p>
          </div>

          {/* email  */}
          <div className="p-5 bg-blue-50 rounded">
            <span className="text-5xl text-blue-600 flex justify-center pb-2">
              <MdAlternateEmail />
            </span>
            <h4 className="text-2xl font-bold ">Email</h4>
            <p>{email}</p>
          </div>

          {/* email  */}
          <div className="p-5 bg-blue-50 rounded">
            <span className="text-5xl text-blue-600 flex justify-center pb-2">
              <FaMobileRetro />
            </span>
            <h4 className="text-2xl font-bold ">Phone</h4>
            <p>{phone}</p>
          </div>

          {/* email  */}
          <div className="p-5 bg-blue-50 rounded">
            <span className="text-5xl text-blue-600 flex justify-center pb-2">
              <TbWorldWww />
            </span>
            <h4 className="text-2xl font-bold ">Website</h4>
            <p>{website}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
