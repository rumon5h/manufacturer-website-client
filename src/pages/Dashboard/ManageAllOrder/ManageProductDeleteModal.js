import React from 'react';

const ManageProductDeleteModal = ({handleDeleteOrderEvent, _id}) => {
    return (
        <div>
            <input type="checkbox" id="order-delete-modal-2" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label for="order-delete-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete this product?</h3>
                    <div className="modal-action">
                        <label onClick={() =>handleDeleteOrderEvent(_id)} htmlFor="order-delete-modal-2" className="btn">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageProductDeleteModal;