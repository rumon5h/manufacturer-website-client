import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Navbar from './pages/Home/Navbar/Navbar';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import  { Toaster } from 'react-hot-toast';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Services from './pages/Services/Services';


function App() {
  return (
    <div className="max-w-7xl px-12	mx-auto">
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/services' element={
        <PrivateRoute>
          <Services/>
        </PrivateRoute>
      }></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    <Toaster />

    </div>
  );
}

export default App;
