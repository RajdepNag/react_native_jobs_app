import axios from 'axios';
import { useState, useEffect } from 'react';
// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY;
const useFecth = (endpoint, query) => {
    const [data, setData]  = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query},
        headers: {
          'X-RapidAPI-Key':  '28cf3a115bmsh0859d22cefc41a9p1e837ejsn6781fbca1af6',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async() => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch(error) {
            setError(error);
            alert('There is an error');    
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(false);
        fetchData();
    }

    return { data, isLoading, error, refetch}; 
}

export default useFecth;