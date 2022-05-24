import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurchaseModal = ({tool}) => {
    const {name} = tool;
    const [user] = useAuthState(auth);
    return (
        <div>
          
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg">{name}</h3>
                    <input type="text" value={user.displayName} disabled className="input input-bordered mb-2 w-full max-w-xs" />
                    <input type="text" value={user.email} disabled className="input input-bordered w-full mb-2 max-w-xs" />
                    <input type="text" placeholder='Address'  className="input input-bordered w-full mb-2 max-w-xs" />
                    <input type="number" placeholder='Phone number'  className="input input-bordered w-full mb-2 max-w-xs" />
                    <div className="modal-action justify-start mt-[-1px]">
                        <label htmlFor="my-modal-6" className="btn w-full max-w-xs">Purchase</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;