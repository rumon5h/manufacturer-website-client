import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Profile = () => {
    const [user] = useAuthState(auth);

    const { isLoading, error, data, refetch } = useQuery(['user'], () =>
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
    )
    if(error){
        toast.error(error?.message, {id: 'queryError:D'})
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    
    const handleUpdateUserInfo = (event) => {
        event.preventDefault();
        const name = event?.target?.name?.value || data?.name;
        const email = event?.target?.email?.value || data?.email;
        const address = event?.target?.address?.value || data?.address;
        const number = event?.target?.number?.value || data?.number;
        const linkedin = event?.target?.linkedin?.value || data?.linkedin;
        const location = event?.target?.location?.value || data?.location;
        const education = event?.target?.education?.value || data?.education;

        const userData = {
            name,
            email,
            address,
            number,
            linkedin,
            location,
            education,
        }

        fetch(`http://localhost:5000/user?email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            refetch()
        })
    }

    return (
        <div>
            <div className="card w-[95%] bg-base-100 shadow-xl">
                <form
                    onSubmit={handleUpdateUserInfo}
                    className="card-body">
                    <h2 className="text-2xl font-extrabold text-center uppercase">Information seatings</h2>

                    <span className=' text-2xl  inline-block'>{data?.name}</span>
                    <input type="text" name='name' placeholder="Update your name" className=" mb-2 input input-bordered max-w-md" />

                    <span className=' text-2xl  inline-block'>{data?.email}</span>
                    <input type="text" name='email' placeholder="Update your email" className=" mb-2 input input-bordered max-w-md" />

                    <span className=' text-2xl  inline-block'>{data?.number}</span>
                    <input type="number" name='number' placeholder="Update your number" className=" mb-2 input input-bordered max-w-md" />

                    <span className=' text-2xl  inline-block'>{data?.address}</span>
                    <input type="text" name='address' placeholder="Update your address" className=" mb-2 input input-bordered max-w-md" />

                    <span className=' text-2xl  inline-block'>{data?.education}</span>
                    <input type="text" name='education' placeholder="Update your education" className=" mb-2 input input-bordered max-w-md" />

                    <span className=' text-2xl  inline-block'>{data?.location}</span>
                    <input type="text" name='location' placeholder="Update your location" className=" mb-2 input input-bordered max-w-md" />

                    <span className=' text-2xl  inline-block'>{data?.linkedin}</span>
                    <input type="text" name='linkedin' placeholder="Update your Linkedin url" className=" mb-2 input input-bordered max-w-md" />

                    <input type="submit" className='btn max-w-md' value="Save" />
                </form>
            </div>
        </div>
    );
};

export default Profile;