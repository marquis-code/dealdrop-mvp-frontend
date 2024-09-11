import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap-icons/font/bootstrap-icon'
import Sidebar from './Sidebar';
import Home from './Home';
import { useState } from 'react';
import DealScheduling from './DealScheduling';

function App() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <DealScheduling duration={3 * 24 * 60 * 60 * 1000} />
      <div className='row'>
        {toggle && (
          <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
            <Sidebar Toggle={Toggle} />
          </div>
        )}
        {toggle && <div className='col-4 col-md-2'></div>}
        <div className='col'>
          <Home Toggle={Toggle} />
        </div>
      </div>
    </div>
  );
}

export default App;
