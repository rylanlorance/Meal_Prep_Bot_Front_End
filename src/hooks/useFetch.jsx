import axios from 'axios';
import {useEffect, useState} from 'react';

export default function useFetch(method, url, body) {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState();
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios({
          method: method,
          url: url,
          data: body,
        });

        const data = await resp?.data;
        console.log('innter data', resp);

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return {isLoading, apiData, serverError};
}
