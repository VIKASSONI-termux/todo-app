import React, { useState,useEffect,useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef= useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  })
  const handleChange=e =>{
    setInput(e.target.value)
  }

  const handleSubmit=e =>{
    e.preventDefault();
    props.onSubmit({
      id:Math.floor(Math.random()*1000),
      text:input,
      complete:false
    })


    setInput('');
  };
const handleFilter= ()=>{
  props.handleFilter()
  // console.log(props.handleFilter.completedtodos)

}
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
        type="text"
        placeholder="Add Item"
        value={input}
        name="text"
        className="todo-input edit"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className='todo-button edit'>Update</button>
        </>
      ):(
        <>
          <input
        type="text"
        placeholder="Add Item"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
        />
        <button className='todo-button'>Add Item</button>
        <button type="button" className='filter-button' onClick={handleFilter}>Filter</button>
        </> 
      )}
    
    </form>
  );
}

export default TodoForm;
