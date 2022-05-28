import React from 'react';

const DeleteProductModal = ({handleDeleteProduct, _id}) => {
    return (
        <div>
           
            <input type="checkbox" id="delete-product-modal-3" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <label for="delete-product-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete this product?</h3>
                    <div class="modal-action">
                        <label 
                        onClick={() => handleDeleteProduct(_id)}
                        for="delete-product-modal-3" class="btn">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteProductModal;