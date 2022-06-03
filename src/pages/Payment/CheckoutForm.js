import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            
            return;
          }
      
          const card = elements.getElement(CardElement);
      
          if (card === null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
           return toast.error(error.message);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }
          
    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-active mt-3' type="submit" disabled={!stripe}>
          Payment
        </button>
      </form>
    );
};

export default CheckoutForm;