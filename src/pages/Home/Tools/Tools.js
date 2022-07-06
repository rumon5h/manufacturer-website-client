import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import useTools from '../../Hook/useTools';
import Loading from '../../Shared/Loading/Loading';

const Tools = () => {
    const [isLoading, error, data, refetch] = useTools();

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='mx-12'>
            <h2 className='text-gray-900 font-bold text-2xl my-5 mx-auto w-[fit-content]'>Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data?.slice(0, 6).map(tool => <div key={tool._id} className="flex justify-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img className="rounded-t-lg h-52 " src={tool?.image} alt="" />
                            </a>
                            <div className="p-6">
                                <h5 title={tool?.name} className="text-gray-900 text-xl font-medium mb-2">{tool?.name.slice(0,17)}...</h5>
                                <p>Price: {tool?.price}</p>
                                <p className="text-gray-700 text-base mb-4">
                                    {tool.description.slice(0, 100)}...
                                </p>
                                <Link to={`/purchase/${tool._id}`} type="button" className="btn btn-active">Book Now</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='flex mt-5 justify-end items-center text-blue-800'>
            <Link className=' inline-block text-xl font-bold ' to='/allTool' >See More </Link><ArrowRightIcon className='w-6 inline-block h-6'></ArrowRightIcon>
            </div>
        </div>
    );
};

export default Tools;