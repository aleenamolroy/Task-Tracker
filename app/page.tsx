import Taskcard from "@/components/TaskCard";
import Image from "next/image";
import { title } from "process";
export const metadata={
  title:"Home | Task Tracker",
  description:"View and manage tasks"
}
async function getTask() {
    const res=await fetch('http://localhost:3000/api/tasks',{cache:'no-store'})
    return res.json()
  }

export default async function Home(){
  const tasks=await getTask()
  return(
    <div className="p-6">
      <h1 className="text-3xl font-bold">Task Trackar</h1>
      <ul className="space-y-2 ">
        {tasks.length === 0 && <p className="mt-10">No tasks found.</p>}
        {tasks.map((task:any)=>(
          <Taskcard key={task._id} task={task}/>
        ))}
      </ul>
    </div>
  );
}
