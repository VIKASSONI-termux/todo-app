import "./App.css";
import TodoFiltered from "./components/TodoFiltered";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      {/* <TodoFiltered></TodoFiltered> */}
      <TodoList></TodoList>
    </div>
  );
}

export default App;
