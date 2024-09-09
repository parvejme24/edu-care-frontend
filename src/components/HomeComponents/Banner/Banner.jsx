export default function Banner() {
  return (
    <div className="bg-[#140342] py-20 px-5 lg:px-0 md:min-h-screen flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-5 lg:gap-10">
        <div className="text-center md:text-start">
          <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Unlock Your Potential with World-Class{" "}
            <span className="text-blue-500">Education</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-lg">
            Start your journey towards academic excellence and career success
            with our comprehensive online courses and top college
            recommendations. Learn from industry experts, gain in-demand skills,
            and prepare for a brighter future.
          </p>
          <div className="space-x-5 pt-10">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition ease-in-out duration-300">
              Join For Free
            </button>
            <button className="border-white border text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:border-blue-600 transition ease-in-out duration-300">
              Find Colleges
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/home4-3.png"
            alt="Learning and growth"
            className="animate-fade-in"
          />
        </div>
      </div>
    </div>
  );
}
