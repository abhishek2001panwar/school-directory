import Image from "next/image";

export default function SchoolCard({ school }: { school: { id: number; name: string; address: string; city: string; image: string } }) {
  return (
    <div className="card flex flex-col gap-2">
      <div className="relative w-full h-40 overflow-hidden rounded-xl">
        <Image src={school.image || "/placeholder.png"} alt={school.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <h3 className="font-semibold text-lg line-clamp-1">{school.name}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{school.address}</p>
      <p className="text-sm text-gray-800">{school.city}</p>
    </div>
  );
}