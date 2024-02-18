import React, { useState ,useEffect} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoFiltered from "./TodoFiltered";

function TodoList() {
  const [todos, setTodos] = useState([]);
//   const [completedtodos, setCompletedTodos] = useState([]);
//   const [incompletedtodos, setIncompletedTodos] = useState([]);
const [filter,setFilter]=useState(false)

// useEffect(() => {
//     const storedData = localStorage.getItem('array');
//     if (storedData) {
//       setTodos(JSON.parse(storedData));
//     }
//   }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    
    setTodos(newTodos);
    console.log(todos);
    
   
   
  };


  

  const removeTodo= id =>{
    const removeArr=[...todos].filter(todo => todo.id !== id)
    setTodos(removeArr);
  }

  const updateTodo=(todoId,  newValue)=>{
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
      setTodos(prev => prev.map(item =>(item.id===todoId ? newValue : item)))

  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
     
        todo.complete=!todo.complete
      }
      return todo;
    });
    setTodos(updatedTodos);
    // console.log(todos); 
  };

const handleFilter=()=>{
setFilter(true) 

}
  if(filter===true){
    return(
        <div>
      <h1>Todo App</h1>
      {/* <TodoFiltered completed={completedtodos} incompleted={incompletedtodos}></TodoFiltered> */}
      <TodoFiltered todos={todos}></TodoFiltered>
      {/* <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/> */}
    </div> 
    )
  }
  return (
    <div>
      <h1>Add SOmething in Your List!!</h1>
      <TodoForm onSubmit={addTodo} handleFilter={handleFilter}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default TodoList;
