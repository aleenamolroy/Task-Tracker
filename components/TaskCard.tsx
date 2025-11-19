"use client"
import { Task } from '@/Type/tasks'
import { useRouter } from 'next/navigation'
function Taskcard({task}:{task:Task}) {
  const router=useRouter()
  async function handletask(completed:boolean) {
    await fetch(`/api/tasks/${task._id}`,{
      method:'PUT',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({completed})
    });
    router.refresh()
  }
  return (
    <li className='p-3 bg-gray-500 rounded flex items-center justify-between'>
      <label className='flex items-center gap-3 cursor-pointer'>
        <input type="checkbox" checked={task.completed} onChange={(e)=>handletask(e.target.checked)} className="w-5 h-5"/>
        <span className={`text-lg ${
            task.completed ? "line-through text-black" : ""
          }`}>
            {task.title}
          </span>
      </label>
      <a
        href={`/tasks/${task._id}`}
        className="text-blue-500 underline text-sm"
      >
        Details
      </a>
    </li>
  )
}

export default Taskcard
