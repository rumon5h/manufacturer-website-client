import React from 'react';

const Contact = () => {
    return (

        <div className='my-12'>
            <div class="card w-[450px] mx-auto bg-base-100 shadow-xl">
                <div class="card-body mx-auto w-[90%]">
                    <h2 class="text-2xl text-gray-900 font-bold text-center">Contact Us!</h2>
                    <p className='text-gray-700 font-bold text-center'>Stay connected with us</p>
                    <input type="text" placeholder="Your name" class="input input-bordered w-full" />
                    <input type="email" placeholder="Email" class="input input-bordered w-full " />

                    <textarea class="textarea w-full textarea-bordered " placeholder="Your message"></textarea>
                                        <div class="card-actions">
                        <button class="btn btn-active w-full">Contact Submit</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;