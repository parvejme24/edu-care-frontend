import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../firebase/firebase.config";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");
    try {
      // eslint-disable-next-line no-undef
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate("/dashboard"); // Redirect after successful registration
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard"); // Redirect after successful login
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="max-w-[500px] w-[500px] mx-auto lg:mx-0 p-10 border rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Register Your Account
          </h2>

          {errorMessage && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className={`w-full px-5 py-2 border rounded-full ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className={`w-full px-5 py-2 border rounded-full ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="**********"
                className={`w-full px-5 py-2 border rounded-full ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300"
              disabled={loading}
            >
              {loading ? (
                <FaSpinner className="animate-spin inline-block" />
              ) : (
                "Register"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-4 text-center text-gray-500">or</div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition duration-300 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <FaSpinner className="animate-spin inline-block" />
            ) : (
              <>
                <FaGoogle className="mr-2" />
                Continue with Google
              </>
            )}
          </button>

          <p className="text-center mt-3">
            <small>
              Already have an account?{" "}
              <Link to={"/login"} className="hover:underline duration-300">
                Login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
