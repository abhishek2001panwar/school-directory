import Link from "next/link";
export default function Nav() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold">School Directory</Link>
        <div className="flex gap-3">
          <Link className="underline" href="/addSchool">Add School</Link>
          <Link className="underline" href="/showSchools">Show Schools</Link>
        </div>
      </div>
    </nav>
  );
}