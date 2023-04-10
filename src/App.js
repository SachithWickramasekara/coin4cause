import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Signin from './Pages/Signin';
import UsernamePassword from './Pages/UsernamePassword';
import Hometemp from './Pages/Hometemp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/usernamepassword' element={<UsernamePassword />}></Route>
        <Route path='/hometemp' element={<Hometemp />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
