import { useEffect, useState } from "react";

function useFetch(url, options={}){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    async function fetchData(){
        setLoading(true)
        try {
            const response = await fetch(url, {...options});
            if(!response.ok) throw new Error(response.statusText)
            const result = await response.json()
            if (result) {
                setData(result);
                setLoading(false);
                setError(null);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            setError(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[url])
    return{
        data,
        loading,
        error
    }
        
}
export default useFetch;