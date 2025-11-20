import TaskForm from "@/components/TaskForm";

export default function Addpage() {
  return (
    <div className="mt-20 max-w-xl mx-auto px-4">

  {/* Heading */}
  <h1 className="text-3xl font-extrabold mb-6 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center drop-shadow-sm">
    Add New Task
  </h1>

  {/* Form Wrapper Card */}
  <div className="  shadow-md rounded-xl p-6 hover:shadow-lg transition">
    <TaskForm />
  </div>

</div>

  )
}
