export default function CourseResearch({
  courses,
  researches,
  sportsFacilities,
}) {
  return (
    <div>
      {/* courses side  */}
      <div>
        <h2 className="text-2xl font-bold">Courses</h2>
        <div>
          {courses.map((course) => (
            <div
              key={course.index}
              className="text-lg bg-blue-50 py-2 px-4 mb-1"
            >
              {course}
            </div>
          ))}
        </div>
      </div>

      {/* researches section  */}
      <div>
        <h2 className="text-2xl font-bold">Researches</h2>
        <div>
          {researches.map((research) => (
            <div
              key={research.index}
              className="text-lg bg-blue-50 py-2 px-4 mb-1"
            >
              {research}
            </div>
          ))}
        </div>
      </div>

      {/* sportsFacilities section  */}
      <div>
        <h2 className="text-2xl font-bold">Researches</h2>
        <div>
          {sportsFacilities.map((sporse) => (
            <div
              key={sporse.index}
              className="text-lg bg-blue-50 py-2 px-4 mb-1"
            >
              {sporse}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
