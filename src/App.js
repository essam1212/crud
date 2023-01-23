// import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pruches from './Pruches/Pruches';

function App() {
  return (
    <>
      <Router basename='/cruds'>
        <Routes>
          <Route path='/' element={<Pruches />} />
          <Route path='Pruches' element={<Pruches />} />


          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
