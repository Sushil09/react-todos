import logo from './logo.svg';
import './App.css';
import TodoRowItem from './components/TodoRowItem';


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
        <div>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <TodoRowItem rowNumber={todos[0].rowNumber}
                rowDescription={todos[0].rowDescription}
                rowAssigned={todos[0].rowAssigned} />
              <TodoRowItem rowNumber={todos[1].rowNumber}
                rowDescription={todos[1].rowDescription}
                rowAssigned={todos[1].rowAssigned} />
              <TodoRowItem rowNumber={todos[2].rowNumber}
                rowDescription={todos[2].rowDescription}
                rowAssigned={todos[2].rowAssigned} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
