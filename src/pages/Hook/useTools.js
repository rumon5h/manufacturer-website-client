import { useQuery } from "react-query";

const useTools = () => {
    const { isLoading, error, data, refetch } = useQuery(['tools'], () =>
        fetch('https://electronics.onrender.com/tools')
            .then(res => res.json())
    )
    return [isLoading, error, data, refetch]

};

export default useTools;