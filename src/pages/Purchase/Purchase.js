import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const {_id} = useParams();
    const [tool, setTool] = useState([]);
    const [orderQuantity, setOrderQuantity] = useState(100);
    const [ordered, setOrdered] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => {
                const exist = data.find(tool => tool._id === _id)
                console.log(exist);
                setTool(exist)
            })
    }, [_id]);

  
    return (
        <div>
            <div className="card w-[80%] mx-auto bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <img src={tool?.image} alt="" />
                    <h2 className="card-title">{tool?.name}</h2>
                    <p>{tool?.description}</p>
                    <p>Price: {tool?.price}</p>
                    <p>In Stock: {tool?.quantity}</p>
                    <p>Minimum Order: {orderQuantity}</p>
                    
                    <div className="card-actions">
                        <label htmlFor="my-modal-6" className="btn modal-button">Purchase</label>
                    </div>
                </div>
            </div>
            {tool && <PurchaseModal  tool={tool}></PurchaseModal> }
        </div>
    );
};

export default Purchase;