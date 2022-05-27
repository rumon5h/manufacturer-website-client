import React from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {

    const handleAddProductEvent = event => {
        
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const image = event.target.image.value;

        const newProduct = {
            name, 
            price,
            quantity,
            description,
            image
        };

        fetch('http://localhost:5000/tool', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Successfully added')
        })

    }
    return (
        <div>
            <div className="card w-[95%] bg-base-100 shadow-xl">
               
                <form 
                onSubmit={handleAddProductEvent}
                className="card-body">
                    <input type="text" name='name' placeholder="Product name" className="input input-bordered w-full max-w-md" />
                    <input type="number" name='price' placeholder="Price" className="input input-bordered w-full max-w-md" />
                    <input type="number" name='quantity' placeholder="Quantity" className="input input-bordered w-full max-w-md" />
                    <textarea className="textarea textarea-bordered w-full max-w-md" name='description' placeholder="Description"></textarea>

                    <input type="text" placeholder='Image url'  className="input input-bordered w-full max-w-md" name="image"  />

                    <div className="card-actions ">
                        <button className="btn btn-active  w-full max-w-md">Post now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;