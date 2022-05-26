import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    const menuItems = <>
        <li><Link className='mr-2' to='/home' >Home</Link></li>
        {user?.uid && <li><Link className='mr-2' to='/dashboard' >Dashboard</Link></li>}
        {/* <li><Link className='mr-2' to='/purchase' >Purchase</Link></li> */}
        <li><Link className='mr-2' to='/blogs' >Blogs</Link></li>
        {user?.uid ?  <li><Link onClick={() => signOut(auth)}  className='mr-2' to='/login' >LogOut</Link></li> : <li><Link className='mr-2' to='/login' >Login</Link></li> }
    </>
    return (
        <div className="navbar bg-gray-900 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 lg:bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='' className="btn btn-ghost normal-case text-xl">RRElectronics</Link>
            </div>
            <div className="navbar-middle hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {
                user?.uid  && location?.pathname?.includes('dashboard') &&  <div className="navbar-end flex lg:hidden">
                <ul className="menu menu-horizontal p-0">
                <label htmlFor="my-drawer-2" className="btn bg-gray-900 text-white drawer-button lg:hidden">Dashboard</label>
                </ul>
            </div>
            }
        </div>
    );
};

export default Navbar;