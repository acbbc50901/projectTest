'use client';
import * as React from 'react';
import { useFetch } from '@/fn';

export default function Blog({ params } : { params: { id: string }}) {

  const [id, setId] = React.useState<string | null>(null);
  const { data, loading, error} = useFetch({url: '/api/getHi'});
  console.log(data, loading, error);
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await params;
      // const data = await res.json()
      setId(res.id);
    }
    fetchData();
  }, []);


  const onClick = () => {
    // const { data, loading, error} = useFetch({url: '/api/getHi'});

  }

  return (
    <div>
      {id}
      <button className=' bg-slate-600 border-collapse p-4' onClick={onClick}>123</button>
    </div>
  )
}