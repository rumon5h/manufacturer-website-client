import { async } from '@firebase/util';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const { _id } = useParams();
    const [tool, setTool] = useState([]);
    const [orderQuantity, setOrderQuantity] = useState(100);
    const [user] = useAuthState(auth);
    const [bookingInfo, setBookingInfo] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/tool?id=${_id}`;
     
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTool(data)
            });
    }, [_id]);

    if (!tool) {
        return <Loading></Loading>
    }

    const handleIncreaseQuantity = (event) => {
        const newQuantity = orderQuantity + 1;
        tool.quantity = tool.quantity - 1;
        tool.price = 30 * parseInt(newQuantity);
        setOrderQuantity(newQuantity);
        const bookedTool = {
            name: tool.name,
            price: tool.price,
            image: tool.image,
            quantity: newQuantity,
            email: user.email,
            description: tool.description,
            displayName: user.displayName,
            paid: false,
            pending: true
        }
        setBookingInfo(bookedTool)
    }

    const handleDecreaseQuantity = (event) => {
        if (orderQuantity <= 100) {
            return toast.error('Products must be greater than 100', { id: '100' });
        }
        const newQuantity = orderQuantity - 1;
        tool.quantity = parseInt(tool.quantity) - 1;
        tool.price = 30 * parseInt(newQuantity);
        setOrderQuantity(newQuantity);

        const bookedTool = {
            name: tool.name,
            price: tool.price,
            quantity: newQuantity,
            image: tool.image,
            email: user.email,
            description: tool.description,
            displayName: user.displayName,
            paid: false,
            pending: true
        }
        setBookingInfo(bookedTool)
        console.log(bookedTool);
    }

    const handleBookingInfo = async (event) => {

        if (!bookingInfo?.email) {
            const bookedTool = {
                name: tool.name,
                price: parseInt(tool.price) * 100,
                quantity: tool.quantity,
                image: tool.image,
                email: user.email,
                description: tool.description,              
                displayName: user.displayName,
                paid: false,
                pending: true
                
            }
            console.log(bookedTool);
  
            fetch('http://localhost:5000/tools', {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookedTool)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Booking successful')
                })
        } else {

            const url = `http://localhost:5000/tools`;

            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookingInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
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