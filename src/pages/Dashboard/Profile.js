import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Profile = () => {
    const [user, Loading] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({});

    const { isLoading, error, data, refetch } = useQuery(['user'], () =>
        fetch(`https://calm-castle-51840.herokuapp.com/user?email=${user?.email}`)
            .then(res => res.json())
    )

    useEffect(() => {
        if (data) {
            setUserInfo(data);
        }
    }, [data]);

    if (isLoading || Loading) {
        return <Loading></Loading>
    }

    const handleUpdateUserInfo = async event => {
        event.preventDefault();
        const name = event?.target?.name?.value || user.displayName;
        const email = event?.target?.email?.value || user.email;
        const address = event?.target?.address?.value || userInfo?.address;
        const number = event?.target?.number?.value || userInfo?.number;
        const linkedin = event?.target?.linkedin?.value || userInfo?.linkedin;
        const location = event.target?.location?.value || userInfo?.location;
        const education = event.target?.education?.value || userInfo?.education;
        const role = userInfo?.role || 'User';
        const userInformation = {
            name,
            email,
            address,
            number,
            linkedin,
            location: location,
            education,
            role
        };

        const newUrl = await `https://calm-castle-51840.herokuapp.com/user?email=${user?.email}`
        fetch(newUrl, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInformation)
        })
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
                refetch()
                toast.success('Information updating successful');
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

                    <span className=' text-2xl  inline-block'>{userInfo?.education}</span>
                    <input type="text" name='education' placeholder="Update your education" className=" mb-2 input input-bordered max-w-md" />

                    <span className=' text-2xl  inline-block'>{userInfo?.location}</span>
                    <input type="text" name='location' placeholder="Update your location" className=" mb-2 input input-bordered max-w-md" />

                    <span className=' text-2xl  inline-block'>{userInfo?.linkedin}</span>
                    <input type="text" name='linkedin' placeholder="Update your Linkedin url" className=" mb-2 input input-bordered max-w-md" />

                    <input type="submit" className='btn max-w-md' value="Save" />
                </form>
            </div>
        </div>
    );
};

export default Profile;