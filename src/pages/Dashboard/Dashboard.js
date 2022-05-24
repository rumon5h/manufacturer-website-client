import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-44 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard/profile'>Profile</Link></li>
            <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
            <li><Link to='/dashboard/addReviews'>Add a Review</Link></li>
            
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;