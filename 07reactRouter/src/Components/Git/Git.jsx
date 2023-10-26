import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Git(props) {
    const data = useLoaderData()

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((res) => res.json())
    //         .then(data => {
    //             setData(data)
    //             console.log(data);
    //         })
    // }, [])
    return (
        <div>
            <h1 className='bg-gray-700 text-white text-3xl p-4'>Git Follower hitesh:{data.followers}</h1>
        </div>
    );
}

export default Git;

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}