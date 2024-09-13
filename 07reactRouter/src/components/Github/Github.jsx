import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({});
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/anan328')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setData(data);
    //     })
    // },[data])
  return (
    <div className='flex justify-center flex-col items-center  text-center m-4 bg-slate-500 text-white p-4 text-3xl'>Github followers: {data.followers} 
    <img className='mt-4' src={data.avatar_url} alt="Git picture" width={100} />
    </div>
  )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/anan328')
    return response.json()
}