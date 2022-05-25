import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTools from '../Hook/useTools';
import Loading from '../Shared/Loading/Loading';

const AllTool = () => {
    const [tools] = useTools();
    
    useEffect(()=>{
        if(!tools){
            return <Loading></Loading>
        }
    },[tools])
    return (
        <div className='mx-12'>
        <h2 className='text-gray-900 font-bold text-2xl my-5 mx-auto w-[fit-content]'>Tools</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                tools.map(tool => <div key={tool._id} className="flex justify-center">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img className="rounded-t-lg" src={tool?.image} alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">{tool?.name}</h5>
                            <p>Price: {tool?.price}</p>
                            <p className="text-gray-700 text-base mb-4">
                                {tool.description.slice(0,70)}...
                            </p>
                            <Link to={`/purchase/${tool._id}`} type="button" className="btn btn-active">Book Now</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
    );
};

export default AllTool;