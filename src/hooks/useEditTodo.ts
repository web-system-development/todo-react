import { useState } from "react";
import { todosStore } from "../store/todoStore";
import { useForm } from "react-hook-form";
import useUpdateTodo from "./useUpdateTodo";
import { EditTodo } from "../types/Props";

const useEditTodo = (id: string, isComplete: boolean, name: string) => {
  const updateTodo = todosStore((state) => state.updateTodo);
  const [isEdit, setIsEdit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditTodo>({ defaultValues: { name } });

  const handleStateEdit = () => {
    setIsEdit(true);
  };

  const handleEdit = async ({ name: updatedName }: EditTodo) => {
    updateTodo(id!!, { id, name: updatedName, isComplete });

    await useUpdateTodo({ id, name: updatedName, isComplete });
    handleCancel();
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  return {
    errors,
    isEdit,
    register,
    handleEdit,
    handleStateEdit,
    handleCancel,
    handleSubmit,
  };
};

export default useEditTodo;
