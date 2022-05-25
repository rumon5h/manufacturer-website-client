import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <div className="card w-[95%] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default Profile;