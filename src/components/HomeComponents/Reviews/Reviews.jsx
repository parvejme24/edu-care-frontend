// Import Swiper styles and components
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
];

export default function Reviews() {
  return (
    <div className="pt-20">
      <div className="container mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.email}>
              <div className="p-5 border rounded shadow-md text-center">
                <img
                  src={review.image}
                  alt={review.userName}
                  className="w-16 h-16 rounded-full mb-4 mx-auto"
                />
                <h3 className="text-lg font-semibold">{review.userName}</h3>
                <p className="text-sm text-gray-600">{review.email}</p>
                <p className="py-5 text-gray-700">{review.review}</p>
                <p className="mt-2 font-bold">Rating: {review.rating}/5</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
