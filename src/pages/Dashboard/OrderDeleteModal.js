import React from 'react';

const OrderDeleteModal = ({ handleDeleteOrderEvent, _id }) => {
    return (
        <div>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="delete-order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-red-600 text-lg">Are you sure you want to delete this product?</h3>
                    
                    <div class="modal-action">
                        <label
                            onClick={() => handleDeleteOrderEvent(_id)}
                            for="delete-order-modal" class="btn mt-5">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDeleteModal;