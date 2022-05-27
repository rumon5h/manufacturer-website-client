import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const AdminPrivateRoute = ({ children }) => {
    const [user, Loading] = useAuthState(auth);
    const location = useLocation();

    const { isLoading, data, } = useQuery(['user'], () =>
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
    )

    if (Loading || isLoading) {
        return <Loading></Loading>
    }

    if(data?.role !== 'Admin'){
        localStorage.removeItem('accessToken')
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default AdminPrivateRoute;