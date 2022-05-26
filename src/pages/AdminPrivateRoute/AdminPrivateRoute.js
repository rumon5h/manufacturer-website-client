import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const AdminPrivateRoute = ({ children }) => {
    const [user, Loading] = useAuthState(auth);
    const location = useLocation();

    const { isLoading, error, data, refetch } = useQuery(['user'], () =>
        fetch(`https://calm-castle-51840.herokuapp.com/user?email=${user?.email}`)
            .then(res => res.json())
    )

    if (Loading || isLoading) {
        return <Loading></Loading>
    }
    console.log(data);
    console.log(data?.role);

    if(data?.role !== 'Admin'){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default AdminPrivateRoute;