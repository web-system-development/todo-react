import ErrorTodo from "./ErrorTodo";
import useTodoForm from "../hooks/useTodoForm";

const TodoForm = () => {
  const { errors, handleSubmit, onSubmit, register } = useTodoForm();

  return (
    <div className="flex mx-auto justify-center items-center">
      <form
        className="p-4 form-control max-w-xs"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="indicator">
          {errors.task?.type === "required" && (
            <ErrorTodo message="Task is required" />
          )}
          <input
            type="text"
            placeholder="Type the task"
            className="input input-bordered input-primary w-full max-w-xs"
            {...register("task", { required: true })}
          />
        </div>
        <input
          className="btn btn-primary mt-2"
          type="submit"
          value="Add task"
        />
      </form>
    </div>
  );
};

export default TodoForm;
