import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';


//parent component

function App() {

  const [todos, setTodos] = useState([ 
    { rowNumber: 1, rowDescription: "Code your project", rowAssigned: "User 1" },
    { rowNumber: 2, rowDescription: "Get Haircut", rowAssigned: "User 2" },
    { rowNumber: 3, rowDescription: "Sleep", rowAssigned: "User 1" },
    { rowNumber: 4, rowDescription: "Charge Laptop", rowAssigned: "User 2" }
  ]);

  const addToDo = (description, assigned) => {
    if (todos.length > 0) {
      const newTodo = { rowNumber: todos.length + 1, rowDescription: description, rowAssigned: assigned };
      // todos.push(newTodo);
      setTodos(todos=>[...todos,newTodo])
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
          <button className='btn btn-primary' onClick={addToDo}>
            Add new Todo
          </button>
          <NewTodoForm addToDo={addToDo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
