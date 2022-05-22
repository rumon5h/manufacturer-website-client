import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className='flex h-[80vh] justify-center items-center'>
            <div className="loader blasting-ripple"></div>
        </div>
 
    );
};

export default Loading;