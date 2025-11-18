import { Task } from '@/Type/tasks'
function Taskcard({task}:{task:Task}) {
  return (
    <div className='border p-4 rounded-lg shadow'>
      <h3 className='text-xl font-semibold'>{task.title}</h3>
      <a href={`/tasks/${task.id}`} className='text-blue-500 underline text-sm'>View Details</a>
    </div>
  )
}

export default Taskcard
