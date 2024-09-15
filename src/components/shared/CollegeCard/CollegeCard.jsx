import {
  FaEnvelope,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone,
  FaStar,
} from "react-icons/fa";
import { MdEvent, MdWeb } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CollegeCard({ college }) {
  const navigate = useNavigate();

  const handleViewDetails = (collegeId) => {
    navigate(`/colleges/${collegeId}`);
  };

  const {
    _id,
    image,
    collegeName,
    shortName,
    establishedYear,
    type,
    location,
    website,
    email,
    phone,
    rating,
    events = [],
  } = college || {};

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out">
      <div className="relative">
        <img
          src={image || "https://via.placeholder.com/300"}
          alt={`${collegeName || "College"} campus`}
          className="rounded-md h-48 w-full object-cover"
        />
        {type && (
          <p className="absolute right-2 bottom-2 text-white bg-[#140342] px-3 py-1 rounded-sm text-sm shadow-md">
            {type}
          </p>
        )}
      </div>

      <div className="pt-4">
        <h3 className="text-2xl font-bold uppercase pt-2 text-[#140342] flex items-center">
          <FaGraduationCap className="mr-2" />
          {collegeName} {shortName && shortName}
        </h3>
        {establishedYear && (
          <p className="text-gray-600 text-sm mt-1">
            Established: {establishedYear}
          </p>
        )}

        <div className="mt-3 space-y-2 text-sm text-gray-500">
          {location?.city && (
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#140342] mr-1" />
              <p>{location.city}</p>
            </div>
          )}
          {phone && (
            <div className="flex items-center">
              <FaPhone className="text-[#140342] mr-1" />
              <p>{phone}</p>
            </div>
          )}
          {email && (
            <div className="flex items-center">
              <FaEnvelope className="text-[#140342] mr-1" />
              <p>{email}</p>
            </div>
          )}
          {website && (
            <div className="flex items-center">
              <MdWeb className="text-[#140342] mr-1" />
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                Website
              </a>
            </div>
          )}
        </div>

        {rating !== undefined && (
          <div className="flex items-center mt-4 space-x-2 text-yellow-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className={`${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-gray-500 text-sm">({rating}/5)</span>
          </div>
        )}

        <div className="mt-3 flex items-center space-x-4 text-sm text-gray-600">
          <MdEvent className="text-[#140342] mr-1" />
          <span>
            {events.length > 0
              ? `${events.length} Upcoming Events`
              : "No Upcoming Events"}
          </span>
        </div>

        {_id && (
          <button
            onClick={() => handleViewDetails(_id)}
            className="mt-4 bg-[#140342] text-white px-4 py-2 rounded-md hover:bg-[#100230] transition duration-300"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
}
