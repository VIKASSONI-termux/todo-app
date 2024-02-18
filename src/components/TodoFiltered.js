import React from 'react'

function TodoFiltered(props) {
  return (
    <div className="todo-app">
        <h1>Completed Items</h1>
        {props.todos.map((todo)=>{

      if(todo.complete===true){
        return(
            <>
           
            <div
            className={todo.complete ? "todo-row complete" : "todo-row"}
        
          >
            {todo.text}
            </div>
            </>
        )
      }

      
    })}


<h1>Inompleted Items</h1>
        {props.todos.map((todo)=>{

      if(todo.complete===false){
        return(
            <>
           
            <div
            className={todo.complete ? "todo-row complete" : "todo-row"}
        
          >
            {todo.text}
            </div>
            </>
        )
      }

      
    })}





 </div>
  )
}

export default TodoFiltered