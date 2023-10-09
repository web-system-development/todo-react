import { useQuery } from "@tanstack/react-query";
import { useGetTodos } from "./useGetTodos";

const useFetch = () => {
  return useQuery(["todos"], useGetTodos);
};

export default useFetch;
