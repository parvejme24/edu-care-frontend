import CollegeCard from "../components/shared/CollegeCard/CollegeCard";
import PageHeader from "../components/shared/PageHeader/PageHeader";
import { useGetCollegesQuery } from "../redux/apis/collegeApi";

export default function College() {
  const { data: colleges, error, isLoading } = useGetCollegesQuery();

  if (isLoading)
    return <div className="container mx-auto py-10">Loading...</div>;

  if (error)
    return (
      <div className="container mx-auto py-10">
        Error: {error?.message || "An error occurred"}
      </div>
    );

  return (
    <div>
      <PageHeader title={"College"} description={"Home >> College"} />

      <div className="container mx-auto py-14">
        {Array.isArray(colleges) && colleges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {colleges.map((college) => (
              <CollegeCard key={college._id} college={college} />
            ))}
          </div>
        ) : (
          <div>No colleges available</div>
        )}
      </div>
    </div>
  );
}
