import { Todo } from "../types/Props";
import useHandleTodo from "../hooks/useHandleTodo";
import IconEdit from "../icons/IconEdit";
import IconDelete from "../icons/IconDelete";
import IconCheck from "../icons/IconCheck";
import IconCancel from "../icons/IconCancel";
import useEditTodo from "../hooks/useEditTodo";
import EditInput from "./EditInput";

const TodoCard = ({ name, isComplete, id }: Todo) => {
  const { checked, handleChange, handleDelete } = useHandleTodo(
    id!!,
    isComplete,
    name
  );

  const {
    errors,
    handleCancel,
    handleEdit,
    handleStateEdit,
    handleSubmit,
    isEdit,
    register,
  } = useEditTodo(id!!, isComplete, name);

  return (
    <div className="card bg-neutral text-neutral-content pb-4 pr-4">
      <div className={`card-body ${checked && "line-through"}`}>
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          onChange={handleChange}
          checked={checked}
        />
        {isEdit ? (
          <EditInput errors={errors} register={register} />
        ) : (
          <h2 className="card-title">{name}</h2>
        )}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          sequi.
        </p>
      </div>

      <div className="card-actions justify-end">
        <button
          onClick={isEdit ? handleSubmit(handleEdit) : handleStateEdit}
          className={`btn btn-success ${isComplete && "btn-disabled"}`}
        >
          {isEdit ? <IconCheck /> : <IconEdit />}
        </button>
        <button
          className="btn btn-error"
          onClick={isEdit ? handleCancel : handleDelete}
        >
          {isEdit ? <IconCancel /> : <IconDelete />}
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
