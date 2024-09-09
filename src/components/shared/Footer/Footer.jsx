import { Link } from "react-router-dom";

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-300 hover:text-green-400 hover:underline duration-300"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <div className="bg-blue-950 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* about section  */}
        <div>
          <h3 className="text-white uppercase text-2xl font-bold">About</h3>
          <ul className="mt-3 space-y-1">
            <FooterLink to={"/"}>About</FooterLink>
            <FooterLink to={"/"}>Contact</FooterLink>
            <FooterLink to={"/"}>Help Center</FooterLink>
            <FooterLink to={"/"}>Refund</FooterLink>
            <FooterLink to={"/"}>Conditions</FooterLink>
            <FooterLink to={"/"}>Privacy Policy</FooterLink>
          </ul>
        </div>
        {/* about section  */}
        <div>
          <h3 className="text-white uppercase text-2xl font-bold">About</h3>
          <ul className="mt-3 space-y-1">
            <FooterLink to={"/"}>About</FooterLink>
            <FooterLink to={"/"}>Contact</FooterLink>
            <FooterLink to={"/"}>Help Center</FooterLink>
            <FooterLink to={"/"}>Refund</FooterLink>
            <FooterLink to={"/"}>Conditions</FooterLink>
            <FooterLink to={"/"}>Privacy Policy</FooterLink>
          </ul>
        </div>
        {/* about section  */}
        <div>
          <h3 className="text-white uppercase text-2xl font-bold">About</h3>
          <ul className="mt-3 space-y-1">
            <FooterLink to={"/"}>About</FooterLink>
            <FooterLink to={"/"}>Contact</FooterLink>
            <FooterLink to={"/"}>Help Center</FooterLink>
            <FooterLink to={"/"}>Refund</FooterLink>
            <FooterLink to={"/"}>Conditions</FooterLink>
            <FooterLink to={"/"}>Privacy Policy</FooterLink>
          </ul>
        </div>
        {/* about section  */}
        <div>
          <h3 className="text-white uppercase text-2xl font-bold">About</h3>
          <ul className="mt-3 space-y-1">
            <FooterLink to={"/"}>About</FooterLink>
            <FooterLink to={"/"}>Contact</FooterLink>
            <FooterLink to={"/"}>Help Center</FooterLink>
            <FooterLink to={"/"}>Refund</FooterLink>
            <FooterLink to={"/"}>Conditions</FooterLink>
            <FooterLink to={"/"}>Privacy Policy</FooterLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
