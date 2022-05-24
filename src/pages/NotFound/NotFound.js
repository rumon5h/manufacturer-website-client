import React from 'react';
import notFoundImage from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center w-[90vh] h-[90vh] mx-auto'>
            <img className='w-[100%]' src={notFoundImage} alt="" />
        </div>
    );
};

export default NotFound;