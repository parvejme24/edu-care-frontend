import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTicketAlt,
} from "react-icons/fa";

export default function UpcommingEvents() {
  const events = [
    {
      name: "Edu Fest 2023: Igniting Minds Off On Transforming Lives",
      date: "July 24, 2025",
      time: "10:45 AM - 01-30 PM",
      location: "Yarra Park, Melbourne",
      image:
        "https://studyhub.themewant.com/wp-content/uploads/2023/06/sdafef-1-260x160.jpg",
      status: "start",
    },
    {
      name: "Edu Fest 2023: Igniting Minds Off On Transforming Lives",
      date: "July 24, 2025",
      time: "10:45 AM - 01-30 PM",
      location: "Yarra Park, Melbourne",
      image:
        "https://studyhub.themewant.com/wp-content/uploads/2023/06/sdafef-1-260x160.jpg",
    },
    {
      name: "Edu Fest 2023: Igniting Minds Off On Transforming Lives",
      date: "July 24, 2025",
      time: "10:45 AM - 01-30 PM",
      location: "Yarra Park, Melbourne",
      image:
        "https://studyhub.themewant.com/wp-content/uploads/2023/06/sdafef-1-260x160.jpg",
    },
    {
      name: "Edu Fest 2023: Igniting Minds Off On Transforming Lives",
      date: "July 24, 2025",
      time: "10:45 AM - 01-30 PM",
      location: "Yarra Park, Melbourne",
      image:
        "https://studyhub.themewant.com/wp-content/uploads/2023/06/sdafef-1-260x160.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 pt-20">
      <div className="container mx-auto space-y-5">
        {events.map((event, index) => (
          <div
            key={index}
            className="p-5 border rounded shadow flex gap-4 items-start"
          >
            <div>
              <img
                src={event.image}
                className="rounded bg-white"
                alt={event.name}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{event.name}</h3>
              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-blue-600" /> {event.date}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-blue-600" /> {event.time}
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" /> {event.location}
              </p>
              <button className="mt-4 bg-blue-600 px-6 py-2 rounded text-white flex items-center gap-2 hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600 duration-300">
                <FaTicketAlt /> Get Ticket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
