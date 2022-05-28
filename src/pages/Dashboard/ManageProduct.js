import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import DeleteProductModal from './DeleteProductModal';

const ManageProduct = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://calm-castle-51840.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => {
                setTools(data)
            })
    }, []);

    const handleDeleteProduct = (id) => {
        fetch(`https://calm-castle-51840.herokuapp.com/tool?id=${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Deleted successful.');
            if(data){
                const remaining = tools.filter(tool => tool._id !== id);
                setTools(remaining)
            }
        })
    }
    return (
        <div className='grid grid-cols-1 gap-3 m-9 md:grid-cols-2'>
            {
                tools?.map(product => <div key={product?._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-52' src={product?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product?.name}</h2>
                        <p>{product?.price}</p>
                        <p>{product?.quantity}</p>
                        <p>{product?.description}</p>
                        <div className="card-actions justify-end">
                            <label htmlFor="delete-product-modal-3" className="btn modal-button">Delete</label>

                        </div>
                    </div>
                    {
                        product && <DeleteProductModal handleDeleteProduct={handleDeleteProduct} _id={product._id}></DeleteProductModal>
                    }
                </div>)
            }
        </div>
    );
};

export default ManageProduct;