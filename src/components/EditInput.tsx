import { FieldErrors, UseFormRegister } from "react-hook-form";
import { EditTodo } from "../types/Props";
import ErrorTodo from "./ErrorTodo";

interface EditInputProps {
  errors: FieldErrors<EditTodo>;
  register: UseFormRegister<EditTodo>;
}
const EditInput = ({ errors, register }: EditInputProps) => {
  return (
    <div className="indicator">
      {errors.name?.type === "required" && (
        <ErrorTodo message="Task is required" />
      )}

      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        {...register("name", { required: true })}
      />
    </div>
  );
};

export default EditInput;
