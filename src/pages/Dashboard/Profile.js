import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <div class="card w-[95%] bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default Profile;