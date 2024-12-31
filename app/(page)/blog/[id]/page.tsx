'use client';
import * as React from 'react';
import { useFetch } from '@/fn';

interface GetApiProps {
  message: string
}

interface PostReqApiProps {
  text: string
}

interface PostResApiProps {
  text: string
}

export default function Blog({ params } : { params: { id: string }}) {

  const [id, setId] = React.useState<string | null>(null);
  const [getLoading, setGetLoading] = React.useState<boolean>(true);
  const [postLoading, setPostLoading] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await params;
      setId(res.id);
    }
    fetchData();
  }, []);

  const onSucess = () => {
    console.log('成功GET');
    setGetLoading(false);
    setPostLoading(false);
  }
  const onError = () => {
    console.log('失敗GET');
  }
  
  const onPostClick = () => {
    setPostLoading(true);
  }
  // GET
  const { data } = 
    useFetch<null, GetApiProps>({
      url: '/api/getHi',
      loading: getLoading,
      onSucess,
      onError,
    })
  // Post
  const {} =
    useFetch<PostReqApiProps, PostResApiProps>({
      url: '/api/getHi',
      loading: postLoading,
      method: 'POST',
      req: { text: value },
      onSucess,
    })

  return (
    <div>
      {id}
      {data?.message}
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value}/>
      <button className=' bg-slate-600 border-collapse p-4' onClick={onPostClick}>123</button>
    </div>
  )
}