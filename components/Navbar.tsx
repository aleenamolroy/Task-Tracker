import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-black text-white px-6 flex justify-between items-center fixed top-0 left-0 z-50">
  <h2 className="text-xl font-bold">Task Tracker</h2>

  <div className="flex gap-4">
    <Link href="/" className="hover:text-gray-300">Home</Link>
    <Link href="/about" className="hover:text-gray-300">About</Link>
    <Link href="/add" className="hover:text-gray-300">Add Task</Link>
  </div>
</nav>

  );
}
