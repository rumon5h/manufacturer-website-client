import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const handleReviewEvent = (event) => {
        event.preventDefault();
        const stars = event.target.stars.value;
        const review = event.target.description.value;
        const name = user.displayName;
        if(stars > 5){
            return toast.error('Please enter less than 6 stars', {id: 'stars'})
        }
        else if(stars < 1){
            return toast.error('Please enter at least 1')
        }
        const userReview = {
            stars,
            review,
            name
        }

        const url = `https://calm-castle-51840.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Review update successful.')
        })
    }
    return (
        <div>
            <div className="card w-[95%] bg-base-100 shadow-xl">

                <form onSubmit={handleReviewEvent} className="card-body">
                    <h2 className="text-2xl">Please write a review!</h2>
                    <label htmlFor="stars">Stars</label>
                    <input type="number" name="number" className='input input-bordered' id="stars" />
                    <label htmlFor="description">Description</label>
                    <textarea name="description" placeholder='Review' className='textarea textarea-bordered' id="description" cols="10" rows="3"></textarea>
                    <div className="card-actions justify-start">
                        <input type="submit" className="btn btn-active" value="Submit now" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;