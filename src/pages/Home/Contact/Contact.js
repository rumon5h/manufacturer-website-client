import React from 'react';

const Contact = () => {
    return (

        <div className='my-12'>
            <div className="card w-[450px] mx-auto bg-base-100 shadow-xl">
                <div className="card-body mx-auto w-[90%]">
                    <h2 className="text-2xl text-gray-900 font-bold text-center">Contact Us!</h2>
                    <p className='text-gray-700 font-bold text-center'>Stay connected with us</p>
                    <input type="text" placeholder="Your name" className="input input-bordered w-full" />
                    <input type="email" placeholder="Email" className="input input-bordered w-full " />

                    <textarea className="textarea w-full textarea-bordered " placeholder="Your message"></textarea>
                                        <div className="card-actions">
                        <button className="btn btn-active w-full">Contact Submit</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;