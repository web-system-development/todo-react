import api from "../api/dotnet";
import { Todo } from "../types/Props";

const useUpdateTodo = async (todo: Todo) => {
  console.log("🚀 ~ file: useUpdateTodo.ts:5 ~ useUpdateTodo ~ todo:", todo)
  const { status } = await api.put<void>(`/todos/${todo.id}`, todo);
  return status;
};

export default useUpdateTodo;
