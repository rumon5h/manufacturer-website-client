import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const AdminPrivateRoute = ({children}) => {
    const [user, Loading] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({});
    const location = useLocation();

    useEffect(() => {
        const newUrl = `http://localhost:5000/user?email=${user?.email}`;
        fetch(newUrl)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data);
            })
    }, [user]);
    if(Loading){
        return <Loading></Loading>
    }

    if(userInfo?.role !== 'Admin'){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }



    return children;
};

export default AdminPrivateRoute;