import logo from './logo.svg';
import './App.css';

function App() {
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
              <tr>
                <th scope='row'>1</th>
                <td>Code your project</td>
                <td>Sushil</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Get hairCut</td>
                <td>Sushil</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
