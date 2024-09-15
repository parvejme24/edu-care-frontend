import Banner from "../components/HomeComponents/Banner/Banner";
import Reviews from "../components/HomeComponents/Reviews/Reviews";
import UpcommingEvents from "../components/HomeComponents/UpcommingEvents/UpcommingEvents";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <UpcommingEvents />
      <Reviews />
    </div>
  );
}
