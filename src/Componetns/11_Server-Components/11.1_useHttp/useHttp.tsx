import { useState, useCallback } from 'react';



const useHttp = () => {
  const [process, setProcess] = useState<string>('waiting');

  const request = useCallback(async ( url:string,
                                      method: 'GET' | 'POST' = 'GET', 
                                      body: string | null = null,
                                      headers = { 'Content-Type': 'application/json' }) => {

    setProcess('loading');

    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      setProcess('error');
      throw e;
    }
  }, []);



  return {
    request,
    process,
    setProcess,
  };
}

export default useHttp;

// 'https://jsonplaceholder.typicode.com/posts'


