import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={Error} alt="" />
            <p className=' text-gray-400 text-2xl py-10'>This Page Are Not Found</p>
           <Link to={'/*'}> <button className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white'>Go Back To Home</button></Link>
            
        </div>
    );
};

export default ErrorPage;