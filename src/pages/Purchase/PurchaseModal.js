import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurchaseModal = ({tool}) => {
    const {name} = tool;
    const [user] = useAuthState(auth);
    return (
        <div>
            {/* <!-- The button to open modal --> */}
            

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box ">
                <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg">{name}</h3>
                    <input type="text" value={user.displayName} disabled class="input input-bordered mb-2 w-full max-w-xs" />
                    <input type="text" value={user.email} disabled class="input input-bordered w-full mb-2 max-w-xs" />
                    <input type="text" placeholder='Address'  class="input input-bordered w-full mb-2 max-w-xs" />
                    <input type="number" placeholder='Phone number'  class="input input-bordered w-full mb-2 max-w-xs" />
                    <div class="modal-action justify-start mt-[-1px]">
                        <label for="my-modal-6" class="btn w-full max-w-xs">Purchase</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;