import React from "react";
import {
  FaEnvelope,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone,
  FaStar,
} from "react-icons/fa";
import { MdEvent, MdWeb } from "react-icons/md"; // Importing additional icons

export default function CollegeCard({ college }) {
  const {
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
    events,
  } = college || {};

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out">
      {/* Image section */}
      <div className="relative">
        <img
          src={image}
          alt={`${collegeName || "College"} campus`}
          className="rounded-md h-48 w-full object-cover"
        />
        {type && (
          <p className="absolute right-2 bottom-2 text-white bg-[#140342] px-3 py-1 rounded-sm text-sm shadow-md">
            {type}
          </p>
        )}
      </div>

      {/* College details */}
      <div className="pt-4">
        <h3 className="text-2xl font-bold uppercase pt-2 text-[#140342] flex items-center">
          <FaGraduationCap className="mr-2" />
          {collegeName}{" "}
          {shortName && (
            <span className="text-lg font-semibold text-gray-500 ml-1">
              ({shortName})
            </span>
          )}
        </h3>
        {establishedYear && (
          <p className="text-gray-600 text-sm mt-1">
            Established: {establishedYear}
          </p>
        )}

        {/* Location and Contact Info */}
        <div className="mt-3 space-y-2 text-sm text-gray-500">
          {location && (
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

        {/* Rating */}
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

        {/* Events */}
        <div className="mt-3 flex items-center space-x-4 text-sm text-gray-600">
          <MdEvent className="text-[#140342] mr-1" />
          <p>Upcoming Events: {events ? events.length : 0}</p>
        </div>

        {/* View Details Button */}
        <button
          aria-label={`View details about ${collegeName}`}
          className="w-full py-3 bg-[#140342] rounded-lg text-white hover:bg-[#0f0232] hover:scale-105 transform transition duration-300 ease-in-out mt-5"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
