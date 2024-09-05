import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap-icons/font/bootstrap-icon'
import Sidebar from './Sidebar';
import Home from './Home';

function App() {
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
        <div className='col-2 bg-white vh-100'>
          <Sidebar />
        </div>
        <div className='col'>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
