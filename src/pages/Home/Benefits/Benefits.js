import React from 'react';
import { PhoneIcon, CashIcon } from '@heroicons/react/solid';
import carImageIcon from '../../../images/service-icon.png';


const Benefits = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex justify-center items-center mt-9'>
                <PhoneIcon className="h-9 w-9 mr-3 text-blue-500 "></PhoneIcon>
                <div>
                    <p>HELP: 09678110110</p>
                    <p>09.00am - 08.00pm (7 days a week)
                    </p>
                </div>
            </div>
            <div className='flex justify-center gap-4 items-center mt-9'>
                <CashIcon className="h-9 w-9 mr-3 text-orange-400"></CashIcon>
                <div>
                    <p>PAY CASH ON DELIVERY</p>
                    <p>Pay cash at your doorstep</p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-9'>
                
                <img src={carImageIcon} className="h-9 w-10 mr-3" alt="" />
                <div>
                    <p>SERVICE</p>
                    <p>All over Bangladesh</p>
                </div>
            </div>
            
        </div>
    );
};

export default Benefits;