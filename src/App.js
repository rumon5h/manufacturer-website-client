import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Navbar from './pages/Home/Navbar/Navbar';

function App() {
  return (
    <div className="max-w-7xl px-12	mx-auto">
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
