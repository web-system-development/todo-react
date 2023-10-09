import { useState } from "react";
import { todosStore } from "../store/todoStore";
import { useRemoveTodo } from "./useRemoveTodo";
import useUpdateTodo from "./useUpdateTodo";

const useHandleTodo = (id: string, isComplete: boolean, name: string) => {
  const [checked, setChecked] = useState(isComplete);
  const updateTodo = todosStore((state) => state.updateTodo);
  const removeTodo = todosStore((state) => state.removeTodo);

  const handleChange = () => {
    setChecked(!checked);
    if (!checked) {
      updateTodo(id, { id, isComplete: true, name });
    } else {
      updateTodo(id, { id, isComplete: false, name });
    }
    useUpdateTodo({ id, isComplete: !checked, name });
  };

  const handleDelete = () => {
    useRemoveTodo(id);
    removeTodo(id);
  };

  return { handleChange, handleDelete, checked };
};

export default useHandleTodo;
