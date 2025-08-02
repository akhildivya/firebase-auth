
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
//import Phone from './components/Phone';
//import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
     </Routes>
    </div>
  );
}

export default App;
