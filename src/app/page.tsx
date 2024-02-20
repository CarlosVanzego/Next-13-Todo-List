// Importing necessary modules from Next.js, the database module, and custom components
import { TodoItem } from "@/components/TodoItem"
import { prisma } from "./db"
import Link from "next/link"
import { redirect } from "next/navigation"

// Function to retrieve todos from the database
function getTodos() {
  return prisma.todo.findMany()
}

// Function to toggle the completion status of a todo item asynchronously
async function toggleTodo(id: string, complete: boolean) {
  "use server" // Hint to Next.js that this function runs on the server side

  // Updating the completion status of the todo item in the database
  await prisma.todo.update({ where: { id }, data: { complete } })
}

// Default export function for the home page component
export default async function Home() {
  // Retrieving todos from the database
  const todos = await getTodos()

  return (
    <>
      {/* Header section */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1">Todos</h1>
        
        {/* Link to navigate to the page for creating a new todo */}
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline none" href="/new">
          New
        </Link>
      </header>

      {/* Todo list section */}
      <ul className="pl-4">
        {/* Rendering each todo item */}
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  )
}