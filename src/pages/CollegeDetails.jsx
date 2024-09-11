import { useParams } from "react-router-dom";
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

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <img
            src={college.thumbnailImage}
            alt={college.collegeName}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
            {college.collegeName}{" "}
            <span className="text-gray-500 text-lg">({college.shortName})</span>
          </h2>
          <p>{college.description}</p>
        </div>
      </div>
    </div>
  );
}
