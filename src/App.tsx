import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import useLoadTodos from "./hooks/useLoadTodos";

function App() {
  const { isLoading, todos } = useLoadTodos();

  return (
    <div className="container mx-auto">
      <TodoForm />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <TodoList
            title="Todos Open"
            todos={todos?.filter((todo) => todo.isComplete === false)}
            key={1}
          ></TodoList>
          <TodoList
            title="Todos Done"
            todos={todos?.filter((todo) => todo.isComplete === true)}
            key={2}
          ></TodoList>
        </div>
      )}
    </div>
  );
}

export default App;
