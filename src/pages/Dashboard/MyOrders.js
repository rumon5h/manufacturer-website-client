import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            })
    }, [user]);

    const handleDeleteOrderEvent = (id) => {

        console.log(id);

        const url = `http://localhost:5000/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const exist = orders.filter(order => order._id !== id);
            if(exist){
                setOrders(exist)
            }
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
                                <img className="rounded-t-lg" src={order?.image} alt="" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{order?.name}</h5>
                                <p>Price: {order?.price}</p>
                                <p className='font-bold text-gray-900'>Paid: {order?.paid ? 'Paid' : "Unpaid"}</p>
                                <p className="text-gray-700 text-base mb-4">
                                    {order.description}
                                </p>
                                {
                                    order.paid ? '' : <Link to={`/pay/${order._id}`} type="button" className="btn btn-active">Pay Now</Link>
                                }
                                {
                                    order.paid ? <button disabled className='btn btn-active ml-2'>Delete</button> : <button
                                        onClick={() => handleDeleteOrderEvent(order._id)}
                                        className='btn btn-active ml-2'>Delete</button>
                                }
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;