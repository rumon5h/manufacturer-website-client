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

    useEffect(() =>{

        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserInformation(data)
            })
    },[user])

    useEffect(() => {
        const name = userInformation?.name || user?.user?.displayName || '';
        const email = userInformation?.email || user?.user?.email || '';
        const address = userInformation?.address || '';
        const number = userInformation?.number || '';
        const linkedin = userInformation?.linkedin || '';
        const location = userInformation?.location || '';
        const education = userInformation?.location || '';
        const role = userInformation?.role || '';
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
        fetch(`http://localhost:5000/user?email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }, [user, userInformation]);
    return [token]
}

export default useToken;