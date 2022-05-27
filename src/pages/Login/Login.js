import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../Hook/useToken';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        logInUser,
        logInLoading,
        logInError,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);

    const handleLoginEvent = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [token] = useToken(logInUser || gUser)
    console.log(token);
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }

    }, [token, navigate, from]);

    useEffect(() => {
        if (logInError) {
            toast.error(logInError?.code, { id: 'Error' })
        }
    }, [logInError])


    if (logInLoading || gLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-full flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h3 className='text-2xl font-bold text-center'>Log In</h3>
                <form
                    onSubmit={handleLoginEvent}
                    className="card-body mt-[-30px] items-center text-center">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <input type='submit' className="btn w-full" value='LogIn' />
                </form>

                <div
                    className="card-body mt-[-50px] items-center text-center">
                    <p><small>New to there? <Link to='/signup' className='text-purple-700' >Create new account</Link> </small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn w-full btn-outline">Continue with google</button>
                </div>


            </div>
        </div>
    );
};

export default Login;