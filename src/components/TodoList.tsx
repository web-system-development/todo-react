import TodoCard from "./TodoCard";
import { Todo } from "../types/Props";

interface TodoListProps {
  todos: Todo[] | undefined;
  title: string;
}

const TodoList = ({ todos, title }: TodoListProps) => {
  return (
    <div className="mx-auto justify-center items-center">
      <h1 className="text-2xl">{title}</h1>
      <div className="grid grid-cols-4 gap-4">
        {todos?.map(({ id, name, isComplete }) => (
          <TodoCard id={id} name={name} key={id} isComplete={isComplete} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
