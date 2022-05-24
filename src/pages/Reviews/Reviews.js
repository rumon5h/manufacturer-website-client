import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, []);

    if(!reviews){
        return <Loading></Loading>
    }
    return (
        <div className='mx-12 my-12'>
            <h2 className='text-gray-900 font-bold text-2xl my-5 mx-auto w-[fit-content]'>Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <div 
                        className='text-center'
                    key={review._id}>
                        <div className='text-center m-3 p-3 '>
                            <div className="avatar mr-3">
                                <div className="w-10 rounded-full ring ring-red ring-offset-base-100 ring-offset-2">
                                    <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                                    
                                </div>
                            </div>
                            <p className='text-blue-800 font-bold text-lg cursor-pointer'>{review?.name}</p>
                        </div>
                        <p>{review?.review}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;