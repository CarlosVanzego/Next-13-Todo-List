"use client" // This line specifies that this code will run on the client-side, typically in a web browser environment.

type TodoItemProps = { // Defines a TypeScript type TodoItemProps to specify the expected structure of props for the TodoItem component.
  id: string // Declares a property `id` of type string.
  title: String // Declares a property `title` of type String. Note: `String` should be lowercase `string`.
  complete: boolean // Declares a property `complete` of type boolean.
  toggleTodo: (id: string, complete: boolean) => void // Declares a property `toggleTodo` which is a function taking `id` (string) and `complete` (boolean) parameters and returning void.
}

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) { // Defines a React functional component TodoItem which takes TodoItemProps as its props.
  return ( // The component returns JSX (a mix of JavaScript and HTML) representing the UI for a single todo item.
  <li className="flex gap-1 items-center"> // Renders a list item with specific CSS classes for styling.
    <input 
    id={id} // Sets the input element's id attribute to the todo item's id.
    type="checkbox" // Sets the input element's type attribute to "checkbox".
    className="cursor-pointer peer" // Adds CSS classes for styling and cursor behavior.
    defaultChecked={complete} // Sets the default checked state of the checkbox based on the `complete` prop.
    onChange={e => toggleTodo(id, e.target.checked)} // Attaches an onChange event listener to the checkbox, calling the toggleTodo function with the todo item's id and the new checked state when the checkbox value changes.
    />
    <label 
    htmlFor={id} // Associates the label with the input element using the `id` attribute.
    className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500" // Adds CSS classes for styling, including strikethrough text for completed todos.
    >
      {title} // Renders the todo item's title as the label text.
    </label>
  </li> // Closes the list item element.
  )
} // Closes the TodoItem component.