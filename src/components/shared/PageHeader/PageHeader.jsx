// eslint-disable-next-line react/prop-types
export default function PageHeader({ title, description }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #DDE6F4 0%, #E6EAF8 17.57%, #D4DCFC 34.86%, #E2E6F6 52.23%, #E0E5F8 65.17%, #EEF4FD 97.75%)",
      }}
      className="py-5 relative"
    >
      <div className=" container mx-auto">
        <div className="flex items-center justify-between pt-24 pb-10">
          <h2 className="text-3xl font-bold uppercase">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </div>

      <img
        src="https://themes.envytheme.com/falar/wp-content/uploads/2023/12/inner-page-shape1.png"
        alt="icon"
        className="absolute right-80 bottom-0 opacity-30"
      />
    </div>
  );
}
