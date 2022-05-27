import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allOrder')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])
    return (
        <div className='grid gap-4 m-3 grid-cols-1 md:grid-cols-2'>
            {
                orders?.map(order => <div key={order._id} className="card w-96 bg-base-100 shadow-xl">
                    <img src={order.image} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">{order?.name}</h2>
                        <p>{order?.description}</p>
                        {order?.pending &&  <p className='text-red-400 font-bold'>Pending</p> }
                        <div className='flex justify-between'>
                            <div className="card-actions justify-start">
                                <button className={`btn btn-active ${order.paid && 'btn-disabled'}`}>Pay Now</button>
                            </div>
                            <div className="card-actions justify-end">
                              {order?.pending &&   <button className="btn btn-active">Shipped</button>}
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageProduct;