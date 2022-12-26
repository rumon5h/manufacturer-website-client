import { async } from "@firebase/util";
import { useEffect, useState } from "react"

const useToken = (user) => {

    const [userInformation, setUserInformation] = useState({});
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;

        const userInfo = { email }

        if (email) {
            fetch(`https://electronics.onrender.com/authUser/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {
                    const acToken = data.token;
                    localStorage.setItem('accessToken', acToken)
                    setToken(acToken)
                })
        }
    }, [user]);


    useEffect(() => {
        const handleLoadUserInfo = async () => {
            const email = user?.user?.email
            const url = `https://electronics.onrender.com/user?email=${email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setUserInformation(data)
                })
        }
        handleLoadUserInfo();
    }, [user])

    useEffect(() =>{
        if (userInformation) {
            const name = userInformation?.name || user?.user?.displayName;
            const email = userInformation?.email || user?.user?.email;
            const userData = {
                name,
                email,
            }
           fetch(`https://electronics.onrender.com/user?email=${user?.user?.email}`, {
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
    },[userInformation, user])

    return [token]
}

export default useToken;