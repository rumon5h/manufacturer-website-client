import React from 'react';

const DeleteProductModal = ({handleDeleteProduct, _id}) => {
    return (
        <div>
           
            <input type="checkbox" id="delete-product-modal-3" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label htmlFor="delete-product-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete this product?</h3>
                    <div className="modal-action">
                        <label 
                        onClick={() => handleDeleteProduct(_id)}
                        htmlFor="delete-product-modal-3" className="btn">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteProductModal;