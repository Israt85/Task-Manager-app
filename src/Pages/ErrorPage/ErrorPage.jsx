import React from 'react';
import img1 from '../../assets/Error.svg.png'
const ErrorPage = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center h-96'>
            <p className='font-bold text-2xl text-center'>Page Not Found</p>
            <img className='w-60' src={img1}alt="" />
            
        </div>
    );
};

export default ErrorPage;