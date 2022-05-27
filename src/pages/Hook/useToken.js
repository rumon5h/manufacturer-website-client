import { async } from "@firebase/util";
import { useEffect, useState } from "react"

const useToken = (user) => {
    console.log(user?.user);
    const [userInformation, setUserInformation] = useState()
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const userInfo = { email }

        if (email) {
            fetch(`http://localhost:5000/authUser/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const acToken = data.token;
                    localStorage.setItem('accessToken', acToken)
                    setToken(acToken)
                })
        }
    }, [user]);

    useEffect(() => {
        const handleLoadUserData = async () => {
            const url = `http://localhost:5000/user?email=${user?.user?.email}`;
            await fetch(url)
                .then(res => res.json())
                .then(data => {
                    setUserInformation(data)
                    if (data) {
                        const handleUpdateUserData = async () => {
                            const name = data?.name || user?.user?.displayName || '';
                            const email = data?.email || user?.user?.email || '';
                            const address = data?.address || '';
                            const number = data?.number || '';
                            const linkedin = data?.linkedin || '';
                            const location = data?.location || '';
                            const education = data?.location || '';
                            const role = data?.role || '';
                            const userData = {
                                name,
                                email,
                                address,
                                number,
                                linkedin,
                                location,
                                education,
                                role
                            }
                            await fetch(`http://localhost:5000/user?email=${user?.user?.email}`, {
                                method: 'PUT',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(userData)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    // Done
                                })
                        }
                        handleUpdateUserData()
                    }
                })
        }
        handleLoadUserData();
    }, [user])

    if (!userInformation) {
        const name = user?.user?.displayName || '';
        const email = user?.user?.email;
        const address = '';
        const number = '';
        const linkedin = '';
        const location = '';
        const education = '';
        const role = '';
        const userData = {
            name,
            email,
            address,
            number,
            linkedin,
            location,
            education,
            role
        }
        fetch(`http://localhost:5000/user?email=${user?.user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                // Done
            })
    }

    return [token]
}

export default useToken;