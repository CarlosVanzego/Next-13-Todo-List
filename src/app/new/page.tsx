// Importing necessary modules from Next.js and the database module
import Link from "next/link"
import { redirect } from "next/navigation"
import { prisma } from "../db"

// Function to create a new todo item asynchronously
async function createTodo(data: FormData) {
  "use server" // Hint to Next.js that this function runs on the server side

  // Extracting the title from the form data
  const title = data.get("title")?.valueOf()
  
  // Validating the title
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title")
  }

  // Creating a new todo item using Prisma
  await prisma.todo.create({ data: { title, complete: false } })
  
  // Redirecting to the home page after creating the todo item
  redirect("/")
}

// Default export function for the page component
export default function Page() {
  return (
    <>
    {/* Header section */}
    <header className="flex justify-between items-center mb-4">
          <h1 className="text-2x1">New</h1>
    </header>

    {/* Form section */}
    <form action={createTodo} className="flex gap-2 flex-col">
          {/* Input field for todo title */}
          <input 
          type="text" 
          name="title" 
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100" 
          />
          
          {/* Buttons section */}
          <div className="flex gap-1 justify-end">
            {/* Cancel button */}
            <Link 
            href=".." // Link to navigate back
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
            >
              Cancel
            </Link>
            
            {/* Submit button */}
            <button 
            type="submit" 
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
            >
              Create
            </button>
          </div>
        </form>
    </>
  )
}