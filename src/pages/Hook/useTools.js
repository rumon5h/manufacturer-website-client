import { useQuery } from "react-query";

const useTools = () => {
    const { isLoading, error, data, refetch } = useQuery(['tools'], () =>
        fetch('https://calm-castle-51840.herokuapp.com/tools')
            .then(res => res.json())
    )
    return [isLoading, error, data, refetch]

};

export default useTools;