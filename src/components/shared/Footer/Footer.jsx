import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
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
    <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-gray-300 py-20">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-white uppercase text-2xl font-bold">About Us</h3>
          <ul className="mt-4 space-y-2">
            <FooterLink to="/">Our Mission</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Blog</FooterLink>
            <FooterLink to="/">Partnerships</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
            <FooterLink to="/">Privacy Policy</FooterLink>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-white uppercase text-2xl font-bold">Resources</h3>
          <ul className="mt-4 space-y-2">
            <FooterLink to="/">Help Center</FooterLink>
            <FooterLink to="/">FAQs</FooterLink>
            <FooterLink to="/">Refund Policy</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Affiliate Program</FooterLink>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white uppercase text-2xl font-bold">Contact</h3>
          <ul className="mt-4 space-y-2">
            <FooterLink to="/">Contact Us</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Partnership Inquiries</FooterLink>
            <FooterLink to="/">Sponsorship</FooterLink>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-white uppercase text-2xl font-bold">Follow Us</h3>
          <p className="mt-4 text-gray-400">Stay connected with us</p>
          <div className="mt-4 flex space-x-5">
            <a
              href="#"
              className="text-gray-300 hover:text-white transform hover:scale-110 duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transform hover:scale-110 duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transform hover:scale-110 duration-300"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transform hover:scale-110 duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Subscription Form */}
          <div className="mt-8">
            <p className="text-gray-400">We don’t send spam, so don’t worry.</p>
            <form className="mt-4 flex items-center">
              <input
                type="email"
                placeholder="Your Email..."
                className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-r-md transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 border-t border-gray-700 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} EduCare. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-5">
            <a
              href="#"
              className="text-gray-300 hover:text-white transform hover:scale-110 duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transform hover:scale-110 duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transform hover:scale-110 duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transform hover:scale-110 duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
