"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function TaskForm() {
    const [title,settitle]=useState("")
    const router=useRouter()
    async function handlesubmit(e:any) {
        e.preventDefault()
        await fetch("/api/tasks",{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({title})
        })
        settitle("")
        router.refresh()
    }
  return (
    <form onSubmit={handlesubmit} className="p-4 space-y-3">
        <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} placeholder='Enter Task' className='border p-2 w-full'/>
        <button type='submit' className="bg-blue-600 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  )
}
