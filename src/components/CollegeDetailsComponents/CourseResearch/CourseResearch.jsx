import { FaGraduationCap } from "react-icons/fa6";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { IoGameControllerSharp } from "react-icons/io5";

export default function CourseResearch({
  courses,
  researches,
  sportsFacilities,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-3">
      {/* courses side  */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 pb-2">
          <span className="text-blue-600 text-3xl">
            <FaGraduationCap />
          </span>{" "}
          Courses
        </h2>
        <div>
          {courses.map((course) => (
            <div
              key={course.index}
              className="text-lg bg-blue-50 py-2 px-4 mb-1 flex items-center gap-2"
            >
              <FaGraduationCap /> {course}
            </div>
          ))}
        </div>
      </div>

      {/* researches section  */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 pb-2">
          <span className="text-blue-600 text-3xl">
            <HiDocumentMagnifyingGlass />
          </span>
          Researches
        </h2>
        <div>
          {researches.map((research) => (
            <div
              key={research.index}
              className="text-lg bg-blue-50 py-2 px-4 mb-1 flex items-center gap-2"
            >
              <HiDocumentMagnifyingGlass /> {research}
            </div>
          ))}
        </div>
      </div>

      {/* sportsFacilities section  */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 pb-2">
          <span className="text-blue-600 text-3xl">
            <IoGameControllerSharp />
          </span>
          Researches
        </h2>
        <div>
          {sportsFacilities.map((sporse) => (
            <div
              key={sporse.index}
              className="text-lg bg-blue-50 py-2 px-4 mb-1 flex items-center gap-2"
            >
              <IoGameControllerSharp /> {sporse}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
