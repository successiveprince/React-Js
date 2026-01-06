import { useDispatch } from "react-redux";
import { useState } from "react";
// @ts-ignore: no declaration file for module '../feature/todo/todoSlice'
import { addTodo } from "../feature/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler} className="mb-8">
      <div className="flex gap-3">
        <input
          type="text"
          className="flex-1 bg-gray-900 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 text-base outline-none text-gray-100 py-3 px-4 transition-all duration-200 ease-in-out placeholder-gray-400"
          placeholder="Enter a new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-600 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-700 rounded-lg text-base font-medium transition-colors duration-200 shadow-lg hover:shadow-indigo-500/50"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}
export default AddTodo;
