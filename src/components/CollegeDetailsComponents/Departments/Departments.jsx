export default function Departments({ departments }) {
  return (
    <div>
      {" "}
      <h2 className="text-2xl font-bold pb-2">Departments</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
        {departments.map((department) => (
          <div
            key={department.title}
            className="text-center bg-blue-50 p-5 rounded-sm space-y-3 hover:shadow-md"
          >
            <img src={department.image} alt="" className="w-20 mx-auto" />
            <h4 className="text-xl font-bold">{department.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
