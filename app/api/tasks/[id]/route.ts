import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import task from "@/models/task";
export async function PUT(req:Request,context:any) {
    await connectDB()
    const {id}=await context.params
    const {completed}=await req.json()
    const update= await task.findByIdAndUpdate(
        id,
        {completed},
        {new:true}
    )
    if(!update) return NextResponse.json({error:"Task not found"},{status:404})
    return NextResponse.json(update)
}