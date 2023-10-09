import api from "../api/dotnet";

export const useRemoveTodo = async (id: string) => {
  await api.delete<void>(`/todos/${id}`);
};
