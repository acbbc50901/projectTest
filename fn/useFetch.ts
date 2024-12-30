import * as React from 'react';


interface useFetchInterface {
  url: string,
  method?: string,
  req?: object
}


export function useFetch(
  {url, method = 'GET', req} : useFetchInterface
) 
{
  const [data, setData] = React.useState<object | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  
  // 獲取
  const fetchData = async () => {
    setLoading(true);
    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      if (req) {
        options.body = JSON.stringify(req);
      }

      const res = await fetch(url, options);

      if (!res.ok) {
        throw new Error('獲取失敗');
      }

      const datas = await res.json();
      console.log(datas, 'datas');
      setData(datas);
      setLoading(false);
    } catch (error) {
      setError((error as Error).message);
    }

  }
  React.useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, req]);

  

  // console.log(data, loading, error)

  return {data, loading, error};
}