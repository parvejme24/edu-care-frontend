import PageHeader from "../components/shared/PageHeader/PageHeader";
import { useGetCollegesQuery } from "../redux/apis/collegeApi";

export default function College() {
  const { data: colleges, error, isLoading } = useGetCollegesQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <PageHeader title={"College"} description={"Home >> College"} />

      <div className="container mx-auto">
        {colleges?.map((college) => (
          <li key={college._id}>{college.collegeName}</li>
        ))}
      </div>
    </div>
  );
}
