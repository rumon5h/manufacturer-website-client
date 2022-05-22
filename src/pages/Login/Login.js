import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('');
    const handleLoginEvent = event => {
        event.preventDefault();
        console.log('hello login :D');
    }

    return (
        <div className='w-full flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
            <h3 className='text-2xl font-bold text-center'>Log In</h3>
                <form
                    onSubmit={handleLoginEvent}
                    class="card-body mt-[-30px] items-center text-center">
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            {error && <span class="label-text-alt">Alt label</span>}
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            {error && <span class="label-text-alt">Alt label</span>}
                        </label>
                    </div>
                    <input type='submit' class="btn w-full" value='LogIn' />
                </form>

                <div
                    class="card-body mt-[-50px] items-center text-center">
                        <p><small>New to there? <Link to='/signup' className='text-purple-700' >Create new account</Link> </small></p>
                    <div class="divider">OR</div>
                    <button class="btn w-full btn-outline">Continue with google</button>
                </div>


            </div>
        </div>
    );
};

export default Login;