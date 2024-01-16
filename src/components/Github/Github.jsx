import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/CodeMaker46')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

    const data = useLoaderData();
  return (
    <div className='tedxt-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers} 
    <img className='text-center' src={data.avatar_url} alt="GitPic" width={300}/></div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/CodeMaker46')
    return response.json

}

