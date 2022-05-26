import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import  { Toaster } from 'react-hot-toast';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Navbar from './pages/Navbar/Navbar';
import Purchase from './pages/Purchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard';
import AddReview from './pages/Dashboard/AddReview';
import Profile from './pages/Dashboard/Profile';
import MyOrders from './pages/Dashboard/MyOrders';
import NotFound from './pages/NotFound/NotFound';
import AllTool from './pages/AllTool/AllTool';
import Payment from './pages/Payment/Payment';


function App() {
  return (
    <div className="max-w-7xl	mx-auto">
      <Navbar></Navbar>
    <Routes className='px-12'>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/allTool' element={
        <PrivateRoute>
          <AllTool></AllTool>
        </PrivateRoute>
      }></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={
        <PrivateRoute>
          <Dashboard/>
        </PrivateRoute>
      }>
        <Route path='/dashboard/payment/:id' element={
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        }></Route>
        <Route index element={<AddReview></AddReview>}></Route>
        <Route path='/dashboard/profile' element={<Profile></Profile>}></Route>
        <Route path='/dashboard/myOrders' element={<MyOrders></MyOrders>}></Route>
        <Route path='/dashboard/addReviews' element={<AddReview></AddReview>}></Route>
        

      </Route>
      <Route path='/purchase/:_id' element={
        <PrivateRoute>
          <Purchase/>
        </PrivateRoute>
      } ></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Toaster />

    </div>
  );
}

export default App;
