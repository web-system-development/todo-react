import api from "../api/dotnet";
import { Todo } from "../types/Props";

const useCreateTodo = async (todo: Todo) => {
  const { data } = await api.post<Todo>("/todos", todo);
  return data;
};

export default useCreateTodo;
