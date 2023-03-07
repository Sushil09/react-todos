import logo from './logo.svg';
import './App.css';
import TodoRowItem from './components/TodoRowItem';
import TodoTable from './components/TodoTable';


//parent component

function App() {

  const todos = [{ rowNumber: 1, rowDescription: "Code your project", rowAssigned: "User 1" },
  { rowNumber: 2, rowDescription: "Get Haircut", rowAssigned: "User 2" },
  { rowNumber: 3, rowDescription: "Sleep", rowAssigned: "User 1" }];

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <TodoTable todos={todos}/>
      </div>
    </div>
  );
}

export default App;
