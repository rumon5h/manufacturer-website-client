import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageProductDeleteModal from './ManageProductDeleteModal';

const ManageProduct = () => {

    const { data: orders, isLoading, refetch } = useQuery('allOrder',() => fetch('https://calm-castle-51840.herokuapp.com/allOrder').then(res => res.json()));
    console.log(orders);

    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDeleteOrderEvent = (id) => {
        const url = `https://calm-castle-51840.herokuapp.com/order?id=${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Delete successful.');
                if (data) {
                    refetch();
                }
            });
    }

    const handleShippedEvent = (price) => {


    }
    return (
        <div className='grid gap-4 m-3 grid-cols-1 md:grid-cols-2'>
            {
                orders?.map(order => <div key={order._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-52' src={order.image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{order.name}</h2>
                        <p>Price: {order.price}</p>
                        <p>Quantity: {order?.quantity}</p>
                        <p>Paid: {!order?.paid ? 'unPaid' : 'Paid' }</p>
                        <p>Shipped: {!order?.shipped ?  'Pending' : 'Shipped'}</p>
                        <p>Total Price: {order?.totalPrice}</p>
                        <p>{order.description}</p>
                        <div>
                            <label htmlFor="order-delete-modal-2" disabled={order.paid} className="btn w-full modal-button">Delete</label>
                        </div>
                        {
                            (!order?.shipped && order?.paid) && <button className='btn' onClick={() => handleShippedEvent(order?.shipped)} >Shipped</button>
                        }
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