import {useEffect, useState} from 'react';
import axios from 'axios';

export default function useFetch(method, url, body) {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState();
  const [serverError, setServerError] = useState(null);

  console.log('using fetch');

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
        console.log('error!', error);
      }
    };

    fetchData();
  }, [url, method, body]);

  return {isLoading, apiData, serverError};
}
