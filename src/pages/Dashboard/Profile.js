import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/user?email=${user?.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // setUserInfo(data);
        })
    },[user, userInfo]);

    const handleUpdateUserInfo = event => {
        event.preventDefault();
        const name = event?.target?.name?.value || user.displayName;
        const email = event?.target?.email?.value || user.email;
        const address = event?.target?.address?.value || '';
        const number = event?.target?.number?.value ;
        const userInformation = {
            name,
            email,
            address,
            number
        };
        
        const newUrl = `http://localhost:5000/user?email=${user?.email}`
        fetch(newUrl, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInformation)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUserInfo(data)
            toast.success('Information updating successful')
        })
    }

    return (
        <div>
            <div className="card w-[95%] bg-base-100 shadow-xl">
                <form 
                onSubmit={handleUpdateUserInfo}
                className="card-body">
                    <h2 className="text-2xl font-extrabold text-center uppercase">Information seatings</h2>
             
                    <span className=' text-2xl  inline-block'>{userInfo?.name}</span>
                    <input type="text" name='name' placeholder="Update your name" className=" mb-2 input input-bordered max-w-md" /> 
             
             
                    <span className=' text-2xl  inline-block'>{userInfo?.email}</span>
                    <input type="text" name='email' placeholder="Update your email" className=" mb-2 input input-bordered max-w-md" /> 
             
             
                    <span className=' text-2xl  inline-block'>{userInfo?.number}</span>
                    <input type="number" name='number' placeholder="Update your number" className=" mb-2 input input-bordered max-w-md" /> 
                    <span className=' text-2xl  inline-block'>{userInfo?.address}</span>
                    <input type="text" name='address' placeholder="Update your address" className=" mb-2 input input-bordered max-w-md" /> 
             
                    <input type="submit" className='btn max-w-md' value="Save" />
                </form>
            </div>
        </div>
    );
};

export default Profile;