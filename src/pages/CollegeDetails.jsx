import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router-dom";
import AboutCollege from "../components/CollegeDetailsComponents/AboutCollege/AboutCollege";
import CollegeReview from "../components/CollegeDetailsComponents/CollegeReview/CollegeReview";
import CourseResearch from "../components/CollegeDetailsComponents/CourseResearch/CourseResearch";
import Departments from "../components/CollegeDetailsComponents/Departments/Departments";
import GeneralInfo from "../components/CollegeDetailsComponents/GeneralInfo/GeneralInfo";
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

        {/* departments section  */}
        <div className="mt-10">
          <Departments departments={college.departments} />
        </div>

        {/* about section  */}
        <AboutCollege
          location={college.location}
          email={college.email}
          phone={college.phone}
          website={college.website}
        />

        {/* course and research section  */}
        <div className="mt-10">
          <CourseResearch
            courses={college.coursesOffered}
            researches={college.researchAreas}
            sportsFacilities={college.sportsFacilities}
          />
        </div>

        {/* general info  */}
        <div className="mt-10">
          <GeneralInfo />
        </div>

        {/* review section  */}
        <div className="pt-14">
          <CollegeReview />
        </div>
      </div>
    </div>
  );
}
