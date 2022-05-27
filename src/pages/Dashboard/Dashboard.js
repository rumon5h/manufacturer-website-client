import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const { isLoading, error, data: userInfo, refetch } = useQuery(['user'], () =>
    fetch(`http://localhost:5000/user?email=${user?.email}`)
      .then(res => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>
  }
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
          <li><Link to='/dashboard/addReviews'>Add A Review</Link></li>
                    {
            userInfo?.role === 'Admin' && <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
          }
          {
            userInfo?.role === 'Admin' && <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
          }
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;