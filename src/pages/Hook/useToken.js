import { useEffect, useState } from "react"

const useToken = ({user}) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.email;
        const userInfo = {email}

        fetch(`https://calm-castle-51840.herokuapp.com/user?email=${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        
    }, [user])
    return [token]
}

export default useToken;