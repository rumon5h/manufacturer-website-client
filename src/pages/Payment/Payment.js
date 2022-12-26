import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L5nMIELIQK8HAvgHbV2CnOeVSjtps4u56ltc2G5cKe07rcuV4nyTmjpgU9ho2OhgF44JSkAhKr9NKSdtk0qqYL600Wmii6o0w');


const Payment = () => {
    const { id } = useParams();
    const [payment, setPayment] = useState({});

    useEffect(() => {
        const url = `https://electronics.onrender.com/order/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPayment(data)
            })
    }, [id])
    return (
        <div>
            <div className="card card-compact w-[95%] m-5 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='font-bold text-2xl text-gray-900'>Hello, {payment?.displayName}</p>
                    <h2 className="card-title">Payment for: {payment.name}</h2>
                    <p className='text-xl'>Please pay: {payment?.totalPrice}</p>
                </div>
            </div>
            <div className="card card-compact w-[95%] m-5 bg-base-100 shadow-xl">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;