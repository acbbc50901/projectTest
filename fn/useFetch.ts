import * as React from 'react';


interface useFetchInterface<T> {
  url: string,
  method?: string,
  req?: T,
  loading: boolean,
  onSucess?: () => void,
  onError?: () => void
}

// T跟R是泛型 可以用外層傳進來當參數
/**傳遞API用 */
export function useFetch<T, R = unknown>(
  {
    url,
    method = 'GET',
    req,
    loading,
    onSucess,
    onError
  } : useFetchInterface<T>
) 
{
  const [data, setData] = React.useState<R | null>(null);
  const [runloading, setRunLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  // 獲取
  const fetchData = async () => {
    setRunLoading(true);
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

      const datas : R = await res.json();
      console.log(datas, 'datas');
      setData(datas);
      setRunLoading(false);

      if (onSucess) {
        onSucess();
      }

    } catch (error) {
      setError((error as Error).message);
      if (onError) {
        onError();
      }
    }

  }
  React.useEffect(() => {
    if (loading) {
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, req, loading]);


  return {data, loading: runloading, error};
}