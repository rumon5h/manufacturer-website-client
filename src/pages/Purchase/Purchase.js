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

    const handleOrderEvent = (event) =>{

        console.log('ordered');

        const order ={

        }
    }


   
    return (
        <div>
            <div className="card w-[80%] mx-auto bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <img src={tool?.image} alt="" />
                    <h2 className="card-title">{tool?.name}</h2>
                    <p>{tool?.description}</p>
                    <p>In Stock: {tool?.quantity}</p>
                    <p>Minimum Order: {orderQuantity}</p>
                    <input type="number" onChange={(e)=>setOrderQuantity( e.target.value)} class="input input-bordered w-full mb-2 max-w-xs" />
                    <div className="card-actions">
                        <label for="my-modal-6" class="btn modal-button">Purchase</label>
                    </div>
                </div>
            </div>
            {tool && <PurchaseModal  tool={tool}></PurchaseModal> }
        </div>
    );
};

export default Purchase;