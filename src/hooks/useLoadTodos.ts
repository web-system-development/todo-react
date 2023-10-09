import { useEffect, useState } from "react";
import { todosStore } from "../store/todoStore";
import { useGetTodos } from "./useGetTodos";

const useLoadTodos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const addTodo = todosStore((state) => state.addTodo);
  const todos = todosStore((state) => state.todos);

  const manage = async () => {
    const value = await useGetTodos();
    value.map((todo) => addTodo(todo));
    setIsLoading(false);
  };

  useEffect(() => {
    manage();
  }, []);

  return {isLoading, todos}
};

export default useLoadTodos;
