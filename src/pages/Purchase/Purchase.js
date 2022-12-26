import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const { _id } = useParams();
    const [orderQuantity, setOrderQuantity] = useState(100);
    const [user] = useAuthState(auth);
    const [bookingInfo, setBookingInfo] = useState({});

    const url = `https://electronics.onrender.com/tool?id=${_id}`;
 
    const { isLoading, data: tool, } = useQuery(['tool', _id], () =>
        fetch(url)
            .then(res => res.json())
    )
    
    const [totalPrice, setTotalPrice] = useState(tool?.price * orderQuantity);
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleIncreaseQuantity = (event) => {
        const newQuantity = orderQuantity + 1;
        tool.quantity = tool.quantity - 1;
        const totalPrice = parseInt(tool.price) * parseInt(newQuantity);
        setOrderQuantity(newQuantity);
        const bookedTool = {
            name: tool.name,
            price: tool.price,
            totalPrice,
            image: tool.image,
            quantity: newQuantity,
            email: user.email,
            description: tool.description,
            displayName: user.displayName,
            paid: false,
            shipped: false
        }
        setBookingInfo(bookedTool)
    }

    const handleDecreaseQuantity = (event) => {
        if (orderQuantity <= 100) {
            return toast.error('Products must be greater than 100', { id: '100' });
        }
        const newQuantity = orderQuantity - 1;
        tool.quantity = parseInt(tool.quantity) - 1;
        const totalPrice = parseInt(tool.price) * parseInt(newQuantity);
        setOrderQuantity(newQuantity);

        const bookedTool = {
            name: tool.name,
            price: tool.price,
            totalPrice,
            quantity: newQuantity,
            image: tool.image,
            email: user.email,
            description: tool.description,
            displayName: user.displayName,
            paid: false,
            shipped: false
        }
        setBookingInfo(bookedTool)
    }

    const handleBookingInfo = (event) => {

        if (!bookingInfo?.email) {
            const totalPrice = parseInt(tool.price) * tool.quantity;
            const bookedTool = {
                name: tool.name,
                price: parseInt(tool.price) * 100,
                quantity: tool.quantity,
                totalPrice,
                image: tool.image,
                email: user.email,
                description: tool.description,
                displayName: user.displayName,
                paid: false,
                shipped: false

            }

            fetch('https://electronics.onrender.com/tools', {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookedTool)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Booking successful')
                })
        } else {

            const url = `https://electronics.onrender.com/tools`;

            fetch(url, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookingInfo)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Booking successful')
                })
        }
    }

    return (
        <div>
            <div className="card w-[80%] mx-auto bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <img src={tool?.image} alt="" />
                    <h2 className="card-title">{tool?.name}</h2>
                    <p>{tool?.description}</p>
                    <p>Price: {parseInt(tool?.price)}</p>
                    <p>TotalPrice: {parseInt(totalPrice || bookingInfo?.totalPrice)}</p>
                    <p>In Stock: {tool?.quantity}</p>
                    <p>Minimum Order: {orderQuantity}</p>
                    <div className='flex justify-center items-center'>
                        <input type="number" readOnly value={orderQuantity} className='input input-bordered' />
                        <PlusIcon
                            onClick={handleIncreaseQuantity}
                            className='w-9 h-9 cursor-pointer ml-3'></PlusIcon>
                        <MinusIcon
                            onClick={handleDecreaseQuantity}
                            className='w-9 h-9 cursor-pointer ml-3'></MinusIcon>
                    </div>

                    <div onClick={handleBookingInfo} className="card-actions">
                        <label htmlFor="my-modal-6" className="btn modal-button">Purchase</label>
                    </div>
                </div>
            </div>
            {tool && <PurchaseModal tool={tool}></PurchaseModal>}
        </div>
    );
};

export default Purchase;