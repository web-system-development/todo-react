import api from "../api/dotnet";
import { Todo } from "../types/Props";

export const useGetTodos = async () => {
  const { data } = await api.get<Todo[]>("/todos");
  return data;
};
