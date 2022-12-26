import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const PurchaseModal = ({tool}) => {
    const {name} = tool;
    const [user] = useAuthState(auth);
    const handleUserInfo = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const number = event.target.number.value;
        const userInfo = {
            name,
            email, 
            address,
            number
        }
        fetch('https://electronics.onrender.com/user', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Information updating done', {id: 'userInfo'});
        })
    }
    return (
        <div>
          
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <form 
            onSubmit={handleUserInfo}
            className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg">{name}</h3>
                    <input type="text" name='name' value={user.displayName} disabled className="input input-bordered mb-2 w-full max-w-xs" />
                    <input type="text" name='email' value={user.email} disabled className="input input-bordered w-full mb-2 max-w-xs" />
                    <input type="text" name='address' placeholder='Address'  className="input input-bordered w-full mb-2 max-w-xs" />
                    <input type="number" name='number' placeholder='Phone number'  className="input input-bordered w-full mb-2 max-w-xs" />
                    <div className="modal-action justify-start mt-[-1px]">
                        <input type='submit' value='Purchase' htmlFor="my-modal-6" className="btn  w-full max-w-xs"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PurchaseModal;