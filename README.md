# Task Tracker

A simple full-stack Task Tracker built using **Next.js App Router** and **MongoDB**.  
Users can **create**, **view**, **update**, and **delete** tasks through clean UI screens and RESTful API endpoints provided by Next.js.

---

## Project Description

This project demonstrates how to build a full-stack CRUD application with:

- **Next.js (App Router)**
- **Server Components**
- **API Routes**
- **MongoDB + Mongoose**
- **TypeScript**

The goal is to give a clear understanding of how the frontend and backend work together inside a single Next.js project.

---

## Routes & API Overview

### **Frontend Routes**

| Route | Description |
|-------|-------------|
| `/` | Home page showing all tasks |
| `/tasks/[id]` | View a single task |
| `/add` | add a new task |

---

##  API Routes (Backend)

### **1. `/api/tasks`**

#### **GET**
Fetch all tasks  

#### **POST**
Add a new task  

### **2. `/api/tasks/[id]`**

#### **GET**
Fetch a single task by it's id 

#### **PUT**
Update task status 
#### **DELETE**
Delete a task from the list

## Local Setup Instruction
### **1. Clone the repository**
git clone https://github.com/your-username/task-tracker.git
cd task-tracker
### **2. Install dependencies**
npm install
### **3. Add environment variables**
MONGODB_URL=your-mongodb-connection-string
### **4. Start the development server**
npm run dev
### **5. Visit the app**
http://localhost:3000


