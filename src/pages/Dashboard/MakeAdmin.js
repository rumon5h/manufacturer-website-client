import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const MakeAdmin = () => {

    const { isLoading, error, data: users, refetch } = useQuery(['users'], () =>
        fetch(`https://calm-castle-51840.herokuapp.com/users`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleMakeAdmin = id => {

        const exist = users.find(user => user._id === id);
        if (exist) {
            const name = exist?.name;
            const email = exist?.email;
            const address = exist?.address;
            const number = exist?.number;
            const linkedin = exist?.linkedin;
            const location = exist?.location;
            const education = exist?.education;
            const role = 'Admin';

            const userInformation = {
                name,
                email,
                address,
                number,
                linkedin,
                location: location,
                education,
                role
            };

            const newUrl = `https://calm-castle-51840.herokuapp.com/user?email=${exist?.email}`;

            fetch(newUrl, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInformation)
            })
                .then(res => {
                    res.json()
                })
                .then(data => {
                    refetch()
                    toast.success('successfully make as admin');
                })
        }
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}

                    {
                        users?.map((user, index) => <tr
                            className=''
                            key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user?.role}</td>
                            {
                                user?.role === 'Admin' ? <td><button disabled
                                onClick={() => handleMakeAdmin(user?._id)} className='btn bg-gray-900'>Make Admin</button></td>
                                    :
                                    <td><button onClick={() => handleMakeAdmin(user?._id)} className='btn bg-gray-900'>Make Admin</button></td>
                            }
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;