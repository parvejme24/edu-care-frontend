import { GiEarthAfricaEurope, GiGraduateCap } from "react-icons/gi";
import { PiCertificate, PiUsersThree } from "react-icons/pi";

export default function GeneralInfo() {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 border border-blue-50 shadow-sm rounded-lg">
        <div className="text-center p-5 border border-blue-100">
          <span className="text-5xl text-blue-600 text-center flex justify-center">
            <PiUsersThree />
          </span>
          <h3 className="text-2xl font-bold pt-3 pb-1 text-center">55972</h3>
          <p className="font-light text-gray-500 text-center">
            Students Enrolled
          </p>
        </div>
        <div className="text-center p-5 border border-blue-100">
          <span className="text-5xl text-blue-600 text-center flex justify-center">
            <PiCertificate />
          </span>
          <h3 className="text-2xl font-bold pt-3 pb-1 text-center">55972</h3>
          <p className="font-light text-gray-500 text-center">
            Completed Course
          </p>
        </div>
        <div className="text-center p-5 border border-blue-100">
          <span className="text-5xl text-blue-600 text-center flex justify-center">
            <GiGraduateCap />
          </span>
          <h3 className="text-2xl font-bold pt-3 pb-1 text-center">45972</h3>
          <p className="font-light text-gray-500 text-center">
            Students Learner
          </p>
        </div>
        <div className="text-center p-5 border border-blue-100">
          <span className="text-5xl text-blue-600 text-center flex justify-center">
            <GiEarthAfricaEurope />
          </span>
          <h3 className="text-2xl font-bold pt-3 pb-1 text-center">75971</h3>
          <p className="font-light text-gray-500 text-center">
            Students Enrolled
          </p>
        </div>
      </div>
    </div>
  );
}
