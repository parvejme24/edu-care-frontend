import "react-accessible-accordion/dist/fancy-example.css";
import { FaMobileRetro } from "react-icons/fa6";
import { GiEarthAfricaEurope, GiGraduateCap } from "react-icons/gi";
import { MdAlternateEmail, MdLocationCity } from "react-icons/md";
import { PiCertificate, PiUsersThree } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader/PageHeader";
import { useGetCollegeByIdQuery } from "../redux/apis/collegeApi";

export default function CollegeDetails() {
  const { collegeId } = useParams();
  const { data: college, error, isLoading } = useGetCollegeByIdQuery(collegeId);

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Error loading college details</div>;
  }

  const images = college.campusImages.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <div>
      <PageHeader
        title={"College Details"}
        description={"College >> College Details"}
      />

      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="relative">
            <img src={college.image} alt="" className="rounded" />
          </div>
          <div>
            <h3 className="text-2xl font-bold uppercase flex items-center gap-3">
              <img
                src="https://studyhub.themewant.com/wp-content/uploads/2024/03/03-3.svg"
                alt=""
                className="w-10"
              />{" "}
              {college.collegeName} ({college.shortName})
            </h3>
            <p>{college.extablishedYear}</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold pb-2">Departments</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {college.departments.map((department) => (
              <div
                key={department.title}
                className="text-center bg-blue-50 p-5 rounded-sm space-y-3 hover:shadow-md"
              >
                <img src={department.image} alt="" className="w-20 mx-auto" />
                <h4 className="text-xl font-bold">{department.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {/* address  */}
            <div className="p-5 bg-blue-50 rounded">
              <span className="text-5xl text-blue-600 flex justify-center pb-2">
                <MdLocationCity />
              </span>
              <h4 className="text-2xl font-bold ">Location</h4>
              <p>
                {college.location.city}, {college.location.country}
              </p>
            </div>

            {/* email  */}
            <div className="p-5 bg-blue-50 rounded">
              <span className="text-5xl text-blue-600 flex justify-center pb-2">
                <MdAlternateEmail />
              </span>
              <h4 className="text-2xl font-bold ">Email</h4>
              <p>{college.email}</p>
            </div>

            {/* email  */}
            <div className="p-5 bg-blue-50 rounded">
              <span className="text-5xl text-blue-600 flex justify-center pb-2">
                <FaMobileRetro />
              </span>
              <h4 className="text-2xl font-bold ">Phone</h4>
              <p>{college.phone}</p>
            </div>

            {/* email  */}
            <div className="p-5 bg-blue-50 rounded">
              <span className="text-5xl text-blue-600 flex justify-center pb-2">
                <TbWorldWww />
              </span>
              <h4 className="text-2xl font-bold ">Website</h4>
              <p>{college.website}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-10 border border-blue-50 shadow-sm rounded-lg">
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
    </div>
  );
}
