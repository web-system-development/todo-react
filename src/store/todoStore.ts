import { create } from "zustand";
import { Todo } from "../types/Props";

type Todos = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, todo: Todo) => void;
};

export const todosStore = create<Todos>((set) => ({
  todos: [],
  addTodo: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),

  removeTodo: (id: string) =>
    set((state) => ({ todos: state.todos.filter((item) => item.id !== id) })),

  updateTodo: (id: string, todo: Todo) => {
    const todos = todosStore.getState().todos.map((currentTodo: Todo) => {
      if (currentTodo.id === id) {
        return { ...currentTodo, ...todo };
      }
      return currentTodo;
    });
    set({ todos });
  },
}));
