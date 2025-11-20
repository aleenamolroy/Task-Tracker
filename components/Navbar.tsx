import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-black text-white px-6 flex justify-between items-center fixed top-0 left-0 z-50">
  <h2 className="text-xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Task Tracker</h2>

  <div className="flex gap-4">
    <Link href="/" className="hover:text-purple-400">Home</Link>
    <Link href="/about" className="hover:text-purple-400">About</Link>
    <Link href="/add" className="hover:text-purple-400">Add Task</Link>
  </div>
</nav>

  );
}
