import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import OrderDeleteModal from './OrderDeleteModal';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    const url = `https://electronics.onrender.com/orders?email=${user?.email}`
 
    const { isLoading, data: orders, refetch} = useQuery(['tool', user], () =>
        fetch(url)
            .then(res => res.json())
    )
    if(isLoading){
        return <Loading></Loading>
    }

    const handleDeleteOrderEvent = (id) => {
        const url = `https://electronics.onrender.com/order?id=${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            });
    }
    return (
        <div className='mx-12'>
            <h2 className='text-gray-900 font-bold text-2xl my-5 mx-auto w-[fit-content]'>orders</h2>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>
                {
                    orders?.map(order => <div key={order._id} className="flex justify-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img className="rounded-t-lg h-52" src={order?.image} alt="" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{order?.name.slice(0,9)}</h5>
                                <p>Total Price: {order?.totalPrice}</p>
                                <p className='font-bold text-gray-900'>Payment: {order?.paid ? 'Paid' : "Unpaid"}</p>
                                <p className='font-bold text-gray-900'>Status: {!order?.pending ? 'Shipped' : "Pending"}</p>
                                <p className="text-gray-700 text-base mb-4">
                                    {order.description.slice(0, 100)}
                                </p>
                                {
                                    order.paid ? '' : <Link to={`/dashboard/payment/${order._id}`} type="button" className="btn btn-active">Payment</Link>
                                }
                                {
                                    order.paid ? <button disabled className='btn btn-active ml-2'>Delete</button> : <label

                                        htmlFor="delete-order-modal" className="btn  btn-active ml-2 modal-button">Delete</label>
                                }
                            </div>
                        </div>
                        {order && <OrderDeleteModal handleDeleteOrderEvent={handleDeleteOrderEvent} _id={order._id} ></OrderDeleteModal>}
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;