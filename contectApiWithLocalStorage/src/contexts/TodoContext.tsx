import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "Sample Todo",
      completed: false,
    },
  ],
  updateTodo: (id: any, title: string) => {},
  deleteTodo: (id: number) => {},
  addTodo: (title: string) => {},
  toggleCompleted: (id: number) => {},
});

export const TodoProvider = TodoContext.Provider;
export const useTodo = () => useContext(TodoContext);
