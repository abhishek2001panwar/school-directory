import Nav from "../../components/Nav";
import { prisma } from "../../lib/prisma";

export default async function ShowSchools() {
  // Fetch only needed fields
  const schools = await prisma.school.findMany({
    select: {
      id: true,
      name: true,
      address: true,
      city: true,
      image: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <Nav/> 
    <div className="max-w-6xl mx-auto p-6">
     
      <h1 className="text-2xl font-bold mb-6">Schools</h1>

      {schools.length === 0 ? (
        <p className="text-gray-600">No schools found. Add one from the Add School page.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school) => (
            <div
              key={school.id}
              className="p-4 bg-white rounded-xl shadow-md border flex flex-col"
            >
              {school.image && (
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-lg font-semibold mb-1">{school.name}</h2>
              <p className="text-gray-600 mb-1">{school.address}</p>
              <p className="text-gray-600">{school.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
