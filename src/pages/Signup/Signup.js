import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Signup = () => {
    const [passError, setPassError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        newUsererror,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    
    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user || gUser) {
        navigate(from, { replace: true });
    }

    const handleSignupEvent = async event => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(displayName, email, password, confirmPassword);

        if (password !== confirmPassword) {
            return setPassError('Password did not match.')
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: displayName });
    }
    // console.log(user);

    return (
        <div className='w-full flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h3 className='text-2xl font-bold text-center'>Sign Up</h3>
                <form
                    onSubmit={handleSignupEvent}
                    className="card-body mt-[-30px] items-center text-center">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input 
                        {...register("name", { required: true })} 
                        type="text" 
                        placeholder='Your name' 
                        name='name' 
                        className="input input-bordered w-full max-w-xs" 
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt">Alt label</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors && <span className="label-text-alt">Alt label</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors && <span className="label-text-alt">Alt label</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Confirm password</span>
                        </label>
                        <input type="password" name='confirmPassword' placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {passError && <span className="label-text-alt text-red-500">{passError}</span>}
                        </label>
                    </div>

                    <input type='submit' className="btn w-full" value='SignUp' />
                </form>
                <div
                    className="card-body mt-[-50px] items-center text-center">
                    <p><small>Already have an account <Link to='/login' className='text-purple-700' >LogIn</Link> </small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn w-full btn-outline">Continue with google</button>
                </div>


            </div>
        </div>
    );
};

export default Signup;