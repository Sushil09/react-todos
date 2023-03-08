import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';


//parent component

function App() {

  const [todos, setTodos] = useState([ 
    { rowNumber: 1, rowDescription: "Code your project", rowAssigned: "User 1" },
    { rowNumber: 2, rowDescription: "Get Haircut", rowAssigned: "User 2" },
    { rowNumber: 3, rowDescription: "Sleep", rowAssigned: "User 1" },
    { rowNumber: 4, rowDescription: "Charge Laptop", rowAssigned: "User 2" }
  ]);

  const addToDo = () => {
    if (todos.length > 0) {
      const newTodo = { rowNumber: todos.length + 1, rowDescription: "New Todo", rowAssigned: "User 3" };
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
        </div>
      </div>
    </div>
  );
}

export default App;
