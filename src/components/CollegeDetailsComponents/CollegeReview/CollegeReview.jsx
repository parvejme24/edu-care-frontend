// Import Swiper styles
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { MdOutlineRateReview } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";

// import required modules

const reviews = [
  {
    userName: "Alice Johnson",
    email: "alice.johnson@example.com",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/05/rainbow-theme-thumb.jpg",
    review:
      "Great experience! The college offers excellent resources and supportive faculty.",
    rating: 4.5,
  },
  {
    userName: "Bob Smith",
    email: "bob.smith@example.com",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/05/rainbow-theme-thumb.jpg",
    review: "The campus life is vibrant, and the courses are well-structured.",
    rating: 4.0,
  },
  {
    userName: "Catherine Davis",
    email: "catherine.davis@example.com",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/05/rainbow-theme-thumb.jpg",
    review:
      "The faculty is knowledgeable, but there’s room for improvement in infrastructure.",
    rating: 3.8,
  },
  {
    userName: "Daniel Brown",
    email: "daniel.brown@example.com",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/05/rainbow-theme-thumb.jpg",
    review:
      "I loved the extracurricular activities. They really help students develop outside of academics.",
    rating: 4.7,
  },
  {
    userName: "Emily Wilson",
    email: "emily.wilson@example.com",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/05/rainbow-theme-thumb.jpg",
    review:
      "A great place to study, but student housing options could be better.",
    rating: 4.2,
  },
  {
    userName: "Franklin Green",
    email: "franklin.green@example.com",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/05/rainbow-theme-thumb.jpg",
    review:
      "The teaching methods are modern, and I feel well-prepared for my career.",
    rating: 4.6,
  },
  {
    userName: "Grace Lee",
    email: "grace.lee@example.com",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/05/rainbow-theme-thumb.jpg",
    review:
      "The library is well-stocked, but I wish the campus cafeteria had more variety.",
    rating: 4.0,
  },
  {
    userName: "Henry Walker",
    email: "henry.walker@example.com",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/05/rainbow-theme-thumb.jpg",
    review:
      "The curriculum is very engaging, and the professors are passionate about their subjects.",
    rating: 4.9,
  },
  {
    userName: "Isabella Martinez",
    email: "isabella.martinez@example.com",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/05/rainbow-theme-thumb.jpg",
    review:
      "A welcoming community with opportunities for both academic and personal growth.",
    rating: 4.3,
  },
  {
    userName: "James Taylor",
    email: "james.taylor@example.com",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/05/rainbow-theme-thumb.jpg",
    review:
      "I appreciated the support services for international students, but the dorms were a bit cramped.",
    rating: 3.9,
  },
];

export default function CollegeReview() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
        <span className="text-4xl text-blue-600">
          <MdOutlineRateReview />
        </span>
        Reviews:
      </h2>
      <div>
        {reviews.map((review) => (
          <div
            key={review.email}
            className="relative flex gap-3 bg-blue-50 p-5 border-b border-blue-200"
          >
            <div>
              <img src={review.image} className="w-10 rounded-full" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-800">
                {review.userName}
              </h3>
              <p className="text-sm text-gray-600">{review.email}</p>
              <p className="mt-4">{review.review}</p>
            </div>

            <div className="absolute top-2 right-2">
              <Rating
                style={{ maxWidth: 100 }}
                value={review.rating}
                readOnly
              />
            </div>
          </div>
        ))}
      </div>

      {/* add review form  */}
      <div className="bg-blue-200 p-5 mt-3">
        <form>
          <textarea
            className="w-full rounded p-5"
            placeholder="Write Your Review"
          ></textarea>
          <button className="mt-1 px-5 py-2 bg-blue-500 hover:bg-blue-600 duration-300 rounded text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
