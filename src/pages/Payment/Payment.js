import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id}= useParams();
    return (
        <div>
            <h1>This is payment page.{id}</h1>
        </div>
    );
};

export default Payment;