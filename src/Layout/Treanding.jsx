import React from 'react';

import ratStar from '../assets/icon-ratings.png'
import { Link, useLoaderData } from 'react-router';




const Trending = () => {
    
    const petProducts= useLoaderData ()
    console.log(petProducts)
    const randomArray = (arr) =>{
        return arr.sort(() => Math.random() - 0.5);
    };

    const productsView = randomArray(petProducts).slice(0,8);

    return (
        <div className='flex flex-col justify-center items-center bg-gray-100 p-10'>
            <div className=" flex justify-center items-center">
            <span className="text-blue-600 px-7 py-3 rounded-lg  bg-blue-100 mb-7">POPULAR RENTAL DEALS</span>
            </div>
            <h1 className='font-bold text-4xl'>Most popular cars rental deals</h1>
           

 <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-col-1 gap-10 items-center  justify-center md:p-10 sm:p-5 p-0 '>

  {
   productsView.map(product => (
    <Link to={`/cardetails/${product._id}`}> <div key={product._id} className="card my-5 border-2 bg-white h-80 w-72 shadow-md hover:scale-110 transition ease-in-out">
       <figure className=''>
         <img className='h-[180px] w-[220px] p-5'
           src={product.hostedImageUrl}
           alt="Apps" />
       </figure>
       <div className="card-body">
         <h2 className="card-title">
           {product.carName}
         </h2>
         <h2 className="">
           {product.providerName}
         </h2>
         <h2 className="">
           {product.providerEmail}
         </h2>
         <div className="card-actions justify-between">
           <div className="badge badge-outline  text-blue-600 bg-purple-100">{product.category}</div>
           <div className="badge badge-outline font-semibold text-gray-600 bg-gray-100">${product.rentPrice}</div>
         </div>
       </div>
     </div></Link>

   ))
  }
 </div>

 <Link to='/allcars'><button className='btn btn-outline bg-gradient-to-bl from-[#0566f7] to-[#cabcdf] text-white w-30'>See All</button></Link>

           
           
            
        </div>
    );
};

export default Trending;