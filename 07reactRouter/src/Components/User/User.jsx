import React from 'react';
import { useParams } from 'react-router-dom';
function USer(props) {
    const {userid} = useParams()
    return (
        <>
          <h1 className='bg-gray-700 text-white text-3xl p-4'>Userid:{userid}</h1>  
        </>
    );
}

export default USer;