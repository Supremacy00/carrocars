
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (initialUrl, initialData = null) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);

  const reload = () => {
    setLoading(true);
    fetchData();
  };

  return { data, error, loading, reload, setUrl };
};

export default useAxios;