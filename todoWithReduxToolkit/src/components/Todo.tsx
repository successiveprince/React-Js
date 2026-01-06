import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// @ts-ignore: no declaration file for module '../feature/todo/todoSlice'
import { removeTodo, updateTodo } from "../feature/todo/todoSlice";

function Todo() {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleEdit = (id: string, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = (id: string) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Your Todos</h2>
      {todos.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg">No todos yet. Add one to get started! 🚀</p>
        </div>
      ) : (
        <ul className="list-none space-y-3">
          {todos.map((todo: any) => (
            <li
              className="flex justify-between items-center bg-gray-900/50 px-5 py-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 group"
              key={todo.id}
            >
              {editId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 bg-gray-800 text-gray-100 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                  autoFocus
                />
              ) : (
                <div className="text-gray-100 text-base flex-1">
                  {todo.text}
                </div>
              )}

              <div className="flex gap-2 ml-4">
                {editId === todo.id ? (
                  <>
                    <button
                      onClick={() => handleSave(todo.id)}
                      className="text-white bg-blue-500/90 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded-lg transition-colors duration-200"
                      title="Save"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="text-white bg-gray-500/90 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded-lg transition-colors duration-200"
                      title="Cancel"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(todo.id, todo.text)}
                      className="text-white bg-green-500/90 border-0 py-2 px-3 focus:outline-none hover:bg-green-600 rounded-lg transition-colors duration-200"
                      title="Edit todo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className="text-white bg-red-500/90 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded-lg transition-colors duration-200"
                      title="Delete todo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Todo;
