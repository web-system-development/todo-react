import { useForm } from "react-hook-form";
import { todosStore } from "../store/todoStore";
import useCreateTodo from "./useCreateTodo";

interface TodoFormProps {
  task: string;
  id: number;
}

const useTodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormProps>();

  const addTodo = todosStore((state) => state.addTodo);

  const onSubmit = async (data: TodoFormProps) => {
    const todo = await useCreateTodo({ isComplete: false, name: data.task });
    addTodo(todo);
    reset();
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useTodoForm;
