import React from 'react';

const OrderDeleteModal = ({ handleDeleteOrderEvent, _id }) => {
    return (
        <div>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-red-600 text-lg">Are you sure you want to delete this product?</h3>
                    
                    <div className="modal-action">
                        <label
                            onClick={() => handleDeleteOrderEvent(_id)}
                            htmlFor="delete-order-modal" className="btn mt-5">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDeleteModal;