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

  const [showAddTodoForm,setAddTodoForm] = useState(false);

  const addToDo = (description, assigned) => {
    let rowNumber=0
    if (todos.length > 0)
      rowNumber=todos[todos.length-1].rowNumber +1;
    else
      rowNumber=1;  

      const newTodo = { 
        rowNumber: todos.length + 1, 
        rowDescription: description, 
        rowAssigned: assigned 
      };
      // todos.push(newTodo);
      setTodos(todos=>[...todos,newTodo])
    }


    const deleteTodo= (deleteTodoRowNumber) =>{
      let filtered = todos.filter(function (value) {
        return value.rowNumber !==deleteTodoRowNumber;
      });
    setTodos(filtered);
    }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setAddTodoForm(!showAddTodoForm)}  className='btn btn-primary'>
            {showAddTodoForm? 'Close New Todo':'New Todo'}
          </button>
          {showAddTodoForm && <NewTodoForm addToDo={addToDo}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
