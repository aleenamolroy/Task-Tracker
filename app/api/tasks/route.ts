import { title } from "process"
import { Task } from "@/Type/tasks"
import { NextResponse } from "next/server"
let tasks:Task[]=[]

export async function GET(){
    return NextResponse.json(tasks)
}
export async function POST(req:Request) {
    const body=await req.json()
    const newTask={
        id:String(Date.now()),
        title:body.title,
        completed:false
    }
    tasks.push(newTask);
    return NextResponse.json(newTask,{status:200})
}
