import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ManageProductDeleteModal from './ManageProductDeleteModal';

const ManageProduct = () => {
    const [orders, setOrders] = useState([]);

  
    useEffect(() => {
        fetch('https://calm-castle-51840.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])

    const handleDeleteOrderEvent = (id) => {
        const url = `https://calm-castle-51840.herokuapp.com/order?id=${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Delete successful.');
            if(data){
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            }
            });
    }
    return (
        <div className='grid gap-4 m-3 grid-cols-1 md:grid-cols-2'>
            {
                orders?.map(order => <div key={order._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-52' src={order.image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{order.name}</h2>
                        <p>{order.description}</p>
                        <div>
                            <label htmlFor="order-delete-modal-2" className="btn modal-button">Delete</label>
                        </div>
                    </div>
                    {
                        order && <ManageProductDeleteModal handleDeleteOrderEvent={handleDeleteOrderEvent} _id={order._id}></ManageProductDeleteModal>
                    }
                </div>)

            }

        </div>
    );
};

export default ManageProduct;