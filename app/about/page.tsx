export const metadata={
    title:"About | Task Tracker",
    description:"About section of the task manager"
}
export default function page() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">About this App</h1>
      <p className="mt-4 text-gray-700">A simple task tracker you can add and manage your tasks here</p>
    </div>
  )
}
